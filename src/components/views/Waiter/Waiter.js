import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Waiter extends React.Component {
  static propTypes = {
    sendStatus: PropTypes.func,
    tables: PropTypes.any,
    fetchTables: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
    }),
  }

  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }
  changeStatus(payload) {
    // console.log(this.props.tables);
    const { sendStatus } = this.props;
    sendStatus(payload);
    // console.log(this.props.tables.order);

  }

  renderActions(status, id, order){
    switch (status) {
      case 'free':
        return (
          <>
            <Button onClick={(payload) =>this.changeStatus({ id: id, status: 'thinking', order: null})}>thinking</Button>
            <Button onClick={(payload) =>this.changeStatus({ id: id, status: 'ordered', order: order})}>new order</Button>
          </>
        );
      case 'thinking':
        return (
          <Button onClick={(payload) =>this.changeStatus({ id: id, status: 'ordered', order: order})}>new order</Button>
        );
      case 'ordered':
        return (
          <Button onClick={(payload) =>this.changeStatus({ id: id, status: 'prepared', order: order})}>prepared</Button>
        );
      case 'prepared':
        return (
          <Button onClick={(payload) =>this.changeStatus({ id: id, status: 'delivered' , order: order})}>delivered</Button>
        );
      case 'delivered':
        return (
          <Button onClick={(payload) =>this.changeStatus({ id: id, status: 'paid', order: order})}>paid</Button>
        );
      case 'paid':
        return (
          <Button onClick={(payload) =>this.changeStatus({ id: id, status: 'free', order: null})}>free</Button>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;
    if(active || !tables.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component='th' scope='row'>
                    {row.id}
                  </TableCell>
                  <TableCell>
                    <Typography color='secondary' className={styles.status}>{row.status}</Typography>
                  </TableCell>
                  <TableCell>
                    {console.log(row.order)}
                    {row.order && (
                      <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                        {row.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row.status, row.id, row.order)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default Waiter;
