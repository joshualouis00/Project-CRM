import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { useLogin, useNotify } from "react-admin";
import { useState } from "react";

export const Login = () => {
  const login = useLogin();
  const notify = useNotify();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login({ username, password });
    } catch {
      notify("Invalid credentials", { type: "error" });
    }
  };

  return (
    <Grid container sx={{ height: "100vh" }}>
      {/* LEFT SIDE */}
      <Grid
        size={{ xs: 0, md: 6 }}
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          color: "white",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          CRM System
        </Typography>
      </Grid>

      {/* RIGHT SIDE */}
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: 400 }}>
          <Card sx={{ p: 3 }}>
            <CardContent>
              <Typography variant="h5" mb={2}>
                Welcome Back
              </Typography>

              <form onSubmit={handleSubmit}>
                <TextField
                  label="Username"
                  fullWidth
                  margin="normal"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />

                <TextField
                  label="Password"
                  type="password"
                  fullWidth
                  margin="normal"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Sign In
                </Button>
              </form>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
};