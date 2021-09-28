import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql, createHttpLink } from '@apollo/client'

import { Menu } from './components/Menu';

const client = new ApolloClient({
    link: new createHttpLink(
      { uri: 'http://localhost:3000/graphql' }
    ),
    fetchOptions: {
      mode: 'no-cors',
    },
    cache: new InMemoryCache()
  });

const MENU = gql`
query GetMenu {
  menu { 
    starters {
     id
     name
     price
    }
    mains {
      id
      name
      price
    }
   desserts {
    id
    name
    price
   }
  }  
}
`

function MenuDetails() {
  const { data } = useQuery(MENU);

  if (!data) return <p>Loading...</p>;
  console.log('data.menu', data.menu)
  return (
    <>
      <Menu menu={data.menu} />
    </>
  )
}

function App() {
    return (
      <>
        <h1>Menu Test</h1>
        <MenuDetails />
      </>
    );
}

render(<ApolloProvider client={client} ><App /></ApolloProvider>, document.getElementById('root'));
