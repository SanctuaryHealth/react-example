import { gql } from "@apollo/client"

export const GRAPHQL = gql`
fragment postFragment on Post {
  id
  title
}
`