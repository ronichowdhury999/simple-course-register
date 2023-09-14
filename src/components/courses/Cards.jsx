/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import './cards.css'
import Creadit from '../creadits/creadit';
import { BiBookOpen } from "react-icons/bi";
import { BiDollar} from "react-icons/bi";

const Cards = () => {
    const [allCard, setAllCard] = useState([]);
    const [showCard, setShowCard]= useState([]);
    const [CreaditRemaining,setCreaditRemaining]= useState(0);
    const [totalCreaditHrs ,setTotalCreadtiHrs]= useState(0);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setAllCard(data))
    }, [])
    const handalButton =(card)=>{
        const sameCardNameCheck=showCard.find(item =>item.id==card.id);
        let count = card.credit;
        if(sameCardNameCheck){
           return alert('All Ready Selected')
        }
        else{
            showCard.forEach(item =>{
                count= count+item.credit

            })
            const totalRemainig = 20-count
            if(count >= 21){
                return alert('Credit Hour End')
            }
            else{
                setTotalCreadtiHrs(count);
            setCreaditRemaining(totalRemainig);
            if(totalRemainig <= 1 ){
               return alert('No remainnig')
             }
            setShowCard([...showCard,card])
            }
            
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
                            <p className=' py-2 text-gray-500'>{card.description}</p>
                            <div className='flex gap-5 justify-between '>
                                <button><BiDollar></BiDollar></button>
                                <p className='text-gray-500'> Price : {card.Price}</p>
                                <button><BiBookOpen></BiBookOpen></button>
                                <p className='text-gray-500'>Credit : {card.credit}hr</p>
                            </div>
                            <div className='text-center mt-4 '>
                                <button onClick={()=>handalButton(card)} className='btn text-white font-semibold rounded-xl bg-blue-500 w-full py-2'>Select</button>
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