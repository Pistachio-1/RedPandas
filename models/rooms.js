module.exports = function(sequelize, DataTypes) {
    const Rooms = sequelize.define("Rooms", {
      room_name: DataTypes.STRING,
    });
  
    Rooms.associate = function(models) {
      console.log(models);
      Rooms.belongsToMany(models.User, {
        through: models.RoomParticipants
      });
    };
  
    return Rooms
};