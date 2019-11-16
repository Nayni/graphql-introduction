import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

type CreatePostOptions = Omit<Post, "id" | "author" | "authorId"> &
  Pick<Post, "author">;

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  body: string;

  @Column()
  isPublished: boolean;

  @Column()
  authorId: number;

  @ManyToOne(
    type => User,
    user => user.posts,
  )
  author: User;

  constructor(options?: CreatePostOptions) {
    if (!options) {
      return;
    }

    this.title = options.title;
    this.body = options.body;
    this.isPublished = options.isPublished;
    this.author = options.author;
  }
}
