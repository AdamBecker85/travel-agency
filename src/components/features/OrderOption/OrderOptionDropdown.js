import PropTypes from 'prop-types';
import React from 'react';

import { formatPrice } from '../../../utils/formatPrice';
import styles from './OrderOption.module.scss';

const OrderOptionDropdown = ({values, required, currentValue, setOptionValue}) => (
  <select
    className={styles.dropdown}
    value={currentValue}
    onChange={event => setOptionValue(event.currentTarget.value)}
  >
    {required ? '' : (
      <option key='null' value=''>---</option>
    )}
    {values.map(value => (
      <option key={value.id} value={value.id}>{value.name} ({formatPrice(value.price)})</option>
    ))}
  </select>
);

OrderOptionDropdown.propTypes = {
  name: PropTypes.string,
  setOptionValue: PropTypes.func,
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.string,
};

export default OrderOptionDropdown;