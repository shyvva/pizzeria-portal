import React from 'react';
import styles from './TablesBookingId.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const TablesBookingId = () => (
  <Paper className={styles.component}>
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>Name:</TableCell>
          <TableCell>
            <form className={styles.container} noValidate>
              <TextField
                required
                id="name"
                label="Required"
                defaultValue="Abc"
                variant="outlined"
                disabled
              />
            </form>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Date:</TableCell>
          <TableCell>

            <TextField
              required
              id="date"
              label="Required"
              type="date"
              defaultValue="2222-02-02"
              className={styles.textField}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              disabled
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Start Time:</TableCell>
          <TableCell>
            <form className={styles.container} noValidate>
              <TextField
                required
                id="start-time"
                label="Required"
                type="time"
                defaultValue="12:00"
                className={styles.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 1800, // 30 min
                }}
                variant="outlined"
                disabled
              />
            </form>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>End Time:</TableCell>
          <TableCell>
            <form className={styles.container} noValidate>
              <TextField
                required
                id="end-time"
                label="Required"
                type="time"
                defaultValue="12:30"
                className={styles.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 1800, // 30 min
                }}
                variant="outlined"
                disabled
              />
            </form>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Telephone:</TableCell>
          <TableCell>
            <form className={styles.container} noValidate>
              <TextField
                required
                id="telephone"
                label="Required"
                type="tel"
                defaultValue="123456789"
                className={styles.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                disabled
              />
            </form>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Button variant="outlined" color="primary">
              Edit
            </Button>
          </TableCell>
          <TableCell>
            <Button variant="outlined" color="secondary">
              Delete
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Paper>
);

export default TablesBookingId;
