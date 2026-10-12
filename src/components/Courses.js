import React from "react";
import "../style/Course.css";
import "../App.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Courses() {

  const TITLE = "COURSES";
  return (
    <>
      <Helmet>
          <title>{ TITLE }</title>
      </Helmet>
      <br />
      <br />
      {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous"/>
    <link rel="stylesheet" href="CSSFiles//index_style.css"/>
    <link rel="preconnect" href="https://fonts.gstatic.com"/> */}
      {/* <link href="https://fonts.googleapis.com/css2?family=Cabin&display=swap" rel="stylesheet"/> */}
      {/* <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600&display=swap" rel="stylesheet"/> */}
      <div>
        <div className="firsthead">
          <h1 style={{ color: "darkslategray", display: "inline-block" }}>
            {" "}
            TOP FREE COURSES{" "}
          </h1>
          <button value="ROADMAP" id="rd_btn">
            {" "}
            <Link to="/practiceques" style={{ color: "darkslategray" }}>
              {"Practice"}
            </Link>{" "}
          </button>
        </div>
        <br /> <br />
        <div className="card-container">
          <div className="card" id="card-1">
            <img src="https://images.hdqwalls.com/download/web-development-minimalism-bl-1600x900.jpg" width="100%" alt=".."/>

            <strong className="card-btn"><Link to="/webdev"> Web Development </Link></strong>
            <p style={{color:"white",opacity:"0.9",textalign:"justify"}}>
              {" "}
              Go from no-code to an in-demand junior web developer, at a
              fraction of the cost of a bootcamp. Start with the front-end by
              learning HTML, CSS, and JavaScript. Then, master the back-end and
              APIs to round out your full-stack skills
            </p>
          </div>
          <div className="card" id="card-2">
            <img
              src="https://kanopy.com/cdn-cgi/image/fit=cover,height=900,width=1600/https://static-assets.kanopy.com/video-images/693171a4-412d-4f38-95bb-c1d3e1ca842d.jpg"
              width="100%" alt=".."
            />
            <strong className="card-btn"><Link to=""> Data Structure </Link></strong>

            <p style={{color:"white",opacity:"0.9",textalign:"justify"}}>
              In this course, you will learn data structures and algorithms by
              solving 300+ practice problems. You will begin each course by
              learning to solve defined problems related to a particular data
              structure and algorithm.{" "}
            </p>
          </div>
          <div className="card" id="card-3">
            <img
              src="https://wallpaperforu.com/wp-content/uploads/2020/12/black-wallpaper-201219141449441600x900.jpg"
              width="100%" alt=".."
            />
            <strong className="card-btn"><Link to=""> Python </Link></strong>

            <p style={{color:"white",opacity:"0.9",textalign:"justify"}}>
              {" "}
              Take your first step towards a career in software development with
              this introduction to Java—one of the most in-demand programming
              languages and the foundation of the Android operating system.
              Designed for beginners.
            </p>
          </div>
        </div>
      </div>{" "}
      <br /> <br />
      {/* <!-- </div> <BR/> <BR/>  --> */}
      <h1 style={{ paddingleft: "3em", color: "darkslategray" , textAlign:"center" }}>
        {" "}
        TOP IT COMPANIES IN INDIA AND THEIR LATEST UPDATES{" "}
      </h1>{" "}
      <br /> <br />
      <div className="container">
        <div className="card-container">
          <div className="card" id="card-1">
          <img
              src="https://aithority.com/wp-content/uploads/2018/08/tcs-1.jpg"
              width="100%" alt=".."
            />

            <strong className="card-btn"><Link to=""> TCS ( Tata consultancy services ) </Link> </strong>
             <p style={{color:"white",opacity:"0.9",textalign:"justify"}}>
              {" "}
              Tata Consultancy service is the Largest IT company in India in terms of
                            Revenue.
                            TCS is an IT services, consulting and business solutions provider that has been partnering
                            with the world’s
                            largest businesses ..
            </p>
          </div>
          <div className="card" id="card-2">
          <img
              src="https://aithority.com/wp-content/uploads/2020/04/Infosys-CEO-93-Workforce-Engaged-from-Home-Focus-to-Deliver-Agile-Service-and-Achieve-Strong-Financial-Resilience-2.jpg"
              width="100%" alt=".."
            />

            <strong className="card-btn"><Link to=""> INFOSYS </Link></strong>
            <p style={{color:"white",opacity:"0.9",textalign:"justify"}} >
              {" "}
              Established in 1981, Infosys is an NYSE listed global consulting and IT
                            services company with more than 228,000 employees. It is the second largest in the list of
                            top 10 IT companies in India 2020.
                            From a capital of US$ 250 to become a US$ 11.8 billion .
            </p>
          </div>
          <div className="card" id="card-3">
          <img
              src="https://aithority.com/wp-content/uploads/2019/08/HCL-Technologies-and-Oracle-Health-Sciences-Collaborate-to-Accelerate-mHealth-in-Clinical-Trials.jpg"
              width="100%" alt=".."
            />

            <strong className="card-btn"><Link to=""> HCL Technologies </Link></strong>
            <p style={{color:"white",opacity:"0.9",textalign:"justify"}}>
              {" "}
              HCL Technologies is one of the best IT companies in India. The Company is
                            a leading global IT services company that helps global enterprises re-imagine and transform
                            their businesses through Digital technology transformation.
            </p>
          </div>
        </div>
      </div>
      {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.js"></script> */}
    </>
  );
}
