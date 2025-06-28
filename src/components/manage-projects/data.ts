import { Project } from "./types";

import { faker } from "@faker-js/faker";

faker.seed(124);

export function createRandomUser(): Project {
  return {
    // userId: faker.string.uuid(),
    // name: faker.internet.displayName(),
    // email: faker.internet.email(),
    // avatar: faker.image.avatar(),
    // password: faker.internet.password(),
    // birthDate: faker.date.birthdate(),
    // registeredAt: faker.date.past(),
    // age: faker.number.int({ max: 100, min: 1 }),

    projectName: faker.commerce.productName(),
    projectTitle: faker.commerce.productAdjective(),

    clientName: faker.person.fullName(),
    complete: {
      arrow: faker.helpers.arrayElement(["up", "down"]),
      fraction: `${faker.number.int({ min: 0, max: 10 })} / 12`,
      percentage: `${faker.number.int({ min: 0, max: 100 })}%`,
    },
    st: `${faker.number.int({ min: 0, max: 60 })}`,
    dq: `${faker.number.int({ min: 0, max: 60 })}`,
    qt: `${faker.number.int({ min: 0, max: 60 })}`,
    status: faker.helpers.arrayElement([
      "Active",
      "Pending",
      "Closed",
      "Progress",
    ]),
  };
}

export const Projects: Project[] = faker.helpers
  .multiple(createRandomUser, {
    count: 200,
  })
  .map((data, index) => ({ ...data, id: index }));
