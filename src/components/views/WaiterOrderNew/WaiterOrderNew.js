
import React from 'react';
import PropTypes from 'prop-types';
import styles from './WaiterOrderNew.module.scss';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import ProductCard from '../ProductCard/ProductCard';

const myStyles = theme => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
});

class WaiterOrderNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{ id: '1' }],
    };
  }

  onAddItem = () => {
    this.setState(state => {
      const list = state.list.concat({ id: '2' });
      return {
        list,
      };
    });
  }

  render() {
    return (
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            New Order
          </Typography>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  Table Number:
                </TableCell>
                <TableCell>
                  <form>
                    <FormControl className={styles.formControl}>
                      <InputLabel id="select-label">Table No.</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                      >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                      </Select>
                    </FormControl>
                  </form>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Products:
                </TableCell>
                <TableCell style={{ display: 'flex' }}>
                  {this.state.list.map((id) => (
                    <ProductCard key={id} />
                  ))}
                  <Button onClick={this.onAddItem}>+</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Order Summary:
                </TableCell>
                <TableCell>

                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Total Price:
                </TableCell>
                <TableCell>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardActions>
          <Button size="small">Send to Kitchen!</Button>
        </CardActions>
      </Card>
    );
  }
}

WaiterOrderNew.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(myStyles, { withTheme: true })(WaiterOrderNew);
