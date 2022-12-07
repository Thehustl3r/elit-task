import acronymRoute from './acronym.js'
import Router from "express";

const router = new Router();

router.use("/acronym", acronymRoute);

export default router;
