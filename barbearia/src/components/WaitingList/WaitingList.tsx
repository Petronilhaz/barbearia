import { Table, TableCell, TableHead, Paper, TableContainer, TableRow, TableBody, Box, Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CustomerContext } from "../../context/context";
import * as S from "./WaitingList.style"
import Header from "../Header";

interface Row {
  name: string
}

const WaitingList = () => {
  const { customers } = useContext(CustomerContext)
  const [rows, setRows ] = useState<Row[]>([])

  useEffect(()=> {
    const newRows = customers.map(customer => ({name: customer.name}))

    setRows(newRows)
    
  }, [customers])

  return (
    <>
      <Header title="Barbearia" subTitle="Lista de Espera" />

      <TableContainer sx={S.TableContainer}>
        <Table sx={S.Table} component={Paper} aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell sx={S.TableHeader}>
              Nome
            </TableCell>            
            <TableCell sx={S.TableHeader}>
              Tempo Estimado
            </TableCell>            
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => {
              return(
                
                  <TableRow key={index}>
                    <TableCell>
                      {row.name}
                    </TableCell>
                    <TableCell>
                      00 minutos
                    </TableCell>
                  </TableRow>
                
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
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

export default WaitingList;
