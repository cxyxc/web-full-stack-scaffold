import gql from 'graphql-tag'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { initializeApollo } from '../lib/apolloClient'

const PostQuery = gql`
  query {
    drafts {
      id
      title
      content
    }
  }
`

const Index = () => {
  const {
    data: { drafts },
  } = useQuery(PostQuery)

  return (
    <div>
    </div>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: PostQuery,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default Index
