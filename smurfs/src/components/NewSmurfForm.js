import React from "react";
import styled from "styled-components";

import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { addSmurf } from "../actions/smurfActions";

const NewSmurfForm = () => {
   const { register, handleSubmit, errors } = useForm();
   const dispatch = useDispatch();

   const onSubmit = data => dispatch(addSmurf(data));

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <input
            type="text"
            placeholder="Smurf Name"
            name="name"
            ref={register({ required: true })}
         />
         <input
            type="number"
            placeholder="Age"
            name="age"
            ref={register({ required: true, min: 0 })}
         />
         <input
            type="text"
            placeholder="Height"
            name="height"
            ref={register({ required: true })}
         />

         <input type="submit" />
      </form>
   );
};

export default NewSmurfForm;
