import { useState, useEffect, useCallback } from "react";
import { FloorSelector } from "./components/floor-selector";
import { OfficeList } from "./components/office-list";
import { OfficeDetail } from "./components/office-detail";
import { SearchBar } from "./components/search-bar";
import React from "react";

export interface Office {
  id: string;
  name: string;
  floor: string;
  roomNumber: string;
  company: string;
  description: string;
  phone?: string;
  email?: string;
  logoColor: string; // For placeholder logo
  logoInitials: string; // For placeholder logo
  locationHint?: string;
  logo?: string;
}

// Mock office data
const offices: Office[] = [
  {
    id: "1",
    name: "Dana Customer Center",
    floor: "L1",
    roomNumber: "101",
    company: "Dana",
    description:
      "Leading provider of innovative business solutions and enterprise software.",
    phone: "(555) 123-4567",
    email: "info@acmecorp.com",
    logoColor: "#3B82F6",
    logoInitials: "AC",
    logo: "/dana-logo.jpg",
    locationHint: "Near main entrance",
  },
  {
    id: "2",
    name: "TechStart Ventures",
    floor: "L1",
    roomNumber: "105",
    company: "TechStart Ventures",
    description:
      "Venture capital firm focused on early-stage technology startups.",
    phone: "(555) 234-5678",
    logoColor: "#10B981",
    logoInitials: "TV",
    locationHint: "Next to elevators",
  },
  {
    id: "3",
    name: "Global Marketing Group",
    floor: "L1",
    roomNumber: "110",
    company: "Global Marketing Group",
    description:
      "Full-service marketing agency specializing in digital transformation.",
    email: "contact@gmg.com",
    logoColor: "#8B5CF6",
    logoInitials: "GMG",
  },
  {
    id: "4",
    name: "Pinnacle Consulting",
    floor: "L2",
    roomNumber: "201",
    company: "Pinnacle Consulting",
    description: "Strategic management consulting for Fortune 500 companies.",
    phone: "(555) 345-6789",
    email: "hello@pinnacle.com",
    logoColor: "#F59E0B",
    logoInitials: "PC",
    locationHint: "Corner office, west wing",
  },
  {
    id: "5",
    name: "Nexus Legal Services",
    floor: "L2",
    roomNumber: "205",
    company: "Nexus Legal Services",
    description:
      "Corporate law firm specializing in mergers, acquisitions, and compliance.",
    phone: "(555) 456-7890",
    logoColor: "#EF4444",
    logoInitials: "NLS",
  },
  {
    id: "6",
    name: "CloudFirst Technologies",
    floor: "L2",
    roomNumber: "210",
    company: "CloudFirst Technologies",
    description:
      "Cloud infrastructure and DevOps solutions for modern enterprises.",
    email: "support@cloudfirst.com",
    logoColor: "#06B6D4",
    logoInitials: "CFT",
    locationHint: "East wing",
  },
  {
    id: "7",
    name: "Horizon Financial",
    floor: "L3",
    roomNumber: "301",
    company: "Horizon Financial",
    description: "Investment banking and wealth management services.",
    phone: "(555) 567-8901",
    email: "info@horizonfinancial.com",
    logoColor: "#6366F1",
    logoInitials: "HF",
    locationHint: "Near conference rooms",
  },
  {
    id: "8",
    name: "Innovate Labs",
    floor: "L3",
    roomNumber: "305",
    company: "Innovate Labs",
    description:
      "Research and development laboratory focused on AI and machine learning.",
    phone: "(555) 678-9012",
    logoColor: "#EC4899",
    logoInitials: "IL",
  },
  {
    id: "9",
    name: "Sterling Architecture",
    floor: "L3",
    roomNumber: "310",
    company: "Sterling Architecture",
    description:
      "Award-winning architectural design firm for commercial and residential projects.",
    email: "design@sterling.com",
    logoColor: "#14B8A6",
    logoInitials: "SA",
  },
  {
    id: "10",
    name: "Vertex Data Analytics",
    floor: "L4",
    roomNumber: "401",
    company: "Vertex Data Analytics",
    description: "Big data analytics and business intelligence solutions.",
    phone: "(555) 789-0123",
    logoColor: "#F97316",
    logoInitials: "VDA",
    locationHint: "Near main elevators",
  },
  {
    id: "11",
    name: "Prime Real Estate",
    floor: "L4",
    roomNumber: "405",
    company: "Prime Real Estate",
    description: "Commercial real estate brokerage and property management.",
    phone: "(555) 890-1234",
    email: "leasing@primere.com",
    logoColor: "#84CC16",
    logoInitials: "PRE",
  },
  {
    id: "12",
    name: "Catalyst Creative Studio",
    floor: "L4",
    roomNumber: "410",
    company: "Catalyst Creative Studio",
    description: "Brand design and creative production studio.",
    email: "hello@catalystcreative.com",
    logoColor: "#A855F7",
    logoInitials: "CCS",
    locationHint: "South corridor",
  },
];

