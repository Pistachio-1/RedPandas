module.exports = (sequelize, DataTypes) => {
  const Rooms = sequelize.define("Rooms", {
      id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false
        },
        room_name: DataTypes.STRING,
        room_password: DataTypes.INTEGER(4),
  });

Rooms.associate = function(models){
  Rooms.belongsTo(models.User,
    {
      through:models.Brackets
    },
    {
    foreignKey: 
      {
        allowNull: false
      }
    });
};

  return Rooms
};