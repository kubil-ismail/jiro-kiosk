import React from "react";
import Sidebar from "@/components/sidebar";
import { Box, Grid } from "@mui/material";
import SearchBar from "@/components/search-bar";
import OfficeList from "@/components/office-list";

// Mock office data
const offices = [
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

function Page() {
  return (
    <Box height="95vh" overflow="hidden">
      <Grid container>
        <Grid size={{ lg: 2.5, xs: 4 }}>
          <Sidebar floors={floors} />
        </Grid>
        <Grid size={{ lg: 9.5, xs: 8 }}>
          <Box bgcolor="#fafafc" height="100vh" p="30px">
            <SearchBar />

            <OfficeList />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Page;
