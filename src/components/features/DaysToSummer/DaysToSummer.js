import React from 'react';
import styles from './DaysToSummer.module.scss';

const DaysToSummer = () => {
  const currentTime = new Date();
  const nextSummer = new Date(Date.UTC(currentTime.getUTCFullYear(), 5, 21, 0, 0, 0, 0));

  const endSummer = new Date(Date.UTC(currentTime.getUTCFullYear(), 8, 23, 0, 0, 0, 0));

  if(nextSummer.getTime() < currentTime.getTime() && currentTime.getTime() < endSummer.getTime()) {
    return null;
  } else {
    if(currentTime.getTime() >= endSummer.getTime()) {
      nextSummer.setUTCFullYear(currentTime.getUTCFullYear() + 1);
    }

    const daysToSummer = Math.round((nextSummer.getTime() - currentTime.getTime()) / 1000 / 60 / 60 / 24);
    return (
      <div className={styles.component}>{daysToSummer} {daysToSummer == 1? 'day' : 'days'} to summer!</div>
    );
  }
};

export default DaysToSummer;