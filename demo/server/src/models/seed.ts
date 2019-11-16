import { Connection, createConnection } from "typeorm";
import faker from "faker";
import { User, AwesomeLevel } from "./entities/User";
import { Post } from "./entities/Post";

const USER_DATA = {
  rutger: new User({
    firstName: "Rutger",
    lastName: "Hendrickx",
    awesomeLevel: AwesomeLevel.Awesomest,
    profilePicture:
      "https://s.gravatar.com/avatar/4fd5cacc64dc380e965b8671b95f1bb1",
    address: {
      street: "Vaartkom",
      houseNumber: "1A",
      houseNumberExtension: "bus 501",
      city: "Leuven",
      postalCode: "3000",
      country: "Belgium",
    },
  }),
  eddy: new User({
    firstName: "Eddy",
    lastName: "Wally",
    awesomeLevel: AwesomeLevel.Awesomer,
    profilePicture:
      "http://www.inmemoriam.be/content/Eddy-Wally-profile(1).jpg",
    address: {
      street: "Marktkramerstraat",
      houseNumber: "1",
      houseNumberExtension: undefined,
      city: "Wow City",
      postalCode: "9000",
      country: "Belgium",
    },
  }),
} as const;

const POST_DATA = [
  new Post({
    title: "GraphQL Introduction",
    body: faker.lorem.paragraphs(3),
    isPublished: true,
    author: USER_DATA["rutger"],
  }),
  new Post({
    title: "Teamwork, makes the dream work",
    body: faker.lorem.paragraphs(3),
    isPublished: true,
    author: USER_DATA["rutger"],
  }),
  new Post({
    title: "Marktkramer 101",
    body: faker.lorem.paragraphs(3),
    isPublished: true,
    author: USER_DATA["eddy"],
  }),
  new Post({
    title: "Vliegmachien... wie niet weg is, is gezien",
    body: faker.lorem.paragraphs(3),
    isPublished: true,
    author: USER_DATA["eddy"],
  }),
];

const seed = async (connection: Connection) => {
  const userRepository = connection.getRepository(User);
  const postRepository = connection.getRepository(Post);

  await Promise.all(
    Object.keys(USER_DATA).map(async (userKey: keyof typeof USER_DATA) => {
      let user = USER_DATA[userKey];
      user = await userRepository.save(user);
    }),
  );

  await Promise.all(
    POST_DATA.map(async post => {
      await postRepository.save(post);
    }),
  );
};

const main = async () => {
  const connection = await createConnection();
  await connection.synchronize(true);
  await seed(connection);
};

main().catch(console.log);
