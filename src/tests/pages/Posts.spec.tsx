import { render, screen } from '@testing-library/react';

import { getPrismicClient } from '../../services/prismic';
import Posts, { getStaticProps } from '../../pages/posts';

jest.mock('next/router')
jest.mock('../../services/prismic')
jest.mock('next-auth/react', () => {
 return {
  useSession() {
   return [null, false]
  }
 }
})

const posts = [
 { slug: 'my-new-post', title: 'My new post', excerpt: 'Post excerpt', updatedAt: '10 de abril' }
]

describe('Posts page', () => {
 it('renders correctly', () => {
  render(<Posts posts={posts} />)

  expect(screen.getByText('My new post')).toBeInTheDocument()
 })

 it('Loads initial data', async () => {
  const getPrismicClientMocked = jest.mocked(getPrismicClient)

  getPrismicClientMocked.mockReturnValueOnce({
   query: jest.fn().mockResolvedValueOnce({
    results: [
     {
      uid: 'my-new-post',
      data: {
       title: [
        { type: ' heading', text: 'My new post' }
       ],
       content: [
        { type: 'paragraph', text: 'Post excerpt' }
       ],
      },
      last_publication_date: '12/03/2020',
     }
    ]
   })
  } as any)

  const response = await getStaticProps({})

  expect(response).toEqual(
   expect.objectContaining({
    props: {
     posts: [{
      slug: 'my-new-post',
      title: 'My new post',
      excerpt: 'Post excerpt',
      updatedAt: '03 de dezembro de 2020',
     }]
    }
   })
  )
 })
})