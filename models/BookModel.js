const { Schema, model } = require("mongoose");
const Joi = require("joi");

const bookSchema = new Schema(
  {
    clientId: {
      type: String,
      required: [true, "Set clientId for book"],
    },
    businessId: {
      type: String,
      required: [true, "Set businessId of book"],
    },
    // date: { type: Date },
    status: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

//Для обработки ошибок валидации схемы и изменения статуса ошибки с 500 на 400
bookSchema.post("save", (error, data, next) => {
  error.status = 400;
  next();
});

const addSchema = Joi.object({
  clientId: Joi.string().required(),
  businessId: Joi.string().required(),
  // date: Joi.date().required(),
  status: Joi.string(),
});

const schema = { addSchema };
const Book = model("books", bookSchema);

module.exports = { Book, schema };
