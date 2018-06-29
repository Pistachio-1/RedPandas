module.exports = function(sequelize, DataTypes) {
    const Rooms = sequelize.define("Rooms", {
      room_name: DataTypes.STRING,
      room_password: DataTypes.INTEGER(4)
    });
  
    Rooms.associate = function(models) {
      console.log(models);
      Rooms.belongsToMany(models.User, {
        through: models.RoomParticipants
      });
    };
  
    return Rooms
};
