const Categorie = (sequelize, DataTypes) => {
  const categorieModel = sequelize.define('Categorie', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  }, {
    underscored: true,
    timestamps: false,
    tableName: 'Categories',
  });

  return categorieModel;
};

module.exports = Categorie;