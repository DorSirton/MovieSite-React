import "../Copyright/copyRight.scss"
import { useState, useEffect, useRef } from "react";
import "../Gallery/gallery.scss";
import GalleryService from "../../../src/Services/GalleryService";
import { useNavigate } from 'react-router-dom';

function CopyRight() {

    const [gallery, setGallery] = useState([])
    const service = new GalleryService();
    const navigate = new useNavigate();


    useEffect(() => {
        service.get().then(data => {
            setGallery(data)
        })
    }, []);


    return (
        <section>
            <div>
                <h1> . . ! Thank You For Your Support ! . . </h1>
            </div>
            <fugure className="finish">
                {gallery.map((item, index) =>
                    <div>
                        <img src={item.src} />

                    </div>
                )}

            </fugure>
        </section>)
}


export default CopyRight;