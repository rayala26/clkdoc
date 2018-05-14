module.exports = (sequelize, DataTypes) => {
  var Schedule = sequelize.define("Schedule", {
    scheduleID: {type: DataTypes.INTEGER, autoIncrement: true , primaryKey: true},
    day: {type: DataTypes.STRING, allowNull: false, validate:{len: [1]}},
    time:{type: DataTypes.STRING, allowNull: false, validate:{len: [1]}},
  });

  Schedule.associate = function(models){
  	Schedule.belongsTo(models.Doctors, {
  		foreignKey:{allowNull: false}
  	});

  };
  return Schedule;
};
