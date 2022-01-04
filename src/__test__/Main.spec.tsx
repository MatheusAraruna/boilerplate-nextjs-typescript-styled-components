import { render, screen } from '@testing-library/react'

import Main from '../pages'

describe('', () => {
  it('', () => {
    render(<Main />)
    expect(screen.getByRole('heading', { name: /react/i })).toBeInTheDocument()
  })
})
