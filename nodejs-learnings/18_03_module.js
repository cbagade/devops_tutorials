module.exports  = (fruits_json_data, query) => {

    if (query == undefined || query.id == undefined) {
        return fruits_json_data
    } else {
        return fruits_json_data[query.id]
    }
}
