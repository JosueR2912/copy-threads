"use client"; 

import { useState } from "react";
import Crear from "./crear"
import Card from "./card"
import Likes from "./likes";
import Articulos from "./articulos";
import Videocard from "./cardVideo";




export default function Main({videos, setVideos}){
    const isLogin = true;
    const [publicLikes, setPublicLike] = useState(0)
    const [posts, setPost] = useState([
        {
            id: 1,
            nameAccount: "Dolartoday",
            imgAccount: "https://yt3.googleusercontent.com/ytc/AIdro_lzApYBGGWyp5mKTWkSHAkUrMXy0PMESDfdqJNTIzmEP3M=s900-c-k-c0x00ffffff-no-rj",
            linkFeed : "dolartoday.com",
            description: "",
            imageUrl: "https://pbs.twimg.com/media/GWVKmEdWEAAkZE-.jpg",
            likes: 24,
            timeStamp :"7",
            liked: false
        },
        {
            id: 2,
            nameAccount: "perthdudefood",
            imgAccount: "https://preview.redd.it/fx9um0vxb9fc1.jpeg?auto=webp&s=6136428fffcad667f2cb61bfda57622b1f70b713",
            linkFeed : "",
            description: "Tacos",
            imageUrl: "https://www.elespectador.com/resizer/v2/CDIXG74RSRBVLGJQF6UJSYVOHQ.jpg?auth=e1a342f763c6bcbb828016d3e5f0cb505755c1601803315a9e1ae9cf82a3df00&width=920&height=613&smart=true&quality=60", 
            likes: 67,
            timeStamp :"6",
            liked: false
        },
        {
            id: 3,
            nameAccount: "Dolartoday",
            imgAccount: "https://yt3.googleusercontent.com/ytc/AIdro_lzApYBGGWyp5mKTWkSHAkUrMXy0PMESDfdqJNTIzmEP3M=s900-c-k-c0x00ffffff-no-rj",
            linkFeed : "dolartoday.com",
            description: "El tribunal supremo de brasil ordena la suspencion...",
            imageUrl: "https://pbs.twimg.com/media/GWRLyKGXcAEWkQy.jpg",
            likes: 50,
            timeStamp :"24",
            liked: false
        },
        {
            id: 4,
            nameAccount: "MemesRamdon",
            imgAccount: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeXBRw-dMHXm2EfZ_6XWutwlUa47myTstS2A&s",
            linkFeed : "",
            description: "",
            imageUrl: "https://pm1.aminoapps.com/7702/f0d24b239347880c11722cefea9c6cfc996bfce6r1-334-343v2_uhq.jpg",
            likes: 67,
            timeStamp: "2",
            liked: false
        },
        {
            id: 5,
            nameAccount: "MindJournal",
            imgAccount: "https://i.pinimg.com/originals/3b/eb/54/3beb545bf40c968e04103ccf423dcb88.jpg",
            linkFeed : "MindJournal.com",
            description: "",
            imageUrl: "https://i.pinimg.com/236x/5f/36/55/5f36556feed042a5f344e9e0b3f22302.jpg",
            likes: 8,
            timeStamp: "5",
            liked: false
        },
        {
            id: 6,
            nameAccount: "Picket",
            imgAccount: "https://pbs.twimg.com/profile_images/1604883849619640328/TM0VhQjU_400x400.jpg",
            linkFeed : "",
            description: "",
            imageUrl: "https://irp.cdn-website.com/9bf31443/dms3rep/multi/Acts+of+Kindness+Day+2022+aneemo+green+v2.png",
            likes: 8,
            timeStamp: "5",
            liked: false

        },
        {
            id: 7,
            nameAccount: "Armando Fuentes",
            imgAccount: "https://st.depositphotos.com/2589681/3971/v/450/depositphotos_39712689-stock-illustration-carpenter.jpg",
            linkFeed : "",
            description: "Marca y traza las piezas para dimensionar la forma y tamaño requerido",
            imageUrl: "https://ecohabitar.org/wp-content/uploads/2019/12/original.jpg",
            likes: 8,
            timeStamp: "5",
            liked: false

        }

    ]);

    const handleLike = (id) => {
        setPost((prevPosts) =>
            prevPosts.map((post) => {
                if (post.id === id) {
                    return {
                        ...post,
                        likes: post.liked ? post.likes - 1 : post.likes + 1,
                        liked: !post.liked,
                    };
                }
                return post;
            })
        );
    };    
   

    return (        
        <>
        <div className= "flex flex-col items-center bg-white">
        <Crear/>
        {/* {posts.map(post => (
                isLogin || post.id !== 1 ? (
                    <Card 
                        key={post.id} 
                        imageUrl={post.imageUrl} 
                        nameAccount={post.nameAccount} 
                        imgAccount={post.imgAccount} 
                        description={post.description} 
                        linkFeed={post.linkFeed} 
                        timeStamp={post.timeStamp} 
                        likes={post.likes}
                        liked = {post.liked}
                        btnLike={<li onClick={() =>{ handleLike(post.id)
                           !post.liked ? setPublicLike(publicLikes + 1) :
                            setPublicLike(publicLikes - 1); 
                        } }><svg className={post.liked ? "hover:fill-white cursor-pointer": "hover:fill-red-600 cursor-pointer"} xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill={post.liked ? "red": "none"}  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg></li>}
                        
                    />
                ) : null
            ))} */}
            <Articulos setPublicLike={setPublicLike} publicLikes={publicLikes}/> 
        <Likes like={publicLikes} />
        </div>
        </>
    )
}