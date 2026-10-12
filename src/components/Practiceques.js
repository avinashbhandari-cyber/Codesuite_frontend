import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/Course.css";
import "../App.css";
import axios from "axios";
import api from '../api/api.js'

// import { Container, Form }from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
//test
//import contestList from "./test-dataPracticeQn"; 


export default class Practiceques extends Component {

  constructor(props){
    super(props);
    this.state = {
      contestList : [],
      ques : this.props.Ques ,
      count : 0
    };
    console.log("####")
    console.log(this.state.contestList)
  }

  async componentDidMount() {
    const response =  await axios.get(`${api}/practice/createQn`)
    const items = response.data;
    console.log(items)
    this.setState({
      contestList: items,
    });
  }
  
  render() {
    
    const openbtn = {
      border: "2px solid white",
      width: "13%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }


    return (
      <>
        <br />
        <div className="firsthead">
          <h1 style={{ color: "darkslategray", display: "inline-block" }}>
            Practice Questions{" "}
          </h1>
          <button value="Add Questions" id="rd_btn" >
            <Link to="/createques" style={{ color: "darkslategray" }}>
              {"Add Questions"}
            </Link>{" "} 
          </button> 
        </div> <br/>

        <div className="practiceques">
        {

          this.state.contestList == undefined ? 'No Contest Available'
          : this.state.contestList.map(practice => {
              return(
        <div className="Ques-box" style={{display:"flex"}}>
          <div className="Questions" id={this.state.count + 1} > 
            <div><p>{practice.q_ID}</p></div>
            <div><p>{practice.q_Title}</p></div>
            <div><p>{practice.q_Type}</p></div>
          </div>
          <Link to={`/practice/ViewPracticeQn/${practice.q_ID}`} style={openbtn} >Open</Link>
        </div>
        
           )
          })
          
        }
        </div>
      </>
    );
  }
}
