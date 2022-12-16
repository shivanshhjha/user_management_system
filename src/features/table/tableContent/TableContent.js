import React, { useState } from 'react';
import TableHeader from '../tableHead/TableHeader';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function descendingComparator(a, b, orderBy) {
    if(orderBy.search('.') !== -1) {
        var x=orderBy.split('.');
        if (b[x[0]][x[1]] < a[x[0]][x[1]]) {
            return -1
        }
        if (b[x[0]][x[1]] > a[x[0]][x[1]]) {
            return 1
        }
    }    
    if (b[orderBy] < a[orderBy]) {
        return -1
    }
    if (b[orderBy] > a[orderBy]) {
        return 1
    }
    return 0
}

function getComparator(order, orderBy) {
    return order === "desc" 
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy)
}

const sortedRow = (rowArray, value, comparator) => {
    const stabilizedRowArray = rowArray.map((el, index) => [el, index])
    stabilizedRowArray.sort((a, b) => {
        const order = comparator(a[0], b[0])
        if(order !== 0) {
            return order
        }
        return a[1] - b[1]
    })
    return stabilizedRowArray.map((el) => el[0])
}

export default function TableContent({users}) {
    const [orderDirection, setOrderDirection] = useState("asc")
    const [valueToOrderBy, setValueToOrderBy] = useState("")
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)

    const handleSort = (event, property) => {
        const isAscending = (valueToOrderBy === property && orderDirection === "asc")
        setValueToOrderBy(property)
        setOrderDirection(isAscending ? "desc" : "asc")
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }

    return (
        <Paper sx={{ width: '100%', mb: 2 }}>
            <TableContainer>
                <Table>
                    <TableHeader
                        valueToOrderBy={valueToOrderBy}
                        orderDirection={orderDirection}
                        handleSort={handleSort}
                    />
                    <TableBody>
                    {
                        sortedRow(users, valueToOrderBy, getComparator(orderDirection, valueToOrderBy))
                            .slice(page*rowsPerPage, (page+1)*rowsPerPage)
                            .map(user => (
                                <TableRow key={user.login.uuid}>
                                    <TableCell>
                                        <img src={user.picture.thumbnail} alt="" />
                                    </TableCell>
                                    <TableCell>
                                        {user.name.title} {user.name.first} {user.name.last}
                                    </TableCell>
                                    <TableCell>
                                        {user.email}
                                    </TableCell>
                                    <TableCell>
                                        {user.login.username}
                                    </TableCell>
                                    <TableCell>
                                        {user.location.city}, {user.location.country}
                                    </TableCell>
                                </TableRow>
                            ))
                    }
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination 
                rowsPerPageOptions={[2, 3, 5]}
                component="div"
                count={users.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}