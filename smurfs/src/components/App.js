import React, { useEffect } from "react";
import "./App.css";

import styled from "styled-components";

import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getSmurfs, delSmurf } from "../actions/smurfActions";

import NewSmurfForm from "./NewSmurfForm";

const SmurfCard = styled.div`
   border: 1px solid #d0d0d0;
   padding: 10px 5px;
   margin: 10px 0;

   &:hover {
      cursor: pointer;
   }
`;

const App = () => {
   const dispatch = useDispatch();

   const { smurfs, loading, error } = useSelector(state => state, shallowEqual);

   useEffect(() => {
      dispatch(getSmurfs());
   }, []);

   const Smurfs = smurfs.map(smurf => (
      <SmurfCard key={smurf.id} onClick={() => dispatch(delSmurf(smurf.id))}>
         <h3>{smurf.name}</h3>
         <p>
            Age: {smurf.age} Height: {smurf.height}
         </p>
      </SmurfCard>
   ));

   return (
      <div className="App">
         <NewSmurfForm />
         {error ? <h1>Error</h1> : <></>}
         {loading && !error ? <h1>Loading</h1> : <>{Smurfs}</>}
      </div>
   );
};

export default App;
