import React from 'react'
import Link from 'next/link'
import Images from './images'

const Card = ({ article }) => {
  return (
    <Link as={`/post/${article.slug}`} href="/post/[id]">
      <a>
        <div>
          <div>
            <Images image={article.image} />
          </div>
          <div>
            <p>{article.title}</p>
            <p>{article.category.name}</p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Card
