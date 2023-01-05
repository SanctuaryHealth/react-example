import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'https://v4-0-dot-livitay.appspot.com/graphql',
  documents: ['src/gql/**/*.ts'],
  generates: {
    './src/gql.tsx': {
      plugins: ['typescript','typescript-operations','typescript-react-apollo']
    }
  },
  config: {
    defaultScalarType: 'unknown',
    scalars: {
      DateTime: 'string'
    },
  }
}
 
export default config