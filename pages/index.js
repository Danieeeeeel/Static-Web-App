import React, { useEffect,useState } from "react";
import Router from 'next/router'
const Home = ()=>{
    const [loaded,setLoaded] = useState(false)
    useEffect(() => {
        const {pathname} = Router
        if(pathname == '/' ){
            Router.push('/main')
        }else{
            setLoaded(true)
        }
      },[]);

    if(!loaded){
        return <div></div> //show nothing or a loader
    }
    return ( 
        <p>
            You will see this page only if pathname !== "/" , <br/>
        </p> 
    )
}
export default Home