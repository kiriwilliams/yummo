var db = require("../models");

module.exports = function(app){

    //GET route
    app.get("/api/yums", function(req,res){
        db.Yum.findAll({}).then(function(result){
            res.json(result);
        });
    });

    //POST
    app.post("/api/yums", function(req,res){
        db.Yum.create({
            yum_name: req.body.name
        });
    });

    //PUT
    app.put("/api/yums", function(req,res){
        db.Yum.update({
            devoured: true,
            where: {
                id: req.body.id
            }           
        }).then(function(result){
            res.json(result);
        });
    });
}