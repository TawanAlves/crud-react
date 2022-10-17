const { DataTypes } = require("sequelize");
const db = require("../config/sequelize");

const Student = db.define(
  "Student",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    fullname: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    birthdate: {
      type: DataTypes.DATE,
    },
    classroom: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    school_average: {
      type: DataTypes.DECIMAL(4, 2),
      allowNull: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: db.literal("NOW()"),
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: db.literal("NOW()"),
    },
  },
  {
    underscored: true,
    timestamps: false
  }
);

module.exports = Student;
