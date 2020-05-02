import React, { useEffect, useState } from 'react';
import Services from '../services';
import Layout from '../components/layout';
import {
  makeStyles,
  Typography
} from '@material-ui/core';
import Category from '../modes/categories';
import Filter from '../components/filter';
import Gallery from '../components/gallery';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  progressContainer: {
    width: "100vw",
    height: "100vh"
  },
  breadcrumbs: {
    color: "white",
    textTransform: "capitalize",
    cursor: "pointer"
  }
}));


const MainView = () => {
  const classes = useStyles();
  const services = new Services();
  const [breedsList, setBreedList] = useState([]);
  const [pictureList, setPictureList] = useState([]);

  const getAllBreerd = async () => {
    const response = await services.getAllBreeds();
    setBreedList(Category.parse(response));
  }

  const getDetails = async (elementToSearch) => {
    try {
      const pictures = await Promise.all(
        elementToSearch.map(name => services.getBreedsDetails(name)
        )
      );

      const picturesConcatened = pictures.map((picture, index) => ({
        title: elementToSearch[index],
        pictures: picture
      }));

      setPictureList(picturesConcatened);
    } catch (error) {
      console.log('[getDetails error] ', error)
    }
  }

  const getList = () => {
    return <Filter key={breedsList.length} list={breedsList} search={getDetails} />
  }

  const getHeaderContent = () => {
    return <Typography variant="h6" className={classes.breadcrumbs}>
      Breeds selected {pictureList.length}
    </Typography>
  }

  useEffect(() => {
    getAllBreerd();
  }, []);


  return <Layout list={getList()} title={getHeaderContent()} >
    <Gallery pictureList={pictureList} col={3} />
  </Layout>
}

export default MainView;



{/* hound
plott */ }