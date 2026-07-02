import { useState } from 'react'

function ArticleCard({ title, excerpt }) {
  const [likes, setLikes] = useState(0)
  const [liked, setLiked] = useState(false)

  const toggleLike = () => {
    if (liked) {
      setLikes(likes - 1)
      setLiked(false)
    } else {
      setLikes(likes + 1)
      setLiked(true)
    }
  }

  return (
    <article className="card">
      <h2>{title}</h2>
      <p>{excerpt}</p>
      <a href="#">Read the full story</a>
      <div className="card-actions">
        <button
          className={liked ? 'like-button liked' : 'like-button'}
          onClick={toggleLike}
        >
          {liked ? '♥' : '♡'} {likes}
        </button>
      </div>
    </article>
  )
}

export default ArticleCard
