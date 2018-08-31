import React from 'react'
import { shallow } from 'enzyme';
import Item from '../index'

test('Item', () => {
    const item = shallow(<Item item="test" />)
    expect(item.text()).toBe('test')
    expect(item.hasClass('item')).toBe(true)
    expect(item.hasClass('item-selected')).toBe(false)
})

test('Item Clicked', () => {
    const item = shallow(<Item item="test" />)
    item.simulate('click');
    expect(item.hasClass('item')).toBe(true);
    expect(item.hasClass('item-selected')).toBe(true)
})
