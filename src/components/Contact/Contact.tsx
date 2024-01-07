import { Box, Button, Typography } from "@mui/material";
import { WhatsApp, LocationOn } from "@mui/icons-material";
import Header from "../Header";
import { Link } from "react-router-dom";
import * as S from "./Contact.style";

const Contact = () => {
  return (
    <>
      <Header title="Barbearia" subTitle="Fale conosco" />

      <Box sx={S.Container}>
        <Box sx={S.IconContainer}>
          <WhatsApp sx={{color: "green"}} />
          <Typography>
            <a
              style={{ textDecoration: "none", color: "#000" }}
              target="_blank"
              rel="noreferrer"
              href="https://wa.me/22999943796/?"
            >
              WhatsApp
            </a>
          </Typography>
        </Box>
        <Box sx={S.IconContainer}>
          <LocationOn sx={{color: "red"}} />
          <Typography>
            <a
              style={{ textDecoration: "none", color: "#000" }}
              target="_blank"
              rel="noreferrer"
              href="https://www.google.com.br/maps/preview"
            >
              R. Visual Studio Code, nº 2024
            </a>
          </Typography>
        </Box>
        <Button variant="contained">
          <Link to="/" style={S.Ancora}>
            Voltar ao menu
          </Link>
        </Button>
      </Box>
    </>
  );
};

export default Contact;
