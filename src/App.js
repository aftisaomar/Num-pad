import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {sendNumber,deleteResponse,sendAnswer,replay, setName} from './actions/actions-type'
import { connect } from 'react-redux';
import Message from './Message';

import { AllScores } from './screens/AllScores';
import {postData} from './utiles/axios'

class App extends Component {

  
  render(){
    const elems = [0,1,2,3,4,5,6,7,8,9]
    const {a,b} = this.props.question
    

    return (
      
      <div className="container">
        <h2>Calcul mental !</h2>
        <div className="row">

          <div className="col-sm-8">

            <ul className="list-group">
              {this.props.remainQuestion === this.props.numberQuestion && (

                <li style = {{backgroundColor: "lightblue"}} className="list-group-item">
                  Vous avez {this.props.numberQuestion} multiplications a faire utiliser les touches du clavier pour repondre
                  <p>Bonne chance !</p>
                </li>

              )}
              {this.props.remainQuestion !== this.props.numberQuestion && (

                <li style = {{backgroundColor: "lightblue"}} className="list-group-item">
                  <p>{this.props.message}</p>
                </li>

              )}

              {this.props.remainQuestion !== 0 && 
                <li style = {{backgroundColor: "lightblue"}} 
                className="list-group-item">calculez :  {a}x{b} = <Message/></li>
              }

              {this.props.remainQuestion === 0 && 
                <li style = {{backgroundColor: "lightblue"}} 
                className="list-group-item">Jeux Terminer, cliquer sur le button  Reset terminated pour relancer </li>
              }

            </ul>

            {elems.map((elem,i)=>(
              <button key={i} className="btn btn-primary" onClick={()=> this.props.sendNumber(elem)} style={{margin:"5px"}}>
                {elem}
              </button>
            ))}
            <br/>
            <button disabled = {this.props.remainQuestion === 0} className="btn btn-info" style={{margin:"5px"}} onClick={()=>this.props.sendAnswer()}>GO!</button><br/>
            <button className="btn btn-danger" style={{margin:"5px"}} onClick={()=>this.props.deleteResponse()}>Reset choice</button><br/>
            <button className="btn btn-danger" style={{margin:"5px"}} onClick={()=>this.props.replay()}>Reset terminated</button>

          </div>


          <div className="col-sm-4">
            <ul className="list-group">
            <li style = {{backgroundColor: "lightblue"}} className="list-group-item">Nombre de question restante : {this.props.remainQuestion}</li>
            <li style = {{backgroundColor: "lightblue"}} className="list-group-item">Score : {this.props.score}</li>
            </ul>
            
          </div>

        </div>

           
          <div style = {{
            position: 'absolute', left: '50%', top: '80%',
            transform: 'translate(-50%, -50%)'}}>
            { this.props.remainQuestion === 0 &&
             <> 
              <input type="text" value = {this.props.namePlayer} onChange = {(event) => this.props.setName(event.target.value)} />                          
              <button onClick = {()=> postData({
                  name : this.props.namePlayer,
                  points : this.props.score
                }) }>Save
              </button> 
             </>

            }

              {console.log(this.props.namePlayer)}

            <AllScores />

          </div>      
        




        
      </div>
    );

  }

  
}

const mapStateToProps = state => {
  return {values : state.values, score : state.score, 
   question : state.question, remainQuestion : state.remainQuestion,
   numberQuestion : state.numberQuestion,  message : state.message,
   namePlayer : state.namePlayer
  }

}

const mapDispatchToProps = {sendNumber,deleteResponse,sendAnswer,replay,setName}

export default connect(mapStateToProps,mapDispatchToProps)(App)
