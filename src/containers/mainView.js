import React, { useEffect } from 'react';
import Layout from '../components/layout';
import actions from '../actions';
import { useGlobalDispatch } from '../reducers';
import { GlobalStateContext } from '../context'
import {
  makeStyles,
  Typography
} from '@material-ui/core';
import Category from '../models/categories';
import Filter from '../components/filter';
import Gallery from '../components/gallery';

const useStyles = makeStyles((theme) => ({
  breadcrumbs: {
    color: "white"
  }
}));

const MainView = () => {
  const classes = useStyles();
  const { breedsList, pictureList, column } = React.useContext(GlobalStateContext);
  const dispatch = useGlobalDispatch();
  const category = new Category();

  const getAllBreerd = async () => {
    const response = await category.getAllBreeds();
    dispatch({
      type: actions.SET_BREED_LIST,
      value: Category.parse(response)
    })
  }

  const handleSelection = (name, value) => {
    dispatch({ type: actions.SET_BREED_LIST, value: Category.handleSelection(name, value, breedsList) })
  }

  const getDetails = async (elementToSearch) => {
    try {
      const picturesConcatened = await category.getMultipleBreeds(elementToSearch);
      dispatch({
        type: actions.SET_GALLERY_LIST,
        value: picturesConcatened
      })
    } catch (error) {
      console.log('[getDetails error] ', error)
    }
  }

  const getList = () => {
    return <Filter key={breedsList.length} list={breedsList} handleSelection={handleSelection} search={getDetails} />
  }

  const getHeaderContent = () => {
    return <Typography variant="h6" className={classes.breadcrumbs}>
      Breeds selected {pictureList.length}
    </Typography>
  }

  useEffect(() => {
    getAllBreerd();
  }, []);

  return (
    <Layout list={getList()} title={getHeaderContent()} >
      <Gallery pictureList={pictureList} col={column} />
    </Layout>
  )
}

export default MainView;
