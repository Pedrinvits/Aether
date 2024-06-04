import { Star,Check  } from 'lucide-react';
import ShinyButton from '../magicui/shiny-button';
import WordRotate from '../magicui/word-rotate';
const Cta = () => {
    return (
        <section className="m-auto w-full flex justify-center items-center mt-5 mb-7">
            <div className="flex flex-col gap-6 items-center">
                <h1 className="text-4xl text-center m-4">Write a strong, <br/> bold heading here</h1>
                <div className="flex gap-2 justify-center items-center flex-col">
                    <div className='flex'><Star /><Star /><Star /><Star /><Star /></div>
                    <div>
                        <WordRotate
                        className="text-4xl font-bold text-black dark:text-white"
                        words={["Rated", "by", "1000+ people"]}
                        />
                        {/* <p className="text-sm text-[#121212]">Rated 4.9/5.0 by 1000+ people</p> */}
                    </div>
                </div>
                <p className="text-sm text-[#121212] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <ShinyButton text="Get Started" />
                <div className="flex justify-center items-center">
                  
                </div>
            </div>
        </section>
    );
}

export default Cta;