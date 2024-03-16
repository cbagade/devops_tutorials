module.exports = (fruits_json_data,query) => {
  let one_fruit = {}
  if (query == undefined || query.id == undefined) {
    return fruits_json_data
  } else {
    fruit = fruits_json_data[query.id]
    if (fruit != undefined) {
      one_fruit = fruit
    }
    return one_fruit
  }
}