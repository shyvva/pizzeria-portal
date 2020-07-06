import React from 'react';
import styles from './Tables.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoContent = [
  {time: '12:00 - 12:30', tableOne: '1', tableTwo: null, tableThree: '2', tableFour: null, tableFive: null, tableSix: null},
  {time: '12:30 - 13:00', tableOne: '3', tableTwo: null, tableThree: '4', tableFour: null, tableFive: '5', tableSix: '6'},
  {time: '13:00 - 13:30', tableOne: '7', tableTwo: '8', tableThree: '9', tableFour: '10', tableFive: '11', tableSix: null},
  {time: '13:30 - 14:00', tableOne: null, tableTwo: '12', tableThree: '13', tableFour: null, tableFive: '14', tableSix: null},
  {time: '14:00 - 14:30', tableOne: '15', tableTwo: null, tableThree: '16', tableFour: '17', tableFive: null, tableSix: null},
  {time: '14:30 - 15:00', tableOne: '18', tableTwo: null, tableThree: null, tableFour: null, tableFive: null, tableSix: null},
  {time: '15:00 - 15:30', tableOne: null, tableTwo: null, tableThree: null, tableFour: null, tableFive: null, tableSix: '19'},
];




const Tables = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell align="center">1</TableCell>
          <TableCell align="center">2</TableCell>
          <TableCell align="center">3</TableCell>
          <TableCell align="center">4</TableCell>
          <TableCell align="center">5</TableCell>
          <TableCell align="center">6</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.time}>
            <TableCell component="th" scope="row" align="center">
              {row.time}
            </TableCell>
            <TableCell align="center">
              {row.tableOne ? (
                <Button href={`${process.env.PUBLIC_URL}/tables/booking/${row.tableOne}`} variant="outlined" color="secondary">
                  {row.tableOne}
                </Button>
              ) : (
                <Button href ={`${process.env.PUBLIC_URL}/tables/booking/new`} variant="outlined" color="primary">
                  NEW
                </Button>
              )}
            </TableCell>
            <TableCell align="center">
              {row.tableTwo ? (
                <Button href={`${process.env.PUBLIC_URL}/tables/booking/${row.tableTwo}`} variant="outlined" color="secondary">
                  {row.tableTwo}
                </Button>
              ) : (
                <Button href={`${process.env.PUBLIC_URL}/tables/booking/new`} variant="outlined" color="primary">
                  NEW
                </Button>
              )}
            </TableCell>
            <TableCell align="center">
              {row.tableThree ? (
                <Button href={`${process.env.PUBLIC_URL}/tables/booking/${row.tableThree}`} variant="outlined" color="secondary">
                  {row.tableThree}
                </Button>
              ) : (
                <Button href={`${process.env.PUBLIC_URL}/tables/booking/new`} variant="outlined" color="primary">
                  NEW
                </Button>
              )}
            </TableCell>
            <TableCell align="center">
              {row.tableFour ? (
                <Button href={`${process.env.PUBLIC_URL}/tables/booking/${row.tableFour}`} variant="outlined" color="secondary">
                  {row.tableFour}
                </Button>
              ) : (
                <Button href={`${process.env.PUBLIC_URL}/tables/booking/new`} variant="outlined" color="primary">
                  NEW
                </Button>
              )}
            </TableCell>
            <TableCell align="center">
              {row.tableFive ? (
                <Button href={`${process.env.PUBLIC_URL}/tables/booking/${row.tableFive}`} variant="outlined" color="secondary">
                  {row.tableFive}
                </Button>
              ) : (
                <Button href={`${process.env.PUBLIC_URL}/tables/booking/new`} variant="outlined" color="primary">
                  NEW
                </Button>
              )}
            </TableCell>
            <TableCell align="center">
              {row.tableSix ? (
                <Button href={`${process.env.PUBLIC_URL}/tables/booking/${row.tableSix}`} variant="outlined" color="secondary">
                  {row.tableSix}
                </Button>
              ) : (
                <Button href={`${process.env.PUBLIC_URL}/tables/booking/new`} variant="outlined" color="primary">
                  NEW
                </Button>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Tables;
