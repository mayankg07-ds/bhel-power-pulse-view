export interface PowerPlant {
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

export const powerPlants: PowerPlant[] = [
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