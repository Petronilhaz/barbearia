import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"

interface MenuItemProps {
    text: string
}

const MenuItem: React.FC<MenuItemProps> = ({text}) => {
    return (
        <Box
        sx={{
            width: "60%",
            margin: "5px",
            borderRadius: "3px",
            boxShadow: "0px 1px 5px",
            backgroundColor: "#1976d2",
            ":hover": {
                cursor:"pointer",
            }
        }}
        >
            <Link to={text} style={{
                textDecoration: "none"
            }}>
            <Typography component="p" sx={{
                padding: "15px",
                fontSize: "15px",
                textAlign: "center",
                color: "#fff",
            }}>
                {text}
            </Typography>
            </Link>
        </Box>
    )
}

export default MenuItem;