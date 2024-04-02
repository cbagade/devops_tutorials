const fs = require("fs")

exports.get_all_fruits = (req,res)=>{
    console.log('I am coming from method')
    const all_fruits = {}
    res.status(200).json({message:'success', fruits:all_fruits})
}
 
exports.get_a_fruit = (req,res) =>{
    console.log('I am coming from method')
    const id = req.params.id
    one_fruit = {}
    res.status(200).json({ status: "success", data: { one_fruit } });
}


exports.create_a_fruit = (req,res) =>{
    const fruit = req.body
    console.log(`fruit ${fruit}`)
    const new_fruit = {}
    res.status(200).json({ status: "success", data: { new_fruit } });
    
}
