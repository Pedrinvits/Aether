type MainCardprops = {
    title : string,
    description ?: string
}

const CardMainBenefits = ({title} : MainCardprops) => {
    return (
        <div className="flex flex-col h-fit p-4 gap-4 w-[90%] items-center justify-center sm:w-1/4">
            <h1 className="text-center text-2xl">{title}</h1>
            <p className="text-center text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora recusandae accusantium nihil consequatur suscipit soluta sapiente deserunt, labore, veritatis magnam maiores veniam porro ut ex quae in. Sapiente, in porro.</p>
            <button className="p-2 bg-black rounded-sm text-white w-1/2">Get Started</button>
        </div>
    );
}

export default CardMainBenefits;