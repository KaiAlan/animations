import { useEffect, useState } from "react";

const useDimension = () => {
    const [dimension, setDimension] = useState({width: 0, height:0});

    const UpdateDimension = () => {
        const { innerHeight, innerWidth } = window;
        setDimension({width: innerWidth, height: innerHeight});
    }
    useEffect(() => {
        UpdateDimension();

        window.addEventListener('resize', UpdateDimension);
    },[])

    return dimension;
}

export default useDimension;;