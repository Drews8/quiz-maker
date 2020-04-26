import React from 'react';
import classes from './Loader.module.css'

const Loader = () => {
  return (
    <div style={{
      height: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div className={classes.Loader}>
        <div/>
        <div/>
        <div/>
        <div/>
      </div>
    </div>
  );
};

export default Loader;