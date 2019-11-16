import DataLoader from "dataloader";
import db, { ID, Post, User } from "../models";

export const createLoaders = () => {
  return {
    post: new DataLoader<ID, Post>(async ids => {
      const posts = await db.posts.getAllByIds(ids);

      return ids.map(
        id => posts.find(post => post.id === id) || new Error("Not found"),
      );
    }),
    postsByAuthor: new DataLoader<ID, Post[]>(async userIds => {
      const postsByAuthors = await db.posts.getAllByUsers(userIds);

      return userIds.map(id =>
        postsByAuthors.filter(post => post.authorId === id),
      );
    }),
    user: new DataLoader<ID, User>(async ids => {
      const users = await db.users.getAllByIds(ids);

      return ids.map(
        id => users.find(user => user.id === id) || new Error("Not found"),
      );
    }),
  };
};
