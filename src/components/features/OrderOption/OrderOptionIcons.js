import React from 'react';
import PropTypes from 'prop-types';

import { formatPrice } from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon';
import styles from './OrderOption.module.scss';

const OrderOptionIcons = ({values, required, setOptionValue}) => (
  <div className={styles.component}>
    {required ? '' : (
      <div 
        className={styles.icon}
        onClick={() => setOptionValue('')}
      >
        <Icon name='times-circle'/>
        none
      </div>
    )}
    {values.map( value => (
      <div 
        className={styles.icon} //how to set and toggle multiple classes?
        key={value.id}
        onClick={() => setOptionValue(value.id)}
      >
        <Icon name={value.icon} />
        {value.name} ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionIcons;