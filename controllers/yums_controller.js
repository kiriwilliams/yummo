var db = require("../models");
var express = require("express");
var router = express();



//GET route
router.get("/", function (req, res) {
    db.Yum.findAll({}).then(function (data) {
        // console.log(data);
        var hbrsobj = {
            food: data
        }
        res.render("index", hbrsobj);
    });
});


// POST
router.post("/api/yums", function (req, res) {
    db.Yum.create({
        yum_name: req.body.yum_name
    }).then(function (result) {
        res.json(result);
    });
});

// PUT
router.put("/api/yums", function (req, res) {
    console.log(req.body);
    db.Yum.update({
        devoured: true
    }, {
            where: {
                id: req.body.id
            }
        }).then(function (result) {
            res.json(result);
        });
});

module.exports = router;