

function get_me_class_details(class_name){

    console.log(`supplied parameters is ${class_name}`)

    if(class_name.toLowerCase() == 'devops'){

        console.log(`Devops class and duration is 10 months`)
        console.log(`The course will have docker and k8 and other tech`)
    }else if(class_name.toLowerCase() == 'c++'){
        console.log(`C++ class, duration os 6 months`)
    }    
    else{

        console.log('Invalid class')
    }

}



get_me_class_details('java')