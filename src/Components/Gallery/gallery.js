import { useState, useEffect, useRef } from "react";
import "../Gallery/gallery.scss";
import GalleryService from "../../../src/Services/GalleryService";
import { useNavigate } from 'react-router-dom';

function MovieGallery() {
   const [gallery, setGallery] = useState([])
   const service = new GalleryService();
   const navigate = new useNavigate();
   const searchValue = useRef("");
   const checked = useRef(null);


   useEffect(() => {
      service.get().then(data => {
         setGallery(data)
      })
   }, []);

   function GoToMovie(id) {
      navigate("/" + id)
   }


   const Search = (e) => {
      if(e.target.checked === true){
         const newGallery = gallery.filter(value => value.isWatched === "No");
         console.log(newGallery)
         setGallery(newGallery);
      }
      else{
         service.get().then(data => {
         setGallery(data) });
      }
   }
   return (
      <section className="MainSection">

         <div className="search">
            <div>
               <p>Show Me Only Movies That I didnt See Yet..</p>
               <input className="checkbox" type="checkbox" onChange={Search}/>
            </div>
         </div>
         <section className="gallery">
            {gallery.map((item, index) =>
               <div className="Box">
                  <div className="Box-image">
                     <img src={item.src} alt={item.title} />
                  </div>
                  <h3>{item.title}</h3>
                  <a onClick={() => GoToMovie(item.id)}>Go To Movie</a>
               </div>)}

         </section>
      </section>

   )
}

export default MovieGallery;