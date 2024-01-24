
import CardMainBenefits from "../CardMainBenefits";

const MainBenefits = () => {
    return ( <section className="m-auto flex flex-col gap-4 w-full items-center justify-center mt-6 mb-10">
    <p className="text-sm text-[#676767] text-center">Main benefits subheader</p>
    <h1 className="text-3xl text-center">Main Benefits Header Here</h1>
    <div className="flex gap-4 mr-4 ml-4 items-center justify-center flex-col sm:flex-row">
        
        {Array.from({ length: 3 }).map((_,) => (
            <CardMainBenefits title={'Title'}/>
        ))}
    </div>
</section> );
}
 
export default MainBenefits;