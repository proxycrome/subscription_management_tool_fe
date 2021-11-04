import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import BlogCard from './BlogCard';
import data from './BlogData'
import '../Blog/Blog.css';

function Blog(){
    return(
        <>
            <div className="Blog">
                <Navbar/>
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
export default Blog