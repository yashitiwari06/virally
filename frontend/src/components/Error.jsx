import { useRouteError } from "react-router-dom";

const Error = () => {

    const err = useRouteError();
    
    return (
        <>
            <h1 className="flex justify-center items-center text-2xl font-bold p-7">Error : {err.statusText}</h1>
            <h1 className="flex justify-center items-center text-xl font-bold ">Status Code : {err.status}</h1>
            <h1 className="flex justify-center items-center text-xl font-bold ">Error Text : {err.data}</h1>
        </>

    )
}

export default Error