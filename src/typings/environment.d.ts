declare namespace NodeJS {
  interface ProcessEnv {
    /**
     * 请求地址
     */
    GATSBY_API_URL: string

    /**
     * 筛选文章 published 标志
     */
    GATSBY_PUBLISHED: 'true' | 'false'
  }
}
