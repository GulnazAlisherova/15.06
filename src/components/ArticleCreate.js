import axios from "axios";

function ArticleCreate() {
  function onFormSubmit(event) {
    const formData = new formData(event.target);
    axios
    .post('https://newspage-b1593-default-rtdb.firebaseio.com/articles.json',
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
          <textarea name="deccription"required></textarea>
        </label>
      </div>
    </form>
  );
}

export default ArticleCreate;