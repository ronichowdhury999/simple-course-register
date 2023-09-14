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
       <div className="max-w-[1300px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">

            {
            allCard.map(card => (
                <div key={card.id} className=''>
                    <div>
                        <img src={card.img}alt="" />
                    </div>
                    <h3>Introduction to C Programming</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <div className='flex gap-5 '>
                        <p>Price : 25000</p>
                        <p>Credit : 2hr</p>
                   </div>
                   </div>))
                }
                {/* creadit section */}
                <div>
                    
                <Creadit></Creadit>
                </div>
        </div>
    );
};

export default Cards;