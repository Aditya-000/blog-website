import { useContext, useEffect } from "react";
import './App.css'
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import { AppContext } from "./context/context";


export default function App() {
  
  const {fetchData} = useContext(AppContext);
  useEffect( () =>{
      fetchData();
   },[]);

  return (
    <div className="">
        <Header/>
        <Blogs/>
        <Pagination/>
    </div>
  );
}
