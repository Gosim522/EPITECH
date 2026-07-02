# The Campus Chronicle (React)

The school newspaper homepage rebuilt with React components instead of one big
HTML file. Same layout as the HTML version, but the article cards are now a
reusable component that takes its content through props.

## Components

- `Header` — newspaper title and navigation
- `Hero` — main breaking story
- `ArticleCard` — a single article card (takes `title` and `excerpt` props)
- `ArticleGrid` — holds the article cards
- `Footer` — copyright

## Run it

```
npm install
npm run dev
```

Then open the URL it prints (usually http://localhost:5173).
