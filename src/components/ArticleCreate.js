function ArticleCreate() {
  return ( 
    <div>
      <form className="ArticleCreate">
        <div>
          <label>
            Title
            <input type="text" name="title" required></input>
          </label>
          <label>
            Description
            <input name="description" required></input>
          </label>
        </div>
        <button>Submit</button>
      </form>
    </div>
   );
}

export default ArticleCreate;