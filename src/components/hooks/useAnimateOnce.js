import {useAnimation} from "framer-motion";
import {useEffect, useRef} from "react";

export const useAnimateOnce = (condition) => {
    const controls = useAnimation();
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (condition && !hasAnimated.current) {
            controls.start("visible");
            hasAnimated.current = true;
        }else if( condition && hasAnimated.current){
            controls.set("visible");
        }
    }, [condition, controls]);

    return controls;
}