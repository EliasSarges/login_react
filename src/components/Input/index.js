import React, { useRef, useEffect, useState } from "react";
import "./style.css";

export default function Input({ label, password, ...rest }) {
  const inputEl = useRef(null);
  const [typeInput, setTypeIput] = useState(password ? true : false);

  useEffect(() => {
    inputEl.current.type = typeInput ? "password" : "text";
  }, [typeInput]);

  return (
    <div className="input-wrapper">
      <label htmlFor={label} className="label">
        {label}
      </label>

      {password && (
        <div
          className="show-password"
          onClick={() => setTypeIput(!typeInput)}
        />
      )}
      <input id={label} {...rest} ref={inputEl} />
    </div>
  );
}
