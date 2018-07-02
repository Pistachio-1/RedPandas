module.exports = (sequelize, DataTypes) => {
  const Brackets = sequelize.define("Brackets", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

      round16_game_1 : DataTypes.STRING,
      round16_game_2 : DataTypes.STRING,
      round16_game_3 : DataTypes.STRING,
      round16_game_4 : DataTypes.STRING,
      round16_game_5 : DataTypes.STRING,
      round16_game_6 : DataTypes.STRING,
      round16_game_7 : DataTypes.STRING,
      round16_game_8 : DataTypes.STRING, 
      round8_game_1 : DataTypes.STRING,
      round8_game_2 : DataTypes.STRING,
      round8_game_3 : DataTypes.STRING,
      round8_game_4 : DataTypes.STRING,
      round4_game_1 : DataTypes.STRING,
      round4_game_2 : DataTypes.STRING,
      champion : DataTypes.STRING
  });
  return Brackets
};
