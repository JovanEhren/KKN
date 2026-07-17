import { useEffect, useRef, useState } from 'react'
import { articles } from '../../data/articles'

interface Props {
  active: boolean
  onBack: () => void
  articleIndex: number
  onNavigate: (index: number) => void
}

export function ArticleScreen({ active, onBack, articleIndex, onNavigate }: Props) {
  const article = articles[articleIndex]
  const [openSections, setOpenSections] = useState<Set<number>>(new Set([0]))
  const [readSections, setReadSections] = useState<Set<number>>(new Set([0]))
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setOpenSections(new Set([0]))
    setReadSections(new Set([0]))
    boxRef.current?.scrollTo({ top: 0 })
  }, [articleIndex])

  const toggleSection = (i: number) => {
    setOpenSections(prev => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
    setReadSections(prev => new Set(prev).add(i))
  }

  const total = articles.length
  const isFirst = articleIndex === 0
  const isLast = articleIndex === total - 1
  const progressPct = Math.round((readSections.size / article.sections.length) * 100)
  const allRead = readSections.size === article.sections.length

  return (
    <div className={`screen${active ? ' active' : ''}`}>
      <button className="btn-back" onClick={onBack}>← KEMBALI</button>
      <div className="screen-body centered" style={{ gap: '10px' }}>
        <div className="article-dots">
          {articles.map((a, i) => (
            <button
              key={i}
              className={`article-dot ${a.colorClass}${i === articleIndex ? ' active' : ''}`}
              onClick={() => onNavigate(i)}
              title={a.title}
            />
          ))}
        </div>

        <h2 className="page-title article-page-title">{article.title}</h2>

        <div className={`article-box ${article.colorClass}`} ref={boxRef}>
          <p className="article-intro">{article.intro}</p>

          <div className="article-read-progress-wrap">
            <div className="article-read-progress">
              <div className="article-read-progress-fill" style={{ width: `${progressPct}%` }} />
            </div>
            <span className="article-read-progress-label">
              {allRead ? '🎉 Semua bagian sudah dibaca!' : `📖 ${readSections.size}/${article.sections.length} bagian dibuka`}
            </span>
          </div>

          <div className="article-accordion">
            {article.sections.map((sec, i) => {
              const isOpen = openSections.has(i)
              return (
                <div key={i} className={`accordion-item${isOpen ? ' open' : ''}${readSections.has(i) ? ' read' : ''}`}>
                  <button className="accordion-header" onClick={() => toggleSection(i)}>
                    <span className="accordion-icon">{sec.icon}</span>
                    <span className="accordion-heading">{sec.heading}</span>
                    {readSections.has(i) && !isOpen && <span className="accordion-check">✓</span>}
                    <span className="accordion-chevron">▾</span>
                  </button>
                  <div className="accordion-body-wrap">
                    <div className="accordion-body" dangerouslySetInnerHTML={{ __html: sec.bodyHtml }} />
                  </div>
                </div>
              )
            })}
          </div>

          <div className="article-note">
            <div className="article-note-title">{article.note.title}</div>
            <p>{article.note.text}</p>
          </div>
        </div>

        <div className="article-nav-buttons">
          <button className="btn-article-nav" disabled={isFirst} onClick={() => onNavigate(articleIndex - 1)}>
            ← Sebelumnya
          </button>
          <span className="article-nav-count">{articleIndex + 1} / {total}</span>
          <button className="btn-article-nav" disabled={isLast} onClick={() => onNavigate(articleIndex + 1)}>
            Selanjutnya →
          </button>
        </div>
      </div>
    </div>
  )
}
