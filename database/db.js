const Sequelize = require("sequelize")
const db = {}
const sequelize = new Sequelize("LMS_DB", "Bornadmin@borndbserver", "Welcome@123", {
    host: 'borndbserver.database.windows.net',
    port:'1433',
    dialect: 'mssql',
    dialectOptions: {
        options: {
            encrypt: true,
        }
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db 