const BlogPost = (sequelize, DataTypes) => {
  const blogPostModel = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
  }, {
    timestamps: false,
    tableName: 'BlogPosts',
  });

  blogPostModel.associate = (models) => {
    blogPostModel.belongsTo(models.User, { foreignKey: 'userId', as: 'users' });
  };

  return blogPostModel;
};

module.exports = BlogPost;