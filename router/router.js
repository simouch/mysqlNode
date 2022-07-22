//const express=require("express")
const router = require("express").Router()
const OFcntr= require("../controllers/OFCntr")

router.post("/",OFcntr.add);
router.get("/",OFcntr.getAll);

  module.exports = router