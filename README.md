
# Blogs API !

The idea of this project is to create an API, where the user has the possibility to create, edit, delete posts and categories.

The user can create his account and login, being authenticated by a JWT token, also has the possibility to create the post and assign several categories for it (1:N).

# Technologies Used

For this project the following technologies were used:

- [NodeJS](https://nodejs.org/en/)
- [Sequelize](https://sequelize.org/)
- [JWT](https://jwt.io/)
- [MySQL](https://www.mysql.com/)
- [Docker](https://www.docker.com/)

## How to Use:

1. Clone the repository

  ~~~bash
  git clone git@github.com:JeffThierch/Blogs-API.git
  ~~~

2. Install the dependencies:

 ~~~bash
  npm install
  ~~~

3. In the root of the project change the .env_example file to .env

4. (Optional) - Change the environment variables.

5. In the root of project run the commands:

  ~~~bash
  docker-compose up
  ~~~

6. Run in the projects root:

  ~~~bash
  npm start
  ~~~

7. If everything is configured correctly, after the build process you can simply access the application.