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