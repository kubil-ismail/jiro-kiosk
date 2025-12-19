import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

function SearchBar() {
  return (
    <>
      <TextField
        fullWidth
        placeholder="Search offices..."
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
      />
    </>
  );
}

export default SearchBar;
