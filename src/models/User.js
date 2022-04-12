const User = (sequelize, DataTypes) => {
  const userModel = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Users',
  });

  userModel.associate = (models) => {
    User.hasMany(models.BlogPost, { foreignKey: 'userId', as: 'posts' });
  };

  return userModel;
};

module.exports = User;