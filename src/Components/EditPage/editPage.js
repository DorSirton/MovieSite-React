import "../EditPage/editPage.scss"
import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import GalleryService from '../../Services/GalleryService';

function EditPage() {

    const params = useParams();
    const [item, setItem] = useState([])
    const service = new GalleryService();
    const navigate = useNavigate();

    useEffect(() => {
        service.getById(params.id).then(data => {
            setItem(data)
        })
    }, [params.id]);

    const title = useRef("");
    const synopsis = useRef("");
    const date = useRef("");
    const source = useRef("");
    const validationText = useRef("");


    function Edit() {

        if ((title.current.value).length < 2) {
            validationText.current.value = " Tytle Must Be At Least 2 Letters"
            return;
        }
        if (synopsis.current.value.length < 10) {
            validationText.current.value = " Synopsis Must Be At Least 10 Letters"
            return;
        }
        if (date.current.value < 1990) {
            validationText.current.value = "Date Must Be After Year 1990"

        }

        const newMovie = {
            src: source.current.value,
            title: title.current.value,
            id: item.id,
            isWatched: "No",
            Synopsis: synopsis.current.value,
            PublishDate: date.current.value,
        }
        validationText.current.value = "";

        service.put(newMovie);
        navigate("/" + newMovie.id)
    }

    return (
        <figure>
            <form method="post">
                <dl>
                    <dt>
                        <label>Movie Name</label>
                    </dt>
                    <dd>
                        <input type="text" ref={title} placeholder={item.title} />
                    </dd>
                    <hr />
                    <dt>
                        <label>Synopsis</label>
                    </dt>
                    <dd>
                        <input type="text" ref={synopsis} placeholder={item.Synopsis} />
                    </dd>
                    <hr />
                    <dt>
                        <label>Publication Date : </label><input type="date" ref={date} placeholder={item.date} />
                    </dt>
                    <hr />
                    <dt>
                        <label>image Source : </label>  <input type="text" ref={source} placeholder={item.src} />
                    </dt>
                    <hr />
                </dl>
                <div className="confirm">
                    <a onClick={Edit}>Edit !</a>
                </div>
                <div className="input-validation">
                    <input type="text" ref={validationText} />
                </div>

            </form>

        </figure>
    )

}
export default EditPage;