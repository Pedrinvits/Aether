const Footer = () => {
    return ( 
        <footer className="h-14 w-full flex items-center justify-center bg-black">
            <span className="flex items-center gap-1.5 text-xs sm:text-sm text-white">
                <strong className="font-medium hover:text-gray-400">{`Pedrinvits © ${new Date().getFullYear()}`}</strong>
            </span>
        </footer>
     );
}
 
export default Footer;