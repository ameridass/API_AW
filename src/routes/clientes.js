const express = require("express");
const router = express.Router();

const mysqlConnection = require("../database");
router.get("/", (req, res) => {
  res.json({ status: "consumiendo" });
});

router.get("/clientes/consulta", (req, res) => {
  const { dpi, user, password } = req.body;
  const query = `
    SET @dpi = ?;
    SET @user = ?;
    SET @password = ?;
    CALL SP_CONSULTA_CLIENTE(@dpi, @user, @password);
    `;
  mysqlConnection.query(query, [dpi, user, password], (error, rows) => {
    if (!error) {
      res.json(rows[3][0]);
    } else {
      console.log(error);
    }
  });
});

router.post("/clientes/registro", (req, res) => {
  const {
    operacion,
    dpi,
    name,
    lastNameOne,
    lastNameTwo,
    sucursal,
    typeIde,
    bornDate,
  } = req.body;
  const query = `
    SET @operacion = 1;
    SET @dpi = ?;
    SET @name = ?;
    SET @lastNameOne = ?;
    SET @lastNameTwo = ?;
    SET @sucursal = ?;
    SET @typeIde = ?;
    SET @bornDate = ?;
    CALL sp_mant_clientes(@operacion, @dpi, @name, @lastNameOne,@lastNameTwo, @sucursal, @typeIde, @bornDate);
    `;
  mysqlConnection.query(
    query,
    [
      dpi,
      name,
      lastNameOne,
      lastNameTwo,
      sucursal,
      typeIde,
      bornDate,
    ],
    (error, rows) => {
      if (!error) {
        res.json(rows[8][0]);
      } else {
        console.log(error);
      }
    }
  );
});

router.put("/clientes/actualizacion", (req, res) => {
    const {
      ope,
      dpi,
      name,
      lastNameOne,
      lastNameTwo,
      sucursal,
      typeIde,
      bornDate,
    } = req.body;
    const query = `
    SET @ope = 3;
    SET @dpi = ?;
    SET @name = ?;
    SET @lastNameOne = ?;
    SET @lastNameTwo = ?;
    SET @sucursal = ?;
    SET @typeIde = ?;
    SET @bornDate = ?;
    CALL sp_mant_clientes(@ope, @dpi, @name, @lastNameOne,@lastNameTwo, @sucursal, @typeIde, @bornDate);
    `;
    mysqlConnection.query(
      query,
      [
        dpi,
        name,
        lastNameOne,
        lastNameTwo,
        sucursal,
        typeIde,
        bornDate,
      ],
      (error, rows) => {
        if (!error) {
          res.json(rows[8][0])
        } else {
            res.json(error)
          console.log(error);
        }
      }
    );
  });

  router.delete("/clientes/administracion", (req, res) => {
    const {
      ope,
      dpi,
      name,
      lastNameOne,
      lastNameTwo,
      sucursal,
      typeIde,
      bornDate,
    } = req.body;
    const query = `
    SET @ope = 2;
    SET @dpi = '';
    SET @name = '';
    SET @lastNameOne = '';
    SET @lastNameTwo = '';
    SET @sucursal = '';
    SET @typeIde = '';
    SET @bornDate = '';
    CALL sp_mant_clientes(@ope, @dpi, @name, @lastNameOne,@lastNameTwo, @sucursal, @typeIde, @bornDate);
    `;
    mysqlConnection.query(
      query,
      [
        dpi
      ],
      (error, rows) => {
        if (!error) {
          res.json(rows[8][0])
        } else {
            res.json(error)
          console.log(error);
        }
      }
    );
  });


module.exports = router;
