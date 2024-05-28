import Joi from "joi";

const VariantJoiSchema = Joi.object({
    type: Joi.string().required(),
    value: Joi.string().required(),
  });
  
  const InventoryJoiSchema = Joi.object({
    quantity: Joi.number().required(),
    inStock: Joi.boolean().required(),
  });
  
  const ProductValidationSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    category: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(),
    variants: Joi.array().items(VariantJoiSchema).required(),
    inventory: InventoryJoiSchema.required(),
  });

  export default ProductValidationSchema;