import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import posthog from "posthog-js";

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
          posthog.capture("search_auto_reset", {
            search_query: value,
            timeout_seconds: IDLE_TIMEOUT / 1000,
          });
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
        onChange={(e) => {
          const newValue = e.target.value;
          if (newValue.length > 0 && value.length === 0) {
            posthog.capture("search_performed", {
              search_query: newValue,
            });
          }
          onChange(newValue);
        }}
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
