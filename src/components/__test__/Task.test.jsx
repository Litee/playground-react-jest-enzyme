import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import TodoItem from '../TodoItem'

test('Must render properly', () => {
  const wrapper = shallow(<TodoItem title={'Do something'} />)
  expect(shallowToJson(wrapper)).toMatchSnapshot()
})

test('Must remove todo', () => {
  const todo = 'Do something'
  const onDelete = jest.fn()
  const wrapper = shallow(<TodoItem title={todo} onDelete={onDelete.bind(this, todo)} />)

  wrapper.find('button').simulate('click')
  expect(onDelete.mock.calls.length).toBe(1)
  expect(onDelete.mock.calls[0][0]).toBe(todo)
})
