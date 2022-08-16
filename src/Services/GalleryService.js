class GalleryService {

    get() {
        return fetch("http://localhost:3030/Movies")
            .then(this.succsses)
            .catch(this.faild);
    }
    getById(id) {
        return fetch("http://localhost:3030/Movies/" + id)
            .then(this.succsses)
            .catch(this.faild);
    }
    post(galleryItem) {
        return fetch("http://localhost:3030/Movies", {
            method: "Post",
            body: JSON.stringify(galleryItem),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(this.succsses)
            .catch(this.faild);

    }
    put(galleryItem) {
        return fetch("http://localhost:3030/Movies/"+ galleryItem.id,{
            method: "Put",
            body: JSON.stringify(galleryItem),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(this.succsses)
            .catch(this.faild);
    }
    delete(id) {
        return fetch("http://localhost:3030/Movies/"+ id, {
            method: "Delete"
        })
            .then(this.succsses)
            .catch(this.faild);
    }

    succsses(respons) {
        if (respons.status < 350) {
            return respons.json();
        }
        else {
            throw new Error(respons.statusText)
        }
    }
    faild(error) {
        console.log(error)
    }

}
export default GalleryService;