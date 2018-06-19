module.exports = (sequelize, DataTypes) => {
  var Choice = sequelize.define("choice", {
    choice:{type: DataTypes.STRING, allowNull: false, validate:{len: [1]}},
  });

   /*Choice.associate = function(models){
    Choice.belongsTo(models.client, {
      foreignKey:{allowNull: false}
    });
  };*/
  return Choice;
};
