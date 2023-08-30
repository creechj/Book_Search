const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [String]!
  }

  type Book {
    bookId: String
    authors: [String]!
    description: String
    title: String
    image: String
    link: String
  }
  
  input savedBook {
    bookId: String!
    title: String!
    image: String!
    link: String!
    authors: [String]!
  }

  type Auth {
    token: ID!
    user: User
  }


  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    saveBook(input: savedBook): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
