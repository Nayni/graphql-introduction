import gql from "graphql-tag";
import { DeepPartial } from "utility-types";
import { Resolvers } from "./__generated__/resolvers";
import db, { Post } from "./models";

export const typeDefs = gql`
  type Query {
    """
    Return all users in the system.
    """
    users: [User!]!
    """
    Return all posts in the system.
    """
    posts: [Post!]!
    """
    Look up a post by its ID.
    """
    post(id: ID!): Post
  }

  type Mutation {
    """
    Creates a new post.
    """
    postCreate(input: PostCreateInput!): Post
  }

  enum AwesomeLevel {
    AWESOME
    AWESOMER
    AWESOMEST
  }

  type User {
    id: ID!
    """
    The users first name
    """
    firstName: String!
    """
    The users last name
    """
    lastName: String!
    """
    The users full name, a combination of first and lastname.
    """
    fullName: String!
    """
    The level of awesomeness.
    """
    awesomeLevel: AwesomeLevel! @deprecated(reason: "Will be removed in 2020")
    """
    The users public profile picture.
    """
    profilePicture: String
    """
    The users address.
    """
    address: Address!
    """
    Return all posts the user has authored.
    """
    posts: [Post!]!
  }

  type Address {
    """
    The street name.
    """
    street: String!
    """
    The house number.
    """
    houseNumber: String!
    """
    The house number extension.
    """
    houseNumberExtension: String
    """
    The name of the city.
    """
    city: String!
    """
    The postal code.
    """
    postalCode: String!
    """
    The name of the country.
    """
    country: String!
  }

  type Post {
    id: ID!
    """
    The title of the post.
    """
    title: String!
    """
    The body of the post.
    """
    body: String!
    """
    Whether the post is published or not.
    """
    isPublished: Boolean!
    """
    The author of the post.
    """
    author: User!
  }

  input PostCreateInput {
    """
    The id of the author for the post.
    """
    authorId: ID!
    """
    The title of the post.
    """
    title: String!
    """
    The body of the post.
    """
    body: String!
  }
`;

export const resolvers: DeepPartial<Resolvers> = {
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
