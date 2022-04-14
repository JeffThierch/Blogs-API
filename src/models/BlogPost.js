const BlogPost = (sequelize, DataTypes) => {
  const blogPostModel = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    timestamps: false,
    tableName: 'BlogPosts',
  });

  blogPostModel.associate = (models) => {
    blogPostModel.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };

  return blogPostModel;
};

module.exports = BlogPost;