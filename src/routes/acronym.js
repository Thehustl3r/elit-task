import acronymController from "../controller/acronymController.js";
import express from "express";

const router = express.Router();

router.post("/create", acronymController.createAcronmy);
router.get("/viewAll", acronymController.getAll);
router.get("/:id", acronymController.getOneById);
router.patch("/:id", acronymController.updateAcronmy);
router.delete("/:id", acronymController.deleteAcronmy);

export default router;
