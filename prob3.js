const chained = async()=>{
    await firstfunction();
    await secondfunction();
    await thirdfunction();
}
const firstfunction = async ()=>{
    await new Promise(delay=> 
        setTimeout(delay, 2000))
        console.log("first function executed")
    }


const secondfunction = async ()=>{
    await new Promise(delay=> 
        setTimeout(delay, 2000))
         console.log("second function executed")
    }



const thirdfunction = async ()=>{
    await new Promise(delay=> setTimeout(delay, 2000))
        console.log("third function executed")
    }


console.log(chained())
