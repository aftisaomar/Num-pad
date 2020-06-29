import axios from 'axios'


//GET

export const getData = () =>  {
   return  axios({
        'method':'GET',
        'url':'http://localhost:8080/api/scores',
    })
    
}


//POST

export const postData = (data) => {

    return axios({

        'method': 'POST',
        'url' : 'http://localhost:8080/api/scores',
        'data' : {

            'name' : ''+data.name,
            'points' : ''+data.points

        }


    })



}

//http://restcountries.eu/rest/v2/all