import React from "react";

function memo() {
  return (
    <div>
      <ul style={{ display: "flex", flexDirection: "column" }}>
        <label>
          <input type="checkbox" name="all" />
          전체클릭
        </label>
        <label>
          <input type="checkbox" name="chk1" />
          클릭1
        </label>
        <label>
          <input type="checkbox" name="chk2" />
          클릭2
        </label>
        <label>
          <input type="checkbox" name="chk3" />
          클릭3
        </label>
      </ul>
    </div>
  );
}

export default memo;
