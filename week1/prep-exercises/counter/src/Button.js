import React from 'react';

function Button({ handleAddCount }) {
  return (
    <button onClick={handleAddCount }>
      Add 1!
    </button>
  );
}

export default Button;