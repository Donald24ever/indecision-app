import React from 'react';

//caling the new prop that has been passed down in Onclick and disabled
//by creating stateless functional components
const Action = (props) => {
  return (
    <div>
      <button
        className="big-button"
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  );
};


export default Action;
