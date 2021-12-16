import { getEventManager } from "../controllers/EventManagerController.js";

import express from 'express'

const router = express.Router();

router.get('/eventManager', getEventManager);

export default router;