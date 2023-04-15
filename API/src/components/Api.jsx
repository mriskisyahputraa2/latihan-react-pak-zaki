import { useEffect, useState } from "react";
import axios from "axios";

export default function Api() {
    // data hero
    const [hero, sethero] = useState();
    // proses search
    const [search, setSearch] = useState();
    // search data hero
    const [heroSearch, setheroSearch] = useState();

    const [heroDetail, setHeroDetail] = useState();

    const handleSearch = () => {
        const userInput = search;
        const heroUserInput = hero.filter(
            (item) => item.name.toLowerCase() === userInput
        );
        setheroSearch(heroUserInput);
        console.log(heroUserInput);
    };

    const handleReset = () => {
        setheroSearch();
        setSearch("");
    };

    const handleDetail = () => {
        // setHeroDetail();
        console.log(heroDetail);
    }

    // manggil data API hero
    useEffect(() => {
        axios
            .get("https://bobsburgers-api.herokuapp.com/characters/")
            .then(function (response) {
                // handle success
                sethero(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);

    useEffect((id) => {
        axios
            .get("https://bobsburgers-api.herokuapp.com/characters/" + id)
            .then(function (response) {
                // handle success
                setHeroDetail(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);
    return (
        <>
            <div className="max-w-screen border bg-gray-900 h-auto mx-auto rounded-xl mt-2 mb-0 p-4">
                <h1 className="font-semibold text-center text-5xl text-white p-7 border-b-4 border-white">
                    Belum Tau
                </h1>
                <div className="flex justify-center p-3 ">
                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        className="mt-5 rounded-md w-96 p-1.5"
                        value={search}
                    />
                    <button
                        onClick={() => handleSearch()}
                        className="bg-blue-600 w-20 ml-5 h-10 mt-5 font-bold rounded-xl"
                    >
                        Search
                    </button>
                    <button
                        onClick={() => handleReset()}
                        className="bg-red-600 w-20 h-10 mt-5 font-bold ml-2 rounded-xl"
                    >
                        Reset
                    </button>
                </div>

                <div className="flex flex-wrap mt-4">
                    {/* jika data hero udh ada, tapi user blm search maka tampilkan semua data */}
                    {hero &&
                        !heroSearch &&
                        hero.map((item) => {
                            return (
                                <div className="flex basis-1/3  p-3 h-auto justify-center items-center flex-col bg-gray-700 text-center gap-4 drop-shadow-2xl">
                                    <img
                                        className="w-40 flex justify-end items-center rounded-lg bg-center"
                                        src={item.image}
                                        alt={item.name}
                                    />
                                    <p className="font-bold text-red-600">Name: {item.name}</p>
                                    <p className="font-bold text-blue-600">
                                        Gender: {item.gender}
                                    </p>
                                    <p className="font-bold text-yellow-600">
                                        Hair Color: {item.hairColor}
                                    </p>

                                    <button className="bg-green-600 p-1 font-semibold rounded-md" onClick={handleDetail}>Detail</button>
                                </div>
                            );
                        })}

                    {/* tapi jika user sudah search, tampilkan apa yang data yang disearch */}
                    {heroSearch &&
                        heroSearch.map((item) => {
                            return (
                                <div className="flex basis-1/3  p-3 h-auto justify-center items-center flex-col bg-gray-700 text-center gap-4 drop-shadow-2xl">
                                    <img
                                        className="w-40 flex justify-end items-center rounded-lg bg-center"
                                        src={item.image}
                                        alt={item.name}
                                    />
                                    <p className="font-bold text-red-600">Name: {item.name}</p>
                                    <p className="font-bold text-blue-600">
                                        Gender: {item.gender}
                                    </p>
                                    <p className="font-bold text-yellow-600">
                                        Hair Color: {item.hairColor}
                                    </p>
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
}
