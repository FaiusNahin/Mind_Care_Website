import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://faiusnahin.github.io/mindcareAPI/therapyDetails.json')

            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return [services, setServices];
}

export default useServices;