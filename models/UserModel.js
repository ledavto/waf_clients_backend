const { Schema, model } = require("mongoose");
const Joi = require("joi");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for user"],
    },
    typeUser: {
      type: String,
      required: [true, "Set type of client"],
    },
    visitTo: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

//Для обработки ошибок валидации схемы и изменения статуса ошибки с 500 на 400
userSchema.post("save", (error, data, next) => {
  error.status = 400;
  next();
});

const addSchema = Joi.object({
  name: Joi.string().required(),
  typeUser: Joi.string().required(),
  visitTo: Joi.string(),
});

const schema = { addSchema };
const User = model("users", userSchema);

module.exports = { User, schema };

//module.exports = model("user", userSchema);
