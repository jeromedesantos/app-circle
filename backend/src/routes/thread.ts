import { Router } from "express";
import { auth, isExist, authWithUserCheck } from "../middlewares/auth";
import {
  getThreads,
  getThreadById,
  postThread,
  deleteThread,
} from "../controllers/thread";
import { upload } from "../utils/multer";
import { saveFile } from "../middlewares/file";

const router = Router();

router.get("/thread", authWithUserCheck, getThreads);
router.get("/thread/:id", authWithUserCheck, getThreadById);
router.post("/thread", authWithUserCheck, upload.single("image"), saveFile, postThread);
router.delete("/thread/:id", authWithUserCheck, isExist("thread"), deleteThread);

export default router;
