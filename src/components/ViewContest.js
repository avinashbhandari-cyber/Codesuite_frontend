import React, { Component, useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import "../style/Course.css";
import "../App.css";
import axios from "axios";
import api from '../api/api.js'

//test
//import contestList from "./test-data"; 
//import contestQnList from "./test-dataQn"; 

// import { Container, Form }from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

function ViewContest(props) {

  const [count, setCounter] = useState(0);
  const [contestList, setList] = useState(''); 
  const [contestQnList, setQnList] = useState(''); 
  const [contest_ID, setConID] = useState('00');
  const [aboutPath, setAboutPath] = useState('');
  const [aboutSummary, setAboutSummary] = useState('');

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const {id} = useParams();
  let query = useQuery();
  
  const [cid, setCid] = useState(id);
  localStorage.setItem('Contestid', cid);
  
  useEffect(() => {
    if(contestList == '') {
      getList();
      getQnList();
    }
  })

  const getList = async () => {
    const response = await axios.get(`${api}/contest/${id}`)
    console.log(response.data)
    setList(response.data)
  }

  const getQnList = async () => {
    const response = await axios.get(`${api}/contest/${id}/questions`)
    setQnList(response.data)
  }

  const getAboutSummary = async (path) => {
    const response = await axios.get(`${api}/contest/AboutContest/${path}`)
    console.log(response.data)
    setAboutSummary(response.data);
  }
  
 

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
            Contest{" "}
          </h1>
          <button value="Add Questions" id="rd_btn" >
            <Link to={`/createContestQn/${cid}`} style={{ color: "darkslategray" }}>
              {"Add Questions"}
            </Link>{" "} 
          </button> 
        </div> <br/>
        <div className="practiceques">
        {
        contestList == '' ? 'No Question Available'
        : contestList.map(contest => {
          if(contest_ID === '00'){
            setConID(contest.contestID)
            setAboutPath(contest.contestAbout)
            getAboutSummary(contest.contestAbout)
          }
              return(
        <div>
          <center><b><h2>{contest.contestTitle}</h2></b></center>       
          <i>STATUS: {contest.contestStatus}</i><br/><br/>
          <i>Contest ID: {contest.contestID}</i><br/><br/>
          <b>ABOUT CONTEST</b><br/><br/>
          <h3><pre>
            {
              aboutSummary
            }
          </pre>
          </h3>
          </div>
              
              )}
              )  
          }
        </div>

        <div className="practiceques">
        
        {
        contestQnList == '' ? 'No Question Available'
        : contestQnList.map(contest => {
              return(
           
        <div className="Ques-box" style={{display:"flex"}}>
          <div className="Questions" > 
            <div><p>{contest.q_ID}</p></div>
            <div><p>{contest.q_Title}</p></div>
            <div><p>{contest.q_Type}</p></div>
          </div>
        
          <Link to={`/contest/ViewQn/${contest_ID}/${contest.q_ID}`} style={openbtn} >Open</Link>
        </div>
           )
          })
        }

        </div>
      </>
    );
  }

export default ViewContest;