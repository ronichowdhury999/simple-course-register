import './creadit.css'
import PropTypes from 'prop-types'
const Creadit = ({ showCard,CreaditRemaining,totalCreaditHrs}) => {
    console.log(showCard);
    return (
        <div className="creadit-container pl-8 ">
            <h3 className='text-xl font-bold mt-4 text-blue-500'>Credit Hour Remaining {CreaditRemaining} hr</h3>
            <div className='mb-8 border mt-4'>
            </div>
            <div>
                <h3 className='font-semibold text-xl'>Course Name</h3>
                <div className='mt-4'>
                {
                    showCard.map((card)=>(
                        <li key={card.id} className='mt-2 text-gray-500'>{card.name}</li>
                    ))
                }
                </div>
                <div className='mb-8 border mt-4'>
                </div>
                <div><h3 className='font-semibold text-xl text-gray-500'>Total Credit Hour : {totalCreaditHrs}</h3></div>
                <h3 className='font-semibold text-xl mt-4 text-gray-500'>Total Price : 98000 USD</h3>
            </div>
        </div>


    );
};
Creadit.propTypes = {
    showCard: PropTypes.array.isRequired,
    CreaditRemaining: PropTypes.array.isRequired,
    totalCreaditHrs: PropTypes.array.isRequired,
}
export default Creadit;