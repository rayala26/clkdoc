module.exports = (sequelize, DataTypes) => {
  var doctorChoice = sequelize.define("doctorChoice", {
    docId:{type: DataTypes.INTEGER, allowNull: false},
  });

   /*Choice.associate = function(models){
    Choice.belongsTo(models.client, {
      foreignKey:{allowNull: false}
    });
  };*/
  return doctorChoice;
};
