import { Box, Card, CardActionArea, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

function OfficeList() {
  return (
    <>
      <Grid container spacing={1}>
        <Grid size={{ lg: 6, xs: 12 }}>
          <Card elevation={0} variant="outlined">
            <Link href="/detail/test">
              <CardActionArea sx={{ p: "15px" }}>
                <Grid container justifyContent="space-between">
                  <Grid size={1}>
                    <Box
                      sx={{
                        width: "64px",
                        height: "64px",
                        backgroundColor: "gray",
                      }}
                    />
                  </Grid>
                  <Grid size={10.8}>
                    <Box px="20px">
                      <Typography variant="h6">Dana</Typography>
                      <Typography>Floor L1 - Room 110</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default OfficeList;
