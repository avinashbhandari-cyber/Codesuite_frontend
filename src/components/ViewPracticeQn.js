import React, { Component, useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import "../style/Course.css";
import "../App.css";
import { FormGroup, Input, Button, Jumbotron } from "reactstrap";
import Compiler from './Compiler';
import axios from "axios";
import api from '../api/api.js'

function ViewPracticeQn(props) {

  const [count, setCounter] = useState(0);
  const [practiceQn, setPracticeQn] = useState(''); 
  const [expectOutput, setExpOp] = useState('')
  const [testcasePath, setTcPath] = useState('');
  const [questionPath, setQnPath] = useState('');
  const [testcaseAnsPath, setTcAnsPath] = useState('');
  const [questionSummary, setQnSummary] = useState('');
  const [testcaseSummary, setTcSummary] = useState('');
  const [testcaseAnsSummary, setTcAnsSummary] = useState('');

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const {id} = useParams();
  let query = useQuery();
  

  const [qid, setQid] = useState(id);
  const [code, setCode] = useState([]);
  const [testCase, setTestCase] = useState([]);
  const [languageB, setLang] = useState('');
  const [output, setOutput] = useState('');
  
  useEffect(() => {
    if(practiceQn === '') {
      setQid(id);
      getList();
    }
  })

  const submitCode = () => {
    
    const languageBox = document.getElementById('language').value
    setLang(languageBox)

    const questionFile = new Blob([document.getElementById('codeFile').value],    
    {type: 'text/plain;charset=utf-8'});
    let file1 = new File([questionFile], "codeFile")
    setCode({code : file1})
  
    const testcaseFile = new Blob([document.getElementById('inputFile').value],    
    {type: 'text/plain;charset=utf-8'});
    let file2 = new File([testcaseFile], "inputFile")
    setTestCase({testcase : file2})

    const formData = new FormData()
    formData.append('codeFile', file1)
    formData.append('inputFile', file2)

    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
        setOutput({
            output: [],
        })

        getResult(formData, config, languageBox)
  }

  const getResult = async (formData, config, languageBox) => {
    try {
      const result = await axios.post(`${api}/language/${languageBox}`, formData, config)
      const outText = result.data.output || ''
      setOutput(outText)
      checkOutputCorrectness(outText)
    } catch (err) {
      console.error(err)
      alert("Compilation error. Please check your code syntax.")
    }
  }

  const checkOutputCorrectness = (currentOutput) => {
    const yourOutput = (currentOutput !== undefined ? currentOutput : (document.getElementById('outputCode')?.value || '')).trim()
    const requireOutput = (document.getElementById('expectedResult')?.value || '').trim()
    const result = yourOutput === requireOutput;
    result ? alert("MATCHED") : alert("NOT MATCHED");
  }

  const getList = async () => {
    const response = await axios.get(`${api}/practice/question/${qid}`)
    console.log(response.data)
    setPracticeQn(response.data)
  }

  const getQnSummary = async (path) => {
    const response = await axios.get(`${api}/practice/PracticeQn/${path}`)
    console.log(response.data)
    setQnSummary(response.data);
  }
  
  const getTcSummary = async (path) => {
    const response = await axios.get(`${api}/practice/testCase/${path}`)
    console.log(response.data)
    setTcSummary(response.data);
  }
  
  const getTcAnsSummary = async (path) => {
    const response = await axios.get(`${api}/practice/practiceAns/${path}`)
    console.log(response.data)
    setTcAnsSummary(response.data);
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
            Problem Statement{" "}
          </h1>
          <button value="Back" id="rd_btn" >
            <Link to={`/practiceques`} style={{ color: "darkslategray" }}>
              {"Back"}
            </Link>{" "} 
          </button> 
        </div> <br/>
        <div className="splitquestionleft">
        {
        practiceQn === '' ? 'No Question Available'
        : practiceQn.map(practice => {   
          if(expectOutput === '') {   
            setExpOp(practice.q_TestcaseAns)
            setQnPath(practice.q_Question)
            setTcPath(practice.q_Testcase)
            setTcAnsPath(practice.q_TestcaseAns)
            getQnSummary(practice.q_Question)
            getTcSummary(practice.q_Testcase)
            getTcAnsSummary(practice.q_TestcaseAns)
          }
              return(
        <div>
        
          <center><b><h2>{practice.q_Title}</h2></b></center><br/>         
          <i>Type: {practice.q_Type}</i><br/><br/>
          <i>Question ID: {practice.q_ID}</i><br/><br/>
          <b>Problem Statement</b><br/>
          <pre>
            {
              questionSummary
            }
          </pre><br/><br/>
          <b>TestCase</b><br/>
          <pre>
            {
              testcaseSummary
            }
          </pre><br/><br/>
          
          <b>TestCase Answer</b><br/>
          <pre>
            {
              testcaseAnsSummary
            }
          </pre><br/><br/>
          </div>
        )}
        )
        }
        </div>
        <div className="splitquestionright">
        <div className="entercode">
      
            <label>Programming Language:</label> <br/>
              <select 
              type="select"
                id="language"
                name="language"
                 >
                <option value=""></option>
                <option value="c"> C </option>
                <option value="cpp"> C++ </option>
                <option value="java"> Java </option>
                <option value="python"> Python </option>
              </select>{" "}
            <br /> <br/>

            <label forName=""> Code Here : </label> <br />
            <textarea
              id="codeFile"
              name="w3review1"
              rows="20"
              cols="100"
              placeholder="Code Here"
              defaultValue=""
              ></textarea> <br /> <br />
            <label forName=""> Inputs  : </label> <br />
            <textarea
              id="inputFile"
              name="w3review2"
              rows="7"
              cols="100"
              placeholder="Enter Input of Your Code"
              defaultValue=""
            ></textarea>{" "}
            <br /><br />
            <label forName=""> Your Output : </label> <br />
            <textarea
              id="outputCode"
              name="w3review3"
              rows="7"
              cols="100"
              placeholder="Your Output will display here"
              defaultValue={output}
            ></textarea> <br/><br/>
            <label forName=""> Expected Result : </label> <br />
            <textarea
              id="expectedResult"
              name="w3review3"
              rows="7"
              cols="100"
              placeholder="Expected Result"
              defaultValue={testcaseAnsSummary}
            ></textarea> <br/><br/>
              
            <button style={{width:"100%"}} id="sub-btn" onClick={submitCode} >  Run </button> <br/><br/>
            <button style={{width:"100%"}} id="sub-btn" onClick="" >  Submit </button>

            <br/><br/>
          </div>
      

        </div>
      </>
    );
  }

export default ViewPracticeQn;