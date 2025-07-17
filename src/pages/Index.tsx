
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Zap, Users, Activity } from "lucide-react";
import PowerPlantCard from "@/components/PowerPlantCard";
import StatsCard from "@/components/StatsCard";
import Header from "@/components/Header";
import { powerPlants } from "@/data/powerPlants";
import { useStats } from "@/hooks/useStats";

const Index = () => {
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredPlants = selectedStatus === "all" 
    ? powerPlants 
    : powerPlants.filter(plant => plant.status === selectedStatus);

  const stats = useStats(powerPlants);

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
