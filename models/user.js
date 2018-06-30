module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
      },
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
    User.associate = function(models) {
      console.log(models);
      User.hasMany(models.Brackets);
      User.belongsToMany(Rooms);
    };
    // , {
    //   as: "brackets", 
    //   foreignKey: "userId",
    // }
    return User;
  };
  