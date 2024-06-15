import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Spinner from "./Components/Spinner";
import { useState } from "react";
const App=()=>{
  let pageSize=9; 
  const [progress,setProgress]=useState(20);
  // let setProgress=(progress)=>{
  //     sProgress=progress;
  // }  
    return (
       <>
        
        <Router>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
        //onLoaderFinished={() => setProgress(0)}
        />
          <div>
          <Navbar />
          
          <Routes>
            <Route path="/" element={<News setProgress={setProgress} key="sports " country="in" pageSize={pageSize} category="sports" />}> </Route>
            <Route path="/business" element={<News setProgress={setProgress} key="business" country="in" pageSize={pageSize} category="business"/>}></Route>
            <Route path="/entertainment" element={<News setProgress={setProgress} key="entertainment" country="in" pageSize={pageSize} category="entertainment"/>}></Route>
            <Route path="/general" element={<News setProgress={setProgress} key="general" country="in" pageSize={pageSize} category="general"/>}> </Route>
            <Route path="/health" element={<News setProgress={setProgress} key="health" country="in" pageSize={pageSize} category="health"/>}> </Route>
            <Route path="/science" element={<News setProgress={setProgress} key="science" country="in" pageSize={pageSize} category="science"/>}> </Route>
            <Route path="/sports" element={<News setProgress={setProgress} key="sports" country="in" pageSize={pageSize} category="sports"/>}> </Route>
            <Route path="/technology" element={<News setProgress={setProgress} key="technology" country="in" pageSize={pageSize} category="technology"/>}> </Route>
          </Routes>
          </div>
        </Router>
      
      </>
    );
}
export default App;
