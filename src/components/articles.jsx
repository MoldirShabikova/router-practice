import React from 'react'
import articleData from './data'
import { Link } from "react-router-dom";
function Articles() {
  return (
    <div>
        {articleData.map(article=>{
            return(
                <div>
                    <Link to={`/articles/${article.name}`}>{article.title }</Link></div>
            )
        })}
        </div>
  )
}

export default Articles