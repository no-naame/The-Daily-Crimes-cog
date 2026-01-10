import { IoArrowForward, IoTime, IoNewspaper } from "react-icons/io5"

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

const regionFlags: Record<string, string> = {
  us: "🇺🇸",
  india: "🇮🇳",
  china: "🇨🇳",
  russia: "🇷🇺",
}

const ArticleCard = ({ article, onClick, className = "" }: ArticleCardProps) => {
  return (
    <article
      onClick={() => onClick?.(article)}
      className={`card card-interactive group ${className}`}
    >
      {/* Category & Date */}
      <div className="flex items-center gap-2 mb-3">
        <span className="badge badge-accent">{article.category}</span>
        <span className="text-xs text-light-muted dark:text-dark-muted font-Helvetica">
          {article.date}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-TimesNewRoman font-semibold text-light-text dark:text-dark-text mb-2 leading-snug group-hover:text-accent-navy dark:group-hover:text-accent-blue transition-colors">
        {article.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-light-secondary dark:text-dark-secondary mb-4 line-clamp-2">
        {article.description}
      </p>

      {/* Divider */}
      <div className="border-t border-light-border dark:border-dark-border my-4"></div>

      {/* Meta Row */}
      <div className="flex items-center justify-between">
        {/* Region Flags */}
        <div className="flex items-center gap-1">
          {article.regions.map((region) => (
            <span key={region} className="text-lg" title={region.toUpperCase()}>
              {regionFlags[region]}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center gap-3 text-xs text-light-muted dark:text-dark-muted font-Helvetica">
          <span className="flex items-center gap-1">
            <IoNewspaper className="w-3.5 h-3.5" />
            {article.sourceCount} sources
          </span>
          <span className="flex items-center gap-1">
            <IoTime className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
        </div>
      </div>

      {/* Read Link */}
      <div className="mt-4 flex items-center gap-1 text-sm font-Helvetica font-medium text-accent-navy dark:text-accent-blue group-hover:gap-2 transition-all">
        Read Briefing
        <IoArrowForward className="w-4 h-4" />
      </div>
    </article>
  )
}

export default ArticleCard
