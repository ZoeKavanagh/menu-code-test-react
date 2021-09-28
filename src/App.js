import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql, createHttpLink } from '@apollo/client'

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
query GetStarters {
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

function Menu() {
  const { data } = useQuery(MENU);
  console.log('data: ', data?.menu?.starters)

  if (!data) return <p>Loading...</p>;

  return (
    <>
      <p>
        Starters:
      </p>
    {data?.menu?.['starters']?.map(({ id, name, price }) => {
      return (
        <div key={id}>
          <span>{name}:</span><span>£{price}</span>
        </div>
      )
    })}
    <p>
        Mains:
    </p>
    {data?.menu?.['mains']?.map(({ id, name, price }) => {
      return (
        <div key={id}>
          <span>{name}:</span><span>£{price}</span>
        </div>
      )
    })}
    <p>
      Desserts:
    </p>
    {data?.menu?.['desserts']?.map(({ id, name, price }) => {
      return (
        <div key={id}>
          <span>{name}:</span><span>£{price}</span>
        </div>
      )
    })}
    </>
  )
}

function App() {
    return (
      <>
        <h1>Menu Test</h1>
        <Menu />
      </>
    );
}

render(<ApolloProvider client={client} ><App /></ApolloProvider>, document.getElementById('root'));
