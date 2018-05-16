module.exports = (sequelize, DataTypes) => {
  var Clients = sequelize.define("client", {
    clientID: {type: DataTypes.INTEGER, autoIncrement: true , primaryKey: true},
    firstname: {type: DataTypes.STRING, allowNull: false, validate:{len: [1]}},
    lastname:{type: DataTypes.STRING, allowNull: false, validate:{len: [1]}},
    email:{type: DataTypes.STRING, validate:{isEmail: true}},
    username:{type: DataTypes.STRING, notEmpty: true},
    password:{type: DataTypes.STRING, notEmpty: true},
    last_login:{type: DataTypes.DATE},
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
