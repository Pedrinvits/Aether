import { SiNike,SiStarbucks,SiMcdonalds    } from "react-icons/si";
const Logos = () => {
    return ( 
        <section className="w-full bg-black flex gap-4  h-[100px] items-center justify-evenly">
            <h1 className="text-white sm:text-3xl text-sm p-1 w-full sm:w-fit text-center">As Feature in</h1>
            <div className="flex gap-[40px] items-center justify-center mr-4">
                <SiNike  color="white" size={50}/><SiStarbucks  color="white" size={50}/><SiMcdonalds  color="white" size={50}/>
            </div>
        </section>
     );
}
 
export default Logos;