module.exports = (sequelize, DataTypes) => {
  var Form = sequelize.define("Form", {
    ssn: {type: DataTypes.INTEGER, allowNull: false},
    address:{type: DataTypes.STRING, allowNull: false, validate:{len: [1]}},
    city:{type: DataTypes.STRING, allowNull: false, validate:{len: [1]}},
    state:{type: DataTypes.STRING, allowNull: false, validate:{len: [1]}},
    zipCode:{type: DataTypes.STRING, allowNull: false},
    phoneNumber:{type: DataTypes.STRING, allowNull: false, validate:{len: [1]}},
    emergency_contact_name:{type: DataTypes.STRING, allowNull: false, validate:{len: [1]}},
    emergency_contact_number:{type: DataTypes.STRING, allowNull: false},
    insurance:{type: DataTypes.STRING, allowNull: false, validate:{len: [1]}},
    dob: {type: DataTypes.STRING},
    allergies:{type: DataTypes.TEXT},
    reason_for_visit:{type: DataTypes.TEXT}
  });

  Form.associate = function(models){
  	Form.belongsTo(models.client, {
  		foreignKey:{allowNull: false}
  	});
  };
  return Form;
};

