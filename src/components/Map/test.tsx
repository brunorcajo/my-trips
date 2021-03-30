import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map />', () => {
  it('', () => {
    render(<Map />)

    // screen.logTestingPlaygroundURL()
    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Floripa',
      slug: 'florianopolis',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const placeTwo = {
      id: '1',
      name: 'Sampa',
      slug: 'sao-paulo',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/Floripa/i)).toBeInTheDocument()
    expect(screen.getByTitle(/Sampa/i)).toBeInTheDocument()
  })
})
