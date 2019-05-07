module.exports = function(sequelize, DataTypes){
    var Yum = sequelize.define("Yum",{
        yum_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return Yum;
}