import React from 'react';
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { render } from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql, createHttpLink, useReactiveVar } from '@apollo/client';
import { activeUserIdVar } from './cache'
import { PRIMARY_USER_ID } from './constants'

import { Menu } from './components/Menu';
import { SelectUser } from './components/SelectUser';
import { MenuHeader, AppContainter } from './styles'

const theme = createTheme()

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
      <Menu menu={data.menu} isUserOne={userId === PRIMARY_USER_ID} />
    </>
  )
}

function App() {
    return (
      <ThemeProvider theme={theme}>
        <AppContainter>
          <MenuHeader>Zoe's Menu</MenuHeader>
          <MenuDetails />
        </AppContainter>
      </ThemeProvider>
    );
}

render(<ApolloProvider client={client} ><App /></ApolloProvider>, document.getElementById('root'));
