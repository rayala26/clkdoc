const multer = require("multer");

module.exports = (sequelize, DataTypes) => {
  var Form = sequelize.define("Form", {
    filePath: {type: DataTypes.STRING}
  });

  Form.associate = function(models){
  	Form.belongsTo(models.Clients, {
  		foreignKey:{allowNull: false}
  	});
  };
  return Form;
};
