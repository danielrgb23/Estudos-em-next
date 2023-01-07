import { render, screen } from '@testing-library/react';

import { getPrismicClient } from '../../services/prismic';
import Post, { getServerSideProps } from '../../pages/posts/[slug]';
import { getSession } from 'next-auth/react';

jest.mock('next/router')
jest.mock('../../services/prismic')
jest.mock('next-auth/react')

const posts = {
 slug: 'my-new-post',
 title: 'My new post',
 content: '<p>Post excerpt</p>',
 updatedAt: '10 de abril'
}

describe('Post page', () => {
 it('renders correctly', () => {
  render(<Post post={posts} />)

  expect(screen.getByText('My new post')).toBeInTheDocument()
  expect(screen.getByText('Post excerpt')).toBeInTheDocument()

 })

 it('redirects user if no subscribe is found', async () => {
  const getSessionMoked = jest.mocked(getSession)

  getSessionMoked.mockResolvedValueOnce(null)



  const response = await getServerSideProps({ params: { slug: 'my-new-post' } } as any)

  expect(response).toEqual(
   expect.objectContaining({
    redirect: expect.objectContaining({
     destination: '/',
    })
   })
  )
 })

 it('loads initial data', async () => {
  const getSessionMocked = jest.mocked(getSession)
  const getPrismicClientMocked = jest.mocked(getPrismicClient)

  getPrismicClientMocked.mockReturnValueOnce({
   getByUID: jest.fn().mockResolvedValueOnce({
    data: {
     title: [
      { type: 'heading', text: 'My new post' },
     ],
     content: [
      { type: 'paragraph', text: 'Post content' }
     ]
    },
    last_publication_date: '12-03-2020'
   }),
  } as any)

  getSessionMocked.mockResolvedValueOnce({
   activeSubscription: 'fake-active-subscription'
  } as any)

  const response = await getServerSideProps({ params: { slug: 'my-new-post' } } as any)

  expect(response).toEqual(
   expect.objectContaining({
    props: {
     post: {
      slug: 'my-new-post',
      title: 'My new post',
      content: '<p>Post content</p>',
      updatedAt: '03 de dezembro de 2020'
     }
    }
   })
  )


 })
})