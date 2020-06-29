
import {SEND_NUMBER,DELETE,SEND_ANSWER,REPLAY, SET_NAME} from '../constantes/actions'
import {getMultiplication,getRemain,newArray} from '../utiles/multiplications'

const stateInit = {

    values : [],
    score : 0,
    question : getMultiplication(),
    remainQuestion : getRemain(),
    numberQuestion : getRemain(),
    message : '',
    namePlayer : ''
}


export default (state = stateInit, action = {}) =>  {


    switch(action.type){

        case SEND_NUMBER :
            return {
                ...state,
                values : [...state.values,action.valeur]
            }

        case DELETE :
            return {
                ...state,
                values : []
            }

        case SEND_ANSWER : 
            //verifier le tableau values avec question.c
            let valueTmp = [...state.values]
            valueTmp = valueTmp + ""
            valueTmp =  valueTmp.replace(/,/g,'');
            console.log(valueTmp)
            if(parseInt(valueTmp,10) === parseInt(state.question.c,10)){
                return {
                    ...state,
                    question : getMultiplication(),
                    remainQuestion : getRemain(),
                    values : '',
                    score : state.score + 1,
                    message : 'BRAVO'
                }
            }else{

                return {
                    ...state,
                    message : `Raté ${state.question.a} x ${state.question.b} = ${state.question.c} `,
                    question : getMultiplication(),
                    remainQuestion : getRemain(),
                    values : ''
                    
                }

            }

        case REPLAY : 
            newArray()
            return {
                values : [],
                score : 0,
                question : getMultiplication(),
                remainQuestion : getRemain(),
                numberQuestion : getRemain(),
                message : ''
            }

        case SET_NAME:
            return {
                ...state,
                namePlayer : action.payload

            }    


        default:
            return state;    


    }




}