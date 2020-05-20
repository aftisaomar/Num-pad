import {SEND_NUMBER,DELETE,SEND_ANSWER,REPLAY} from '../constantes/actions'


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