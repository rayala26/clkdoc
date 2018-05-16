module.exports = (sequelize, DataTypes) => {
  var Client = sequelize.define("client", {
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

  Client.associate = function(models){
  	Client.hasOne(models.Form, {
  		onDelete: "cascade"
  	});

    Client.hasOne(models.Appointment,{
      onDelete: "cascade"
    });

    Client.hasOne(models.User,{
      onDelete: "cascade"
    });

  };
  return Client;
};
