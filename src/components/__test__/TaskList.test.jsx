import React from 'react'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import TodoList from '../TodoList'
import TodoItem from '../TodoItem'
import AddTodo from '../AddTodo'

function addTodo (wrapper, title) {
  wrapper.find(AddTodo).find('input').simulate('change', { target: {value: title} })
  wrapper.find(AddTodo).find('form').simulate('submit', {preventDefault: () => {}})
}

test('Must render properly', () => {
  const wrapper = shallow(<TodoList />)
  expect(shallowToJson(wrapper)).toMatchSnapshot()
})

test('Must add todo', () => {
  const wrapper = mount(<TodoList />)
  addTodo(wrapper, 'Do X')
  expect(shallowToJson(wrapper)).toMatchSnapshot()
})

test('Must ignore adding duplicates', () => {
  const wrapper = mount(<TodoList />)

  addTodo(wrapper, 'Do X')
  addTodo(wrapper, 'Do X')
  expect(shallowToJson(wrapper)).toMatchSnapshot()
})

test('Must remove todo', () => {
  const wrapper = mount(<TodoList />)

  addTodo(wrapper, 'Do X')
  wrapper.find(TodoItem).find('button').simulate('click')
  expect(shallowToJson(wrapper)).toMatchSnapshot()
})
