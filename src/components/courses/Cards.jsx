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
    const [totalPrice ,setTotalPrice]= useState(0);
    console.log(totalPrice);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setAllCard(data))
    }, [])

    const handalButton = (card) => {
        console.log(card);
        const isClick = showCard.find(item => item.id == card.id);
        let count = card.credit;
        let price = card.Price;

        console.log(count);
        if (isClick) {
            return toast.error("sorry , this already selected", { theme: "colored" })
        }else {
            showCard.forEach(item => {
                count = count + item.credit
                price = price + item.Price
            })
            const totalRemainig = 20 - count
            if (count >= 21) {
                return toast.warn("sorry , credit hour remaining is over")
            }
            else {
                setTotalCreadtiHrs(count);
                setCreaditRemaining(totalRemainig);
                setTotalPrice(price)
                setShowCard([...showCard, card])
            }
        }
    }

    return (
        <div className="px-4 lg:flex mt-8 ">
            <div className="lg:w-9/12  grid md:grid-cols-3 gap-6 grid-cols-1 ">

                {
                    allCard.map(card => (
                        <div  onClick={() => handalButton(card)} key={card.id} className='border-2 p-5 rounded-lg shadow-lg bg-slate-200 cursor-pointer hover:border-blue-600'>
                            <div>
                                <img className='w-full rounded-xl' src={card.img} alt="" />
                            </div>
                            <h3 className='font-semibold text-xl py-2'>{card.name}</h3>
                            <p className=' py-2 text-gray-500'>{card.description.slice(0,130)}..</p>
                            <div className='flex gap-5 justify-between '>
                                <p className='text-gray-500 flex items-center'><span className='text-2xl'><BiDollar></BiDollar></span> Price : {card.Price}</p>
                                <p className='text-gray-500 flex items-center gap-2'><span className='text-2xl'><BiBookOpen></BiBookOpen></span> Credit : {card.credit}hr</p>
                            </div>
                        </div>))
                }
                {/* creadit section */}

            </div>
            <div>
                <Creadit showCard={showCard}
                    CreaditRemaining={CreaditRemaining}
                    totalCreaditHrs={totalCreaditHrs}
                    totalPrice ={totalPrice}
                ></Creadit>
            </div>
        </div>
    );
};

export default Cards;