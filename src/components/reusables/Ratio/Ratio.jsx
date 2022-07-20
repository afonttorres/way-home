import { useEffect, useState } from 'react';
export const Ratio = ({ ratio }) => {

    const [values, setValues] = useState();
    const [empty, setEmpty] = useState();

    useEffect(() => {
        if (!ratio) return;
        getValues();
    }, [ratio])


    const getValues = () => {
        let value = [];
        for (let i = 1; i <= ratio; i++) {
            value.push(i);
        }
        setValues(value);
        let voids = [];
        for (let i = 1; i <= 5 - ratio; i++) {
            voids.push(i);
        }
        setEmpty(voids);
    }

    console.log(empty)
    return (
        <div className="ratio-cont">
            {values ?
                <>
             {values.map((val, key) => (
                    <i key={val} className="fa-solid fa-star" style={{color:'var(--main-color)'}}></i>
                    ))}
                    {empty.map((e, key)=>(
                        <i key={e} className="fa-regular fa-star" style={{color:'var(--main-color)'}}></i>
                    ))}
                </>
                :
                null}
        </div>
    );
}