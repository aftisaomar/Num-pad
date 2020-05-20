function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

let elems = [ ...Array(10).keys() ].map(() => {
    const number1 = getRandomInt(10)
    const number2 = getRandomInt(10)
    return{ 
        a: number1, 
        b :  number2,
        c: number1 * number2
    }
});




export const getMultiplication = () => {

    if(getRemain() != 0){

        const index = getRandomInt(getRemain());
        console.log(index)

        const valeur =  elems[index];

        elems.splice(index,1)

        console.log(elems);

        return valeur   
    }else{
        return {
            a:'',
            b:'',
            c:''
        }

    }     
} 


export const getRemain =  () => {

    return elems.length;

}


export const newArray = () => {

    elems = [ ...Array(10).keys() ].map(() => {
        const number1 = getRandomInt(10)
        const number2 = getRandomInt(10)
        return{ 
            a: number1, 
            b :  number2,
            c: number1 * number2
        }
    });    


}