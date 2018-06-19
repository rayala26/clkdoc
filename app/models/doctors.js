module.exports = (sequelize, DataTypes) => {
  var Doctors = sequelize.define("Doctors", {
    docID: {type: DataTypes.INTEGER, autoIncrement: true , primaryKey: true},
    name: {type: DataTypes.STRING, allowNull: false, validate:{len: [1]}},
    specialty: {type: DataTypes.STRING, allowNull: false, validate:{len: [1]}},
    address:{type: DataTypes.STRING, allowNull: false, validate:{len: [1]}},
    city:{type: DataTypes.STRING, allowNull: false, validate:{len: [1]}},
    state:{type: DataTypes.STRING, allowNull: false, validate:{len: [1]}},
    zipCode:{type: DataTypes.INTEGER, allowNull: false},
    phoneNumber:{type: DataTypes.STRING, allowNull: false, validate:{len: [1]}},
    insurance:{type: DataTypes.STRING, allowNull: false, validate:{len: [1]}}
  },{
  	timestamps: false
  });

  Doctors.associate = function(models){
  	Doctors.hasOne(models.Schedule, {
  		onDelete: "cascade"
  	});

  };
  return Doctors;
};

