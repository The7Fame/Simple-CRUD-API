import { readFileSync, writeFileSync } from "fs";

const file = "users.json";

const allUsersRead = () => {
  JSON.parse(readFileSync(file, { encoding: "utf-8", flag: "a+" }));
};

const writeUserToFile = (users) => {
  writeFileSync(file, JSON.stringify(users, null, 2));
};

const getUsers = (req, res) => {};

const getUserById = (req, res, id) => {};

const createUser = (req, res) => {};

const updateUser = (req, res, id) => {};

const deleteUser = (req, res, id) => {};

export { getUsers, getUserById, createUser, updateUser, deleteUser };
