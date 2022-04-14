const PostCategorie = (sequelize, _DataTypes) => {
  const postCategorieModel = sequelize.define('PostCategorie', {}, {
    timestamps: false, tableName: 'PostsCategories', 
  });

  postCategorieModel.associate = (models) => {
    models.BlogPost.belongsToMany(models.Categorie, {
      as: 'categories',
      through: postCategorieModel,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });

    models.Categorie.belongsToMany(models.BlogPost, {
      as: 'blogposts',
      through: postCategorieModel,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return postCategorieModel;
};

module.exports = PostCategorie;