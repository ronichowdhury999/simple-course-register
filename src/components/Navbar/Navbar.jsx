

const Navbar = () => {
    return (
        <div className="grid md:grid-cols-4 grid-cols-1 gap-3 justify-center items-center mt-5 px-4">


            <div className="col-span-2">
                <input type="text" placeholder="Search" className="input input-bordered w-full" />
            </div>
            <div className="">
                <button className="btn btn-primary">Search</button>
            </div>
            <div className="">
               <h1 className="text-xl font-semibold font-serif text-center">Course Registration</h1>
            </div>
        </div>
    )
}

export default Navbar