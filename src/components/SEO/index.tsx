import { ReactNode } from 'react'
import { useFavicon } from 'ahooks'
import { useSiteStore } from '@/store'

interface SEOProps {
  title?: string
  description?: string
  pathName?: string
  children?: ReactNode
}

const SEO: React.FC<SEOProps> = (props) => {
  const { title, description, pathName, children } = props

  const siteData = useSiteStore((state) => state.siteData)

  const seo = {
    title: title ? `${title} | ${siteData.title}` : siteData.title,
    description: description ? description : siteData.description,
    image: `${siteData.logo}`,
    ico: `${siteData.siteUrl}/favicon.ico`,
    url: `${siteData.siteUrl}${pathName}`,
    repository: `${siteData.repository}`,
  }

  const schemaOrgJSONLD: any[] = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: siteData.siteUrl,
      name: seo.title,
      alternateName: seo.title,
    },
  ]

  if (pathName) {
    schemaOrgJSONLD.push(
      {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': seo.url,
              name: seo.title,
              image: seo.image,
            },
          },
        ],
      },
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        url: siteData.siteUrl,
        name: seo.title,
        alternateName: seo.title,
        headline: seo.title,
        image: {
          '@type': 'ImageObject',
          url: seo.image,
        },
        description: seo.description,
      }
    )
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="creator" content={siteData.author} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="webSite" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      <link rel="shortcut icon" type="image/png" href={seo.ico} />

      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
      {children}
    </>
  )
}

export default SEO
