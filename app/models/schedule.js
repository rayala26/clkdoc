module.exports = (sequelize, DataTypes) => {
  var Schedule = sequelize.define("Schedule", {
    scheduleID: {type: DataTypes.INTEGER, autoIncrement: true , primaryKey: true},
  },{
    timestamps: false
  });

  Schedule.associate = function(models){
  	Schedule.belongsTo(models.Doctors, {
  		foreignKey:{allowNull: false},
      onDelete: "cascade"
  	});

    Schedule.hasMany(models.Appointment, {
      foreignKey:{allowNull: false}
    });

  };
  return Schedule;
};
