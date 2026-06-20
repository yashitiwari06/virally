const useVerifyToken = async () => {
    const response = await fetch("http://localhost:3000/verify",{
      method : 'GET',
      headers : {
        "Content-Type" : "application/json"
      },
      credentials: "include"
    });

    const json = await response.json();
    return json;
};

export default useVerifyToken;