import { Check } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../ui/accordion"
  
const FaQs = () => {
    return ( 
        <section className="m-auto w-full flex justify-center items-center mt-5 mb-7 flex-col h-[600px]">
            <div className="flex items-center justify-center flex-col mt-6 mb-6">
                <h1 className="text-4xl m-4">FAQs</h1>
                <p className="text-xl">Have some questions?  We’ve got answers!</p>
            </div>
           <div className="flex border border-black flex-col p-6 w-[90%] sm:w-[70%]">
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
                </Accordion>
           </div>
            <div className="flex flex-col mt-8 gap-4">
                <button className="p-2 bg-black rounded-sm text-white w-full">Get Started</button>
                <div className="flex justify-center items-center"><Check/><p className="text-sm text-[#121212]">Guarantee Text Here</p></div>
            </div>
        </section>
     );
}
 
export default FaQs;