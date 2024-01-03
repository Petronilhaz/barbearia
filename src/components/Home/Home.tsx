import { AppBar, Box, Typography } from "@mui/material";
import MenuItem from "./MenuItem";

const Home = () => {
  return (
    <>
      <AppBar position="static" sx={{marginBottom: "15px"}}>
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

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        
        <MenuItem text="Agendar Corte" />
        <MenuItem text="Tabela de Preços" />
        <MenuItem text="Lista de Espera" />
        <MenuItem text="Contato" />
      </Box>
    </>
  );
};

export default Home;
