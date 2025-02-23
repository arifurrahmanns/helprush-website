const PrevButton = ({ swiperRef }) => {
    return (
        <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition"
        >
            Prev
        </button>
    );
};

export default PrevButton;