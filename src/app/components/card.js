import Comment from "./comment";

export default function Card({imageUrl, description, nameAccount, imgAccount, linkFeed, likes, timeStamp, btnLike}){
    let comment = false;
    return (
      <>
    <div className="flex flex-col w-[40%]">
        <div id="headerPost" className = "flex p-3 w-[100%] justify-between">
            <div  className="flex ">
            <img className = "h-8 rounded-full" src={imgAccount} alt="" />
            <div className = "mx-2">
                <h4 className = "text-black text-sm font-bold">{nameAccount}</h4>
                <p className="text-black font-light text-sm">{description}</p>
                <a href="#" className="text-sky-400 text-sm">{linkFeed}</a>
            </div>
            </div> 
            <div className = "flex">
                <p className = "text-gray-300 mx-2 mt-1 text-sm">{timeStamp} min</p>
                <p className = "text-black">...</p>
            </div>
        </div>
        <div className="rounded-md flex justify-center max-h-1/2">
            <img className="rounded-md h-1/2 max-h-[450px] w-[90%]" src={imageUrl} alt="" />
        </div>
        <div className = "ml-4">
            <ul className="text-black flex">
                {btnLike}
                <Comment imageUrl={imageUrl} description={description} nameAccount={nameAccount} imgAccount={imgAccount} linkFeed={linkFeed}/>
                <li><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-refresh"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" /><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" /></svg></li>
                <li><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-send"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 14l11 -11" /><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" /></svg></li>
        </ul>
        </div>
        <div className = "text-gray-300 font-normal ml-4">
            <p>{likes} Me gusta</p>
        </div>
    </div>
    
      </>  
    );
}