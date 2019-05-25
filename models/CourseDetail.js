const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
  'coursedetails',
  {
      CourseID : {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      CourseName : {
          type: Sequelize.STRING,
          allowNull: false
      },
      CourseDescription : {
          type: Sequelize.STRING,
          allowNull: false
      },
      /* CourseType : {
          type: Sequelize.STRING,
          allowNull: false
      },
      CourseOwnerID : {
          type: Sequelize.STRING,
          allowNull: false
      },
      Project : {
          type: Sequelize.STRING
      },
      Division : {
          type: Sequelize.STRING
      },
      Function  : {
          type: Sequelize.STRING
      },
      LastUpdatedate : {
          type: Sequelize.DATE
      },
      CreatedDate : {
          type: Sequelize.DATE,
      },
      IsActive : {
          type: Sequelize.BOOLEAN,
      } */
  },
  {
      timestamps: false
  }
)

/* module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CourseDetail', {
      CourseID: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      CourseName: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      CourseDescription: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      CourseType: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      CourseOwnerID: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      Project: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      Division: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      Function: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      CreatedDate: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      LastUpdatedDate: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      IsActive: {
        type: DataTypes.INTEGER(1),
        allowNull: true
      }
    }, {
      tableName: 'coursedetails'
    });
}; */