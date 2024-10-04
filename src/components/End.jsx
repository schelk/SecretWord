import React from "react";

const End = ({ retry }) => {
  return (
    <div>
      <button onClick={retry}>Tentar novamente</button>
    </div>
  );
};

export default End;
