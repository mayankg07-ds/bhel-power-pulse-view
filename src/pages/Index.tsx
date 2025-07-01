
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Zap, MapPin, Calendar, Users, Activity } from "lucide-react";
import PowerPlantCard from "@/components/PowerPlantCard";
import StatsCard from "@/components/StatsCard";
import Header from "@/components/Header";

const powerPlants = [
  {
    id: 1,
    name: "Korba Super Thermal Power Station - Unit 7",
    location: "Korba, Chhattisgarh",
    capacity: 800,
    technology: "Super Critical Coal",
    status: "running" as const,
    progress: 100,
    startDate: "2019-03-15",
    completionDate: "2023-08-20",
    contractor: "BHEL-NTPC Joint Venture",
    cost: 6500,
    efficiency: 42.5,
    emissions: "Low NOx Technology"
  },
  {
    id: 2,
    name: "Telangana Super Critical Power Project",
    location: "Yadadri, Telangana",
    capacity: 1600,
    technology: "Super Critical Coal",
    status: "completed" as const,
    progress: 100,
    startDate: "2018-11-10",
    completionDate: "2024-01-15",
    contractor: "BHEL-TSGENCO",
    cost: 12800,
    efficiency: 43.2,
    emissions: "FGD Equipped"
  },
  {
    id: 3,
    name: "North Karanpura Super Thermal Power Station",
    location: "Jharkhand",
    capacity: 1980,
    technology: "Super Critical Coal",
    status: "running" as const,
    progress: 85,
    startDate: "2020-06-12",
    completionDate: "2025-12-31",
    contractor: "BHEL-NTPC",
    cost: 15840,
    efficiency: 44.1,
    emissions: "Advanced Pollution Control"
  },
  {
    id: 4,
    name: "Khurja Super Thermal Power Station",
    location: "Uttar Pradesh",
    capacity: 1320,
    technology: "Super Critical Coal",
    status: "hold" as const,
    progress: 45,
    startDate: "2021-02-08",
    completionDate: "2026-08-15",
    contractor: "BHEL-UPRVUNL",
    cost: 10560,
    efficiency: 42.8,
    emissions: "ESP + FGD"
  },
  {
    id: 5,
    name: "Neyveli New Thermal Power Station",
    location: "Tamil Nadu",
    capacity: 1000,
    technology: "Super Critical Lignite",
    status: "running" as const,
    progress: 92,
    startDate: "2019-09-20",
    completionDate: "2024-11-30",
    contractor: "BHEL-NLCIL",
    cost: 8000,
    efficiency: 38.5,
    emissions: "Dry Cooling System"
  },
  {
    id: 6,
    name: "Meja Thermal Power Station - Phase II",
    location: "Uttar Pradesh",
    capacity: 1320,
    technology: "Super Critical Coal",
    status: "completed" as const,
    progress: 100,
    startDate: "2017-05-18",
    completionDate: "2023-03-22",
    contractor: "BHEL-UPRVUNL",
    cost: 10560,
    efficiency: 43.5,
    emissions: "Zero Liquid Discharge"
  }
];

const Index = () => {
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredPlants = selectedStatus === "all" 
    ? powerPlants 
    : powerPlants.filter(plant => plant.status === selectedStatus);

  const stats = {
    total: powerPlants.length,
    running: powerPlants.filter(p => p.status === "running").length,
    completed: powerPlants.filter(p => p.status === "completed").length,
    hold: powerPlants.filter(p => p.status === "hold").length,
    totalCapacity: powerPlants.reduce((sum, plant) => sum + plant.capacity, 0),
    totalInvestment: powerPlants.reduce((sum, plant) => sum + plant.cost, 0)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Projects"
            value={stats.total}
            icon={Building2}
            color="blue"
          />
          <StatsCard
            title="Total Capacity"
            value={`${(stats.totalCapacity / 1000).toFixed(1)}k MW`}
            icon={Zap}
            color="green"
          />
          <StatsCard
            title="Running Projects"
            value={stats.running}
            icon={Activity}
            color="orange"
          />
          <StatsCard
            title="Investment"
            value={`₹${(stats.totalInvestment / 1000).toFixed(1)}k Cr`}
            icon={Users}
            color="purple"
          />
        </div>

        {/* Status Filter Tabs */}
        <Tabs value={selectedStatus} onValueChange={setSelectedStatus} className="mb-8">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="running">Running</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="hold">On Hold</TabsTrigger>
          </TabsList>

          <TabsContent value={selectedStatus} className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredPlants.map((plant) => (
                <PowerPlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Project Summary */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-blue-600" />
              Project Portfolio Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Status Distribution</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Completed</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      {stats.completed}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Running</span>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      {stats.running}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>On Hold</span>
                    <Badge variant="secondary" className="bg-red-100 text-red-700">
                      {stats.hold}
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Technology Mix</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Super Critical Coal</span>
                    <span className="font-medium">5 Units</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Super Critical Lignite</span>
                    <span className="font-medium">1 Unit</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Overall Progress</h3>
                <div className="space-y-2">
                  <Progress value={85} className="h-3" />
                  <p className="text-sm text-gray-600">85% Portfolio Completion</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;
