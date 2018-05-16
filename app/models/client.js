module.exports = (sequelize, DataTypes) => {
  var Client = sequelize.define("client", {
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
