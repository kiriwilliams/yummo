const express = require("express");
const router = express.Router();
const yum = require("../models/yum.js");



router.get("/", function(req, res){
    yum.selectAll(function(data){
        // console.log(data);
        var hbrsObj = {
            yums: data
        };
        // console.log(hbrsObj);
        res.render("index",hbrsObj);
    });
});

router.post("/api/yums", function(req, res){
    console.log("post" + JSON.stringify(req.body));
    yum.insertOne([req.body.yum_name], function(result){
        res.json({ id: result.insertId });
        
    });
    res.redirect("/");
});

router.put("/api/yums", function(req,res){
    yum.updateOne([req.body.id], function(result){
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    });
    res.redirect("/");
});

module.exports = router;