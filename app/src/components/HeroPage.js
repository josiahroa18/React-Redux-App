// Default Imports
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHeroes } from '../actions/dataActions';

// Style and Component Imports
import HeroCard from './HeroCard';
import '../App.css';
import video from '../assets/video.mp4'

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

function HeroPage(){
    const heroData = useSelector(state => state.data);
    const error = useSelector(state => state.error);
    const isFetching = useSelector(state => state.isFetching);
    const dispatch = useDispatch();

    const classes = useStyles();

    useEffect(() => {
        dispatch(getHeroes());
    }, [])

    return (
        <div className="App">
            <Backdrop className={classes.backdrop} open={isFetching}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <video autoPlay muted loop>
                <source src={video} type='video/mp4'/>
            </video>
            <h1>Dota 2 Characters</h1>
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
    )
}

export default HeroPage;