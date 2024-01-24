import { FaHeart } from "react-icons/fa";
const Reviews = () => {
    return ( 
        <section className="m-auto flex w-full items-center justify-around mt-6 mb-10 h-fit bg-[#1B1B1B] text-white  flex-col md:flex-row p-6 gap-6">
                <div className="h-[17rem] w-[17rem] bg-[#6B6B6B] rounded-sm"></div>
               <div className="flex flex-col gap-2 sm:w-1/2">
                    <p className="text-sm text-[#FFF]">Reviews</p>
                    <h1 className="text-3xl">Benefits of buying from brand</h1>
                    <p className="text-sm text-[#FFF]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="grid mt-4 grid-cols-3 gap-6 sm:w-1/2">
                        <div className="flex flex-col items-center justify-center gap-4 w-fit p-4"><FaHeart size={30}/><h3 className="text-sm">Non-GMO</h3></div>
                        <div className="flex flex-col items-center justify-center gap-4 w-fit p-4"><FaHeart size={30}/><h3 className="text-sm">Cruelty-Free</h3></div> 
                        <div className="flex flex-col items-center justify-center gap-4 w-fit p-4"><FaHeart size={30}/><h3 className="text-sm">Gluten-Free</h3></div> 
                        <div className="flex flex-col items-center justify-center gap-4 w-fit p-4"><FaHeart size={30}/><h3 className="text-sm">Keto-Friendly</h3></div> 
                        <div className="flex flex-col items-center justify-center gap-4 w-fit p-4"><FaHeart size={30}/><h3 className="text-sm">Non-Toxic</h3></div> 
                        <div className="flex flex-col items-center justify-center gap-4 w-fit p-4"><FaHeart size={30}/><h3 className="text-sm">100% Organic</h3></div> 
                    </div>
               </div>
        </section>
     );
}
 
export default Reviews;