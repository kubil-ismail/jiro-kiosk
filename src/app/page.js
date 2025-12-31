"use client";
import React from "react";
import { Box, Grid } from "@mui/material";
import Sidebar from "../components/sidebar";
import SearchBar from "../components/search-bar";
import OfficeList from "../components/offices-list";
import { floors, offices } from "../tenant";

function Page() {
  const [selectedFloor, setSelectedFloor] = React.useState("ALL Floor");
  const [searchQuery, setSearchQuery] = React.useState("");

  // Filter offices by floor and search query
  const filteredOffices = offices.filter((office) => {
    const matchesFloor =
      selectedFloor === "ALL Floor" || office.floor === selectedFloor;

    const matchesSearch =
      searchQuery === "" ||
      office.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      office.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      office.roomNumber.includes(searchQuery);

    return matchesFloor && matchesSearch;
  });

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFlooerSelect = (floor) => {
    setSelectedFloor(floor);
  };

  return (
    <Box height="95vh" overflow="hidden">
      <Grid container>
        <Grid size={{ lg: 2.5, xs: 4 }}>
          <Sidebar
            floors={floors}
            value={selectedFloor}
            onChange={handleFlooerSelect}
          />
        </Grid>
        <Grid size={{ lg: 9.5, xs: 8 }}>
          <Box bgcolor="#fafafc" height="100vh" p="30px">
            <SearchBar value={searchQuery} onChange={handleSearch} />

            <OfficeList offices={filteredOffices} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Page;
