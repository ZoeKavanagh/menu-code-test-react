import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql, createHttpLink, useReactiveVar } from '@apollo/client';
import { activeUserIdVar } from './cache'

import { Menu } from './components/Menu';
import { SelectUser } from './components/SelectUser';
import { MenuHeader, AppContainter } from './styles'

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
  const userId = useReactiveVar(activeUserIdVar);

  if (!data) return <p>Loading...</p>;

  return (
    <>
      <SelectUser />
      <Menu menu={data.menu} isUser1={userId === 1} />
    </>
  )
}

function App() {
    return (
      <AppContainter>
        <MenuHeader>Zoe's Menu</MenuHeader>
        <MenuDetails />
      </AppContainter>
    );
}

render(<ApolloProvider client={client} ><App /></ApolloProvider>, document.getElementById('root'));
