import React, { useMemo } from 'react'
import { Link } from 'gatsby'
import SVGIcon from '@/components/SvgIcon'

import { useStyles } from './style'

interface ArticleListProps {
  data: Frontmatter[]
}

/**
 * @description 文章列表
 */
const ArticleList: React.FC<ArticleListProps> = ({ data }) => {
  const { styles } = useStyles()
  const articleByYear = useMemo(() => {
    const collection: YearListData = {}

    data.forEach((item) => {
      const year = item.date?.split(', ')[1]

      collection[year] = [...(collection[year] || []), item]
    })

    return collection
  }, [data])

  const years = useMemo(() => Object.keys(articleByYear).reverse(), [articleByYear])

  return (
    <>
      {years.map((year) => (
        <div className={styles.years} key={year}>
          <div className={styles.year}>{year}</div>
          {articleByYear[year].map((node) => (
            <Link className={styles.link} to={`/${node.slug}`} key={node.slug}>
              <SVGIcon id={node.icon} width="3.2em" height="3.2em"></SVGIcon>
              <div className="infos">
                <h5>{node.title}</h5>
                <time>{node.date}</time>
              </div>
              <SVGIcon id="arrow-right" height="1.25em" width="1.25em" />
            </Link>
          ))}
        </div>
      ))}
    </>
  )
}

export default ArticleList
