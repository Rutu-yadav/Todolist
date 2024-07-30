import React, { useState } from "react";

function Cal() {
  const [value, setvalue] = useState("");
  function handle(e) {
    setvalue(value + e.target.innerHTML);
  }

  function equal() {
    setvalue(eval(value));
  }
  function AC() {
    setvalue("");
  }
  function del() {
    setvalue(value.toString().slice(0, -1));
  }

  return (
    <div className="calculator">
      <input type="text" placeholder="0" value={value} />
      <div>
        <button className="round" onClick={AC}>
          AC
        </button>
        <button className="round" onClick={del}>
          DEL
        </button>
        <button className="round" onClick={handle}>
          %
        </button>
        <button className="round" onClick={handle}>
          /
        </button>
      </div>
      <div>
        <button className="round" onClick={handle}>
          7
        </button>
        <button className="round" onClick={handle}>
          8
        </button>
        <button className="round" onClick={handle}>
          9
        </button>
        <button className="round" onClick={handle}>
          *
        </button>
      </div>

      <div>
        <button className="round" onClick={handle}>
          4
        </button>
        <button className="round" onClick={handle}>
          5
        </button>
        <button className="round" onClick={handle}>
          6
        </button>
        <button className="round" onClick={handle}>
          -
        </button>
      </div>

      <div>
        <button className="round" onClick={handle}>
          1
        </button>
        <button className="round" onClick={handle}>
          2
        </button>
        <button className="round" onClick={handle}>
          3
        </button>
        <button className="round" onClick={handle}>
          +
        </button>
      </div>

      <div>
        <button className="round" onClick={handle}>
          00
        </button>
        <button className="round" onClick={handle}>
          0
        </button>
        <button className="round" onClick={handle}>
          .
        </button>
        <button className="round" id="equal" onClick={equal}>
          =
        </button>
      </div>
    </div>
  );
}

export default Cal;
