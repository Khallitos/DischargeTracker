import express from "express";
const router = express.Router();

import {
  singleParcelDetails,doubleParcelDetails

} from "../controllers/uploadController.js";

router.route("/singleParcelDetails").post(singleParcelDetails);
router.route("/doubleParcelDetails").post(doubleParcelDetails);

export default router;
