import "../Header/header.scss";
import { useState, useEffect } from "react";
import TopWatchedService from "../../Services/TopWatchecMoviesService";
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Header() {

    const [topMovie, setTop] = useState([])
    const service = new TopWatchedService();
    const navigate = new useNavigate();
    useEffect(() => {
        service.get().then(data => {
            setTop(data)
        })
    }, []);

    function GoToMovie(id) {
        navigate("/" + id)
    }


    return (
        <div>
                 <h1>Top Movie's Of The Week</h1>
                 <i class=" icon fa-solid fa-arrow-down"></i>
            
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={3}
            navigation pagination={{ clickable: "true" }}
            scrollbar={{ draggable: "true" }}>
            {topMovie.map((item, index) =>
                <SwiperSlide key={item.id}>
                    <section className="header">
                        <div className="Box">
                            <div className="Box-image">
                                <img src={item.src} alt={item.title} />
                            </div>
                            <h3>{item.title}</h3>
                            <a onClick={() => GoToMovie(item.id)}>Go To Movie</a>
                        </div>
                    </section>
                </SwiperSlide>)}



        </Swiper>
        </div>






        // <div className="homepage">
        // <figure className="header" key={topMovie.id}>
        //         <div className="Box">
        //             <div className="Box-image">
        //                <i onClick={()=>Prev()} class="fa-solid fa-angle-left"></i>
        //                <img src={topMovie.src} alt={topMovie.title}/>
        //                <i onClick={()=>Next()} class="fa-solid fa-angle-right"></i>
        //             </div>
        //             <h3>{topMovie.title}</h3>
        //             <a onClick={()=>GoToMovie(topMovie.id)}>Go To Movie</a> 
        //         </div>
        // </figure>
        // </div>
    )




}
export default Header;