import express from "express";
import { protectroute } from "../middleware/auth.middleware.js";
import {
  login,
  logout,
  signup,
  updateProfile,
  checkAuth,
} from "../controllers/auth.controllers.js";
const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.put("/updateProfile", protectroute, updateProfile);
router.get("/checkAuth", protectroute, checkAuth);
export default router;
