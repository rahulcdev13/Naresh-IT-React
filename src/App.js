import React from "react";
import "./index.css";
// import Card from "./Components/Card";
// import DataBindingP from "./Components/DataBindingP";
// import LoginUser from "./Components/LoginUser";
// import NestedIterations from "./Components/NestedIterations";
import Example from "./Components/Example";
import RegisterDetails from "./Components/RegisterDetails";
import ParentComponent from "./Components/ParentComponent";


function App() {
  return (
    <>
     <Example />
     <ParentComponent />
     <RegisterDetails />

     {/* <Card /> */}
     {/* <DataBindingP /> */}
     {/* <NestedIterations /> */}
     {/* <LoginUser /> */}
    </>
  );
}

export default App;
