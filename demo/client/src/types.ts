export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};


export type Address = {
   __typename?: 'Address',
  street: Scalars['String'],
  houseNumber: Scalars['String'],
  houseNumberExtension?: Maybe<Scalars['String']>,
  city: Scalars['String'],
  postalCode: Scalars['String'],
  country: Scalars['String'],
};

export enum AwesomeLevel {
  Awesome = 'AWESOME',
  Awesomer = 'AWESOMER',
  Awesomest = 'AWESOMEST'
}

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Mutation = {
   __typename?: 'Mutation',
  postCreate?: Maybe<Post>,
};


export type MutationPostCreateArgs = {
  input: PostCreateInput
};

export type Post = {
   __typename?: 'Post',
  id: Scalars['ID'],
  title: Scalars['String'],
  body: Scalars['String'],
  isPublished: Scalars['Boolean'],
  author: User,
};

export type PostCreateInput = {
  authorId: Scalars['ID'],
  title: Scalars['String'],
  body: Scalars['String'],
};

export type Query = {
   __typename?: 'Query',
  users: Array<User>,
  posts: Array<Post>,
  post?: Maybe<Post>,
};


export type QueryPostArgs = {
  id: Scalars['ID']
};


export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  fullName: Scalars['String'],
  awesomeLevel: AwesomeLevel,
  profilePicture?: Maybe<Scalars['String']>,
  address: Address,
  posts: Array<Post>,
};
