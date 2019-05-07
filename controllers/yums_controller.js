const express = require("express");
const router = express.Router();
const yum = require("../models/yum.js");



router.get("/", function(req, res){
    yum.selectAll(function(data){
        console.log(data);
        var hbrsObj = {
            yums: data
        };
        console.log(hbrsObj);
        res.render("index",hbrsObj);
    });
});

router.post("/api/yums", function(req, res){
    yum.create(["name"],[req.body.name], function(result){
        res.json({ id: result.insertId });
    });
});

router.update("/api/yums", function(req,res){
    yum.update([ ])
})

module.exports = router;