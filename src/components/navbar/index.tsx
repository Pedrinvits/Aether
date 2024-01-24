const Navbar = () => {
    return ( 
        <>
            <div className=" bg-black w-full text-white p-3 text-center text-sm">
            Get 50% off today - Limited Time Only
            </div>
            <div className="border-black border-b-[2px] flex items-center h-16">
                <div className="justify-end w-1/2 flex">
                    LOGO
                </div>
                <div className="flex w-1/2 justify-end p-4">
                    <button className=" border-black border shadow-standard p-2 rounded-sm">Get Started</button>
                </div> 
            </div>
        </>

     );
}
 
export default Navbar;