import React from 'react';
import PropTypes from 'prop-types';

import { formatPrice } from '../../../utils/formatPrice';
import styles from './OrderOption.module.scss';

const OrderOptionNumber = ({currentValue, limits, price, setOptionValue}) => (
  <div className={styles.inputSmall}>
    <input 
      className={styles.inputSmall}
      max={limits.max}
      min={limits.min}
      onChange={event => setOptionValue(event.currentTarget.value)}
      value={currentValue}
      type='number'
    />
    {formatPrice(price)}
  </div>
);

OrderOptionNumber.propTypes = {
  limits: PropTypes.object,
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
  price: PropTypes.string,
};

export default OrderOptionNumber;