import React from "react";
import Product from "./Product";

function App() {
  return (
    <div>
      <h1>AMAZON</h1>

      <Product 
      name="Amazon Echo" 
      description="Your AI assistant" 
      price={59.99}
      />
      <Product 
      name="Google Home" 
      description="Your AI assistant" 
      price={49.99}
      />
      <Product 
      name="Alexa" 
      description="Your AI assistant" 
      price={79.99}
      />
    </div>
  );
}

export default App;
