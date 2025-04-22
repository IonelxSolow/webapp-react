import { createContext, useState, useContext, useEffect } from "react";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    
    const loginUrl = "http://localhost:3000/login";
    const [user, setUser] = useState(null);
    
    


        // Check if user is already logged in
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if(storedUser){
            const [email, password] = JSON.parse(storedUser);

            login(email, password)
             .then(data => {
                if(data.user){
                    setUser(JSON.parse(storedUser)) // '{username: "John"}' => {username: "John}

                }
             })


        }


    },[]);

    function login(email, password){

       
        return fetch(loginUrl,{
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({email, password})
        })
        .then(res => res.json())
        .then(data => {
            if(data.user) setUser(data.user);

            // Store user in local storage
            localStorage.setItem("user", JSON.stringify(data.user));
            return data;
        })

        
    }

    function logout(){
        setUser(null);
        localStorage.removeItem('user');
        return true;
        
        

    }


    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )

}



export function useAuth() {
    return useContext(AuthContext);

}