import { useContext, useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import Header from "../Header";
import { Link } from "react-router-dom";
import { CustomerContext } from "../../context/context"
import * as S from "./Schedule.style";

interface DataProps {
  name: string,
  tel: string,
  haircuts: string
}

const Schedule = () => {
  //Estilizar o Placeholder
  const { customers, addCustomer } = useContext(CustomerContext)
  const { register, handleSubmit } = useForm<DataProps>();

  const onSubmit = (data: DataProps) => {
    addCustomer(data)
  }

  useEffect(()=> {
    console.log("Customers: ", customers)
  },[customers])
  
  return (
    <>
      <Header title="Barbearia" subTitle="Agendamento" />
      <form
        onSubmit={handleSubmit(onSubmit)}
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
          {...register("name")}
        />
        <TextField
          label="Número de celular"
          helperText="Celular com WhatsApp"
          size="small"
          required
          sx={S.Input}
          {...register("tel")}
        />
        <TextField
          label="Selecione seu(s) cortes"
          helperText="Escolha os cortes que deseja fazer"
          size="small"
          required
          sx={S.Input}
          {...register("haircuts")}
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
          <Button type="submit" variant="contained">Enviar</Button>
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
