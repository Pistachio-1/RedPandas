module.exports = function(sequelize, DataTypes) {
    const Brackets = sequelize.define("Brackets", {
        user_name : DataTypes.STRING,
        group_A : DataTypes.STRING,
        group_B : DataTypes.STRING,
        group_C : DataTypes.STRING,
        group_D : DataTypes.STRING,
        group_E : DataTypes.STRING,
        group_F : DataTypes.STRING,
        group_G : DataTypes.STRING,
        group_H : DataTypes.STRING,
        quarter_A : DataTypes.STRING,
        quarter_B : DataTypes.STRING,
        quarter_C : DataTypes.STRING,
        quarter_D : DataTypes.STRING,
        semi_A : DataTypes.STRING,
        semi_B : DataTypes.STRING,
        final : DataTypes.STRING
    });
  
    Brackets.associate = function(models) {
      Brackets.belongsToOne(models.User, {
        through: models.User
      });
    };
  
    return Brackets
};