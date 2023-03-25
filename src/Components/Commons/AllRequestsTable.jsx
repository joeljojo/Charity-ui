import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
// import ApproveButton from './ApproveButton';
// import RejectButton from './RejectButton';

const columns = [
  { id: 'id', label: 'Id', minWidth: 170 },
  { id: 'title', label: 'Title', minWidth: 100 },
  {
    id: 'description',
    label: 'Description',
    minWidth: 170,
  },
  {
    id: 'name',
    label: ' Name',
    minWidth: 170,
  },
  {
    id: 'location',
    label: 'Location',
    minWidth: 170,
  },
  {
    id: 'number',
    label: 'Children',
    minWidth: 170,
  },
  {
    id: 'amount',
    label: 'Amount Required',
    minWidth: 170,
  },
];

function createData(id, title, description, name, location, number, amount) {
  return {
    id,
    title,
    description,
    name,
    location,
    number,
    amount,
  };
}

const rows = [
  createData(
    '14ae8834-2cf5-4a2b-844a-3e203b593225',
    'Classes',
    'Ongoing students do not have enough space to study',
    'Baraka Chilrens Home',
    'Nyeri',
    500,
    50000
  ),
];

export default function RequestsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
