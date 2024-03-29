const fs = require('fs')
const superagent = require('superagent')

// TO DISABLE CERTIFICATE VALIDATION CHECK
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const readFileProm = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err,data) =>{
            if(err) reject('I could not find that file');
            resolve(data);
        });
    });
};

const writeFileProm = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data , (err) => {
            if(err) reject("Could not write file");
            resolve("success");
        });
    });
};


const getDogPics = async() => {
    console.log('inside async function');

    try{
    // following execution will wait at await to get the data
    const data = await readFileProm('./dog.txt')
    console.log(`Breed is ${data}`);

    const res = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);

    await writeFileProm('./dog-img.txt', res.body.message);
    console.log('Text file written');

    } catch(err){
        throw err;
    }

    // async function need to return promise, always
    return 'image ready'
}

// following piece of code calls above async method which return promise
// and now promise will be in resolved state
getDogPics().
    then((x) => {
            console.log(x)
    }).catch((err) =>{
        console.log('in catch block', err);
    });