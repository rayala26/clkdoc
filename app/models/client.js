module.exports = function(sequelize, Sequelize) {
 
    var Client = sequelize.define('client', {
//      ClientID
        clientID: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
//      Social Security Number
        ssn: {
            type: Sequelize.INTEGER,
            notEmpty: true
        }, 
//      First Name
        firstname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
//      Last Name
        lastname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
//      Address
        address: {
            type: Sequelize.STRING,
            notEmpty: true
        },
//      City
        city: {
            type: Sequelize.STRING,
            notEmpty: true
        },
//      State
        state: {
            type: Sequelize.STRING,
            notEmpty: true
        },
//      Zip Code
        zipCode: {
            type: Sequelize.INTEGER,
            notEmpty: true
        },        
//      Phone Number
        phoneNumber: {
            type: Sequelize.STRING,
            notEmpty: true
        },          
//      Insurance
        insurance: {
            type: Sequelize.STRING,
            notEmpty: true
        },        
//      User Name
        username: {
            type: Sequelize.TEXT,
            notEmpty: true
        },
//      Email 
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
//      Password
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
//      Last Login
        last_login: {
            type: Sequelize.DATE
        },
//      Status
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
    });
    
    Client.associate = function(models){
        Client.hasMany(models.Form, {
            onDelete: "cascade"
        });
    };
    
    return Client;
 
}