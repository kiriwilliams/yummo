var db = require("../models");
var express = require("express");
var router = express();



//GET route
router.get("/api/yums", function (req, res) {
    db.Yum.findAll({}).then(function (result) {
        res.json(result);
    });
});

// POST
router.post("/api/yums", function (req, res) {
    db.Yum.create({
        yum_name: req.body.name
    });
});

// PUT
router.put("/api/yums", function (req, res) {
    db.Yum.update({
        devoured: true,
        where: {
            id: req.body.id
        }
    }).then(function (result) {
        res.json(result);
    });
});

module.exports = router;