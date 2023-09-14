/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import './cards.css'
import Creadit from '../creadits/creadit';
const Cards = () => {
    const [allCard, setAllCard] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setAllCard(data))
    }, [])

    return (
        <div className="max-w-[1700px] mx-auto lg:p-14 md:p-6 p-4 lg:flex md:flex ">
            <div className="w-9/12 grid lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1">

                {
                    allCard.map(card => (
                        <div key={card.id} className=''>
                            <div>
                                <img className='w-[300px] rounded-xl' src={card.img} alt="" />
                            </div>
                            <h3 className='font-semibold text-xl py-2'>Introduction to C Programming</h3>
                            <p className=' py-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <div className='flex gap-5 '>
                                <p>Price : 25000</p>
                                <p>Credit : 2hr</p>
                            </div>
                            <div className='text-center mt-4 '>
                            <button className='btn rounded-xl bg-blue-500 py-2 px-32'>Select</button>
                            </div>
                        </div>))
                }
                {/* creadit section */}

            </div>
            <div>
                <Creadit></Creadit>
            </div>
        </div>
    );
};

export default Cards;