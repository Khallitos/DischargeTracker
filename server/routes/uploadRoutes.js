import express from "express";
const router = express.Router();

import {singleCargoDetails, uploadmusic ,songInfo,SingleSongInfo,getAllSongs,searchSong,deleteSong, editSong,userInfo,approveSong,getAllUnverifiedSongs,getSongsForAdmin,searchSongForAdmin,downloadCounter,getAdminDashboard,getTrendingSongs,getRandomSongs,getSignUrl} from "../controllers/uploadController.js";

router.route("/singleCargoDetails").post(singleCargoDetails);






export default router;
