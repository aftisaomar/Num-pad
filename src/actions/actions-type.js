import {SEND_NUMBER,DELETE,SEND_ANSWER,REPLAY, SET_NAME} from '../constantes/actions'


export const sendNumber = (valeur) =>{

    return {

        type: SEND_NUMBER,
        valeur
    }


}

export const deleteResponse = () => {


    return {
        type : DELETE
    }

}

export const sendAnswer = () => {

    return {
        type : SEND_ANSWER

    }

}

export const replay = () => {

    return {
        type : REPLAY
    }

}

export const setName = (payload) => {


    return {

        type : SET_NAME,
        payload : payload

    }

}