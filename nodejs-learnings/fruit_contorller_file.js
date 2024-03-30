
const fs = require("fs")
const fruits = fs.readFileSync('./data/fruits_data.json','utf-8')
const fruit_json = JSON.parse(fruits)

exports.get_all_fruits = (req,res)=>{
    console.log('I am coming from method')
    res.status(200).json({message:'success', fruits:JSON.stringify(fruit_json)})
}

exports.get_a_fruit = (req,res) =>{
    console.log('I am coming from method')
    const id = req.params.id * 1
    const fruit = fruit_json[id]
    res.status(200).json({message:'success', fruit: JSON.stringify(fruit)})
}


exports.create_a_fruit = (req,res) =>{
    const fruit = req.body
    console.log(`fruit ${fruit}`)
    const new_id = fruit_json[fruit_json.length - 1].id + 1
    const new_fruit = Object.assign({id:new_id}, fruit)
    fruit_json.push(new_fruit)
    console.log(`new fruits is is ${JSON.stringify(fruit_json)}`)
    fs.writeFile('./data/fruits_data.json',JSON.stringify(fruit_json),'utf-8',err=>{
        res.status(200).send(`new fruits created with id ${new_id}`)
    })
}

exports.validateid = (req,res,next) => {
    const id = req.params.id * 1
    if(id>=fruit_json.length){
        return res.status(400).send("invalid id")
    }
    next()

}