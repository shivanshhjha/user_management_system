import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';

export default function TableHeader(props) {
    const {valueToOrderBy, orderDirection, handleSort} = props

    const createSortHandler = (property) => (event) => {
        handleSort(event, property)
    }

    return (
        <TableHead>
            <TableRow>
                <TableCell key="image">
                </TableCell>
                <TableCell key="name.first">
                    <TableSortLabel
                        active={valueToOrderBy === "name.first"}
                        direction={valueToOrderBy === "name.first" ? orderDirection: "asc"}
                        onClick={createSortHandler("name.first")}
                    >
                        Name
                    </TableSortLabel>
                </TableCell>
                <TableCell key="email">
                    <TableSortLabel
                        active={valueToOrderBy === "email"}
                        direction={valueToOrderBy === "email" ? orderDirection: "asc"}
                        onClick={createSortHandler("email")}
                    >
                        Email
                    </TableSortLabel>
                </TableCell>
                <TableCell key="login.username">
                    <TableSortLabel
                        active={valueToOrderBy === "login.username"}
                        direction={valueToOrderBy === "login.username" ? orderDirection: "asc"}
                        onClick={createSortHandler("login.username")}
                    >
                        Username
                    </TableSortLabel>
                </TableCell>
                <TableCell key="location.city">
                    <TableSortLabel
                        active={valueToOrderBy === "location.city"}
                        direction={valueToOrderBy === "location.city" ? orderDirection: "asc"}
                        onClick={createSortHandler("location.city")}
                    >
                        Location
                    </TableSortLabel>
                </TableCell>
            </TableRow>
        </TableHead>
    )
}