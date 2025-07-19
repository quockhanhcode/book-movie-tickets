import { createSlice } from '@reduxjs/toolkit'
import data from "./../movie/danhSachGhe.json";

const initialState = {
    listData: data,
    chair: [],
}

const movieSlice = createSlice({
    name: 'Movie',
    initialState,
    reducers: {
        addChair: (state, action) => {
            // const newChair = [...state.chair];
            // const chair = action.payload;
            // const index = newChair.findIndex((item) => item.soGhe === chair.soGhe)
            // if (index === -1) {
            //     newChair.push({ ...chair });
            // }
            // state.chair = newChair;

            const chair = action.payload;
            const index = state.chair.findIndex((item) => item.soGhe === chair.soGhe)
            if (index !== -1) { // co ton tai ghe
                state.chair.splice(index, 1);
                return;
            }
            // if (index === -1) {
            // state.chair = state.chair.push({ ...chair });
            // }
            // state.chair = [...state.chair, { ...action.payload, daDat: true }];
            state.chair = [...state.chair, { ...action.payload, daDat: true }];

        },
        deleteChair: (state, action) => {
            // const newChar = [...state.chair];
            state.chair = state.chair.filter((item) => item.soGhe !== action.payload);
        },
        payMovie: (state, action) => {
            state.chair = []; // table rỗng
            const seatBlocked = action.payload; // gọi đến vị trí của từng ghế
            state.listData = state.listData.map((row) => {
                return {
                    ...row,
                    danhSachGhe: row.danhSachGhe.map((item) => {
                        const isBlocked = seatBlocked.find((g) => g.soGhe === item.soGhe)
                        return isBlocked ? { ...item, daDat: true } : item;
                    })
                }
            })
        }
    }

})

export const { addChair, deleteChair, payMovie } = movieSlice.actions

export default movieSlice.reducer;
