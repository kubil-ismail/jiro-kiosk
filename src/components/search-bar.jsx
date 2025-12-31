import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const IDLE_TIMEOUT = 60000; // 1 minute

function SearchBar({ onChange, value }) {
  // eslint-disable-next-line react-hooks/purity

  const [secondsRemaining, setSecondsRemaining] = React.useState(60);
  const [lastInteraction, setLastInteraction] = React.useState(Date.now());

  React.useEffect(() => {
    if (value !== "") {
      const interval = setInterval(() => {
        const elapsed = Date.now() - lastInteraction;
        const remaining = Math.max(
          0,
          Math.ceil((IDLE_TIMEOUT - elapsed) / 1000)
        );

        setSecondsRemaining(remaining);
        if (remaining === 0) {
          onChange("");

          return () => clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [lastInteraction, value]);

  React.useEffect(() => {
    setSecondsRemaining(60);
    setLastInteraction(Date.now());
  }, [value]);

  return (
    <Box mb="20px">
      <TextField
        fullWidth
        placeholder="Search offices..."
        onChange={(e) => onChange(e.target.value)}
        // onSubmit={() => }
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
                <Typography>auto reset {secondsRemaining}s</Typography>
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  );
}

export default SearchBar;
