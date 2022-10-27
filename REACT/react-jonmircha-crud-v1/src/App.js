import CrudApp from "./components/CrudApp";
import React from 'react';
import CrudApi from "./components/CrudApi";


function App() {
  return (
    <>
      <h1>POKEMON CRUD</h1>
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
    </>
  );
}

export default App;
