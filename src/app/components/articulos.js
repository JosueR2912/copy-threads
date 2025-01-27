'use client';
import { useState, useEffect } from "react";
import Card from "./card";
import Videocard from "./cardVideo";
import { useQuery } from './usequery';


export default function Articulos({ setPublicLike, publicLikes,}) {
    const { query, setQuery } = useQuery();
    const [loading, setLoading] = useState(true);
    const [videos, setVideos] = useState([]);
    const [photos, setPhotos] = useState([]);



    const getSrc = async () => {
        setLoading(true);
        try {
            const photoResponse = await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
                headers: {
                    'Authorization': 'Qlsz1oGFTPCfFkJdSwTdiiPoB6Ps3IdfIipBqG1LQbAuiarjp15oSXCT',
                }
            });
            const photoData = await photoResponse.json();
            setPhotos(photoData.photos.map(photo => ({
                ...photo,
                likes: Math.round(Math.random() * 100 + 1),
                liked: false, 
            })));

            const videoResponse = await fetch(`https://api.pexels.com/videos/search?query=${query}`, {
                headers: {
                    'Authorization': 'Qlsz1oGFTPCfFkJdSwTdiiPoB6Ps3IdfIipBqG1LQbAuiarjp15oSXCT',
                }
            });
            const videoData = await videoResponse.json();
            setVideos(videoData.videos.map(video => ({
                ...video,
                likes: Math.round(Math.random() * 100 + 1),
                liked: false, 
            })));
        } catch (error) {
            console.error("Error fetching data:", error);
            alert("Error fetching data:", error)
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getSrc();
    }, [query]);

    const handleLike = (id) => {
        setPhotos(prevPhotos =>
            prevPhotos.map(photo => {
                if (photo.id === id) {
                    const newLikes = photo.liked ? photo.likes - 1 : photo.likes + 1;
                    return { ...photo, likes: newLikes, liked: !photo.liked };
                }
                return photo;
            })
        );
    };


    const handleLikeVideo = (id) => {
        setVideos(prevVideos =>
            prevVideos.map(video => {
                if (video.id === id) {
                    const newLikes = video.liked ? video.likes - 1 : video.likes + 1;
                    return { ...video, likes: newLikes, liked: !video.liked };
                }
                return video;
            })
        );
    };

    return (
        <>
            {photos.map(photo => (
                <Card
                    key={photo.id}
                    imageUrl={photo.src.original}
                    nameAccount={photo.photographer}
                    imgAccount="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                    description={photo.alt}
                    linkFeed={photo.photographer_url}
                    liked={photo.liked}
                    likes={photo.likes}
                    btnLike={
                        <li onClick={() => {handleLike(photo.id);  !photo.liked ? setPublicLike(publicLikes + 1) :
                            setPublicLike(publicLikes - 1); } }>
                            <svg className={photo.liked ? "hover:fill-white cursor-pointer" : "hover:fill-red-600 cursor-pointer"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={photo.liked ? "red" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                            </svg>
                        </li>
                    }
                />
            ))}
            {videos.map(video => (
                <Videocard
                    key={video.id}
                    videoUrl={video.video_files[0].link}
                    nameAccount={video.user.name}
                    imgAccount="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                    description={"For more videos, visit my profile " + video.user.name}
                    linkFeed={video.user.url}
                    liked={video.liked}
                    likes={video.likes}
                    btnLike={
                        <li onClick={() => {handleLikeVideo(video.id);
                            !video.liked ? setPublicLike(publicLikes + 1) :setPublicLike(publicLikes - 1)
                        }}>
                            <svg className={video.liked ? "hover:fill-white cursor-pointer" : "hover:fill-red-600 cursor-pointer"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={video.liked ? "red" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                            </svg>
                        </li>
                    }
                />
            ))}
        </>
    );
}
