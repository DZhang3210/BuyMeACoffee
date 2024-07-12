import { useRef, useEffect } from 'react';
import {motion, useInView, useAnimation} from 'framer-motion'
const FadeIn = ({children, delay = 0.25}) => {
    const ref  = useRef(null)
    const isInView = useInView(ref, {once:true})
    const mainControls = useAnimation();
    useEffect(()=>{
        if(isInView){
            mainControls.start("visible")
        }
    },[isInView, mainControls])
    return ( 
        <motion.div
        ref = {ref}
        variants = {{
            hidden:{
                opacity:0,
                y:0
            },visible:{
                opacity:1,
                y:50
            }
        }}
        initial = "hidden"
        animate = {mainControls}
        transition = {{
            duration: 0.25,
            delay
         }}
        >
            {children}
        </motion.div>
    );
}
 
export default FadeIn;