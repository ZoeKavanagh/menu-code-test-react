import React, { useState } from 'react';
import { render } from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql, createHttpLink } from '@apollo/client';

import { Menu } from './components/Menu';
import { SelectUser } from './components/SelectUser';

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
  const [userId, setUserId] = useState(1);

  if (!data) return <p>Loading...</p>;

  return (
    <>
      <SelectUser onSelectUser={setUserId} />
      <Menu menu={data.menu} userId={userId} />
    </>
  )
}

function App() {
    return (
      <>
        <h1>Zoe's Menu</h1>
        <MenuDetails />
      </>
    );
}

render(<ApolloProvider client={client} ><App /></ApolloProvider>, document.getElementById('root'));
