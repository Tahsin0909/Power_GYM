
const Ratings = ({ totalRatings, ratted }: { totalRatings: number, ratted: number }) => {

    const array = []
    for (let i = 1; i >= totalRatings; i++) {
        console.log(i);
        array.push(i)
    }
    return (
        <div className="text-white">
            {
                array.map((data, idx) => <p key={idx} className={`${data <= ratted ? "text-blue-500": ""}`}>rate</p> )
            }
        </div>
    );
};

export default Ratings;