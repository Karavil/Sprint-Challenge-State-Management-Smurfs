import React, { useEffect } from "react";
import "./App.css";

import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getSmurfs } from "../actions/smurfActions";

import NewSmurfForm from "./NewSmurfForm";

const App = () => {
   const dispatch = useDispatch();

   const { smurfs, loading, error } = useSelector(state => state, shallowEqual);
   useEffect(() => {
      dispatch(getSmurfs());
   }, []);

   const Smurfs = smurfs.map(smurf => <p key={smurf.id}>{smurf.name}</p>);

   return (
      <div className="App">
         <NewSmurfForm />
         {error ? <h1>Error</h1> : <></>}
         {loading && !error ? <h1>Loading</h1> : <>{Smurfs}</>}
      </div>
   );
};

export default App;
