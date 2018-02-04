import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import AddTodo from '../AddTodo'

test('Must allow adding', () => {
  const onAddTodo = jest.fn()
  const wrapper = shallow(
    <AddTodo onAddTodo={onAddTodo} />
  )
  expect(shallowToJson(wrapper)).toMatchSnapshot()

  wrapper.find('input').simulate('change', {
    target: {value: 'ABCDE'}
  })
  wrapper.find('form').simulate('submit', {preventDefault: () => {}})
  expect(onAddTodo).toBeCalledWith('ABCDE')
})
