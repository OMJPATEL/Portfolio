import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'
import { identity, experience } from '../content'

describe('App', () => {
  it('renders the hero with the correct name', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(identity.name)
  })

  it('renders every section landmark used by the nav rail', () => {
    render(<App />)
    ;['hero', 'profile', 'services', 'log', 'incident', 'deployed', 'contact'].forEach((id) => {
      expect(document.getElementById(id)).not.toBeNull()
    })
  })

  it('renders every role from the experience log', () => {
    render(<App />)
    experience.forEach((entry) => {
      expect(screen.getByText(entry.role)).toBeInTheDocument()
    })
  })

  it('has a mailto link with the correct contact email', () => {
    render(<App />)
    const link = screen.getByText(identity.email).closest('a')
    expect(link).toHaveAttribute('href', `mailto:${identity.email}`)
  })
})
