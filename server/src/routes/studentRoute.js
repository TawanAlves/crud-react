const express = require("express");
const router = express.Router();
const studentController = require("../controllers/StudentController");

router.get("/", studentController.index);
router.post("/", studentController.store);
router.get("/:id", studentController.show);
router.put("/:id", studentController.update);
router.patch("/:id", studentController.update);
router.delete("/:id", studentController.delete);

module.exports = router;
