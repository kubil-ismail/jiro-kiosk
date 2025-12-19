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
import Link from "next/link";
import { useRouter } from "next/navigation";

const IDLE_TIMEOUT = 120000; // 1 minute

function Page() {
  const router = useRouter();

  const [lastInteraction, setLastInteraction] = React.useState(Date.now());
  const [secondsRemaining, setSecondsRemaining] = React.useState(60);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const elapsed = Date.now() - lastInteraction;
      const remaining = Math.max(0, Math.ceil((IDLE_TIMEOUT - elapsed) / 1000));
      setSecondsRemaining(remaining);

      if (remaining === 0) {
        router.replace("/");

        return () => clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [lastInteraction, IDLE_TIMEOUT]);

  const progress = (secondsRemaining / (IDLE_TIMEOUT / 1000)) * 100;

  return (
    <>
      <Box
        padding="20px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Link href="/">
          <Button
            color="inherit"
            variant="outlined"
            size="large"
            sx={{
              borderRadius: "40px",
              textTransform: "capitalize",
              px: "30px",
            }}
            startIcon={<KeyboardBackspaceRoundedIcon />}
          >
            Back
          </Button>
        </Link>

        <Chip
          avatar={
            <Box sx={{ m: 1, position: "relative" }}>
              <AccessTimeIcon />

              <CircularProgress
                size={24}
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
          <Grid item size={8}>
            <Box display="flex" alignItems="center" gap="20px">
              <Box
                sx={{
                  width: "100px",
                  height: "100px",
                  background: "blue",
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
        <Grid container justifyContent="center">
          <Grid item size={7}>
            <Card>
              <CardContent>
                <Typography fontWeight="bold" gutterBottom>
                  ABOUT
                </Typography>
                <Typography>
                  Full-service marketing agency specializing in digital
                  transformation.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box mb="30px">
        <Grid container justifyContent="center">
          <Grid item size={7}>
            <Card>
              <CardContent>
                <Typography fontWeight="bold" gutterBottom>
                  ABOUT
                </Typography>
                <Typography>
                  Full-service marketing agency specializing in digital
                  transformation.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box mb="30px">
        <Grid container justifyContent="center">
          <Grid item size={7}>
            <Card>
              <CardContent>
                <Typography fontWeight="bold" gutterBottom>
                  ABOUT
                </Typography>
                <Typography>
                  Full-service marketing agency specializing in digital
                  transformation.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Page;
