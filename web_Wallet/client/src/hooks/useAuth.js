import { useState, useEffect } from 'react';

const useAuth = ()=>{
    const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [loading, setLoading] = useState(true);

   useEffect(()=>{

    const fetchProtectedData = async ()=>{
        const token = localStorage.getItem('authToken');
        if(!token){
            console.log(token)
            setLoading(false);
            return;
        }
        try{
            const response = await fetch('api/dashboard',{
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            
            if(response.ok){
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }


        } catch(error){
            console.error('Error:', error);
            setIsAuthenticated(false);
        } finally{
            setLoading(false); 
        }     
    }
    fetchProtectedData();

   },[])

   return {isAuthenticated,loading};
}

export default useAuth;