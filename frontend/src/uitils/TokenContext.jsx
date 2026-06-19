import { createContext } from "react";

const TokenContext = createContext({
    token: {
        token: localStorage.getItem("token")
    }
});

export default TokenContext;