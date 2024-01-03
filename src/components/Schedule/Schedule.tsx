import { AppBar, Typography } from "@mui/material";

const Schedule = () => {
  return (
    <>
      <AppBar position="static" sx={{ marginBotton: "15px" }}>
        <Typography
          component="h1"
          variant="h4"
          sx={{
            textAlign: "center",
            padding: "15px",
          }}
        >
          Barbearia
        </Typography>
      </AppBar>
      <Typography variant="h4" component="h1">
        Agendamento
      </Typography>
    </>
  );
};

export default Schedule;
