import { AppBar, Typography } from "@mui/material";

const WaitingList = () => {
  return (
    <>
      <AppBar position="static" sx={{ marginBottom: "15px" }}>
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
        Lista de Espera
      </Typography>
    </>
  );
};

export default WaitingList;
