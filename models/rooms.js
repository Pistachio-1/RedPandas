module.exports = function(sequelize, DataTypes) {
  const Rooms = sequelize.define("Rooms", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    room_name: DataTypes.STRING,
    room_password: DataTypes.INTEGER(4),
    room_participants:{
      type: DataTypes.ARRAY(DataTypes.STRING),
    }
    
  });
  
    Rooms.associate = function(models) {
      Rooms.hasMany(models.User , {
        onDelete: "CASCADE",
        as: "user_id",
        foreignKey: {name: "userId", allowNull:false}
      })
    };
   
    return Rooms
};
