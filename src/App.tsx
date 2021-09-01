import { ApolloProvider } from '@apollo/client'

import Button from '@material-ui/core/Button'

import apolloClient from './apolloClient'

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="App">Atypikhouse</div>
      <Button>Test</Button>
    </ApolloProvider>
  );
}

export default App;
