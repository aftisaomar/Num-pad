import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {getData} from '../utiles/axios'

export  const AllScores = () => {

    const  [responseData, setResponseData] = useState(null)


    useEffect(()=>{


        getData().then((response)=>{

            const sortedTable = response.data
            sortedTable.sort((eltA,eltB)=> -(eltA.points - eltB.points) )

            setResponseData(response.data)
    
        })
        .catch((error) => {
            console.log(error)
        })


    },[responseData])

   

    
    return (


      <table className="table table-dark">
            <thead>
            <tr>
                <th scope="col">Ranking</th>
                <th scope="col">Name</th>
                <th scope="col">Point</th>
            </tr>
            </thead>    
            <tbody>
            
                
                {responseData && responseData.map((element,index) => (
                    <tr key= {index}>
                        <th scope="row">{index+1}</th> 
                        <td>{element.name}</td>
                        <td>{element.points}</td>
                    </tr>
                ))}
            

            </tbody>
      </table>
    )

}