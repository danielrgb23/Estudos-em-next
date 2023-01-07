import { render, screen } from '@testing-library/react';

import Post, { getStaticProps } from '../../pages/posts/preview/[slug]';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { getPrismicClient } from '../../services/prismic';

jest.mock('next/router', () => ({
 useRouter: jest.fn().mockReturnValue({
  push: jest.fn(),
 }),
}))
jest.mock('../../services/prismic')
jest.mock('next-auth/react')

const posts = {
 slug: 'my-new-post',
 title: 'My new post',
 content: '<p>Post excerpt</p>',
 updatedAt: '10 de abril'
}

describe('Post preview page', () => {
 it('renders correctly', () => {
  const useSessionMocked = jest.mocked(useSession)

  useSessionMocked.mockReturnValueOnce([null, false] as any)

  render(<Post post={posts} />)

  expect(screen.getByText('My new post')).toBeInTheDocument()
  expect(screen.getByText('Post excerpt')).toBeInTheDocument()
  expect(screen.getByText('Wanna continue reading?')).toBeInTheDocument()
 })

 it('redirects user if no subscribe is found', async () => {
  const useSessionMocked = jest.mocked(useSession)
  const useRouterMocked = jest.mocked(useRouter)
  const pushMock = jest.fn()

  useSessionMocked.mockReturnValueOnce({
   data: {
    activeSubscription: 'fake-active-subscription'
   }
  } as any);

  useRouterMocked.mockReturnValueOnce({
   push: pushMock
  } as any)

  render(<Post post={posts} />)

  expect(pushMock).toHaveBeenCalledWith('/posts/my-new-post')
 })

 it('loads initial data', async () => {
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

  const response = await getStaticProps({ params: { slug: 'my-new-post' } })

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