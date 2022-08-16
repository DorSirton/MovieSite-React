import "../AddingPage/addPage.scss";
import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import GalleryService from '../../Services/GalleryService';
function AddMoviePage() {

    const service = new GalleryService();
    const navigate = useNavigate();

    const title = useRef("");
    const synopsis = useRef("");
    const date = useRef("");
    const source = useRef("");
    const validationText = useRef("");

    function Add() {

        if ((title.current.value).length < 2) {
            validationText.current.value = " Tytle Must Be At Least 2 Letters"
            return;
        }
        if (synopsis.current.value.length < 10) {
            validationText.current.value = " Synopsis Must Be At Least 10 Letters"
            return;
        }
        
        const newitem = {
            src: source.current.value,
            title: title.current.value,
            isWatched: "No",
            Synopsis: synopsis.current.value,
            PublishDate: date.current.value,
        }
        validationText.current.value = "";
        service.post(newitem);
        navigate("/")
    }

    return (
        <section>
            <div className="front">
                <h1>Add Your New Movie !</h1>
            </div>
            <form method="post">
                    <div className="field">
                        <label>Movie Name</label>
                        <input type="text" ref={title} />
                    </div>
                    <div className="field">
                            <label>Synopsis</label>
                            <input type="text" ref={synopsis} />
                    </div>
                    <div className="field">
                        <label>Publication Date : </label><input type="date" ref={date} min="1900-01-01" max={"2023-01-01"} />
                    </div>
                    <div className="field">
                        <label>image Source : </label>  <input type="text" ref={source} />
                    </div>
                <div className="confirm">
                    <a onClick={Add}>Add!</a>
                </div>
                <div className="input-validation">
                    <input type="text" ref={validationText} />
                </div>
            </form>
        </section>
    )

}

export default AddMoviePage;