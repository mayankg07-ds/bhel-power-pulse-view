
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MapPin, Calendar, Zap, DollarSign, Gauge, Leaf } from "lucide-react";

interface PowerPlant {
  id: number;
  name: string;
  location: string;
  capacity: number;
  technology: string;
  status: "running" | "completed" | "hold";
  progress: number;
  startDate: string;
  completionDate: string;
  contractor: string;
  cost: number;
  efficiency: number;
  emissions: string;
}

interface PowerPlantCardProps {
  plant: PowerPlant;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-700 border-green-200";
    case "running":
      return "bg-blue-100 text-blue-700 border-blue-200";
    case "hold":
      return "bg-red-100 text-red-700 border-red-200";
    default:
      return "bg-gray-100 text-gray-700 border-gray-200";
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case "completed":
      return "Completed";
    case "running":
      return "Under Construction";
    case "hold":
      return "On Hold";
    default:
      return status;
  }
};

const PowerPlantCard = ({ plant }: PowerPlantCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-bold text-gray-800 leading-tight">
            {plant.name}
          </CardTitle>
          <Badge className={`${getStatusColor(plant.status)} font-medium`}>
            {getStatusText(plant.status)}
          </Badge>
        </div>
        <div className="flex items-center text-sm text-gray-600 mt-2">
          <MapPin className="h-4 w-4 mr-1" />
          {plant.location}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="text-sm font-bold text-blue-600">{plant.progress}%</span>
          </div>
          <Progress value={plant.progress} className="h-2" />
        </div>

        {/* Key Specifications */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <Zap className="h-4 w-4 text-yellow-500" />
            <div>
              <p className="text-xs text-gray-500">Capacity</p>
              <p className="font-semibold text-sm">{plant.capacity} MW</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Gauge className="h-4 w-4 text-green-500" />
            <div>
              <p className="text-xs text-gray-500">Efficiency</p>
              <p className="font-semibold text-sm">{plant.efficiency}%</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <DollarSign className="h-4 w-4 text-purple-500" />
            <div>
              <p className="text-xs text-gray-500">Investment</p>
              <p className="font-semibold text-sm">₹{plant.cost} Cr</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-blue-500" />
            <div>
              <p className="text-xs text-gray-500">Target</p>
              <p className="font-semibold text-sm">
                {new Date(plant.completionDate).getFullYear()}
              </p>
            </div>
          </div>
        </div>

        {/* Technology & Environmental Info */}
        <div className="space-y-2 pt-2 border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-500 mb-1">Technology</p>
            <Badge variant="outline" className="text-xs">
              {plant.technology}
            </Badge>
          </div>
          
          <div className="flex items-center space-x-2">
            <Leaf className="h-4 w-4 text-green-500" />
            <div>
              <p className="text-xs text-gray-500">Environmental</p>
              <p className="text-xs font-medium text-green-600">{plant.emissions}</p>
            </div>
          </div>
          
          <div>
            <p className="text-xs text-gray-500 mb-1">Contractor</p>
            <p className="text-xs font-medium text-gray-700">{plant.contractor}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PowerPlantCard;
