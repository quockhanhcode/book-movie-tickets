import React from 'react'
import Chart from './Chair'
import ListChart from './ListChart'

export default function Movie() {
    return (
        <div className='flex flex-wrap justify-between pt-8 pb-8 px-5'>
            <div className='w-[55%]'>
                <h1 className='text-[#E0BC00] uppercase text-5xl font-serif text-center'>đặt vé xem phim</h1>
                <div className="television"></div>
                <Chart />
            </div>
            <div className='w-[40%]'>
                <ListChart />
            </div>
        </div>
    )
}
