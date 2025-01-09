import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";

const ScrollTopo = () => {
    return (
        <ScrollToTop
            smooth 
            color="white" 
            style={{ backgroundColor: '#0081FF' }}
            component={<FaArrowUp 
                            color={"#FFFFFF"}
                            size={15}
                        />}
        />
    );
}

export default ScrollTopo;