import axios from "axios";

const smurfs = axios.create({
   baseURL: "http://localhost:3333"
});

export const SMURFS_UPDATE = "UPDATE_SMURFS";
export const SMURFS_CLEAR = "CLEAR_SMURFS";
export const SMURFS_ERROR = "SMURF_ERROR";
export const SMURFS_LOADING = "SMURFS_LOADING";

export const getSmurfs = () => dispatch => {
   dispatch({ type: SMURFS_LOADING, payload: true });
   dispatch({ type: SMURFS_ERROR, payload: false });
   smurfs
      .get("/smurfs")
      .then(res => {
         dispatch({ type: SMURFS_LOADING, payload: false });
         dispatch({ type: SMURFS_UPDATE, payload: res.data });
      })
      .catch(err => {
         dispatch({ type: SMURFS_LOADING, payload: false });
         dispatch({ type: SMURFS_ERROR, payload: true });
      });
};

export const addSmurf = ({ name, age, height }) => dispatch => {
   smurfs
      .post("/smurfs", {
         name,
         age,
         height
      })
      .then(res => {
         dispatch(getSmurfs());
      })
      .catch(err => {
         console.log("Error adding smurf", err);
      });
};

export const delSmurf = id => dispatch => {
   smurfs
      .delete("/smurfs/" + id)
      .then(res => dispatch(getSmurfs()))
      .catch(err => console.log("Error deleting smurf", err));
};
