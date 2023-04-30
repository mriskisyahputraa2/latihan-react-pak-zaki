function SelectCard({ bg, text }) {
    return <>
        <div className="relative">
            <img className="w-full h-full object-cover" src={bg} alt={text} />
            <div className="absolute top-0 left-0 w-full h-full bg-gray-900/30">
                <p className="absolute bottom-4 left-4 text-2xl text-white ">{text}</p>
            </div>
        </div>
    </>
}
export default SelectCard