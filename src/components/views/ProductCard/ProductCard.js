import React from 'react';
import styles from './ProductCard.module.scss';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Fab from '@material-ui/core/Fab';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const myStyles = theme => ({
  card: {
    width: '200px',
    margin: '10px',
  },
  button: {
    width: '30px',
    height: '30px',
    'min-height': '30px',
  },
  text: {
    padding: '5px 7px 0 7px',
  },
});

const demoContent = [
  { id: '1', product: 'pizza', options: [{ opt1: '4' }, { opt2: '5' }, { opt3: '6' }] },
  { id: '2', product: 'chicken', options: [{ opt1: '4' }, { opt2: '5' }, { opt3: '6' }] },
  { id: '3', product: 'salad', options: [{ opt1: '4' }, { opt2: '5' }, { opt3: '6' }] },
];
const ProductCard = props => {
  const { classes, children, className, ...other } = props;
  const [state, setState] = React.useState({
    extCheese: false,
    extMeat: false,
    thcCrust: false,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { extCheese, extMeat, thcCrust } = state;

  return (
    <Card className={clsx(classes.card, className)} {...other}>
      <CardContent>
        <form>
          <FormControl className={styles.formControl}>
            <InputLabel id="select-label">Meal</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            >
              {demoContent.map(item => (
                <MenuItem value={item.id} key={item.id}>{item.product}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </form>
        <Typography color="textPrimary">
          Options:
        </Typography>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={extCheese} onChange={handleChange('extCheese')} value="extCheese" />}
              label="Extra Cheese"
            />
            <FormControlLabel
              control={<Checkbox checked={extMeat} onChange={handleChange('extMeat')} value="extMeat" />}
              label="Extra Meat"
            />
            <FormControlLabel
              control={
                <Checkbox checked={thcCrust} onChange={handleChange('thcCrust')} value="thcCrust" />
              }
              label="Thick Crust"
            />
          </FormGroup>
          <FormHelperText>Be careful</FormHelperText>
        </FormControl>
        <Typography color="textPrimary">
          Amount:
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Fab className={clsx(classes.button, className)} {...other} color="primary" aria-label="add">
              <RemoveIcon />
            </Fab>
          </Grid>
          <Grid item xs={4}>
            <Typography className={clsx(classes.text, className)} {...other} color="textPrimary">
              1
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Fab className={clsx(classes.button, className)} {...other} color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </Grid>
        </Grid>

        <Typography color="textPrimary">
          Price:
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add</Button>
        <Button size="small">Remove</Button>
      </CardActions>
    </Card>
  );
};

ProductCard.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(myStyles)(ProductCard);
