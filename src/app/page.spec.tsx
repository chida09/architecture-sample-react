import '@testing-library/jest-dom'
import Page from './page'
import { render, screen } from '@testing-library/react'

describe('Page', () => {
  it('renders a heading', () => {
    const { asFragment } = render(<Page />)

    // h1タグ
    const heading1 = screen.getByRole('heading', { level: 1 })
    const text = screen.getByText('Docs')

    // h2タグが複数存在する場合
    const heading2 = screen.getByRole('heading', { name: 'Learn' })

    const listElements = screen.getAllByRole('listitem')

    // heading tag
    expect(heading1).toBeInTheDocument()
    expect(text).toBeInTheDocument()
    expect(heading2).toBeInTheDocument()
    // list tag
    expect(listElements).toHaveLength(3)
    // snapshot test
    expect(asFragment()).toMatchSnapshot()
  })
})
