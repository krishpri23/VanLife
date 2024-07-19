const express = require("express");
const router = express.Router();
const employeesController = require("../../controllers/employeesController");
const verifyJWT = require("../../middleware/verifyJWT");

router
  .route("/")
  .get(verifyJWT, employeesController.getAllEmployees)
  .post(verifyJWT, employeesController.createNewEmployee)
  .put(verifyJWT, employeesController.updateEmployee)
  .delete(verifyJWT, employeesController.deleteEmployee);

router.route("/:id").get(employeesController.getEmployee);

module.exports = router;
