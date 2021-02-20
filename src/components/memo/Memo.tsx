import React, { useState } from "react";

function Memo() {
  const [chkArr, setChkArr] = useState([]);
  // const [chkAllArr, setChkAllArr] = useState([]);

  const arrD = [
    { id: 1, title: "클릭1" },
    { id: 2, title: "클릭2" },
    { id: 3, title: "클릭3" },
  ];

  const handleCheck: any = (e, id) => {
    let checked = e.target.checked;
    if (checked) {
      setChkArr([...chkArr, id]);
    } else {
      setChkArr(chkArr.filter((el) => el !== id));
    }
  };

  const handleAllCheck = (e) => {
    let checked = e.target.checked;
    if (checked) {
      const arrAll = [];
      arrD.forEach((el) => arrAll.push(el.id));
      setChkArr(arrAll);
    } else {
      setChkArr([]);
      checked = false;
    }
  };

  console.log(chkArr);
  return (
    <div>
      <ul style={{ display: "flex", flexDirection: "column" }}>
        <label>
          <input
            type="checkbox"
            name="all"
            onClick={(e) => handleAllCheck(e)}
          />
          전체클릭
        </label>
        {arrD.map((data, i) => {
          return (
            <label>
              <input
                type="checkbox"
                name="chk1"
                onClick={(e) => handleCheck(e, data.id)}
                checked={chkArr[i] ? true : false}
              />
              {data.title}
            </label>
          );
        })}
      </ul>
    </div>
  );
}

export default Memo;
