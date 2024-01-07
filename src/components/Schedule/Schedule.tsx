import { TextField, Button, Box } from "@mui/material";
import Header from "../Header";
import { Link } from "react-router-dom";
import * as S from "./Schedule.style";

const Schedule = () => {
  //Estilizar o Placeholder
  return (
    <>
      <Header title="Barbearia" subTitle="Agendamento" />
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          label="Nome"
          helperText="Insira seu nome aqui"
          size="small"
          required
          sx={S.Input}
        />
        <TextField
          label="Número de celular"
          helperText="Celular com WhatsApp"
          size="small"
          required
          sx={S.Input}
        />
        <TextField
          label="Selecione seu(s) cortes"
          helperText="Escolha os cortes que deseja fazer"
          size="small"
          required
          sx={S.Input}
        />
        <Box
          sx={S.ButtonContainer}
        >
          <Button
            type="reset"
            variant="contained"
            sx={S.ResetButton}
          >
            Limpar
          </Button>
          <Button variant="contained">Enviar</Button>
        </Box>

        <Button variant="contained">
          <Link
            to="/"
            style={S.Ancora}
          >
              Voltar ao menu
          </Link>
        </Button>
      </form>
    </>
  );
};

export default Schedule;
