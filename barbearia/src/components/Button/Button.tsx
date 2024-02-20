import { Box, Button } from "@mui/material"
import * as S from "./Button.style"
import { Link } from "react-router-dom"

interface ButtonComponentProps {
    text: string,
    link: string
}

const ButtonComponent: React.FC <ButtonComponentProps> = ({ text, link }) => {
    return(
        <>
            <Box sx={S.ButtonContainer}>
                <Button variant="contained" sx={S.Button}>
                    <Link to={link}>
                    {text}
                    </Link>
                </Button>

            </Box>
        </>
    )
}

export default ButtonComponent