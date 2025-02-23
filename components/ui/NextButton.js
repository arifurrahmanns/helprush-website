import { useEffect } from "react";


const NextButton = ({ swiperRef }) => {
    useEffect(() => {
        console.log(swiperRef);
    }, [swiperRef]);
    return (
        <button
            onClick={() => swiperRef.current?.slideNext()}
            className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 transition"
        >
            Next
        </button>
    );
};

export default NextButton;