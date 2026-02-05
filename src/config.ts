export const SITE = {
  website: "https://myastroblog-4tc.pages.dev/", // replace this with your deployed domain
  author: "chonghua",
  profile: "https://hechonghua.com/",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "重华部落格",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 5,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "编辑",
    url: "https://github.com/chonghua/myastroblog/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "cn", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
