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
import ApproveButton from './ApproveButton';
import RejectButton from './RejectButton';
import { fetchAdminRequests, fetchDonorRequests } from '../../Redux/actions';

const columns = [
  { id: 'id', label: 'Id', minWidth: 170 },
  {
    id: 'name',
    label: ' Facility Name',
    minWidth: 170,
  },
  { id: 'title', label: 'Title', minWidth: 100 },
  {
    id: 'description',
    label: 'Description',
    minWidth: 170,
  },
  {
    id: 'number',
    label: 'No. of Children',
    minWidth: 120,
  },
  {
    id: 'location',
    label: 'Location',
    minWidth: 120,
  },

  {
    id: 'amount',
    label: 'Amount Required',
    minWidth: 120,
  },
  { id: 'approve', label: 'Approve', minWidth: 120 },
  { id: 'reject', label: 'Reject', minWidth: 120 },
];

function createData(id, name, title, description, number, location, amount) {
  const approve = <ApproveButton />;
  const reject = <RejectButton />;
  return {
    id,
    name,
    title,
    description,
    number,
    location,
    amount,
    approve,
    reject,
  };
}
export default function RequestsTable() {
  const userState = useSelector((state) => state.loginState.user);
  const { userID, isDonor, isAdmin } = userState;
  const adminRequests = useSelector((state) => state.adminRequestsState);
  const donorRequests = useSelector((state) => state.donorRequestsState);
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  // Return State based on the user
  const getRequests = () => {
    let requestsState = {};
    if (isDonor) {
      requestsState = donorRequests;
    }
    if (isAdmin) {
      requestsState = adminRequests;
    }
    return requestsState;
  };
  const { requests } = getRequests();
  React.useEffect(() => {
    if (isAdmin) {
      dispatch(fetchAdminRequests());
    }
    if (isDonor) {
      dispatch(fetchDonorRequests(userID));
    }
  }, []);

  const rows = requests.map((request) => {
    return createData(
      request.requestid,
      request.facilityname,
      request.requesttitle,
      request.requestdescription,
      request.numberofchildren,
      request.location,
      request.amountrequired
    );
  });

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
