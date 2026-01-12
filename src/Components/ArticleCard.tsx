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
  variant?: "default" | "featured"
}

const ArticleCard = ({ article, onClick, className = "", variant = "default" }: ArticleCardProps) => {
  const isFeatured = variant === "featured"

  return (
    <article
      onClick={() => onClick?.(article)}
      className={`group cursor-pointer ${className}`}
    >
      {/* Top border */}
      <div className="h-px bg-light-divider dark:bg-dark-divider mb-4"></div>

      {/* Category badge */}
      <span className="inline-block text-[10px] font-Helvetica font-semibold uppercase tracking-wider text-light-muted dark:text-dark-muted mb-2">
        {article.category}
      </span>

      {/* Title - Main focus */}
      <h3 className={`font-TimesNewRoman font-bold text-light-text dark:text-dark-text leading-tight mb-3 group-hover:text-light-secondary dark:group-hover:text-dark-secondary transition-colors ${
        isFeatured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
      }`}>
        {article.title}
      </h3>

      {/* Minimal meta row */}
      <div className="flex items-center justify-between text-xs font-Helvetica text-light-muted dark:text-dark-muted">
        <div className="flex items-center gap-3">
          {/* Region dots */}
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-region-us"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-region-india"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-region-china"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-region-russia"></span>
          </div>
          <span>{article.sourceCount} sources</span>
        </div>

        {/* Arrow */}
        <IoArrowForward className="w-4 h-4 text-light-muted dark:text-dark-muted group-hover:translate-x-1 group-hover:text-light-text dark:group-hover:text-dark-text transition-all" />
      </div>
    </article>
  )
}

export default ArticleCard
