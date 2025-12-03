import { useEffect, useState } from "react"

export default function useIsActive(initialValue){
    const [active, setActive] = useState(initialValue)

    function handleToggleIsActive(){
        setActive(prevActive => !prevActive)
    }

    useEffect(() => {
        let timer
        if (active){
            timer = setTimeout(() => {
                handleToggleIsActive()
            }, 1000);
        }

        return () => {
            clearTimeout(timer)
        }
    },[active])
    
    return {
        active,
        handleToggleIsActive
    }
}