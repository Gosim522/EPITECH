import ArticleCard from './ArticleCard'

function ArticleGrid() {
  return (
    <section className="article-grid">
      <ArticleCard
        title="Caffeine and Code: Inside Campus's All-Night Hackathon"
        excerpt="More than sixty students powered through a 24-hour coding marathon, fueled by pizza, energy drinks, and sheer stubbornness."
      />
      <ArticleCard
        title="Game On: Student Tournament Draws Record Crowd"
        excerpt="Two hundred students packed the auditorium for the semester's biggest esports tournament, decided by a single nail-biting round."
      />
      <ArticleCard
        title="From Zero to App: Free Workshop Packs the Room"
        excerpt="Students from every department built their first web app from scratch in three hours, guided by industry volunteers."
      />
    </section>
  )
}

export default ArticleGrid
