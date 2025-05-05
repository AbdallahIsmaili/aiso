import express from 'express';
import {
  getMyFriends,
  getRecommendedUsers,
} from "../controllers/user.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js"


const router = express.Router();

router.use(protectRoute);


router.get('/', getRecommendedUsers);
router.get('/friends', getMyFriends);

export default router;