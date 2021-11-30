import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { useEffect } from 'react';
import { connect } from 'react-redux'
import { headercolor } from '../../redux/flex/flex.actions'
import BlogCard from './BlogCard';
import data from './BlogData'
import '../Blog/Blog.css';

function Blog({headercolor,presentcolor}){
    useEffect(()=>{
        headercolor({ blogcolor:"#9953FF"})
                    
       
     },[])
    return(
        <>
            <div className="Blog">
            <Navbar blogstyle={{color:presentcolor.blogcolor,paddingBottom:"0",marginBottom:"0",}}
             bloglinestyle={{marginTop:"6px",paddingTop:"0",borderTop:"1px solid #6200f0",alignSelf:"start",width:"16px"}}
            aboutstyle={{textDecoration:"none"}}  privacystyle={{textDecoration:"none"}}/>
                <div className="heading">
                    <h1>The news that surrounds us is collected here</h1>
                    <p>Read, watch and absorb the content that we publish in our news blog. 
                        Also leave comments and communicate with other users.</p>
                </div>
                <div className="blogs">
                    {data
                        .map((data, index) => (
                            <BlogCard
                                key={index}
                                header={data.header}
                                body={data.body}
                                authorName={data.authorName}
                                date={data.date}
                            />
                        ))}
                </div>
                <Footer/>
            </div>
        </>
    )

}
const MapDispatchToProps=(dispatch)=>({

    //const userinput= {[items]:value}
     //signin:(item)=> dispatch(signin(item)),
    
     headercolor:(item)=>dispatch(headercolor(item))
 
 })
const mapstatetoprops=({flex:{presentcolor}})=>({
 
    presentcolor
   
   

})
export default connect(mapstatetoprops,MapDispatchToProps) (Blog)