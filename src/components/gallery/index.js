import React from 'react';
import {
  GridList,
  GridListTile,
  makeStyles,
  GridListTileBar,
  Grid,
  Typography
} from '@material-ui/core';
import emptyPicture from './empty-gallery.png';

const useStyles = makeStyles((theme) => ({
  gridList: {
  },
  textCenter: {
    textAlign: 'center'
  },
  w100: {
    width: '100%'
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  }
}));


const Gallery = ({ pictureList, col, emptyMessage }) => {

  const classes = useStyles();

  return pictureList.length === 0 ? <Grid container
    direction="row"
    justify="center"
    alignItems="center">
    <Grid item xs={6} md={4}>
      <img className={classes.w100} src={emptyPicture} alt="" />
    </Grid>
    <Grid item xs={12} className={classes.textCenter}>
      <Typography>
        Gallery empty. Please select a breed
      </Typography>
    </Grid>
  </Grid>

    : <GridList className={classes.gridList} cols={col}>
      {
        pictureList.map((element) =>
          element.pictures.map((picture) => <GridListTile key={picture} cols={1}>
            <img src={picture} alt={picture} />
            <GridListTileBar
              title={element.title}
              titlePosition="top"
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>)
        )}
    </GridList>;

}

export default Gallery;