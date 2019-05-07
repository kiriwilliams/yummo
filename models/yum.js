const orm = require("../config/orms.js");

var yum = {
    selectAll: function(callback){
        orm.selectAll("yums", function(res){
            callback(res);
        });
    },
    insertOne: function(name, callback){
        orm.insertOne("yums", name, function(res){
            callback(res);
        });
    },
    updateOne: function(id,callback){
        orm.updateOne(id, function(res){
            callback(res);
        });
    }
};

module.exports = yum;