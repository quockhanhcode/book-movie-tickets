import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChair, deleteChair } from "../app/MovieReducer";

export default function Chair() {
  const listData = useSelector((state) => state.movie.listData);
  const listChair = useSelector((state) => state.movie.chair);
  const dispatch = useDispatch();
  // console.log(listChair);

  // const handleCheck = (e, ghe) => {
  //   if (e.target.checked) {
  //     dispatch(addChair(ghe))
  //   }
  //   else {
  //     dispatch(deleteChair(ghe.soGhe))
  //   }
  // }

  return (
    <div className="tbl_table pt-14 w-full table mx-auto">
      <table className="w-full">
        <tbody>
          {listData.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item.hang}</td>
                {item.danhSachGhe.map((ghe, j) => {
                  return (
                    <td key={j}>
                      <span>{ghe.soGhe}</span>
                      <input
                        type="checkbox"
                        defaultValue={ghe.soGhe}
                        className={`${ghe.daDat === true ? "seated" : ""}`}
                        disabled={ghe.daDat}
                        checked={listChair.some(item => item.soGhe === ghe.soGhe)}
                        // onChange={(e) => handleCheck(e, ghe)}
                        onChange={() => dispatch(addChair(ghe))}
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
