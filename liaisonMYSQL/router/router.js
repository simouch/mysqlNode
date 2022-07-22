const express=require("express")
const router = express.Router()
router.get('/', function (req, res, next) {
    connection.query('SELECT * FROM ofabrication ORDER BY id desc', function (err, rows) {
      if (err) {
        req.flash('error', err)
        res.render('profile', { data: '' })
      } else {
        res.render('ofabrication', { data: rows })
      }
    })
  })
  module.exports = router