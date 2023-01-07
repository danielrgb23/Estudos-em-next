import { render, screen } from '@testing-library/react';
import Home from '../../pages';

jest.mock('next-auth/react', () => {
 return {
  useSession() {
   return [null, false]
  }
 }
})

jest.mock('next/router', () => {
 return {
  useRouter() {
   return {
    asPath: '/'
   }
  }
 }
})

describe('Home page', () => {
 it('renders correctly', () => {
  render(<Home product={{ priceId: 'fake-price-id', amount: '$10,00' }} />)

  expect(screen.getByText('for $10,00 month')).toBeInTheDocument()
 })
})