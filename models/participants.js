module.exports = function(sequelize, DataTypes) {
    const RoomParticipants = sequelize.define("RoomParticipants", {
      room_name: DataTypes.STRING,
    });
  
    RoomParticipants.associate = function(models) {
      RoomParticipants.belongsTo(models.Rooms, {
        through: models.User
      });
    };
  
    return RoomParticipants;
};