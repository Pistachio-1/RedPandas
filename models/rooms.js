module.exports = function(sequelize, DataTypes) {
    const Rooms = sequelize.define("Rooms", {
      room_name: DataTypes.STRING,
    });
  
    Rooms.associate = function(models) {
      Rooms.belongsToMany(models.RoomParticipants, {
        through: models.User
      });
    };
  
    return Rooms
};