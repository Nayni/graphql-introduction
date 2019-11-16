import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Post } from "./Post";

export enum AwesomeLevel {
  Awesome = "AWESOME",
  Awesomer = "AWESOMER",
  Awesomest = "AWESOMEST",
}

export interface Address {
  street: string;
  houseNumber: string;
  houseNumberExtension?: string;
  city: string;
  postalCode: string;
  country: string;
}

type CreateUserOptions = Omit<User, "id" | "posts">;

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  awesomeLevel: AwesomeLevel;

  @Column({ type: "varchar", nullable: true })
  profilePicture: string | null;

  @Column("simple-json")
  address: Address;

  @OneToMany(
    type => Post,
    post => post.author,
  )
  posts: Post[];

  constructor(options?: CreateUserOptions) {
    if (!options) {
      return;
    }

    this.firstName = options.firstName;
    this.lastName = options.lastName;
    this.awesomeLevel = options.awesomeLevel;
    this.profilePicture = options.profilePicture;
    this.address = options.address;
  }
}
