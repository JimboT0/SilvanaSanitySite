import React from 'react'

function hero() {
    return (
        <div>
            <div className="w-[1440px] h-[38px] bg-indigo-800 flex justify-center items-center text-center">
                <div className="w-[161.10px] text-stone-300 text-base font-semibold leading-7">Get In Touch</div>
                <div className="w-[161.10px] text-center text-stone-300 text-base font-semibold leading-7">+27 71 638 3023</div>
                <div className="w-[161.10px] text-right text-stone-300 text-base font-semibold leading-7">email@email.com</div>
            </div>
            <div className="w-[1440px] h-[92px] bg-purple-50 border-b border-indigo-300 flex justify-center items-center text-center">
                <img className="w-[182px] h-[73px]" src="https://via.placeholder.com/182x73" />
                <div className="w-[135px] h-[33px] text-center text-neutral-700 text-[19px] font-semibold">About us</div>
                <div className="w-[135px] h-[33px] text-center text-neutral-700 text-[19px] font-semibold">Services</div>
                <div className="w-[135px] h-[33px] text-center text-neutral-700 text-[19px] font-semibold">Catalogue</div>
                <div className="w-[135px] h-[33px] text-center text-neutral-700 text-[19px] font-semibold">Contact us</div>
            </div>
            

        </div>
    )
}

export default hero
