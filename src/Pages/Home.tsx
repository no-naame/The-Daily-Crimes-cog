import { useState } from "react"
import Screen from "../Layouts/Screen"
import Header from "../Components/Header"
import Hero from "../Components/Hero"
import ArticleCard, { Article } from "../Components/ArticleCard"
import ArticleDetail from "../Components/ArticleDetail"
import Footer from "../Components/Footer"

// Sample articles data
const sampleArticles: Article[] = [
  {
    id: "1",
    category: "Trade",
    date: "Jan 10, 2026",
    title: "Trump's Tariff Policy: Global Coverage Analysis",
    description:
      "How four major regions are framing the latest US-China trade developments and their implications for global markets.",
    sourceCount: 54,
    readTime: "8 min",
    regions: ["us", "india", "china", "russia"],
  },
  {
    id: "2",
    category: "Security",
    date: "Jan 9, 2026",
    title: "Taiwan Strait Tensions: Regional Perspectives",
    description:
      "Cross-regional analysis of how media outlets are covering the latest developments in Taiwan Strait relations.",
    sourceCount: 48,
    readTime: "6 min",
    regions: ["us", "india", "china", "russia"],
  },
  {
    id: "3",
    category: "Economics",
    date: "Jan 8, 2026",
    title: "BRICS Summit 2026: Divergent Narratives",
    description:
      "How Western and Eastern media differ in their coverage of the latest BRICS economic cooperation initiatives.",
    sourceCount: 62,
    readTime: "10 min",
    regions: ["us", "india", "china", "russia"],
  },
  {
    id: "4",
    category: "Technology",
    date: "Jan 7, 2026",
    title: "Semiconductor Restrictions: Global Impact",
    description:
      "Analysis of how different regions are reporting on the latest chip export controls and their economic implications.",
    sourceCount: 45,
    readTime: "7 min",
    regions: ["us", "india", "china", "russia"],
  },
  {
    id: "5",
    category: "Energy",
    date: "Jan 6, 2026",
    title: "Oil Price Dynamics: Regional Framing",
    description:
      "How oil-producing and consuming nations are differently framing the current energy market developments.",
    sourceCount: 38,
    readTime: "5 min",
    regions: ["us", "india", "china", "russia"],
  },
  {
    id: "6",
    category: "Diplomacy",
    date: "Jan 5, 2026",
    title: "UN Climate Summit: Perspective Analysis",
    description:
      "Cross-regional analysis of climate responsibility narratives and how different blocs frame the debate.",
    sourceCount: 51,
    readTime: "9 min",
    regions: ["us", "india", "china", "russia"],
  },
]

const Home = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)
  const [customQuery, setCustomQuery] = useState<string | null>(null)

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article)
    setCustomQuery(null)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleQuerySubmit = (query: string) => {
    setCustomQuery(query)
    setSelectedArticle(null)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleBack = () => {
    setSelectedArticle(null)
    setCustomQuery(null)
  }

  // Show article detail or custom query result
  if (selectedArticle || customQuery) {
    const query = customQuery || selectedArticle?.title || ""
    const date = selectedArticle?.date || new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
    const sourceCount = selectedArticle?.sourceCount || 54

    return (
      <Screen>
        <Header />
        <ArticleDetail
          query={query}
          date={date}
          sourceCount={sourceCount}
          onBack={handleBack}
        />
        <Footer />
      </Screen>
    )
  }

  // Split articles: featured (first) and rest
  const [featuredArticle, ...otherArticles] = sampleArticles

  // Landing page
  return (
    <Screen>
      <Header />

      {/* Hero Section */}
      <Hero onQuerySubmit={handleQuerySubmit} />

      {/* Recent Briefings Section */}
      <section className="py-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="rule-thin max-w-xs mx-auto mb-4"></div>
          <h2 className="font-TimesNewRoman text-2xl md:text-3xl text-light-text dark:text-dark-text">
            Recent Briefings
          </h2>
          <div className="rule-thin max-w-xs mx-auto mt-4"></div>
        </div>

        {/* Featured Article */}
        <div className="mb-12 max-w-2xl mx-auto">
          <ArticleCard
            article={featuredArticle}
            onClick={handleArticleClick}
            variant="featured"
          />
        </div>

        {/* Other Articles - Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onClick={handleArticleClick}
            />
          ))}
        </div>
      </section>

      <Footer />
    </Screen>
  )
}

export default Home
