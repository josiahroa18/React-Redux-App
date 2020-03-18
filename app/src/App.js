import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getHeroes } from './actions/dataActions';

function App() {
  const heroeData = useSelector(state => state.data);
  const error = useSelector(state => state.error);
  const isFetching = useSelector(state => state.isFetching);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHeroes());
  }, [])

  useEffect(() => {
    console.log(heroeData);
  }, [heroeData]);

  return (
    <div className="App">
    </div>
  );
}

export default App;
