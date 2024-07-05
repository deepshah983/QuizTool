import express from "express";
import {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.route("/").post(createUser).get(getAllUsers);

router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

export default router;
