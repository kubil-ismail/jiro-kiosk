"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { QRCodeSVG } from "qrcode.react";

const IDLE_TIMEOUT = 120000; // 2 minute

function Page({ handleClose }) {
  const [secondsRemaining, setSecondsRemaining] = React.useState(120);
  // eslint-disable-next-line react-hooks/purity
  const [lastInteraction] = React.useState(Date.now());

  React.useEffect(() => {
    const interval = setInterval(() => {
      const elapsed = Date.now() - lastInteraction;
      const remaining = Math.max(0, Math.ceil((IDLE_TIMEOUT - elapsed) / 1000));
      setSecondsRemaining(remaining);

      if (remaining === 0) {
        handleClose();

        return () => clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [lastInteraction]);

  const progress = (secondsRemaining / (IDLE_TIMEOUT / 1000)) * 100;

  return (
    <>
      <Box
        padding="20px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Button
          color="inherit"
          variant="outlined"
          size="large"
          sx={{
            borderRadius: "40px",
            textTransform: "capitalize",
            px: "30px",
          }}
          onClick={handleClose}
          startIcon={<KeyboardBackspaceRoundedIcon />}
        >
          Back
        </Button>

        <Chip
          avatar={
            <Box sx={{ m: 1, position: "relative" }}>
              <AccessTimeIcon />

              <CircularProgress
                size={23.5}
                sx={{
                  color: "green",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 2,
                }}
                variant="determinate"
                value={progress}
              />
            </Box>
          }
          variant="outlined"
          label={`Returning in ${secondsRemaining}s`}
        />
      </Box>
      <Box py="50px" mb="30px" bgcolor="lightgray">
        <Grid container justifyContent="center">
          <Grid item size={11}>
            <Box display="flex" alignItems="center" gap="20px">
              <Box
                sx={{
                  width: "100px",
                  height: "100px",
                  background: "#4bb8a2",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "15px",
                }}
              >
                <Typography color="#fff">AC</Typography>
              </Box>

              <Box>
                <Typography variant="h4" gutterBottom>
                  Dana Customer Center
                </Typography>

                <Box display="flex" gap="10px" alignItems="center">
                  <Chip label="Floor L1 · Room 105" />
                  <Typography>·</Typography>
                  <Typography>Next to elevators</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box mb="30px">
        <Grid container justifyContent="center" gap="40px">
          <Grid item size={7}>
            <Card sx={{ mb: "20px" }}>
              <CardContent>
                <Typography fontWeight="bold" gutterBottom>
                  About
                </Typography>
                <Typography>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nulla vero quaerat voluptate praesentium inventore accusamus
                  quisquam est ea alias ipsa voluptatibus, dignissimos eaque
                  sunt, veniam distinctio laboriosam, dicta quia. Praesentium?
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ mb: "20px" }}>
              <CardContent>
                <Typography fontWeight="bold" gutterBottom>
                  Location
                </Typography>
                <Typography>
                  Full-service marketing agency specializing in digital
                  transformation.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item size={3}>
            <Card sx={{ mb: "20px" }}>
              <CardContent>
                <Typography fontWeight="bold" align="center" gutterBottom>
                  Contact Us
                </Typography>

                <Box display="flex" justifyContent="center" pt="10px">
                  <QRCodeSVG value="https://reactjs.org/" />
                </Box>

                <Typography align="center" mt="15px" gutterBottom>
                  or
                </Typography>

                <Typography align="center">email@gmail.com</Typography>
                <Typography align="center">(555) 123-4567</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Page;
