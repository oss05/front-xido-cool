import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <div>
            <div className="nav">
                <input type="checkbox" id="nav-check" />
                <div className="nav-header">
                    <div className="nav-title">
                        OsVinyls
                </div>
                </div>
                <div className="nav-btn">
                    <label htmlFor="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
                <div className="nav-links">
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/vinyls"><a>Vinyls</a></Link>
                    <Link href="/contact"><a>Contact</a></Link>
                </div>
            </div>
            <style jsx global>
                {
                    `
                * {
                    box-sizing: border-box;
                  }
                  
                  body {
                    margin: 0px;
                    font-family: 'segoe ui';
                  }
                  
                  .nav {
                    height: 60px;
                    width: 100%;
                    background-color: #fff;
                    box-shadow: 0px 3px 6px -4px grey;
                    position: fixed;
                    top: 0;
                  }
                  
                  .nav > .nav-header {
                    display: inline;
                  }
                  
                  .nav > .nav-header > .nav-title {
                    display: inline-block;
                    font-size: 22px;
                    color: #000;
                    padding: 16px 10px 10px 15px;
                  }
                  
                  .nav > .nav-btn {
                    display: none;
                  }
                  
                  .nav > .nav-links {
                    display: inline;
                    float: right;
                    font-size: 18px;
                  }
                  
                  .nav > .nav-links > a {
                    display: inline-block;
                    padding: 18px 20px 18px 20px;
                    text-decoration: none;
                    color: #000;
                  }
                  
                  .nav > .nav-links > a:hover {
                    background-color: #000;
                    color: #fff;
                  }
                  
                  .nav > #nav-check {
                    display: none;
                  }
                  
                  @media (max-width:600px) {
                    .nav > .nav-btn {
                      display: inline-block;
                      position: absolute;
                      right: 0px;
                      top: 0px;
                    }
                    .nav > .nav-btn > label {
                      display: inline-block;
                      width: 50px;
                      height: 50px;
                      padding: 13px;
                    }
                    .nav > .nav-btn > label:hover,.nav  #nav-check:checked ~ .nav-btn > label {
                      background-color: rgba(0, 0, 0, 0.3);
                    }
                    .nav > .nav-btn > label > span {
                      display: block;
                      width: 25px;
                      height: 10px;
                      border-top: 2px solid #eee;
                    }
                    .nav > .nav-links {
                      position: absolute;
                      display: block;
                      width: 100%;
                      background-color: #333;
                      height: 0px;
                      transition: all 0.3s ease-in;
                      overflow-y: hidden;
                      top: 50px;
                      left: 0px;
                    }
                    .nav > .nav-links > a {
                      display: block;
                      width: 100%;
                    }
                    .nav > #nav-check:not(:checked) ~ .nav-links {
                      height: 0px;
                    }
                    .nav > #nav-check:checked ~ .nav-links {
                      height: calc(100vh - 50px);
                      overflow-y: auto;
                    }
                  }    `
                }
            </style>
        </div>
    )
}