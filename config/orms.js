const connection = require("./connection.js");

var orm = {
    selectAll: function(table){
        var queryString = "SELECT * FROM ?";
        connection.query(queryString, [table], function(err, result){
            if(err) throw err;
            console.log(result);
        })
    },
    insertOne: function(table,name){
        var queryString = "INSERT INTO ? (?) VALUES (?)";
        connection.query(queryString,[table,"yum_name",name],function(err, result){
            if(err) throw err;
            console.log(result);
        });
    },
    updateOne: function(table,row,key,value){
        var queryString = "UPDATE ? SET ? = ? WHERE id = ?";
        connection.query(queryString,[table,key, value, row]), function(err, result){
            if(err) throw err;
            console.log(result);
        };
    }
};

module.exports = orm;