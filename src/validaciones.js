const yup = require("yup");

function validar(valid) {
  return (req, res, next) => {
    try {
      valid(req.body);
      next();
    } catch (e) {
      next(e);
    }
  }
}

function crearLibro(data) {
  const schema = yup.object().shape({
    nombre: yup.string().min(1).required(),
    anio: yup.number().min(0).max(2020).integer().required(),
    isbn: yup.string().matches(/^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/i).required()
  });

  schema.validateSync(data);
}

module.exports = {
  crearLibro,
  validar
};
