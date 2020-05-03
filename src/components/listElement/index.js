import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
    backgroundColor: '#f5f5f5',
    cursor: 'pointer'
  },
  pointer: {
    cursor: "pointer"
  }
}));

const ListElement = ({ element, onClick }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const getIcon = () => {
    return <div className={classes.pointer} onClick={handleClick}>{open ? <ExpandLess /> : <ExpandMore />}</div>
  }

  return (<React.Fragment>
    <ListItem>
      <ListItemIcon>
        <Checkbox
          checked={element.selected}
          onClick={() => onClick(element.name, !element.selected)}
          name="checkedB"
          color="primary"
        />
      </ListItemIcon>
      <ListItemText primary={element.name} />
      {element.subCategory.length > 0 && getIcon()}
    </ListItem>
    {element.subCategory.length > 0 && <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {
          element.subCategory.map((child) =>
            <ListItem key={`${element.name},${child.name}`} className={classes.nested}>
              <ListItemIcon>
                <Checkbox
                  checked={child.selected}
                  onClick={() => onClick(`${element.name},${child.name}`, !child.selected)}
                  name="checkedB"
                  color="primary"
                />
              </ListItemIcon>
              <ListItemText primary={child.name} />
            </ListItem>
          )
        }
      </List>
    </Collapse>}
  </React.Fragment>);
}

ListElement.propTypes = {
  element: PropTypes.shape({
    name: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    subCategory: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        selected: PropTypes.bool.isRequired,
      })
    )
  }).isRequired,
  onClick: PropTypes.func,
};

ListElement.defaultProps = {
  onClick: () => null
}

export default memo(ListElement);