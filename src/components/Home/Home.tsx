import { Box } from "@mui/material";
import Header from "../Header"
import MenuItem from "./MenuItem";

const Home = () => {
  return (
    <>
      <Header title="Barbearia" subTitle="Menu" />

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
