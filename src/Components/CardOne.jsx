import React from 'react'


const CardOne = (props) => {
    return (
        <div className='grid grid-cols-3 justify-items-center mt-4'>
            <div className="bg-grey-400 w-50 h-50 p-5"></div>
            <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                <div>

                </div>
                <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">{props.page}: Writes Upside-Down</h3>
                <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                </p>
            </div>
            <div className=""></div>

        </div>
    )
}

export default CardOne
