import { useEffect, useState } from "react";

const useCheckMobileScreen = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const [height, setHeight] = useState(window.innerHeight);

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return {
        isMobileScreen: (width <= 768),
        isHorizontal: (width > height),
        width,
        height
    };
}

export default useCheckMobileScreen