const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");
const Product = require("./Product");

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    //define id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    //define product_id column
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: "id",
      },
    },
    //define tag_id column
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Tag,
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = ProductTag;
