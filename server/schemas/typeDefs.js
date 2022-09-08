const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

  type Book {
    bookId: ID
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

    type Query {
        user: [User]
        book(_id: String, author: String, title: String, description: String): [Book]
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    getSingleUser: (_id: ID!): User
    saveBook(bookData: BookInput!): User
    deleteBook(bookId: ID!): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;