import { IoArrowForward } from "react-icons/io5"

export interface Article {
  id: string
  category: string
  date: string
  title: string
  description: string
  sourceCount: number
  readTime: string
  regions: ("us" | "india" | "china" | "russia")[]
}

interface ArticleCardProps {
  article: Article
  onClick?: (article: Article) => void
  className?: string
}

const ArticleCard = ({ article, onClick, className = "" }: ArticleCardProps) => {
  return (
    <article
      onClick={() => onClick?.(article)}
      className={`article-card cursor-pointer ${className}`}
    >
      <div className="article-card-inner">
        {/* Category & Date - Dateline style */}
        <div className="flex items-center gap-3 mb-1">
          <span className="article-card-category">{article.category}</span>
          <span className="article-card-date">{article.date}</span>
        </div>

        {/* Title - Newspaper headline */}
        <h3 className="article-card-title">{article.title}</h3>

        {/* Description - Lead paragraph */}
        <p className="article-card-description">{article.description}</p>

        {/* Meta Row */}
        <div className="article-card-meta">
          {/* Regions as text */}
          <span>
            US · India · China · Russia
          </span>

          {/* Stats */}
          <span>
            {article.sourceCount} sources · {article.readTime}
          </span>
        </div>

        {/* Read Link */}
        <div className="mt-4 flex items-center gap-2 article-card-link group">
          <span>Continue Reading</span>
          <IoArrowForward className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </article>
  )
}

export default ArticleCard
