import { getEventManager,postEventManager } from "../controllers/EventManagerController.js";

import express from 'express'

const router = express.Router();

router.get('/', getEventManager);
router.post('/', postEventManager);

export default router;