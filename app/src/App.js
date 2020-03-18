// Default Imports
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHeroes } from './actions/dataActions';

// Style and Component Imports
import HeroCard from './components/HeroCard';
import './App.css';

// Material UI Imports
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

// Material UI Theme
const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function App() {
  const heroData = useSelector(state => state.data);
  const error = useSelector(state => state.error);
  const isFetching = useSelector(state => state.isFetching);
  const dispatch = useDispatch();

  const classes = useStyles();


  useEffect(() => {
    dispatch(getHeroes());
  }, [])

  // useEffect(() => {
  //   console.log(heroData);
  // }, [heroData]);

  return (
    <div className="App">
      <Backdrop className={classes.backdrop} open={isFetching}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {error && <h1>{error}</h1>}
      <section className='card-container'>
        {heroData && heroData.map(hero => {
          return <HeroCard 
                    key={hero.id} 
                    hero={hero} 
                  />
        })}
      </section>
    </div>
  );
}

export default App;
