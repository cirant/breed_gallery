import React, { memo } from 'react';
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

const NestedList = ({ element, onClick }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const getIcon = () => {
    return <div className={classes.pointer} onClick={handleClick}>{open ? <ExpandLess /> : <ExpandMore />}</div>
  }

  return (
    <React.Fragment>
      <ListItem>
        <ListItemIcon>
          <Checkbox
            checked={element.selected}
            onClick={() => {
              // setSelected(!selected);
              onClick(element.name, !element.selected);
            }}
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
            element.subCategory.map((child, i) => <SingleElement
              key={`${element.name}-${child.name}`}
              element={child} onClick={() => onClick(`${element.name},${child.name}`, !child.selected)}
              className={classes.nested} />)
          }
        </List>
      </Collapse>}
    </React.Fragment>
  );
}


const SingleElement = ({ element, onClick, iniValue }) => {
  const classes = useStyles();

  return <ListItem className={classes.nested}>
    <ListItemIcon>
      <Checkbox
        checked={element.selected}
        onClick={() => {
          onClick();
        }}
        name="checkedB"
        color="primary"
      />
    </ListItemIcon>
    <ListItemText primary={element.name} />
  </ListItem>
}

export default memo(NestedList);