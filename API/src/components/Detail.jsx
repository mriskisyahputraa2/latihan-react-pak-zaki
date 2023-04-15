import axios from "axios";
import { useEffect } from "react";

function Detail() {

    useEffect((id) => {
        axios
            .get("https://bobsburgers-api.herokuapp.com/characters/" + id)
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


    return (<>

    </>)
}
export default Detail