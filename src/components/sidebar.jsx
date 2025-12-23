import React from "react";
import { Box, Button, Typography } from "@mui/material";

function Sidebar({ floors, value, onChange }) {
  return (
    <Box
      bgcolor="#fff"
      height="100vh"
      borderRight="1px solid #f6f3f4"
      overflow="hidden"
    >
      <Box display="flex" justifyContent="center" mt="10px">
        <Box
          component="img"
          src="/logo.webp"
          width="100px"
          height="100px"
          sx={{ objectFit: "contain" }}
        />
      </Box>

      <Box px="20px">
        <Typography align="center">Select Floor</Typography>

        <Box
          bgcolor="#fbf9fa"
          mt="20px"
          p="20px"
          overflow="auto"
          height="70vh"
          borderRadius="10px"
          className="scrollbar"
        >
          {floors?.map((item) => (
            <Button
              key={item}
              size="large"
              color={value === item ? "primary" : "inherit"}
              variant="contained"
              sx={{
                mb: "10px",
                textTransform: 'capitalize',
                boxShadow:
                  value === item ? "#fab83487 2.6px 2.6px 2.6px" : "unset",
                "&:hover": {
                  boxShadow: "#fab83487 2.6px 2.6px 2.6px",
                },
              }}
              onClick={() => onChange(item)}
              fullWidth
            >
              {item}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
