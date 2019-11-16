import gql from "graphql-tag";
import { Resolvers } from "./__generated__/resolvers";
import db, { Post } from "./models";

export const typeDefs = gql`
  type Query {
    users: [User!]!
    posts: [Post!]!
    post(id: ID!): Post
  }

  type Mutation {
    postCreate(input: PostCreateInput!): Post
  }

  enum AwesomeLevel {
    AWESOME
    AWESOMER
    AWESOMEST
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    fullName: String!
    awesomeLevel: AwesomeLevel!
    profilePicture: String
    address: Address!
    posts: [Post!]!
  }

  type Address {
    street: String!
    houseNumber: String!
    houseNumberExtension: String
    city: String!
    postalCode: String!
    country: String!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    isPublished: Boolean!
    author: User!
  }

  input PostCreateInput {
    authorId: ID!
    title: String!
    body: String!
  }
`;

export const resolvers: Resolvers = {
  Query: {
    users: () => {
      return db.users.getAll();
    },
    posts: () => {
      return db.posts.getAll();
    },
    post: (_, args) => {
      return db.posts.getById(args.id);
    },
  },
  Mutation: {
    postCreate: async (_, { input }) => {
      const author = await db.users.getById(input.authorId);
      const post = new Post({
        author,
        title: input.title,
        body: input.body,
        isPublished: true,
      });

      return db.posts.save(post);
    },
  },
  User: {
    fullName: user => {
      return `${user.firstName} ${user.lastName}`;
    },
    posts: user => {
      return db.posts.getAllByUser(user.id);
    },
  },
  Post: {
    author: post => {
      return db.users.getById(post.authorId);
    },
  },
};

// With dataloaders
// export const resolvers: Resolvers = {
//   Query: {
//     users: () => {
//       return db.users.getAll();
//     },
//     posts: () => {
//       return db.posts.getAll();
//     },
//     post: (_, args, context) => {
//       return context.loaders.post.load(args.id);
//     },
//   },
//   User: {
//     fullName: user => {
//       return `${user.firstName} ${user.lastName}`;
//     },
//     posts: (user, _, context) => {
//       return context.loaders.postsByAuthor.load(user.id);
//     },
//   },
//   Post: {
//     author: (post, _, context) => {
//       return context.loaders.user.load(post.authorID);
//     },
//   },
// };
