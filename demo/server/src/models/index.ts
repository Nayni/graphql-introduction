import { getConnection, In } from "typeorm";
import { Post } from "./entities/Post";
import { User } from "./entities/User";

export type ID = string | number;

export { Post, User };

export default {
  posts: {
    getAll: () =>
      getConnection()
        .getRepository(Post)
        .find({
          order: {
            id: "DESC",
          },
        }),
    getById: (id: ID) =>
      getConnection()
        .getRepository(Post)
        .findOneOrFail({
          id: Number(id),
        }),
    getAllByIds: (ids: ID[]) =>
      getConnection()
        .getRepository(Post)
        .findByIds(ids.map(id => Number(id))),
    getAllByUser: (userId: ID) =>
      getConnection()
        .getRepository(Post)
        .find({
          where: {
            userId: userId,
          },
          order: {
            id: "DESC",
          },
        }),
    getAllByUsers: (userIds: ID[]) =>
      getConnection()
        .getRepository(Post)
        .find({
          where: {
            userId: In(userIds.map(id => Number(id))),
          },
          order: {
            id: "DESC",
          },
        }),
    save: (post: Post) =>
      getConnection()
        .getRepository(Post)
        .save(post),
  },
  users: {
    getAll: () =>
      getConnection()
        .getRepository(User)
        .find({
          order: {
            id: "DESC",
          },
        }),
    getById: (id: ID) =>
      getConnection()
        .getRepository(User)
        .findOneOrFail({ id: Number(id) }),
    getAllByIds: (ids: ID[]) =>
      getConnection()
        .getRepository(User)
        .findByIds(ids.map(id => Number(id))),
    save: (user: User) =>
      getConnection()
        .getRepository(User)
        .save(user),
  },
};
