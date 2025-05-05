import express from 'express';
import {
  getMyFriends,
  getRecommendedUsers,
  sendFriendRequest,
  acceptFriendRequest,
  getFriendRequests,
  getOutgoingFriendRequests,
} from "../controllers/user.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js"


const router = express.Router();

router.use(protectRoute);


router.get('/', getRecommendedUsers);
router.get('/friends', getMyFriends);


router.post("/friend-request/:id", sendFriendRequest);
router.put("/friend-request/:id/accept", acceptFriendRequest);

// router.put("/friend-request/:id/reject", rejectFriendRequest);

router.get("/friend-request", getFriendRequests);
router.get("/outgoing-friend-requests", getOutgoingFriendRequests);


export default router;