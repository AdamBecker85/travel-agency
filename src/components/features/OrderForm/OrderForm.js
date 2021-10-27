import React from 'react';
import PropTypes from 'prop-types';
//import styles from './OrderForm.scss';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../../features/OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import setOrderOption from '../../../redux/orderRedux';

const OrderForm = ({tripCost, options}) => (
    <Row>
      {pricing.map(pricingOption => (
      <Col md={4}>
        <OrderOption 
        key={pricingOption.id} 
        currentValue={options[pricingOption.id]} 
        setOrderOption={setOrderOption} 
        {...pricingOption} />
      </Col>
      ))}
      <Col xs={12}>
        <OrderSummary tripCost={tripCost} options={options}/>
      </Col>
    </Row>
);

OrderForm.propTypes = {
    tripCost: PropTypes.string,
    options: PropTypes.object,
    setOrderOption: PropTypes.func,
};


export default OrderForm;