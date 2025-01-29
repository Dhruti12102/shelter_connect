import express from 'express';
import { registration } from '../controllers/auth-controller.js';

const router = express.Router();
router.post("/registration", registration)

export default router; // Use ES module export