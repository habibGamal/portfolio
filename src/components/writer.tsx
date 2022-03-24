import { useEffect, useState } from "react";

export default function Writer({ value }: { value: string }) {
    const [letter, setLetter] = useState(value[0]);
    useEffect(() => {
        const go = setInterval(() => {
            if (value.length > letter.length) {
                setLetter(oldValue => oldValue + value[oldValue.length])
            } else {
                clearInterval(go);
            }
            console.log(value.length, letter.length);
        }, 20)
        return ()=>{
            clearInterval(go);
        }
    }, [letter.length,value])

    return (
        <>{letter}</>
    )
}