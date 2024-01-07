import { Box, Button, Typography } from "@mui/material";
import Header from "../Header";
import * as S from "./PriceTable.style";
import { useState } from "react";
import { Link } from "react-router-dom";

interface cortesProps {
  nome: string;
  preço: number;
}

const PriceTable = () => {
  const [cortes, setCortes] = useState<cortesProps[]>([
    {
      nome: "Disfarce",
      preço: 20,
    },
    {
      nome: "Barba",
      preço: 10,
    },
    {
      nome: "Sobrancelha",
      preço: 10,
    },
    {
      nome: "Pintar",
      preço: 10,
    },
    {
      nome: "Platinar",
      preço: 50,
    },
  ]);

  return (
    <>
      <Header title="Barbearia" subTitle="Tabela de Preços" />
      <Box
        sx={S.Table}
      >
        <Box>
          <Typography sx={S.cabeçalho}>Corte</Typography>
          {cortes?.map((corte, index) => {
            return (
              <Typography key={index} sx={S.itens}>
                {corte.nome}
              </Typography>
            );
          })}
        </Box>
        <Box>
          <Typography sx={S.cabeçalho}>Preço</Typography>
          {cortes?.map((corte, index) => {
            return (
              <Typography key={index} sx={S.itens}>
                R${corte.preço.toFixed(2)}
              </Typography>
            );
          })}
        </Box>
      </Box>
      <Box
        sx={S.ButtonContainer}
      >
        <Button variant="contained">
          <Link
            to="/"
            style={S.Ancora}
          >
            Voltar ao menu
          </Link>
        </Button>
      </Box>
    </>
  );
};

export default PriceTable;
