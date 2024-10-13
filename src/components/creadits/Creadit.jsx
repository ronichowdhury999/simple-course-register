import PropTypes from 'prop-types'
const Creadit = ({ showCard,CreaditRemaining,totalCreaditHrs,totalPrice}) => {
    // console.log(totalPrice);
    return (
        <div className="border-2 lg:my-0 md:my-0 my-8 lg:ml-8 bg-gray-200 rounded-lg shadow-lg p-4 ">
            <h3 className='text-xl font-bold mt-4 text-blue-500 border-b-2 pb-4 border-black'>Credit Hour Remaining {CreaditRemaining} hr</h3>
            <div className='border mt-4'>
            </div>
            <div>
                <h3 className='font-semibold text-xl '>Course Name</h3>
                {
                    showCard.map((card)=>(
                        <li key={card.id} className='mt-2 text-gray-500'>{card.name}</li>
                    ))
                }
                <div><h3 className='font-semibold text-xl text-gray-500 border-b-2 border-black border-t-2 mt-4 py-4'>Total Credit Hour : {totalCreaditHrs}</h3></div>
                <h3 className='font-semibold text-xl mt-4 text-gray-500'>Total Price :  {totalPrice} USD</h3>
            </div>
        </div>

    );
};
Creadit.propTypes = {
    showCard: PropTypes.array.isRequired,
    CreaditRemaining: PropTypes.number.isRequired,
    totalCreaditHrs: PropTypes.number,
    totalPrice: PropTypes.number,
}
export default Creadit;