module.exports = `
  type Dish {
      id: ID!
      name: String!
      price: Float!
  }

  type Menu {
      starters: [Dish!]!
      mains: [Dish!]!
      desserts: [Dish!]!
  }

  type Query {
      menu: Menu!
  }
`;
