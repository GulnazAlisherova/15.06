import axios from "axios";

function ArticleCreate() {
    const onFormSubmit = function (event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        axios.post(
            "https://newspage-b1593-default-rtdb.firebaseio.com/articles.json",
            Object.fromEntries(formData.entries())
        );
    }

    return (
        <form className="ArticleCreate" onSubmit={onFormSubmit}>
            <div>
                <label>
                    Title
                    <input type="text" name="title" required />
                </label>
            </div>
            <div>
                <label>
                    Description
                    <textarea name="description" required></textarea>
                </label>
            </div>
            <button>Submit</button>
        </form>
    );
}

export default ArticleCreate;