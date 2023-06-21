import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";

const formData = {
  email: "maximiliano@google.com",
  password: "123456",
  displayName: "MAximiliano Belli",
};

export const RegisterPage = () => {
  const { formState, displayName, email, password, onInputChange } = useForm({
    formData,
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <AuthLayout title="Create Account">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Full Name"
              type="text"
              placeholder="Full Name"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@gmail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Create Account
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="flex-end">
            <Typography sx={{ mr: 1 }}>Already have an account?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Sign In
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
