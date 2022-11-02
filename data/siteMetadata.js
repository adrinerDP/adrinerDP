const siteMetadata = {
  title: '너드개발자',
  author: '이준수',
  headerTitle: 'adriner.log',
  description: '',
  language: 'ko-kr',
  theme: 'system', // system, dark or light
  siteUrl: 'https://tailwind-nextjs-starter-blog.vercel.app',
  siteRepo: 'https://github.com/timlrx/tailwind-nextjs-starter-blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'me@adrinerdp.co',
  github: 'https://github.com/adrinerDP',
  twitter: '',
  facebook: '',
  youtube: '',
  linkedin: 'https://www.linkedin.com/in/%EC%A4%80%EC%88%98-%EC%9D%B4-9b07731b0/',
  locale: 'ko-KR',
  analytics: {
    plausibleDataDomain: '',
    simpleAnalytics: false,
    umamiWebsiteId: '',
    googleAnalyticsId: '',
    posthogAnalyticsId: '',
  },
  comment: {
    provider: 'giscus', // giscus, utterances, disqus
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1', // 1 = enable / 0 = disable
      metadata: '0', // 1 = enable / 0 = disable
      theme: 'light', // light, dark, dark_dimmed, dark_high_contrast, transparent_dark, preferred_color_scheme, custom
      inputPosition: 'bottom', // bottom, top
      lang: 'ko',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
    utterancesConfig: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: '', // pathname, url, title
      label: '',
      theme: '', // github-light, github-dark, preferred-color-scheme, github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      darkTheme: '',
    },
    disqusConfig: {
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
}

module.exports = siteMetadata
