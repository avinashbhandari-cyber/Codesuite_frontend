import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/Course.css";
import "../App.css";
import axios from "axios";
import api from '../api/api.js'

//test
import contestList from "./test-data"; 
import ViewContest from "./ViewContest";

// import { Container, Form }from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

class ContestPortal extends Component {

  constructor(props){
    super(props);
    this.state = {
      contestList : [],
      ques : this.props.Ques ,
      count : 0
    };
    localStorage.removeItem('Contestid');
  }

  async componentDidMount() {
    const response =  await axios.get(`${api}/contest/createContest`)
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
            Contest Portal{" "}
          </h1>
          <button value="Add Contest" id="rd_btn" >
            <Link to="/createContest" style={{ color: "darkslategray" }}>
              {"Create Contest"}
            </Link>{" "} 
          </button> 
        </div> <br/>

        <div className="practiceques">
        
        {
          this.state.contestList == undefined ? 'No Contest Available'
          : this.state.contestList.map(contest => {
              return(
           
        <div className="Ques-box" style={{display:"flex"}}>
          <div className="Questions" id={this.state.count + 1} > 
            <div><p>{contest.contestID}</p></div>
            <div><p>{contest.contestTitle}</p></div>
            <div><p>{contest.contestStatus}</p></div>
          </div>
          <Link to={`/contest/ViewContest/${contest.contestID}`} style={openbtn} >Open</Link>
        </div>
        
           )
          })
          
        }
        
        </div>
      </>
    );
  }
}

export default ContestPortal;