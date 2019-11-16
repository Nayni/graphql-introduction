import { GraphQLResolveInfo } from 'graphql';
import { User } from './../models/entities/User';
import { Post } from './../models/entities/Post';
import { Context } from './../context';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
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



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  User: ResolverTypeWrapper<User>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  String: ResolverTypeWrapper<Scalars['String']>,
  AwesomeLevel: AwesomeLevel,
  Address: ResolverTypeWrapper<Address>,
  Post: ResolverTypeWrapper<Post>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Mutation: ResolverTypeWrapper<{}>,
  PostCreateInput: PostCreateInput,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  User: User,
  ID: Scalars['ID'],
  String: Scalars['String'],
  AwesomeLevel: AwesomeLevel,
  Address: Address,
  Post: Post,
  Boolean: Scalars['Boolean'],
  Mutation: {},
  PostCreateInput: PostCreateInput,
};

export type AddressResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = {
  street?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  houseNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  houseNumberExtension?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  postalCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  postCreate?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<MutationPostCreateArgs, 'input'>>,
};

export type PostResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isPublished?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>,
  posts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType>,
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QueryPostArgs, 'id'>>,
};

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  fullName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  awesomeLevel?: Resolver<ResolversTypes['AwesomeLevel'], ParentType, ContextType>,
  profilePicture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>,
  posts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType>,
};

export type Resolvers<ContextType = Context> = {
  Address?: AddressResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Post?: PostResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;
