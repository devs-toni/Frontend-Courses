/* eslint-disable no-throw-literal */
import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setdata] = useState(null)
    const [isPending, setisPending] = useState(true)
    const [error, seterror] = useState(null)

    useEffect(() => {
        const getData = async (url) => {

            try{
                let resp = await fetch (url);
                if (!resp.ok) {
                    throw {
                        err:true, 
                        status:resp.status, 
                        statusText:!resp.statusText ? "Ocurrió un error" : resp.statusText};
                } 
               let data = await resp.json();

               setisPending(false);
               setdata(data);
               seterror({err:false})
            }catch(err){
                setisPending(true);
                seterror(err);
            }
        };   
        getData(url);    
      
    }, [url]);
    return {data, isPending, error};
}
