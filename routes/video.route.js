import { Router } from "express";
import { video } from "../controller/mongodb.controller.js";

const router = Router();

router.get("/", (req, res) => {
  const list = [];
  video
    .find()
    .forEach((vid) => {
      vid.id = vid._id;
      delete vid._id;
      list.push(vid);
    })
    .then(() => {
      res.json({ video: list });
    })
    .catch((err) => {
      res.send(err);
      console.error("error");
    });
});

export default router;
