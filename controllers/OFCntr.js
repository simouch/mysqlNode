

const ofService = require ('../service/ofService/GetAll');
module.exports={
    
  add: async function(req,res){
      
    try {
          const of =await ofService.create(req.body)
        res.status(200).json({msg:'of added',status:200,data:of})
    } catch (error) {
      console.log(error)
      res.status(400).json({msg: error, status: 400, data: null})
    }

  },
  getAll: async function(req,res){
      try {
          const of =await ofService.getTodo
          res.status(200).json({msg: ' All ofs ', status: 200, data: of})
          console.log(of)

      } catch (error) {
          console.log(error)
      res.status(400).json({msg: error, status: 400, data: null})
      }
  }
 

}






