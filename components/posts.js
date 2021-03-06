import React from 'react'
import Card from './card'


const Posts = ({ articles }) => {
  return (
    <div>
      <div>
        {articles.map((article) => {
          return <Card article={article} key={`article__${article.slug}`} />
        })}
      </div>
    </div>
  )
}

export default Posts
