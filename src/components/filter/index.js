import React from 'react';
import PropTypes from 'prop-types';
import ListElement from '../listElement';
import {
  makeStyles,
  List,
  ListSubheader,
  Button,
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  }
}));

const Filter = ({ list, search, handleSelection }) => {
  const classes = useStyles();

  return (
    <List subheader={
      <ListSubheader >
        <Button variant="contained" color="primary" onClick={() => search(list)}>
          Apply filter
      </Button>
      </ListSubheader>
    }
      className={classes.list}>
      {list.map((breed) => <ListElement key={breed.name} element={breed} onClick={handleSelection} />)}
    </List>
  );
}


Filter.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired,
      subCategory: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        selected: PropTypes.bool.isRequired
      })).isRequired
    }),
  ).isRequired,
  search: PropTypes.func.isRequired,
  handleSelection: PropTypes.func.isRequired
};

Filter.defaultProps = {
  list: [],
  search: () => null,
  handleSelection: () => null
}

export default Filter;