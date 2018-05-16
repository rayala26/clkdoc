module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define("User", {
    username:{type: DataTypes.STRING, allowNull: false, validate:{len: [1]}},
    email:{type: DataTypes.STRING, allowNull: false, validate:{len: [1]}},
    password:{type: DataTypes.STRING, allowNull: false, validate:{len: [1]}}
  },{
    timestamps: false
  });

   User.associate = function(models){
    User.belongsTo(models.Clients, {
      foreignKey:{allowNull: false}
    });
  };
  return User;
};
