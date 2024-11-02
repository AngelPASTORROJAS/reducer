import { useEffect, useState } from "react";

const initialState = {
  min:1,
  max: 100,
  number,
  number_searcher,
  nbessai:0,
  trouver:false,
  message:this.trouver?"non":"oui"
}

const mesage= {
  trouver: "Bravo, vous avez trouvé en " + initialState.number + "essais",
  non_trouver: "Le nombre doit être compris entre "+initialState.min+" et "+initialState.max
}

const reducer = (state, action) => {
  switch (action.type) {
    case "incr":
      return { ...state, count: state.count + 1 };
    default:
      break;
  }
};

const Form = ({ random }) => {
  initialState.number_searcher = parseInt(random)
  const [state, dispacth] = useReducer(reducer, initialState);

  useEffect( ()=>{
  }, initialState)

  return (
    <>
      Counter : {state.number}
      <button onClick={() => dispacth({ type: "decr" })}>-</button>
    </>
  );
};

export default Form;
