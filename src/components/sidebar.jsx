import React from "react";
import { Box, Button, Typography } from "@mui/material";

function Sidebar({ floors }) {
  return (
    <Box
      bgcolor="#fff"
      height="100dvh"
      borderRight="1px solid #f6f3f4"
      overflow="hidden"
    >
      <Box display="flex" justifyContent="center" mt="10px">
        <Box component="img" src="/logo.webp" width="100px" height="100px" sx={{objectFit: 'contain'}} />
      </Box>

      <Box
        sx={{
          border: "1px solid",
          borderColor: "#fafafc",
          width: "40%",
          my: "5px",
          mx: "auto",
        }}
      />

      <Box px="20px">
        <Typography align="center">Select Floor</Typography>

        <Box
          bgcolor="#fbf9fa"
          mt="20px"
          p="20px"
          overflow="auto"
          height="70dvh"
          borderRadius="10px"
          className="scrollbar"
        >
          {floors?.map((item) => (
            <Button
              size="large"
              color="inherit"
              variant="contained"
              sx={{ mb: "10px" }}
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
