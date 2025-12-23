"use client";
import {
  Box,
  Card,
  CardActionArea,
  Grid,
  Typography,
  Dialog,
} from "@mui/material";
import React from "react";
import Detail from "../components/pages/Detail";

function OfficeList({ offices }) {
  const [openFullscreen, setOpenFullscreen] = React.useState(false);

  return (
    <Box height="85vh" pb="50px" overflow="scroll" className="scrollbar">
      {offices?.length === 0 && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="80vh"
        >
          <Typography align="center">No offices found</Typography>
        </Box>
      )}

      <Grid container spacing={1}>
        {offices?.map((item) => (
          <Grid size={{ lg: 6, xs: 12 }} key={item.id}>
            <Card elevation={0} variant="outlined" sx={{ mb: "10px" }}>
              <CardActionArea
                sx={{ p: "15px" }}
                onClick={() => setOpenFullscreen(true)}
              >
                <Grid container justifyContent="space-between">
                  <Grid size={1}>
                    <Box
                      sx={{
                        width: "64px",
                        height: "64px",
                        background: "#4bb8a2",
                        borderRadius: "8px",
                      }}
                    />
                  </Grid>
                  <Grid size={10.8}>
                    <Box px="20px">
                      <Typography variant="h6">{item.name}</Typography>
                      <Typography>
                        Floor {item?.floor} - Room {item?.roomNumber}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openFullscreen} fullScreen>
        <Detail
          handleClose={() => {
            setOpenFullscreen(false);
          }}
        />
      </Dialog>
    </Box>
  );
}

export default OfficeList;
