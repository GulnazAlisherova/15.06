import { useEffect, useState } from "react";
import axios from "axios";


function ArticleList() {
  const [article, setArticles] = useState(null);
  useEffect(function () {
    axios
      .get("https://fir-ef553-default-rtdb.firebaseio.com/articles.json")
      .then(({ data }) => {
        const newArticles = Object.keys(data).map((id) => {
          return {
            id: id,
            ...data[id]
          };
        });
        setArticles(newArticles);
      });
   
  }, []);

  let output = "Loading...";
  if (article !== null) {
    output = article.map((article) => (
      <li key={article.id}>    
        {article.first_name} {article.last_name}
      </li>
    ));
  }
  return ( 
    <ul className="ArticleList"> 
      <li>
        {output}
      </li>
    </ul>
   );
}

export default ArticleList;