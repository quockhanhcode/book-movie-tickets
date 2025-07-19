import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteChair, payMovie } from '../app/MovieReducer';

export default function ListChart() {
  const listChair = useSelector((state) => state.movie.chair);
  const totalPrice = listChair.reduce((tong, ghe) => tong + ghe.gia, 0);
  const dispatch = useDispatch();

  return (
    <>
      <h2 className='text-white uppercase text-5xl font-serif text-center'>Danh sách ghế</h2>
      <div className="list">
        <ul>
          <li>
            <span className='square bg-[#FFDE21]'></span>
            <span className='txt'>ghế đã đặt</span>
          </li>
          <li>
            <span className='square bg-[#0BDA51]'></span>
            <span className='txt'>ghế đang chọn</span>
          </li>
          <li>
            <span className='square bg-white'></span>
            <span className='txt'>ghế chưa đặt</span>
          </li>
        </ul>
      </div>
      <div className="tabl2">
        <table>
          <tbody>
            <tr>
              <th>số ghế</th>
              <th>giá </th>
              <th>hủy</th>
            </tr>
            {
              listChair.map((item, index) => {
                return <tr key={index}>
                  <td>{item.soGhe}</td>
                  <td>{item.gia}</td>
                  <td><button
                    onClick={() => dispatch(deleteChair(item.soGhe))}
                    type="button" className="cursor-pointer focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Hủy</button></td>
                </tr>
              })
            }

            <tr>
              <td>tổng tiền</td>
              <td>{`${totalPrice} VND`}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        onClick={() => dispatch(payMovie(listChair))}
        className="table mt-8 mx-auto cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Xác nhận
      </button>
    </>
  )
}
