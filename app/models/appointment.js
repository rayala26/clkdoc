module.exports = (sequelize, DataTypes) => {
  var Appointment = sequelize.define("Appointment", {
    day: {type: DataTypes.STRING, allowNull: false, validate:{len: [1]}},
    time:{type: DataTypes.STRING, allowNull: false, validate:{len: [1]}},
    canceled:{type: DataTypes.BOOLEAN, defaultValue: false}
  },{
    timestamps: false
  });

  Appointment.associate = function(models){
  	Appointment.belongsTo(models.Clients, {
  		onDelete: "cascade"
  	});

    Appointment.belongsTo(models.Schedule, {
      onDelete: "cascade"
    });

  };
  return Appointment;
};
