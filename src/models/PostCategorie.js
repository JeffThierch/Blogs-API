const PostCategorie = (sequelize, _DataTypes) => {
  const postCategorieModel = sequelize.define('PostCategorie', {}, {
    timestamps: false, underscored: true, tableName: 'PostsCategories', 
  });

  postCategorieModel.associate = (models) => {
    models.BlogPost.belongsToMany(models.Categorie, {
      as: 'categories',
      through: postCategorieModel,
      foreignKey: 'id',
      otherKey: 'id',
    });

    models.Categorie.belongsToMany(models.BlogPost, {
      as: 'blogposts',
      through: postCategorieModel,
      foreignKey: 'id',
      otherKey: 'id',
    });
  };

  return postCategorieModel;
};

module.exports = PostCategorie;