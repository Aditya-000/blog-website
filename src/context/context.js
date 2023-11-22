import {createContext,useState } from 'react';
import { baseUrl } from '../baseUrl';


export const AppContext =  createContext();


export default function AppContextProvider({children}){
       const[page,setPage] = useState(1);
       const[posts,setPost] = useState([]);
       const[loading,setLoading] = useState(false);
       const[totalPages,setTotalPages] = useState(6);
       


       async function fetchData(page){
            setLoading(true);
            try{
               const url = `${baseUrl}?page=${page}`;
               const data = await fetch(url);
               const result = await data.json();
               setPage(result.page);
               setPost(result.posts);
               setTotalPages(result.totalPages);
            }
            catch(error){
                console.alert("Error in fetching Data");
                setPage(1);
                setPost([]);
                setTotalPages(null);
            }
            setLoading(false);
       }

       function handleChange(page){
         setPage(page);
         fetchData(page);
       }


       const value = {
          posts,
          setPost,
          page,
          setPage,
          totalPages,
          setTotalPages,
          loading,
          setLoading,
          fetchData,
          handleChange,
       }




     return <AppContext.Provider  value={value}>
                {children}
             </AppContext.Provider>;
}

