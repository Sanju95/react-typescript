import React, { useReducer } from "react";

export default function UseReducerHook() {
  const reducer = (state: number, action: string) => {};

  //const [state, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <button>+</button>
      <button>-</button>
      <button>Reset</button>
    </>
  );
}
//https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes
