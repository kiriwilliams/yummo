const connection = require("./connection.js");

var orm = {
    selectAll: function(table,callback){
        var queryString = "SELECT * FROM yums";
        connection.query(queryString, function(err, result){
            if(err) throw err;
            console.log(result);
            callback(result);
        })

    },
    insertOne: function(table,name){
        var queryString = "INSERT INTO yums (yum_name) VALUES (?)";
        connection.query(queryString,[name],function(err, result){
            if(err) throw err;
            console.log(result);
        });
    },
    updateOne: function(id){
        var queryString = "UPDATE yums SET devoured = true WHERE id = ?";
        connection.query(queryString,[id], function(err, result){
            if(err) throw err;
            console.log(result);
        });
    }
};

module.exports = orm;