const connection = require("../.config/connection.js");

var orm = {
    selectAll: function(){
        var queryString = "SELECT * FROM yums"
    },
    insertOne: function(){
        var queryString = "INSERT INTO yums"
    },
    updateOne: function(row){
        var queryString = "";
    }
};

module.exports = orm;