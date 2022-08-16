import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import GalleryService from '../../Services/GalleryService';
import "../Gallery/movieItem.scss"

function MovieItem() {

   let params = useParams();
   const [gallery,setGallery] = useState([]);
   const [item, setItem] = useState(null)
   const service = new GalleryService();
   const navigate = useNavigate();

   useEffect(() => {
      service.get().then(data => {
         setGallery(data)
      })
   }, []);

   useEffect(() => {
      service.getById(params.id).then(data => setItem(data))
   }, [params.id]);

   function Watch() {
      item.isWatched = "Yes";
      service.put(item);
      setItem(item);
      navigate("/"+parseInt(item.id))
   }

   function GoToEditPage(){
      navigate("/EditPage/"+parseInt(item.id))
   }
   
   function Next() {
      
      if(parseInt(item.id) === gallery.length){
         navigate("/" + parseInt(item.id))
      }
      else{
         navigate("/" + parseInt(item.id + 1))
      }
   }

   function Prev() {

      if (item.id === 1) {
         navigate("/" + 1)
      }
      else {
         navigate("/" + parseInt(item.id - 1))
      }
   }

   return (
      <div className='item'>
         {item && <figure key={item.id}>
            <a onClick={() => Prev()}>Previuose Movie</a>
            <div className='details'>
               <h1>{item.title}</h1>
               <img src={item.src} alt={item.title} />
               <p><span>Synopsis :  </span></p>
               <p>{item.Synopsis}</p>
               <p><span>Publication Date :  </span></p>
               <p>{item.PublishDate}</p>
               <div className='options'>
                  <a onClick={() => Watch()}>watch Movie Now</a>
                  <a onClick={()=>GoToEditPage()}>Edit Movie Details</a>
               </div>
               <p><span>Did You Watch this Movie Allready ?  </span>{item.isWatched}</p>
            </div>
            <a onClick={() => Next()}>Next Movie</a>
         </figure>}
      </div>
   )
}

export default MovieItem