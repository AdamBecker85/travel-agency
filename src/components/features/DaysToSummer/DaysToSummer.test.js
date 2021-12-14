import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer';

const trueDate = Date;

const mockDate = customDate =>  class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};

describe('DaysToSummer', () => {
  it('should render correct value', () => {
    global.Date = mockDate(`2022-06-19T11:57:58.135Z`);

    const component = shallow(<DaysToSummer />);
    expect(component.find('div').text()).toEqual('2 days to summer!');


    global.Date = trueDate;
  });

  it('should render day when 1 day left ', () => {
    global.Date = mockDate(`2022-06-20T11:57:58.135Z`);

    const component = shallow(<DaysToSummer />);
    expect(component.find('div').text()).toEqual('1 day to summer!');


    global.Date = trueDate;
  });

  it('should not render value when it is summer ', () => {
    global.Date = mockDate(`2022-06-22T11:57:58.135Z`);

    const component = shallow(<DaysToSummer />);
    expect(component).toEqual({});


    global.Date = trueDate;
  });

  it('should count days to next summer ', () => {
    global.Date = mockDate(`2022-09-23T00:00:00.135Z`);

    const component = shallow(<DaysToSummer />);
    expect(component.find('div').text()).toEqual('271 days to summer!');


    global.Date = trueDate;
  });
}); 
