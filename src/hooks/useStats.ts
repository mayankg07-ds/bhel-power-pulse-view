import { PowerPlant } from "@/data/powerPlants";

export interface Stats {
  total: number;
  running: number;
  completed: number;
  hold: number;
  totalCapacity: number;
  totalInvestment: number;
}

export const useStats = (powerPlants: PowerPlant[]): Stats => {
  return {
    total: powerPlants.length,
    running: powerPlants.filter(p => p.status === "running").length,
    completed: powerPlants.filter(p => p.status === "completed").length,
    hold: powerPlants.filter(p => p.status === "hold").length,
    totalCapacity: powerPlants.reduce((sum, plant) => sum + plant.capacity, 0),
    totalInvestment: powerPlants.reduce((sum, plant) => sum + plant.cost, 0)
  };
};