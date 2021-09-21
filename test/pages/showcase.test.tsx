import React from 'react'
import { render, fireEvent } from '../testUtils'
import Showcase from '../../pages/design-system'

describe('Showcase page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Showcase />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('clicking button triggers alert', () => {
    const { getByText } = render(<Showcase />, {})
    window.alert = jest.fn()
    fireEvent.click(getByText('Test Button'))
    expect(window.alert).toHaveBeenCalledWith('With typescript and Jest')
  })
})
