import express from "express";
const router = express.Router();

import {
  singleCargoDetails,

} from "../controllers/uploadController.js";

router.route("/singleCargoDetails").post(singleCargoDetails);

export default router;
