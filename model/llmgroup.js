module.exports = (sequelize, Sequelize) => {
    const LLMGROUP = sequelize.define("LLMGROUP", {
      ID: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      grpname: {
          type: Sequelize.STRING
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    });
  
    return LLMGROUP;
  };