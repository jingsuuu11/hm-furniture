import React, { useState } from "react"
import "../components/blog/blogDetailPage.css"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { blogCardItem } from "../data"
import Announcement from "../components/Announcement"
import Header from "../components/Header"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

export const BlogDetails = () => {
    const { id } = useParams()
    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
        let blogs = blogCardItem.find((blogs) => blogs.id === parseInt(id))
        if (blogs) {
            setBlogs(blogs)
        }
    }, [])

    return (
        <>
            {blogs ? (

                <div>
                    <Announcement />
                    <Header />
                    
                <section className='singlePage'>

                    
                 
                    <div className='container'>
                        <div className='blogImage'>
                            <img src={blogs.cover} alt='' />
                        </div>
                        <div className='right'>
                            <h1>{blogs.title}</h1>
                            <p>{blogs.desc}</p>
                            <p>{blogs.full}</p>
                            <p>Author: Sunil</p>
                        </div>
                    </div>
                </section>
<Newsletter/>
<Footer/>
                </div>
            ) : null}
        </>
    )
}