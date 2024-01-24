import CardBenefits from "../CardBenefits";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"

const Benefits = () => {
    return ( 
        <section className="m-auto flex flex-col gap-4 w-full items-center justify-center mt-10 pt-10 mb-10">
            <p className="text-sm text-[#676767] text-center">Main benefits subheader</p>
            <h1 className="text-3xl text-center">Benefits Header Here</h1>
            <div className="flex gap-4 mr-4 ml-4 items-center justify-center w-[80%]">
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full "
                >
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <CardBenefits/>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
                </Carousel>
            </div>
        </section>
     );
}
 
export default Benefits;