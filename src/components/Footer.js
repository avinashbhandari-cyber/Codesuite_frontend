import React from 'react'

export default function Footer() {
    return (
        <>
        <footer>
        <div className="footer-box" id="footer-box1">
          <strong style={{}} id="footerfont">
            {" "}
            Code-Suite{" "}
          </strong>{" "}
          <br />
          <quote style={{ opacity: "0.8" }}>
            {" "}
            Learn to code have never been difficult{" "}
          </quote>
        </div>
        <div className="footer-box" id="footer-box2">
          <table cellPadding="10px">
            <th> Product </th>
            <th> Help </th>
            <th> Company </th>
            <th> Legal </th>

            <tr>
              <td>
                {" "}
                <a href={"."}>Features </a>
              </td>
              <td>
                {" "}
                <a href={"."}>FAQ </a>
              </td>
              <td>
                {" "}
                <a href={"."}>Twitter </a>{" "}
              </td>
              <td>
                {" "}
                <a href={"."}>Terms of Services </a>{" "}
              </td>
            </tr>

            <tr>
              <td>
                {" "}
                <a href={"."}> Contest </a>{" "}
              </td>
              <td>
                {" "}
                <a href={"."}> Docs </a>
              </td>
              <td>
                {" "}
                <a href={"."}> Discord </a>
              </td>
              <td>
                {" "}
                <a href={"."}> Privacy Policy </a>
              </td>
            </tr>

            <tr>
              <td>
                {" "}
                <a href={"."}> Education </a>{" "}
              </td>
              <td>
                {" "}
                <a href={"."}> Youtube </a>
              </td>
              <td>
                {" "}
                <a href={"."}> Contact Us </a>
              </td>
            </tr>

            <tr>
              <td>
                {" "}
                <a href={"."}> Login </a>{" "}
              </td>
              <td>
                {" "}
                <a href={"."}> Blog </a>
              </td>
              <td>
                {" "}
                <a href={"."}> About Us </a>
              </td>
            </tr>
          </table>
        </div>
      </footer>
      <div id="end">
        {" "}
        Copyright © 2021 Code-Suite, Inc. All rights reserved.
      </div>  
        </>
    )
}
