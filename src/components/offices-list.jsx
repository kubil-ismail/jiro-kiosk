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

export const renderArea = (area) => {
  return area?.map((_item, key, arr) => {
    if (arr.length > 1) {
      if (arr.length - 1 === key) {
        return _item;
      }
      return `${_item}, `;
    }

    return _item;
  });
};

function OfficeList({ offices }) {
  const [openFullscreen, setOpenFullscreen] = React.useState(false);
  const [openData, setOpenData] = React.useState(null);

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
                onClick={() => {
                  setOpenFullscreen(true);
                  setOpenData(item);
                }}
              >
                <Grid container justifyContent="space-between">
                  <Grid size={1}>
                    <Box
                      sx={{
                        width: "64px",
                        height: "64px",
                        background: item.background,
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        component="img"
                        sx={{ objectFit: "contain" }}
                        src={item?.logo}
                        width="60px"
                        height="60px"
                      />
                    </Box>
                  </Grid>
                  <Grid size={10.8}>
                    <Box px="20px">
                      <Typography variant="h6">{item.name}</Typography>
                      <Typography>
                        Floor {item?.floor} - Area {renderArea(item.area)}
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
          detail={openData}
        />
      </Dialog>
    </Box>
  );
}

export default OfficeList;
