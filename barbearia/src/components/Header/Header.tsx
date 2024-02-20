import { AppBar, Typography, Box } from "@mui/material";

interface HeaderProps {
    title: string,
    subTitle?: string
}

const Header: React.FC<HeaderProps> = ({ title, subTitle }) => {
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
          {title}
        </Typography>
      </AppBar>
      {subTitle ? 
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "5px"
      }}>
          <Typography component="p"
          sx={{
            fontSize: "25px",
            fontWeight: "600"
          }}>{subTitle}</Typography>
      </Box> : null}
      
    </>
  );
};

export default Header;