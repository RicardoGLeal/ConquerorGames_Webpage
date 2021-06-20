import React, {useEffect} from 'react';
import useStorage from '../hooks/useStorage';
import {motion} from 'framer-motion'

const ProgressBar = ({file, setFile}) => {
    const {url, progress} = useStorage(file);
    //Si ya tiene una url entonces pone a progress bar a que desparezca haciendola null
    useEffect(() => {
        if(url){
            setFile(null);
        }
    }, [url, setFile])

    return (
        <motion.div className="progress-bar" 
            // en caso de no usar motion de la libreria 
            //style={{width: progress+ '%'}}
            initial={{width:0}}
            animate={{width: progress + '%'}}
        ></motion.div>
    )
}

export default ProgressBar;
