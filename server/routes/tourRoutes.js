const express = require("express");
const tourController = require("../controllers/tourController");
const { getAllTours, getTour, createTour, updateTour, deleteTour } =
  tourController;

const router = express.Router();

router.param("id", (req, res, next, val) => {
  console.log("tour id is", val);
  next();
});

router.route("/").get(getAllTours).post(createTour);
router.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
