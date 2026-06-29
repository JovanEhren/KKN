import { articles } from '../../data/articles'

interface Props {
  active: boolean
  onBack: () => void
  articleIndex: number
}

export function ArticleScreen({ active, onBack, articleIndex }: Props) {
  const article = articles[articleIndex]

  return (
    <div className={`screen${active ? ' active' : ''}`}>
      <button className="btn-back" onClick={onBack}>← KEMBALI</button>
      <div className="screen-body centered" style={{ gap: '12px' }}>
        <h2 className="page-title article-page-title">{article.title}</h2>
        <div
          className="article-box"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </div>
  )
}