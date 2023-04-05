import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useDispatch, useSelector } from 'react-redux';
import RequestButton from './RequestButton';
import { fetchDonors } from '../../Redux/actions';

const columns = [
  { id: 'id', label: 'Id', minWidth: 170 },
  { id: 'firstname', label: 'First Name', minWidth: 100 },
  {
    id: 'lastname',
    label: 'Last Name',
    minWidth: 170,
  },
  {
    id: 'email',
    label: ' Donor Email',
    minWidth: 170,
  },
  { id: 'request', label: 'Make Request', minWidth: 170 },
];
export default function Donors() {
  const { donors } = useSelector((state) => state.getDonorsState);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchDonors());
  }, []);
  function createData(id, firstname, lastname, email) {
    const request = <RequestButton />;
    return {
      id,
      firstname,
      lastname,
      email,
      request,
    };
  }

  const rows = donors.map((donor) => {
    return createData(
      donor.userid,
      donor.firstname,
      donor.lastname,
      donor.email
    );
  });

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
