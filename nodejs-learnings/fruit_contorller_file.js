const fs = require("fs")
const Fruit = require('./express_demos/models/fruit_model')

//const fruits = fs.readFileSync('./data/fruits_data.json','utf-8')
//const fruit_json = JSON.parse(fruits)


exports.get_all_fruits = async(req,res)=>{
    console.log('I am coming from method')
    const all_fruits = await Fruit.find()
    res.status(200).json({message:'success', fruits:all_fruits})
}
 
exports.get_a_fruit = async(req,res) =>{
    console.log('I am coming from method')
    const id = req.params.id
    //const fruit = fruit_json[id]
    const one_fruit = await Fruit.findById(id)
    res.status(200).json({ status: "success", data: { one_fruit } });
}


exports.create_a_fruit = async (req,res) =>{
    const fruit = req.body
    console.log(`fruit ${fruit}`)

    const new_fruit = Fruit.create(req.body)
    res.status(200).json({ status: "success", data: { new_fruit } });
    
}

exports.validateid = (req,res,next) => {
//    const id = req.params.id * 1
  //  if(id>=fruit_json.length){
    //    return res.status(400).send("invalid id")
   // }
    next()

}