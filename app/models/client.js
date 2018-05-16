module.exports = (sequelize, DataTypes) => {
  var Clients = sequelize.define("Clients", {
    clientID: {type: DataTypes.INTEGER, autoIncrement: true , primaryKey: true},
    firstName: {type: DataTypes.STRING, allowNull: false, validate:{len: [1]}},
    lastName:{type: DataTypes.STRING, allowNull: false, validate:{len: [1]}},
    email:{type: DataTypes.STRING, allowNull: false, validate:{len: [1]}},
    password:{type: DataTypes.STRING, allowNull: false, validate:{len: [1]}},
    last_login:{type: DataTypes.DATE, allowNull: false},
    status: {type: DataTypes.ENUM('active', 'inactive'), defaultValue: 'active'}
  },{
    timestamps: false
  });

  Clients.associate = function(models){
  	Clients.hasOne(models.Form, {
  		onDelete: "cascade"
  	});

    Clients.hasOne(models.Appointment,{
      onDelete: "cascade"
    });

    Clients.hasOne(models.User,{
      onDelete: "cascade"
    });

  };
  return Clients;
};
