import { useSiteMetadata } from '@/hooks/useSiteMetadata'
import { ReactNode } from 'react'

interface SEOProps {
  title?: string
  description?: string
  pathName?: string
  children?: ReactNode
}

const SEO: React.FC<SEOProps> = ({ title, description, pathName, children }) => {
  const site = useSiteMetadata()

  const seo = {
    author: site.author,
    title: title ? `${title} | ${site.title}` : site.title,
    description: description ? description : site.description,
    image: `${site.logo}`,
    ico: `${site.siteUrl}/favicon.ico`,
    url: `${site.siteUrl}${pathName}`,
    repository: `${site.repository}`,
  }

  const schemaOrgJSONLD: any[] = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: site.siteUrl,
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
        url: site.siteUrl,
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
      <meta name="creator" content={seo.author} />
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

      <link rel="shortcut icon" type="image/png" href={'/favicon.ico'} />

      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
      {children}
    </>
  )
}

export default SEO

