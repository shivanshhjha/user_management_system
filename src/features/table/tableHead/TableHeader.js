import React from 'react';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { styled } from '@mui/material/styles';

export default function TableHeader(props) {
    const {valueToOrderBy, orderDirection, handleSort} = props

    const createSortHandler = (property) => (event) => {
        handleSort(event, property)
    }

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.secondary.light,
          color: theme.palette.common.white,
        }
    }))

    return (
        <TableHead>
            <TableRow>
                <StyledTableCell key="image"  align="center">
                </StyledTableCell>
                <StyledTableCell key="name.first"  align="center">
                    <TableSortLabel
                        active={valueToOrderBy === "name.first"}
                        direction={valueToOrderBy === "name.first" ? orderDirection: "asc"}
                        onClick={createSortHandler("name.first")}
                    >
                        Name
                    </TableSortLabel>
                </StyledTableCell>
                <StyledTableCell key="email"  align="center">
                    <TableSortLabel
                        active={valueToOrderBy === "email"}
                        direction={valueToOrderBy === "email" ? orderDirection: "asc"}
                        onClick={createSortHandler("email")}
                    >
                        Email
                    </TableSortLabel>
                </StyledTableCell>
                <StyledTableCell key="login.username"  align="center">
                    <TableSortLabel
                        active={valueToOrderBy === "login.username"}
                        direction={valueToOrderBy === "login.username" ? orderDirection: "asc"}
                        onClick={createSortHandler("login.username")}
                    >
                        Username
                    </TableSortLabel>
                </StyledTableCell>
                <StyledTableCell key="location.city"  align="center">
                    <TableSortLabel
                        active={valueToOrderBy === "location.city"}
                        direction={valueToOrderBy === "location.city" ? orderDirection: "asc"}
                        onClick={createSortHandler("location.city")}
                    >
                        Location
                    </TableSortLabel>
                </StyledTableCell>
            </TableRow>
        </TableHead>
    )
}