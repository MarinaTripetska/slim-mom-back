const { Product } = require("./product");
const { User,
        joiUserInfoSchema,
        joiRegisterSchema,
        joiLoginSchema } = require("./user");
const { Dietary } = require("./dietary");

module.exports = { 
    User, 
    joiUserInfoSchema,
    joiRegisterSchema,
    joiLoginSchema,
    Product,
    Dietary 
};
