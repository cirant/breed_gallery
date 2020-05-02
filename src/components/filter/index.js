import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ListElement from '../listElement';
import Services from '../../services';
import Category from '../../modes/categories';
import {
  makeStyles,
  List,
  ListSubheader,
  Button,
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const Filter = ({ list, search }) => {
  const classes = useStyles();
  const [listState, setListState] = useState(list);

  const handleSelection = (name, value) => {
    setListState(Category.handleSelection(name, value, listState));
  }

  const returnListToSearch = () => {
    search(Category.getElementToRequest(listState));
  }

  return <List subheader={
    <ListSubheader >
      <Button variant="contained" color="primary" onClick={returnListToSearch}>
        apply filter
      </Button>
    </ListSubheader>
  }
    className={classes.list}>
    {listState.map((breed) => <ListElement key={breed.name} element={breed} onClick={handleSelection} />)}
  </List>
}


// Filter.propTypes = {
//   breeds: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       subCategory: PropTypes.arrayOf(PropTypes.string).isRequired
//     }),
//   ).isRequired,
//   onClick: PropTypes.func
// };

// Filter.defaultProps = {
//   breeds: [],
//   onClick: () => null
// }

export default Filter;