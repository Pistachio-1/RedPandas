module.exports = function(sequelize, DataTypes) {
    const RoomParticipants = sequelize.define("RoomParticipants", {
      room_name: DataTypes.STRING,
    });
  
    return RoomParticipants;
};