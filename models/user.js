module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,

      },
      user_password: {
        type: DataTypes.STRING,
       allowNull: false,
       validate: {
        len: [7,14]
        }
      }
    });
    return User;
  };
  