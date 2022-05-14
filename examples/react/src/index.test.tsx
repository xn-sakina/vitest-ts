import React from 'react'
import { Page } from './'
import renderer from 'react-test-renderer'

test('page component', () => {
  const component = renderer.create(<Page extra="test" />)
  const tree = component.toJSON()

  expect(tree).toMatchSnapshot()
  // @ts-ignore
  expect(tree!.children[0].children.includes('test')).toBeTruthy()
})
