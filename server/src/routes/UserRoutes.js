import { register,login } from "../controllers/UserController.js";
import express from "express";
import multer from "multer";

const UserRouter = express.Router();
const storage = multer.diskStorage({});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb('invalid image file!', false);
  }
};
const uploads = multer({ storage, fileFilter });

UserRouter.post("/register", register);
UserRouter.post("/login", login);
UserRouter.post("/upload", uploads.single('image'), (req, res) => {
  res.send(req.file);
});

export default UserRouter;