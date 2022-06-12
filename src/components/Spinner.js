import { useState } from "react";
import { css } from "@emotion/react";
import SquareLoader from "react-spinners/SquareLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: #667799;
`;

const Spinner = () => {
  let [color, setColor] = useState("#608dfd");

  return (
    <div
      className="sweet-loading"
      style={{
        display: "flex",
        marginTop: "20%",
        justifyContent: "center",
      }}
    >
      <SquareLoader color={color} css={override} size={50} />
    </div>
  );
};

export default Spinner;
