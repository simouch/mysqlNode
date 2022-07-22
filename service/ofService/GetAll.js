const modelof =require ('../../models/OFmodel');

exports.getTodo = (req, res, next) => {
    if (!req.params.id) {
      return next(new modelof("No todo id found", 404));
    }
    conn.query(
      "SELECT * FROM ofabrication WHERE id = ?",
      [req.params.id],
      function (err, data, fields) {
        if (err) return next(new modelof(err, 500));
        res.status(200).json({
          status: "success",
          length: data?.length,
          data: data,
        });
      }
    );
   };


