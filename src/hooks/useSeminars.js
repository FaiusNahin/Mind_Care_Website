import { useEffect, useState } from "react";

const useSeminars = () => {
    const [seminars, setSeminars] = useState([]);

    useEffect(() => {
        fetch('https://faiusnahin.github.io/therapyapi/seminar.json')

            .then(res => res.json())
            .then(data => setSeminars(data))
    }, [])

    return [seminars];
}

export default useSeminars;