const floors = [
  "ALL FLOOR",
  "GF",
  "L1",
  "L2",
  "L3",
  "L4",
  "L5",
  "L6",
  "L7",
  "L8",
  "Parking Zone",
];
const IDLE_TIMEOUT = 60000; // 1 minute

export default function App() {
  const [selectedFloor, setSelectedFloor] = useState<string>("L1");
  const [selectedOffice, setSelectedOffice] = useState<Office | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [lastInteraction, setLastInteraction] = useState<number>(Date.now());

  // Reset to main screen
  const resetToMain = useCallback(() => {
    setSelectedOffice(null);
    setSearchQuery("");
    setSelectedFloor("L1");
  }, []);

  // Track user interaction
  const handleInteraction = useCallback(() => {
    setLastInteraction(Date.now());
  }, []);

  // Idle timeout effect
  useEffect(() => {
    const checkIdle = setInterval(() => {
      const timeSinceLastInteraction = Date.now() - lastInteraction;
      if (timeSinceLastInteraction >= IDLE_TIMEOUT) {
        resetToMain();
      }
    }, 1000);

    return () => clearInterval(checkIdle);
  }, [lastInteraction, resetToMain]);

  // Add interaction listeners
  useEffect(() => {
    const events = ["touchstart", "mousedown", "scroll"];
    events.forEach((event) => {
      window.addEventListener(event, handleInteraction);
    });

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, handleInteraction);
      });
    };
  }, [handleInteraction]);

  // Filter offices by floor and search query
  const filteredOffices = offices.filter((office) => {
    const matchesFloor =
      selectedFloor === "ALL FLOOR" || office.floor === selectedFloor;

    const matchesSearch =
      searchQuery === "" ||
      office.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      office.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      office.roomNumber.includes(searchQuery);

    return matchesFloor && matchesSearch;
  });


  const handleFloorSelect = (floor: string) => {
    setSelectedFloor(floor);
    handleInteraction();
  };

  const handleOfficeSelect = (office: Office) => {
    setSelectedOffice(office);
    handleInteraction();
  };

  const handleBack = () => {
    setSelectedOffice(null);
    handleInteraction();
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    handleInteraction();
  };

  return (
    <div className="h-screen bg-gradient-to-br from-gray-50 to-white">
      {selectedOffice ? (
        <OfficeDetail
          office={selectedOffice}
          onBack={handleBack}
          lastInteraction={lastInteraction}
          timeout={IDLE_TIMEOUT}
        />
      ) : (
        <div className="flex flex-col h-screen">
          {/* Main Content */}
          <div className="flex flex-1 overflow-hidden">
            {/* Floor Selector */}
            <div className="w-80 bg-white/50 backdrop-blur-sm border-r border-gray-100 p-6">
              <FloorSelector
                floors={floors}
                selectedFloor={selectedFloor}
                onSelectFloor={handleFloorSelect}
              />
            </div>

            {/* Office List */}
            <div className="flex-1 overflow-hidden bg-gray-[500]">
              <div className="p-8">
                <SearchBar value={searchQuery} onChange={handleSearch} />
                <OfficeList
                  offices={filteredOffices}
                  onSelectOffice={handleOfficeSelect}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
