import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

function SearchBar({ onChange, value }) {
  return (
    <Box mb="20px">
      <TextField
        fullWidth
        placeholder="Search offices..."
        onChange={(e) => onChange(e.target.value)}
        // onFocus={resetTimer}
        // onTouchStart={resetTimer}
        value={value}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: value && (
              <InputAdornment position="end">
                <Typography>auto reset</Typography>
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  );
}

export default SearchBar;
