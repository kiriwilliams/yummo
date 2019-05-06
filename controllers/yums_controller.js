const express = require("express");
const router = express.Router();
const yum = require("../models/yum.js");



router.get("/", function(req, res){

});

router.post("/api/yums", function(req, res){
    yum.create(["name"],[req.body.name], function(result){
        res.json({ id: result.insertId });
    });
});

module.exports = router;