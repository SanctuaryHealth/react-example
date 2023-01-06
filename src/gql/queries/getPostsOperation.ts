import { gql } from "@apollo/client"

export const GRAPHQL = gql`
query getPostsOperation($sequelizeQuery: SequelizeQuery!) {
  getPosts(sequelizeQuery: $sequelizeQuery) {
    ...postFragment
  }
}
`