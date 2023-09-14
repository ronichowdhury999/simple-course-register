/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import './cards.css'
import Creadit from '../creadits/creadit';
import { BiBookOpen } from "react-icons/bi";
import { BiDollar} from "react-icons/bi";

const Cards = () => {
    const [allCard, setAllCard] = useState([]);
    const [showCard, setShowCard]= useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setAllCard(data))
    }, [])
    const handalButton =(card)=>{
        const sameCardNameCheck=showCard.find(item =>item.id==card.id);
        if(sameCardNameCheck){
           return alert('All Ready Selected')
        }
        else{
            setShowCard([...showCard,card])
        }
    }

    return (
        <div className="max-w-[1700px] mx-auto lg:px-10 md:px-8 px-4 lg:flex md:flex mt-8 ">
            <div className="lg:w-9/12 md:w-9/12 grid lg:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1">

                {
                    allCard.map(card => (
                        <div key={card.id} className=''>
                            <div>
                                <img className='w-full rounded-xl' src={card.img} alt="" />
                            </div>
                            <h3 className='font-semibold text-xl py-2'>{card.name}</h3>
                            <p className=' py-2'>{card.description}</p>
                            <div className='flex gap-5 justify-between '>
                                <button><BiDollar></BiDollar></button>
                                <p> Price : {card.Price}</p>
                                <button><BiBookOpen></BiBookOpen></button>
                                <p>Credit : {card.credit}hr</p>
                            </div>
                            <div className='text-center mt-4 '>
                                <button onClick={()=>handalButton(card)} className='btn text-white font-semibold rounded-xl bg-blue-500 w-full py-2'>Select</button>
                            </div>
                        </div>))
                }
                {/* creadit section */}

            </div>
            <div>
                <Creadit showCard={showCard}></Creadit>
            </div>
        </div>
    );
};

export default Cards;