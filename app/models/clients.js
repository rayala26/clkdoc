module.exports = (sequelize, DataTypes) => {
  var Clients = sequelize.define("Clients", {
    clientID: {type: DataTypes.INTEGER, autoIncrement: true , primaryKey: true},
    ssn: {type: DataTypes.INTEGER, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false, validate:{len: [1]}},
    address:{type: DataTypes.STRING, allowNull: false, validate:{len: [1]}},
    city:{type: DataTypes.STRING, allowNull: false, validate:{len: [1]}},
    state:{type: DataTypes.STRING, allowNull: false, validate:{len: [1]}},
    zipCode:{type: DataTypes.INTEGER, allowNull: false},
    phoneNumber:{type: DataTypes.STRING, allowNull: false, validate:{len: [1]}},
    insurance:{type: DataTypes.STRING, allowNull: false, validate:{len: [1]}},
    username:{type: DataTypes.STRING, allowNull: false, validate:{len: [1]}},
    password:{type: DataTypes.STRING, allowNull: false, validate:{len: [1]}}
  });

  Clients.associate = function(models){
  	Clients.hasMany(models.Form, {
  		onDelete: "cascade"
  	});

  };
  return Clients;
};
