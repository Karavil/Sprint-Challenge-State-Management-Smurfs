import {
   SMURFS_UPDATE,
   SMURFS_CLEAR,
   SMURFS_ERROR,
   SMURFS_LOADING,
   NEW_SMURF,
   DEL_SMURF
} from "../actions/smurfActions";

const initialState = {
   smurfs: [],
   loading: false,
   error: false
};

const smurfReducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case SMURFS_UPDATE:
         return {
            ...state,
            smurfs: payload
         };
      case SMURFS_CLEAR:
         return {
            ...state,
            smurfs: []
         };
      default:
         return state;
   }
};

export default smurfReducer;
