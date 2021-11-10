import React from 'react';
import TripSummary from './TripSummary';
import {shallow} from 'enzyme';

describe('Component TripSummary', () => {
  it('should generate correct link adress', () => {
    const expectedId = 'abc';
    const exceptedLink = '/trip/abc';
    const component = shallow(<TripSummary id={expectedId} name={'name'} image={'image'} cost={'cost'} days={1} tags={[]} />);
    expect(component.find('.link').prop('to')).toEqual(exceptedLink);
  });

  it('should check correct src and alt of img', () => {
    const expectedImage = 'image.jpg';
    const expectedName = 'name';
    const component = shallow(<TripSummary id={'id'} name={expectedName} image={expectedImage} cost={'cost'} days={1} tags={[]} />);
    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(expectedName);
  });

  it('should check correct render of props: name, cost and days', () => {
    const expectedName = 'name';
    const expectedCost = '100';
    const expectedDays = 1;
    const component = shallow(<TripSummary id={'id'} name={expectedName} image={'image'} cost={expectedCost} days={expectedDays} tags={[]} />);

    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.details span').first().text()).toEqual(`${expectedDays} days`);
    expect(component.find('.details span').last().text()).toEqual(`from ${expectedCost}`);
  });

  it('should throw error without props: id, image, name, cost, days', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render three tags', () => {
    const expectedTags = ['tag1', 'tag2', 'tag3'];
    const component = shallow(<TripSummary id={'id'} name={'name'} image={'image'} cost={'cost'} days={1} tags={expectedTags} />);
    expect(component.find('.tags span').at(0).text()).toEqual(expectedTags[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(expectedTags[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(expectedTags[2]);
  });
  
  it('should not render div tags if props tags is false', () => {
    const component = shallow(<TripSummary image={'image'} tags={['tag1', 'tag2', 'tag3']} name={'name'} cost={'cost'} days={1} id={'id'} />);
    expect(component.hasClass('tags')).toBe(false);
  });
});