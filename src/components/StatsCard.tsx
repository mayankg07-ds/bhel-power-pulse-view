
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color: "blue" | "green" | "orange" | "purple";
}

const getColorClasses = (color: string) => {
  switch (color) {
    case "blue":
      return {
        bg: "bg-blue-50",
        icon: "text-blue-600",
        border: "border-blue-200"
      };
    case "green":
      return {
        bg: "bg-green-50",
        icon: "text-green-600",
        border: "border-green-200"
      };
    case "orange":
      return {
        bg: "bg-orange-50",
        icon: "text-orange-600",
        border: "border-orange-200"
      };
    case "purple":
      return {
        bg: "bg-purple-50",
        icon: "text-purple-600",
        border: "border-purple-200"
      };
    default:
      return {
        bg: "bg-gray-50",
        icon: "text-gray-600",
        border: "border-gray-200"
      };
  }
};

const StatsCard = ({ title, value, icon: Icon, color }: StatsCardProps) => {
  const colors = getColorClasses(color);
  
  return (
    <Card className={`${colors.bg} ${colors.border} border-2 hover:shadow-md transition-shadow duration-200`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
          </div>
          <div className={`p-3 rounded-full ${colors.bg}`}>
            <Icon className={`h-6 w-6 ${colors.icon}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
