import { AppBar, Typography } from "@mui/material";

const Contact = () => {
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
        Contato
      </Typography>
    </>
  );
};

export default Contact;
