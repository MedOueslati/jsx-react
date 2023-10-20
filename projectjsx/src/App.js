import React from "react";
import { Card } from "react-bootstrap";
import Name from "./Component/Name";
import Price from "./Component/Price";
import Description from "./Component/Description";
import Image from "./Component/Image";
import "./Cardstyle.css";


const App = () => {
  const firstName = "MohamedOueslati"; 

  return (
    <div className="App">
    <Card className="mycard">
      {firstName && <Image/>} 
      <Card.Body>
        <Name />
        <Price />
        <Description />
      </Card.Body>
    </Card>
    <div>
      <p className="myp">Hello, {firstName ? firstName : "there"}!</p>
    </div>
  </div>
);
};

export default App;