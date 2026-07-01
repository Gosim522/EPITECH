function ArticleCard({ title, excerpt }) {
  return (
    <article className="card">
      <h2>{title}</h2>
      <p>{excerpt}</p>
      <a href="#">Read the full story</a>
    </article>
  )
}

export default ArticleCard
