/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import Creadit from '../creadits/creadit';
import { BiBookOpen } from "react-icons/bi";
import { BiDollar } from "react-icons/bi";
import { toast } from 'react-toastify';

const Cards = () => {
    const [allCard, setAllCard] = useState([]);
    const [showCard, setShowCard] = useState([]);
    const [CreaditRemaining, setCreaditRemaining] = useState(20);
    const [totalCreaditHrs, setTotalCreadtiHrs] = useState(0);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setAllCard(data))
    }, [])
    const handalButton = (card) => {
        const isClick = showCard.find(item => item.id == card.id);
        let count = card.credit;
        if (isClick) {
            return toast.error("sorry , this already selected", { theme: "colored" })
        }
        else {
            showCard.forEach(item => {
                count = count + item.credit

            })
            const totalRemainig = 20 - count
            if (count >= 21) {
                return toast.warn("sorry , credit hour remaining is over")
            }
            else {
                setTotalCreadtiHrs(count);
                setCreaditRemaining(totalRemainig);
                setShowCard([...showCard, card])
            }

        }
    }

    return (
        <div className="max-w-[1700px] mx-auto lg:px-10 md:px-8 px-4 lg:flex md:flex mt-8 ">
            <div className="lg:w-9/12 md:w-9/12 grid lg:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1 ">

                {
                    allCard.map(card => (
                        <div key={card.id} className='border-2 p-3 rounded-lg shadow-lg bg-slate-200'>
                            <div>
                                <img className='w-full rounded-xl' src={card.img} alt="" />
                            </div>
                            <h3 className='font-semibold text-xl py-2'>{card.name}</h3>
                            <p className=' py-2 text-gray-500'>{card.description}</p>
                            <div className='flex gap-5 justify-between '>
                                <p className='text-gray-500 flex items-center'><span className='text-2xl'><BiDollar></BiDollar></span> Price : {card.Price}</p>
                                <p className='text-gray-500 flex items-center gap-2'><span className='text-2xl'><BiBookOpen></BiBookOpen></span> Credit : {card.credit}hr</p>
                            </div>
                            <div className='text-center mt-4 '>
                                <button onClick={() => handalButton(card)} className='btn text-white font-semibold focus:bg-purple-600 rounded-xl bg-blue-500 w-full py-2'>Select</button>
                            </div>
                        </div>))
                }
                {/* creadit section */}

            </div>
            <div>
                <Creadit showCard={showCard}
                    CreaditRemaining={CreaditRemaining}
                    totalCreaditHrs={totalCreaditHrs}
                ></Creadit>
            </div>
        </div>
    );
};

export default Cards;