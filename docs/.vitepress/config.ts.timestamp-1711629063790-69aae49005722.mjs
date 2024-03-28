// docs/.vitepress/config.ts
import { defineConfig } from "file:///C:/Users/Z/Desktop/charles7c.github.io/node_modules/.pnpm/vitepress@1.0.0-rc.31_axios@1.6.2_markdown-it-mathjax3@4.3.2_react-dom@15.7.0_react@15.7.0_search-insights@2.7.0/node_modules/vitepress/dist/node/index.js";
import { withMermaid } from "file:///C:/Users/Z/Desktop/charles7c.github.io/node_modules/.pnpm/vitepress-plugin-mermaid@2.0.8_mermaid@9.3.0_vite-plugin-md@0.20.6_vitepress@1.0.0-rc.31/node_modules/vitepress-plugin-mermaid/dist/vitepress-plugin-mermaid.es.mjs";

// docs/.vitepress/config/constants.ts
var site = "https://blog.charles7c.top";
var metaData = {
  lang: "zh-CN",
  locale: "zh_CN",
  title: "GivTech",
  description: "\u4E2A\u4EBA\u6280\u672F\u77E5\u8BC6\u5E93\uFF0C\u8BB0\u5F55 & \u5206\u4EAB\u4E2A\u4EBA\u788E\u7247\u5316\u3001\u7ED3\u6784\u5316\u3001\u4F53\u7CFB\u5316\u7684\u6280\u672F\u77E5\u8BC6\u5185\u5BB9\u3002",
  site,
  image: `${site}/title.png`
};

// docs/.vitepress/config/head.ts
var head = [
  ["link", { rel: "icon", href: "/favicon.ico" }],
  ["meta", { name: "author", content: "Charles7c" }],
  ["meta", { name: "keywords", content: "\u67E5\u5C14\u65AF\u7684\u77E5\u8BC6\u5E93, \u77E5\u8BC6\u5E93, \u535A\u5BA2, Charles7c" }],
  ["meta", { name: "HandheldFriendly", content: "True" }],
  ["meta", { name: "MobileOptimized", content: "320" }],
  ["meta", { name: "theme-color", content: "#3c8772" }],
  ["meta", { property: "og:type", content: "website" }],
  ["meta", { property: "og:locale", content: metaData.locale }],
  ["meta", { property: "og:title", content: metaData.title }],
  ["meta", { property: "og:description", content: metaData.description }],
  ["meta", { property: "og:site", content: metaData.site }],
  ["meta", { property: "og:site_name", content: metaData.title }],
  ["meta", { property: "og:image", content: metaData.image }],
  // 百度统计代码：https://tongji.baidu.com
  ["script", {}, `var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?53af4b1a12fbe40810ca7ad39f8db9c7";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
  })();`]
  // 页面访问量统计
  // ['script', {}, `
  // window.addEventListener('load', function() {
  //   let oldHref = document.location.href, bodyDOM = document.querySelector('body');
  //   const observer = new MutationObserver(function(mutations) {
  //     if (oldHref != document.location.href) {
  //       oldHref = document.location.href;
  //       getPv()
  //       window.requestAnimationFrame(function() {
  //         let tmp = document.querySelector('body');
  //         if(tmp != bodyDOM) {
  //           bodyDOM = tmp;
  //           observer.observe(bodyDOM, config);
  //         }
  //       })
  //     }
  //   });
  //   const config = {
  //     childList: true,
  //     subtree: true
  //   };
  //   observer.observe(bodyDOM, config);
  //   getPv()
  // }, true);
  // function getPv() {
  //   xhr = new XMLHttpRequest();
  //   xhr.open('GET', 'https://api.charles7c.top/blog/pv?pageUrl=' + location.href);
  //   xhr.send();
  // }`]
];

// docs/.vitepress/config/markdown.ts
import mathjax3 from "file:///C:/Users/Z/Desktop/charles7c.github.io/node_modules/.pnpm/markdown-it-mathjax3@4.3.2/node_modules/markdown-it-mathjax3/index.js";
import footnote from "file:///C:/Users/Z/Desktop/charles7c.github.io/node_modules/.pnpm/markdown-it-footnote@3.0.3/node_modules/markdown-it-footnote/index.js";
var markdown = {
  // Shiki主题, 所有主题参见: https://github.com/shikijs/shiki/blob/main/docs/themes.md
  theme: {
    light: "github-light",
    dark: "github-dark-dimmed"
  },
  // lineNumbers: true, // 启用行号
  config: (md) => {
    md.use(mathjax3);
    md.use(footnote);
    md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
      let htmlResult = slf.renderToken(tokens, idx, options);
      if (tokens[idx].tag === "h1")
        htmlResult += `
<ClientOnly><ArticleMetadata v-if="($frontmatter?.aside ?? true) && ($frontmatter?.showArticleMetadata ?? true)" :article="$frontmatter" /></ClientOnly>`;
      return htmlResult;
    };
  }
};

// docs/.vitepress/config/nav.ts
var nav = [
  {
    text: "\u5FEB\u901F\u5F00\u59CB",
    items: [
      { text: "\u667A\u80FD\u5408\u7EA6\u8BBE\u8BA1", link: "/categories/issues/index", activeMatch: "/categories/issues/" },
      { text: "\u540E\u7AEF\u5F00\u53D1\u8BBE\u8BA1", link: "/categories/fragments/index", activeMatch: "/categories/fragments/" },
      { text: "\u524D\u7AEF\u5F00\u53D1\u8BBE\u8BA1", link: "/categories/tools/index", activeMatch: "/categories/tools/" },
      { text: "\u8FD0\u7EF4\u90E8\u7F72\u8BBE\u8BA1", link: "/categories/solutions/index", activeMatch: "/categories/solutions/" }
    ],
    activeMatch: "/categories/"
  },
  {
    text: "\u56E2\u961F\u6210\u5458",
    items: [
      { text: "\u6210\u5458\u4ECB\u7ECD", link: "/courses/java/index", activeMatch: "/courses/java/" }
    ],
    activeMatch: "/courses/"
  },
  {
    text: "\u90E8\u7F72\u6587\u6863",
    link: "/tags",
    activeMatch: "/tags"
  },
  {
    text: "\u5173\u4E8E",
    items: [
      { text: "\u5173\u4E8E\u77E5\u8BC6\u5E93", link: "/about/index", activeMatch: "/about/index" },
      { text: "\u5173\u4E8E\u6211", link: "/about/me", activeMatch: "/about/me" }
    ],
    activeMatch: "/about/"
    // // 当前页面处于匹配路径下时, 对应导航菜单将突出显示
  }
];

// docs/.vitepress/config/sidebar.ts
import fg from "file:///C:/Users/Z/Desktop/charles7c.github.io/node_modules/.pnpm/fast-glob@3.3.2/node_modules/fast-glob/out/index.js";
import matter from "file:///C:/Users/Z/Desktop/charles7c.github.io/node_modules/.pnpm/gray-matter@4.0.3/node_modules/gray-matter/index.js";

// docs/.vitepress/theme/utils.ts
function getChineseZodiac(year) {
  const arr = ["monkey", "rooster", "dog", "pig", "rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "goat"];
  return arr[year % 12];
}
function getChineseZodiacAlias(year) {
  const arr = ["\u7334\u5E74", "\u9E21\u5E74", "\u72D7\u5E74", "\u732A\u5E74", "\u9F20\u5E74", "\u725B\u5E74", "\u864E\u5E74", "\u5154\u5E74", "\u9F99\u5E74", "\u86C7\u5E74", "\u9A6C\u5E74", "\u7F8A\u5E74"];
  return arr[year % 12];
}

// docs/.vitepress/config/sidebar.ts
var sync = fg.sync;
var sidebar = {
  "/categories/issues/": getItemsByDate("categories/issues"),
  "/categories/fragments/": getItemsByDate("categories/fragments"),
  "/categories/solutions/": getItemsByDate("categories/solutions"),
  "/categories/tools/": getItemsByDate("categories/tools"),
  "/courses/java/": getItems("courses/java"),
  "/courses/mysql/": getItems("courses/mysql"),
  "/courses/mybatis/": getItems("courses/mybatis")
};
function getItemsByDate(path) {
  let yearGroups = [];
  let topArticleItems = [];
  sync(`docs/${path}/*`, {
    onlyDirectories: true,
    objectMode: true
  }).forEach(({ name }) => {
    let year = name;
    let articleItems = [];
    sync(`docs/${path}/${year}/*`, {
      onlyDirectories: true,
      objectMode: true
    }).forEach(({ name: name2 }) => {
      let month = name2;
      sync(`docs/${path}/${year}/${month}/*`, {
        onlyDirectories: true,
        objectMode: true
      }).forEach(({ name: name3 }) => {
        let day = name3;
        sync(`docs/${path}/${year}/${month}/${day}/*`, {
          onlyFiles: true,
          objectMode: true
        }).forEach((article) => {
          const articleFile = matter.read(`${article.path}`);
          const { data } = articleFile;
          if (data.isTop) {
            topArticleItems.unshift({
              text: data.title,
              link: `/${path}/${year}/${month}/${day}/${article.name.replace(".md", "")}`
            });
          }
          articleItems.unshift({
            text: data.title,
            link: `/${path}/${year}/${month}/${day}/${article.name.replace(".md", "")}`
          });
        });
      });
    });
    yearGroups.unshift({
      text: `<img class="chinese-zodiac" style="position: static; vertical-align: middle; padding-bottom: 3px;" src="/img/svg/chinese-zodiac/${getChineseZodiac(year.replace("\u5E74", ""))}.svg" title="${getChineseZodiacAlias(year.replace("\u5E74", ""))}" alt="\u751F\u8096">
            ${year}\u5E74 (${articleItems.length}\u7BC7)`,
      items: articleItems,
      collapsed: true
    });
  });
  if (topArticleItems.length > 0) {
    yearGroups.unshift({
      text: `<svg style="display: inline-block; vertical-align: middle; padding-bottom: 3px;" viewBox="0 0 1920 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30"><path d="M367.488 667.904h423.744v47.232H367.488v-47.232zM320.256 204.352h137.28v68.992h-137.28v-68.992zM367.488 754.112h423.744v48H367.488v-48zM693.76 204.352h137.984v68.992H693.76v-68.992zM507.008 204.352h137.28v68.992h-137.28v-68.992z" p-id="10749" fill="#d81e06"></path><path d="M1792.512 0H127.488C57.472 0 0 57.152 0 127.616v768.768C0 966.72 57.088 1024 127.488 1024h1665.088c69.952 0 127.424-57.152 127.424-127.616V127.616C1920 57.216 1862.912 0 1792.512 0z m-528 175.104h446.976v54.016H1494.72l-24 101.248h206.976V689.6h-57.728V384.32h-289.472v308.224h-57.728v-362.24h140.224l20.992-101.248h-169.472v-53.952z m-996.032-11.2h614.272v167.232h-51.008v-17.28H320.256v17.28H268.48V163.904z m678.784 681.728h-744v-43.52h111.744V454.848h229.504v-48.704H221.248v-42.048h323.264v-39.744h54.016v39.744h331.52v41.984h-331.52v48.768h245.248v347.264h103.488v43.52z m203.264-94.528c0 59.52-30.72 89.28-92.224 89.28-25.472 0-46.016-0.512-61.504-1.472-2.496-22.976-6.528-45.248-12.032-66.752 22.976 5.504 46.72 8.256 71.232 8.256 24 0 35.968-11.52 35.968-34.496V247.872H971.2v-54.72h278.976v54.72H1150.4v503.232z m521.216 121.536c-67.008-55.488-137.28-108.032-210.752-157.504-4.992 9.984-10.496 19.008-16.512 27.008-41.472 57.024-113.28 101.504-215.232 133.504-9.472-16.512-21.504-34.496-35.968-54.016 94.528-27.008 161.28-64.512 200.256-112.512 34.496-44.992 51.776-113.024 51.776-204.032V421.12h57.728v82.496c0 62.528-6.72 115.776-20.224 159.744 84.48 54.016 161.472 107.008 230.976 158.976l-42.048 50.304z" p-id="10750" fill="#d81e06"></path><path d="M367.488 495.36h423.744v47.232H367.488V495.36zM367.488 581.632h423.744v47.232H367.488v-47.232z" p-id="10751" fill="#d81e06"></path></svg>
            \u6211\u7684\u7F6E\u9876 (${topArticleItems.length}\u7BC7)`,
      items: topArticleItems,
      collapsed: false
    });
    yearGroups[1].collapsed = false;
  } else {
    yearGroups[0].collapsed = false;
  }
  addOrderNumber(yearGroups);
  return yearGroups;
}
function getItems(path) {
  let groups = [];
  let items = [];
  let total = 0;
  const groupCollapsedSize = 2;
  const titleCollapsedSize = 20;
  sync(`docs/${path}/*`, {
    onlyDirectories: true,
    objectMode: true
  }).forEach(({ name }) => {
    let groupName = name;
    sync(`docs/${path}/${groupName}/*`, {
      onlyFiles: true,
      objectMode: true
    }).forEach((article) => {
      const articleFile = matter.read(`${article.path}`);
      const { data } = articleFile;
      items.push({
        text: data.title,
        link: `/${path}/${groupName}/${article.name.replace(".md", "")}`
      });
      total += 1;
    });
    groups.push({
      text: `${groupName.substring(groupName.indexOf("-") + 1)} (${items.length}\u7BC7)`,
      items,
      collapsed: items.length < groupCollapsedSize || total > titleCollapsedSize
    });
    items = [];
  });
  addOrderNumber(groups);
  return groups;
}
function addOrderNumber(groups) {
  for (let i = 0; i < groups.length; i++) {
    for (let j = 0; j < groups[i].items.length; j++) {
      const items = groups[i].items;
      const index = j + 1;
      let indexStyle = `<div class="text-color-gray mr-[6px]" style="font-weight: 550; display: inline-block;">${index}</div>`;
      if (index == 1) {
        indexStyle = `<div class="text-color-red mr-[6px]" style="font-weight: 550; display: inline-block;">${index}</div>`;
      } else if (index == 2) {
        indexStyle = `<div class="text-color-orange mr-[6px]" style="font-weight: 550; display: inline-block;">${index}</div>`;
      } else if (index == 3) {
        indexStyle = `<div class="text-color-yellow mr-[6px]" style="font-weight: 550; display: inline-block;">${index}</div>`;
      }
      items[j].text = `${indexStyle}${items[j].text}`;
    }
  }
}

// docs/.vitepress/config/search/algolia-search.ts
var algoliaSearchOptions = {
  appId: "DBZ0G9HBUY",
  apiKey: "00cef480a543003d05d9808110ea5f65",
  indexName: "charles7c",
  locales: {
    root: {
      placeholder: "\u641C\u7D22\u6587\u6863",
      translations: {
        button: {
          buttonText: "\u641C\u7D22\u6587\u6863",
          buttonAriaLabel: "\u641C\u7D22\u6587\u6863"
        },
        modal: {
          searchBox: {
            resetButtonTitle: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",
            resetButtonAriaLabel: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",
            cancelButtonText: "\u53D6\u6D88",
            cancelButtonAriaLabel: "\u53D6\u6D88"
          },
          startScreen: {
            recentSearchesTitle: "\u641C\u7D22\u5386\u53F2",
            noRecentSearchesText: "\u6CA1\u6709\u641C\u7D22\u5386\u53F2",
            saveRecentSearchButtonTitle: "\u4FDD\u5B58\u81F3\u641C\u7D22\u5386\u53F2",
            removeRecentSearchButtonTitle: "\u4ECE\u641C\u7D22\u5386\u53F2\u4E2D\u79FB\u9664",
            favoriteSearchesTitle: "\u6536\u85CF",
            removeFavoriteSearchButtonTitle: "\u4ECE\u6536\u85CF\u4E2D\u79FB\u9664"
          },
          errorScreen: {
            titleText: "\u65E0\u6CD5\u83B7\u53D6\u7ED3\u679C",
            helpText: "\u4F60\u53EF\u80FD\u9700\u8981\u68C0\u67E5\u4F60\u7684\u7F51\u7EDC\u8FDE\u63A5"
          },
          footer: {
            selectText: "\u9009\u62E9",
            navigateText: "\u5207\u6362",
            closeText: "\u5173\u95ED",
            searchByText: "\u641C\u7D22\u63D0\u4F9B\u8005"
          },
          noResultsScreen: {
            noResultsText: "\u65E0\u6CD5\u627E\u5230\u76F8\u5173\u7ED3\u679C",
            suggestedQueryText: "\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u67E5\u8BE2",
            reportMissingResultsText: "\u4F60\u8BA4\u4E3A\u8BE5\u67E5\u8BE2\u5E94\u8BE5\u6709\u7ED3\u679C\uFF1F",
            reportMissingResultsLinkText: "\u70B9\u51FB\u53CD\u9988"
          }
        }
      }
    }
  }
};

// docs/.vitepress/config/theme.ts
var themeConfig = {
  nav,
  // 导航栏配置
  sidebar,
  // 侧边栏配置
  logo: "/title.png",
  outline: {
    level: "deep",
    // 右侧大纲标题层级
    label: "\u76EE\u5F55"
    // 右侧大纲标题文本配置
  },
  darkModeSwitchLabel: "\u5207\u6362\u65E5\u5149/\u6697\u9ED1\u6A21\u5F0F",
  sidebarMenuLabel: "\u6587\u7AE0",
  returnToTopLabel: "\u8FD4\u56DE\u9876\u90E8",
  lastUpdatedText: "\u6700\u540E\u66F4\u65B0",
  // 最后更新时间文本配置, 需先配置lastUpdated为true
  // 文档页脚文本配置
  docFooter: {
    prev: "\u4E0A\u4E00\u7BC7",
    next: "\u4E0B\u4E00\u7BC7"
  },
  // 编辑链接配置
  editLink: {
    pattern: "https://github.com/Charles7c/charles7c.github.io/edit/main/docs/:path",
    text: "\u4E0D\u59A5\u4E4B\u5904\uFF0C\u656C\u8BF7\u96C5\u6B63"
  },
  // 搜索配置（二选一）
  search: {
    provider: "algolia",
    options: algoliaSearchOptions
    // 本地离线搜索
    // provider: 'local',
    // options: localSearchOptions
  },
  // 导航栏右侧社交链接配置
  socialLinks: [
    { icon: "github", link: "https://github.com/Charles7c/charles7c.github.io" },
    {
      icon: {
        svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>\u7801\u4E91</title><path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296Z"/></svg>'
      },
      link: "https://gitee.com/Charles7c/charles7c"
    },
    {
      icon: {
        svg: `<svg width="33" height="33" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174.8 204">
                <title>ContiNew Admin</title>
                <path fill="#307AF2" d="M86.7,0l88,51v.2l-16.3,9.4v-.2L86.7,18.9Zm71.8,143.5,16.3,9.4v.2L86.8,204h0l-16.3-9.4,16.3-9.4h0l71.7-41.5v-.2Z"/>
                <path fill="#12D2AC" d="M16.3,143.5v.2L58,167.8l-16.3,9.4L0,153.1v-.2Z"/>
                <path fill="#12D2AC" d="M104.1,93,15.9,143.8l-.2-.1V124.9l.2.1L87.7,83.6,104.1,93Z"/>
                <path fill="#0057FE" d="M88.1,0,.1,51v.2l16.3,9.4v-.2L88.1,18.9Z"/>
                <path fill="#307AF2" d="M.1,50.9.2,152.6l.2.1,16.3-9.4-.2-.1-.1-82.9L.1,50.9Z"/>
                <path fill="#0057FE" d="M174.7,50.9l-.1,101.7-.2.1-16.3-9.4.2-.1.1-82.9Z"/>
                <path fill="#12D2AC" d="M41.7,158.5l16.1,9.4,100.6-58.7V90.4Z"/>
              </svg>`
      },
      link: "https://cnadmin.charles7c.top/"
    }
  ],
  // 自定义扩展: 文章元数据配置
  // @ts-ignore
  articleMetadataConfig: {
    author: "\u67E5\u5C14\u65AF",
    // 文章全局默认作者名称
    authorLink: "/about/me",
    // 点击作者名时默认跳转的链接
    showViewCount: false
    // 是否显示文章阅读数, 需要在 docs/.vitepress/theme/api/config.js 及 interface.js 配置好相应 API 接口
  },
  // 自定义扩展: 文章版权配置
  copyrightConfig: {
    license: "\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB 4.0 \u56FD\u9645 (CC BY-SA 4.0)",
    licenseLink: "http://creativecommons.org/licenses/by-sa/4.0/"
  },
  // 自定义扩展: 评论配置
  commentConfig: {
    type: "gitalk",
    showComment: true
    // 是否显示评论
  },
  // 自定义扩展: 页脚配置
  footerConfig: {
    showFooter: true,
    // 是否显示页脚
    icpRecordCode: "\u6D25ICP\u59072022005864\u53F7-2",
    // ICP备案号
    publicSecurityRecordCode: "\u6D25\u516C\u7F51\u5B89\u590712011202000677\u53F7",
    // 联网备案号
    copyright: `Copyright \xA9 2019-${(/* @__PURE__ */ new Date()).getFullYear()} Charles7c`
    // 版权信息
  }
};

// docs/.vitepress/config.ts
var config_default = withMermaid(
  defineConfig({
    lang: metaData.lang,
    title: metaData.title,
    description: metaData.description,
    cleanUrls: true,
    lastUpdated: true,
    // 显示最后更新时间
    head,
    // <head>内标签配置
    markdown,
    // Markdown配置
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => customElements.includes(tag)
        }
      }
    },
    themeConfig
    // 主题配置
  })
);
var customElements = [
  "mjx-container",
  "mjx-assistive-mml",
  "math",
  "maction",
  "maligngroup",
  "malignmark",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mi",
  "mlongdiv",
  "mmultiscripts",
  "mn",
  "mo",
  "mover",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "ms",
  "mscarries",
  "mscarry",
  "mscarries",
  "msgroup",
  "mstack",
  "mlongdiv",
  "msline",
  "mstack",
  "mspace",
  "msqrt",
  "msrow",
  "mstack",
  "mstack",
  "mstyle",
  "msub",
  "msup",
  "msubsup",
  "mtable",
  "mtd",
  "mtext",
  "mtr",
  "munder",
  "munderover",
  "semantics",
  "math",
  "mi",
  "mn",
  "mo",
  "ms",
  "mspace",
  "mtext",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "msqrt",
  "mstyle",
  "mmultiscripts",
  "mover",
  "mprescripts",
  "msub",
  "msubsup",
  "msup",
  "munder",
  "munderover",
  "none",
  "maligngroup",
  "malignmark",
  "mtable",
  "mtd",
  "mtr",
  "mlongdiv",
  "mscarries",
  "mscarry",
  "msgroup",
  "msline",
  "msrow",
  "mstack",
  "maction",
  "semantics",
  "annotation",
  "annotation-xml"
];
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy50cyIsICJkb2NzLy52aXRlcHJlc3MvY29uZmlnL2NvbnN0YW50cy50cyIsICJkb2NzLy52aXRlcHJlc3MvY29uZmlnL2hlYWQudHMiLCAiZG9jcy8udml0ZXByZXNzL2NvbmZpZy9tYXJrZG93bi50cyIsICJkb2NzLy52aXRlcHJlc3MvY29uZmlnL25hdi50cyIsICJkb2NzLy52aXRlcHJlc3MvY29uZmlnL3NpZGViYXIudHMiLCAiZG9jcy8udml0ZXByZXNzL3RoZW1lL3V0aWxzLnRzIiwgImRvY3MvLnZpdGVwcmVzcy9jb25maWcvc2VhcmNoL2FsZ29saWEtc2VhcmNoLnRzIiwgImRvY3MvLnZpdGVwcmVzcy9jb25maWcvdGhlbWUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxaXFxcXERlc2t0b3BcXFxcY2hhcmxlczdjLmdpdGh1Yi5pb1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFpcXFxcRGVza3RvcFxcXFxjaGFybGVzN2MuZ2l0aHViLmlvXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1ovRGVza3RvcC9jaGFybGVzN2MuZ2l0aHViLmlvL2RvY3MvLnZpdGVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlcHJlc3MnO1xyXG5pbXBvcnQgeyB3aXRoTWVybWFpZCB9IGZyb20gJ3ZpdGVwcmVzcy1wbHVnaW4tbWVybWFpZCc7XHJcbmltcG9ydCB7IG1ldGFEYXRhIH0gZnJvbSAnLi9jb25maWcvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgaGVhZCB9IGZyb20gJy4vY29uZmlnL2hlYWQnO1xyXG5pbXBvcnQgeyBtYXJrZG93biB9IGZyb20gJy4vY29uZmlnL21hcmtkb3duJztcclxuaW1wb3J0IHsgdGhlbWVDb25maWcgfSBmcm9tICcuL2NvbmZpZy90aGVtZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoTWVybWFpZChcclxuICBkZWZpbmVDb25maWcoe1xyXG4gICAgbGFuZzogbWV0YURhdGEubGFuZyxcclxuICAgIHRpdGxlOiBtZXRhRGF0YS50aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uOiBtZXRhRGF0YS5kZXNjcmlwdGlvbixcclxuXHJcbiAgICBjbGVhblVybHM6IHRydWUsXHJcbiAgICBsYXN0VXBkYXRlZDogdHJ1ZSwgLy8gXHU2NjNFXHU3OTNBXHU2NzAwXHU1NDBFXHU2NkY0XHU2NUIwXHU2NUY2XHU5NUY0XHJcblxyXG4gICAgaGVhZCwgLy8gPGhlYWQ+XHU1MTg1XHU2ODA3XHU3QjdFXHU5MTREXHU3RjZFXHJcbiAgICBtYXJrZG93bjogbWFya2Rvd24sIC8vIE1hcmtkb3duXHU5MTREXHU3RjZFXHJcbiAgICB2dWU6IHtcclxuICAgICAgdGVtcGxhdGU6IHtcclxuICAgICAgICBjb21waWxlck9wdGlvbnM6IHtcclxuICAgICAgICAgIGlzQ3VzdG9tRWxlbWVudDogKHRhZykgPT4gY3VzdG9tRWxlbWVudHMuaW5jbHVkZXModGFnKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHRoZW1lQ29uZmlnLCAvLyBcdTRFM0JcdTk4OThcdTkxNERcdTdGNkVcclxuICB9KSxcclxuKTtcclxuXHJcbmNvbnN0IGN1c3RvbUVsZW1lbnRzID0gW1xyXG4gICdtangtY29udGFpbmVyJyxcclxuICAnbWp4LWFzc2lzdGl2ZS1tbWwnLFxyXG4gICdtYXRoJyxcclxuICAnbWFjdGlvbicsXHJcbiAgJ21hbGlnbmdyb3VwJyxcclxuICAnbWFsaWdubWFyaycsXHJcbiAgJ21lbmNsb3NlJyxcclxuICAnbWVycm9yJyxcclxuICAnbWZlbmNlZCcsXHJcbiAgJ21mcmFjJyxcclxuICAnbWknLFxyXG4gICdtbG9uZ2RpdicsXHJcbiAgJ21tdWx0aXNjcmlwdHMnLFxyXG4gICdtbicsXHJcbiAgJ21vJyxcclxuICAnbW92ZXInLFxyXG4gICdtcGFkZGVkJyxcclxuICAnbXBoYW50b20nLFxyXG4gICdtcm9vdCcsXHJcbiAgJ21yb3cnLFxyXG4gICdtcycsXHJcbiAgJ21zY2FycmllcycsXHJcbiAgJ21zY2FycnknLFxyXG4gICdtc2NhcnJpZXMnLFxyXG4gICdtc2dyb3VwJyxcclxuICAnbXN0YWNrJyxcclxuICAnbWxvbmdkaXYnLFxyXG4gICdtc2xpbmUnLFxyXG4gICdtc3RhY2snLFxyXG4gICdtc3BhY2UnLFxyXG4gICdtc3FydCcsXHJcbiAgJ21zcm93JyxcclxuICAnbXN0YWNrJyxcclxuICAnbXN0YWNrJyxcclxuICAnbXN0eWxlJyxcclxuICAnbXN1YicsXHJcbiAgJ21zdXAnLFxyXG4gICdtc3Vic3VwJyxcclxuICAnbXRhYmxlJyxcclxuICAnbXRkJyxcclxuICAnbXRleHQnLFxyXG4gICdtdHInLFxyXG4gICdtdW5kZXInLFxyXG4gICdtdW5kZXJvdmVyJyxcclxuICAnc2VtYW50aWNzJyxcclxuICAnbWF0aCcsXHJcbiAgJ21pJyxcclxuICAnbW4nLFxyXG4gICdtbycsXHJcbiAgJ21zJyxcclxuICAnbXNwYWNlJyxcclxuICAnbXRleHQnLFxyXG4gICdtZW5jbG9zZScsXHJcbiAgJ21lcnJvcicsXHJcbiAgJ21mZW5jZWQnLFxyXG4gICdtZnJhYycsXHJcbiAgJ21wYWRkZWQnLFxyXG4gICdtcGhhbnRvbScsXHJcbiAgJ21yb290JyxcclxuICAnbXJvdycsXHJcbiAgJ21zcXJ0JyxcclxuICAnbXN0eWxlJyxcclxuICAnbW11bHRpc2NyaXB0cycsXHJcbiAgJ21vdmVyJyxcclxuICAnbXByZXNjcmlwdHMnLFxyXG4gICdtc3ViJyxcclxuICAnbXN1YnN1cCcsXHJcbiAgJ21zdXAnLFxyXG4gICdtdW5kZXInLFxyXG4gICdtdW5kZXJvdmVyJyxcclxuICAnbm9uZScsXHJcbiAgJ21hbGlnbmdyb3VwJyxcclxuICAnbWFsaWdubWFyaycsXHJcbiAgJ210YWJsZScsXHJcbiAgJ210ZCcsXHJcbiAgJ210cicsXHJcbiAgJ21sb25nZGl2JyxcclxuICAnbXNjYXJyaWVzJyxcclxuICAnbXNjYXJyeScsXHJcbiAgJ21zZ3JvdXAnLFxyXG4gICdtc2xpbmUnLFxyXG4gICdtc3JvdycsXHJcbiAgJ21zdGFjaycsXHJcbiAgJ21hY3Rpb24nLFxyXG4gICdzZW1hbnRpY3MnLFxyXG4gICdhbm5vdGF0aW9uJyxcclxuICAnYW5ub3RhdGlvbi14bWwnLFxyXG5dOyIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcWlxcXFxEZXNrdG9wXFxcXGNoYXJsZXM3Yy5naXRodWIuaW9cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcWlxcXFxEZXNrdG9wXFxcXGNoYXJsZXM3Yy5naXRodWIuaW9cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1xcXFxjb25zdGFudHMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1ovRGVza3RvcC9jaGFybGVzN2MuZ2l0aHViLmlvL2RvY3MvLnZpdGVwcmVzcy9jb25maWcvY29uc3RhbnRzLnRzXCI7Y29uc3Qgc2l0ZSA9ICdodHRwczovL2Jsb2cuY2hhcmxlczdjLnRvcCc7XHJcblxyXG5leHBvcnQgY29uc3QgbWV0YURhdGEgPSB7XHJcbiAgbGFuZzogJ3poLUNOJyxcclxuICBsb2NhbGU6ICd6aF9DTicsXHJcbiAgdGl0bGU6ICdHaXZUZWNoJyxcclxuICBkZXNjcmlwdGlvbjogJ1x1NEUyQVx1NEVCQVx1NjI4MFx1NjcyRlx1NzdFNVx1OEJDNlx1NUU5M1x1RkYwQ1x1OEJCMFx1NUY1NSAmIFx1NTIwNlx1NEVBQlx1NEUyQVx1NEVCQVx1Nzg4RVx1NzI0N1x1NTMxNlx1MzAwMVx1N0VEM1x1Njc4NFx1NTMxNlx1MzAwMVx1NEY1M1x1N0NGQlx1NTMxNlx1NzY4NFx1NjI4MFx1NjcyRlx1NzdFNVx1OEJDNlx1NTE4NVx1NUJCOVx1MzAwMicsXHJcbiAgc2l0ZSxcclxuICBpbWFnZTogYCR7c2l0ZX0vdGl0bGUucG5nYCxcclxufTsiLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFpcXFxcRGVza3RvcFxcXFxjaGFybGVzN2MuZ2l0aHViLmlvXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFpcXFxcRGVza3RvcFxcXFxjaGFybGVzN2MuZ2l0aHViLmlvXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcXFxcaGVhZC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvWi9EZXNrdG9wL2NoYXJsZXM3Yy5naXRodWIuaW8vZG9jcy8udml0ZXByZXNzL2NvbmZpZy9oZWFkLnRzXCI7aW1wb3J0IHR5cGUgeyBIZWFkQ29uZmlnIH0gZnJvbSAndml0ZXByZXNzJztcclxuaW1wb3J0IHsgbWV0YURhdGEgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgaGVhZDogSGVhZENvbmZpZ1tdID0gW1xyXG4gIFsnbGluaycsIHsgcmVsOiAnaWNvbicsIGhyZWY6ICcvZmF2aWNvbi5pY28nIH1dLFxyXG4gIFsnbWV0YScsIHsgbmFtZTogJ2F1dGhvcicsIGNvbnRlbnQ6ICdDaGFybGVzN2MnIH1dLFxyXG4gIFsnbWV0YScsIHsgbmFtZTogJ2tleXdvcmRzJywgY29udGVudDogJ1x1NjdFNVx1NUMxNFx1NjVBRlx1NzY4NFx1NzdFNVx1OEJDNlx1NUU5MywgXHU3N0U1XHU4QkM2XHU1RTkzLCBcdTUzNUFcdTVCQTIsIENoYXJsZXM3YycgfV0sXHJcblxyXG4gIFsnbWV0YScsIHsgbmFtZTogJ0hhbmRoZWxkRnJpZW5kbHknLCBjb250ZW50OiAnVHJ1ZScgfV0sXHJcbiAgWydtZXRhJywgeyBuYW1lOiAnTW9iaWxlT3B0aW1pemVkJywgY29udGVudDogJzMyMCcgfV0sXHJcbiAgWydtZXRhJywgeyBuYW1lOiAndGhlbWUtY29sb3InLCBjb250ZW50OiAnIzNjODc3MicgfV0sXHJcblxyXG4gIFsnbWV0YScsIHsgcHJvcGVydHk6ICdvZzp0eXBlJywgY29udGVudDogJ3dlYnNpdGUnIH1dLFxyXG4gIFsnbWV0YScsIHsgcHJvcGVydHk6ICdvZzpsb2NhbGUnLCBjb250ZW50OiBtZXRhRGF0YS5sb2NhbGUgfV0sXHJcbiAgWydtZXRhJywgeyBwcm9wZXJ0eTogJ29nOnRpdGxlJywgY29udGVudDogbWV0YURhdGEudGl0bGUgfV0sXHJcbiAgWydtZXRhJywgeyBwcm9wZXJ0eTogJ29nOmRlc2NyaXB0aW9uJywgY29udGVudDogbWV0YURhdGEuZGVzY3JpcHRpb24gfV0sXHJcbiAgWydtZXRhJywgeyBwcm9wZXJ0eTogJ29nOnNpdGUnLCBjb250ZW50OiBtZXRhRGF0YS5zaXRlIH1dLFxyXG4gIFsnbWV0YScsIHsgcHJvcGVydHk6ICdvZzpzaXRlX25hbWUnLCBjb250ZW50OiBtZXRhRGF0YS50aXRsZSB9XSxcclxuICBbJ21ldGEnLCB7IHByb3BlcnR5OiAnb2c6aW1hZ2UnLCBjb250ZW50OiBtZXRhRGF0YS5pbWFnZSB9XSxcclxuXHJcbiAgLy8gXHU3NjdFXHU1RUE2XHU3RURGXHU4QkExXHU0RUUzXHU3ODAxXHVGRjFBaHR0cHM6Ly90b25namkuYmFpZHUuY29tXHJcbiAgWydzY3JpcHQnLCB7fSwgYHZhciBfaG10ID0gX2htdCB8fCBbXTtcclxuICAoZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgaG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgaG0uc3JjID0gXCJodHRwczovL2htLmJhaWR1LmNvbS9obS5qcz81M2FmNGIxYTEyZmJlNDA4MTBjYTdhZDM5ZjhkYjljN1wiO1xyXG4gICAgdmFyIHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKVswXTsgXHJcbiAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGhtLCBzKTtcclxuICB9KSgpO2BdLFxyXG4gIC8vIFx1OTg3NVx1OTc2Mlx1OEJCRlx1OTVFRVx1OTFDRlx1N0VERlx1OEJBMVxyXG4gIC8vIFsnc2NyaXB0Jywge30sIGBcclxuICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG4gIC8vICAgbGV0IG9sZEhyZWYgPSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLCBib2R5RE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gIC8vICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbihtdXRhdGlvbnMpIHtcclxuICAvLyAgICAgaWYgKG9sZEhyZWYgIT0gZG9jdW1lbnQubG9jYXRpb24uaHJlZikge1xyXG4gIC8vICAgICAgIG9sZEhyZWYgPSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xyXG4gIC8vICAgICAgIGdldFB2KClcclxuICAvLyAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xyXG4gIC8vICAgICAgICAgbGV0IHRtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAvLyAgICAgICAgIGlmKHRtcCAhPSBib2R5RE9NKSB7XHJcbiAgLy8gICAgICAgICAgIGJvZHlET00gPSB0bXA7XHJcbiAgLy8gICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoYm9keURPTSwgY29uZmlnKTtcclxuICAvLyAgICAgICAgIH1cclxuICAvLyAgICAgICB9KVxyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9KTtcclxuICAvLyAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAvLyAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gIC8vICAgICBzdWJ0cmVlOiB0cnVlXHJcbiAgLy8gICB9O1xyXG4gIC8vICAgb2JzZXJ2ZXIub2JzZXJ2ZShib2R5RE9NLCBjb25maWcpO1xyXG4gIC8vICAgZ2V0UHYoKVxyXG4gIC8vIH0sIHRydWUpO1xyXG5cclxuICAvLyBmdW5jdGlvbiBnZXRQdigpIHtcclxuICAvLyAgIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gIC8vICAgeGhyLm9wZW4oJ0dFVCcsICdodHRwczovL2FwaS5jaGFybGVzN2MudG9wL2Jsb2cvcHY/cGFnZVVybD0nICsgbG9jYXRpb24uaHJlZik7XHJcbiAgLy8gICB4aHIuc2VuZCgpO1xyXG4gIC8vIH1gXVxyXG5dOyIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcWlxcXFxEZXNrdG9wXFxcXGNoYXJsZXM3Yy5naXRodWIuaW9cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcWlxcXFxEZXNrdG9wXFxcXGNoYXJsZXM3Yy5naXRodWIuaW9cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1xcXFxtYXJrZG93bi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvWi9EZXNrdG9wL2NoYXJsZXM3Yy5naXRodWIuaW8vZG9jcy8udml0ZXByZXNzL2NvbmZpZy9tYXJrZG93bi50c1wiO2ltcG9ydCB0eXBlIHsgTWFya2Rvd25PcHRpb25zIH0gZnJvbSAndml0ZXByZXNzJztcclxuaW1wb3J0IG1hdGhqYXgzIGZyb20gJ21hcmtkb3duLWl0LW1hdGhqYXgzJztcclxuaW1wb3J0IGZvb3Rub3RlIGZyb20gJ21hcmtkb3duLWl0LWZvb3Rub3RlJztcclxuXHJcbmV4cG9ydCBjb25zdCBtYXJrZG93bjogTWFya2Rvd25PcHRpb25zID0ge1xyXG4gIC8vIFNoaWtpXHU0RTNCXHU5ODk4LCBcdTYyNDBcdTY3MDlcdTRFM0JcdTk4OThcdTUzQzJcdTg5QzE6IGh0dHBzOi8vZ2l0aHViLmNvbS9zaGlraWpzL3NoaWtpL2Jsb2IvbWFpbi9kb2NzL3RoZW1lcy5tZFxyXG4gIHRoZW1lOiB7XHJcbiAgICBsaWdodDogJ2dpdGh1Yi1saWdodCcsXHJcbiAgICBkYXJrOiAnZ2l0aHViLWRhcmstZGltbWVkJ1xyXG4gIH0sXHJcbiAgLy8gbGluZU51bWJlcnM6IHRydWUsIC8vIFx1NTQyRlx1NzUyOFx1ODg0Q1x1NTNGN1xyXG5cclxuICBjb25maWc6IChtZCkgPT4ge1xyXG4gICAgbWQudXNlKG1hdGhqYXgzKTtcclxuICAgIG1kLnVzZShmb290bm90ZSk7XHJcblxyXG4gICAgLy8gXHU1NzI4XHU2MjQwXHU2NzA5XHU2NTg3XHU2ODYzXHU3Njg0PGgxPlx1NjgwN1x1N0I3RVx1NTQwRVx1NkRGQlx1NTJBMDxBcnRpY2xlTWV0YWRhdGEvPlx1N0VDNFx1NEVGNlxyXG4gICAgbWQucmVuZGVyZXIucnVsZXMuaGVhZGluZ19jbG9zZSA9ICh0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52LCBzbGYpID0+IHtcclxuICAgICAgbGV0IGh0bWxSZXN1bHQgPSBzbGYucmVuZGVyVG9rZW4odG9rZW5zLCBpZHgsIG9wdGlvbnMpO1xyXG4gICAgICBpZiAodG9rZW5zW2lkeF0udGFnID09PSAnaDEnKSBodG1sUmVzdWx0ICs9IGBcXG48Q2xpZW50T25seT48QXJ0aWNsZU1ldGFkYXRhIHYtaWY9XCIoJGZyb250bWF0dGVyPy5hc2lkZSA/PyB0cnVlKSAmJiAoJGZyb250bWF0dGVyPy5zaG93QXJ0aWNsZU1ldGFkYXRhID8/IHRydWUpXCIgOmFydGljbGU9XCIkZnJvbnRtYXR0ZXJcIiAvPjwvQ2xpZW50T25seT5gO1xyXG4gICAgICByZXR1cm4gaHRtbFJlc3VsdDtcclxuICAgIH1cclxuICB9LFxyXG59O1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFpcXFxcRGVza3RvcFxcXFxjaGFybGVzN2MuZ2l0aHViLmlvXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFpcXFxcRGVza3RvcFxcXFxjaGFybGVzN2MuZ2l0aHViLmlvXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcXFxcbmF2LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9aL0Rlc2t0b3AvY2hhcmxlczdjLmdpdGh1Yi5pby9kb2NzLy52aXRlcHJlc3MvY29uZmlnL25hdi50c1wiO2ltcG9ydCB0eXBlIHsgRGVmYXVsdFRoZW1lIH0gZnJvbSAndml0ZXByZXNzJztcclxuXHJcbmV4cG9ydCBjb25zdCBuYXY6IERlZmF1bHRUaGVtZS5Db25maWdbJ25hdiddID0gW1xyXG4gIHtcclxuICAgIHRleHQ6ICdcdTVGRUJcdTkwMUZcdTVGMDBcdTU5Q0InLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAgeyB0ZXh0OiAnXHU2NjdBXHU4MEZEXHU1NDA4XHU3RUE2XHU4QkJFXHU4QkExJywgbGluazogJy9jYXRlZ29yaWVzL2lzc3Vlcy9pbmRleCcsIGFjdGl2ZU1hdGNoOiAnL2NhdGVnb3JpZXMvaXNzdWVzLycgfSxcclxuICAgICAgeyB0ZXh0OiAnXHU1NDBFXHU3QUVGXHU1RjAwXHU1M0QxXHU4QkJFXHU4QkExJywgbGluazogJy9jYXRlZ29yaWVzL2ZyYWdtZW50cy9pbmRleCcsIGFjdGl2ZU1hdGNoOiAnL2NhdGVnb3JpZXMvZnJhZ21lbnRzLycgfSxcclxuICAgICAgeyB0ZXh0OiAnXHU1MjREXHU3QUVGXHU1RjAwXHU1M0QxXHU4QkJFXHU4QkExJywgbGluazogJy9jYXRlZ29yaWVzL3Rvb2xzL2luZGV4JywgYWN0aXZlTWF0Y2g6ICcvY2F0ZWdvcmllcy90b29scy8nIH0sXHJcbiAgICAgIHsgdGV4dDogJ1x1OEZEMFx1N0VGNFx1OTBFOFx1N0Y3Mlx1OEJCRVx1OEJBMScsIGxpbms6ICcvY2F0ZWdvcmllcy9zb2x1dGlvbnMvaW5kZXgnLCBhY3RpdmVNYXRjaDogJy9jYXRlZ29yaWVzL3NvbHV0aW9ucy8nIH1cclxuICAgIF0sXHJcbiAgICBhY3RpdmVNYXRjaDogJy9jYXRlZ29yaWVzLydcclxuICB9LFxyXG4gIHtcclxuICAgIHRleHQ6ICdcdTU2RTJcdTk2MUZcdTYyMTBcdTU0NTgnLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAgeyB0ZXh0OiAnXHU2MjEwXHU1NDU4XHU0RUNCXHU3RUNEJywgbGluazogJy9jb3Vyc2VzL2phdmEvaW5kZXgnLCBhY3RpdmVNYXRjaDogJy9jb3Vyc2VzL2phdmEvJyB9LFxyXG4gICAgXSxcclxuICAgIGFjdGl2ZU1hdGNoOiAnL2NvdXJzZXMvJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGV4dDogJ1x1OTBFOFx1N0Y3Mlx1NjU4N1x1Njg2MycsXHJcbiAgICBsaW5rOiAnL3RhZ3MnLFxyXG4gICAgYWN0aXZlTWF0Y2g6ICcvdGFncydcclxuICB9LFxyXG4gIHtcclxuICAgIHRleHQ6ICdcdTUxNzNcdTRFOEUnLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAgeyB0ZXh0OiAnXHU1MTczXHU0RThFXHU3N0U1XHU4QkM2XHU1RTkzJywgbGluazogJy9hYm91dC9pbmRleCcsIGFjdGl2ZU1hdGNoOiAnL2Fib3V0L2luZGV4JyB9LFxyXG4gICAgICB7IHRleHQ6ICdcdTUxNzNcdTRFOEVcdTYyMTEnLCBsaW5rOiAnL2Fib3V0L21lJywgYWN0aXZlTWF0Y2g6ICcvYWJvdXQvbWUnIH1cclxuICAgIF0sXHJcbiAgICBhY3RpdmVNYXRjaDogJy9hYm91dC8nIC8vIC8vIFx1NUY1M1x1NTI0RFx1OTg3NVx1OTc2Mlx1NTkwNFx1NEU4RVx1NTMzOVx1OTE0RFx1OERFRlx1NUY4NFx1NEUwQlx1NjVGNiwgXHU1QkY5XHU1RTk0XHU1QkZDXHU4MjJBXHU4M0RDXHU1MzU1XHU1QzA2XHU3QTgxXHU1MUZBXHU2NjNFXHU3OTNBXHJcbiAgfSxcclxuXTsiLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFpcXFxcRGVza3RvcFxcXFxjaGFybGVzN2MuZ2l0aHViLmlvXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFpcXFxcRGVza3RvcFxcXFxjaGFybGVzN2MuZ2l0aHViLmlvXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcXFxcc2lkZWJhci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvWi9EZXNrdG9wL2NoYXJsZXM3Yy5naXRodWIuaW8vZG9jcy8udml0ZXByZXNzL2NvbmZpZy9zaWRlYmFyLnRzXCI7aW1wb3J0IHR5cGUgeyBEZWZhdWx0VGhlbWUgfSBmcm9tICd2aXRlcHJlc3MnO1xyXG5pbXBvcnQgZmcgZnJvbSAnZmFzdC1nbG9iJztcclxuaW1wb3J0IG1hdHRlciBmcm9tICdncmF5LW1hdHRlcic7XHJcbmltcG9ydCB7IGdldENoaW5lc2Vab2RpYWMsIGdldENoaW5lc2Vab2RpYWNBbGlhcyB9IGZyb20gJy4uL3RoZW1lL3V0aWxzLnRzJztcclxuY29uc3Qgc3luYyA9IGZnLnN5bmM7XHJcblxyXG5leHBvcnQgY29uc3Qgc2lkZWJhcjogRGVmYXVsdFRoZW1lLkNvbmZpZ1snc2lkZWJhciddID0ge1xyXG4gICcvY2F0ZWdvcmllcy9pc3N1ZXMvJzogZ2V0SXRlbXNCeURhdGUoXCJjYXRlZ29yaWVzL2lzc3Vlc1wiKSxcclxuICAnL2NhdGVnb3JpZXMvZnJhZ21lbnRzLyc6IGdldEl0ZW1zQnlEYXRlKFwiY2F0ZWdvcmllcy9mcmFnbWVudHNcIiksXHJcbiAgJy9jYXRlZ29yaWVzL3NvbHV0aW9ucy8nOiBnZXRJdGVtc0J5RGF0ZShcImNhdGVnb3JpZXMvc29sdXRpb25zXCIpLFxyXG4gICcvY2F0ZWdvcmllcy90b29scy8nOiBnZXRJdGVtc0J5RGF0ZShcImNhdGVnb3JpZXMvdG9vbHNcIiksXHJcblxyXG4gICcvY291cnNlcy9qYXZhLyc6IGdldEl0ZW1zKFwiY291cnNlcy9qYXZhXCIpLFxyXG4gICcvY291cnNlcy9teXNxbC8nOiBnZXRJdGVtcyhcImNvdXJzZXMvbXlzcWxcIiksXHJcbiAgJy9jb3Vyc2VzL215YmF0aXMvJzogZ2V0SXRlbXMoXCJjb3Vyc2VzL215YmF0aXNcIiksXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTY4MzlcdTYzNkUgXHU2N0QwXHU1MjA2XHU3QzdCL1lZWVkvTU0vZGQveHh4Lm1kIFx1NzY4NFx1NzZFRVx1NUY1NVx1NjgzQ1x1NUYwRiwgXHU4M0I3XHU1M0Q2XHU0RkE3XHU4RkI5XHU2ODBGXHU1MjA2XHU3RUM0XHU1M0NBXHU1MjA2XHU3RUM0XHU0RTBCXHU2ODA3XHU5ODk4XHJcbiAqIFxyXG4gKiAvY2F0ZWdvcmllcy9pc3N1ZXMvMjAyMi8wNy8yMC94eHgubWRcclxuICogXHJcbiAqIEBwYXJhbSBwYXRoIFx1NjI2Qlx1NjNDRlx1NTdGQVx1Nzg0MFx1OERFRlx1NUY4NFxyXG4gKiBAcmV0dXJucyB7RGVmYXVsdFRoZW1lLlNpZGViYXJJdGVtW119XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRJdGVtc0J5RGF0ZSAocGF0aDogc3RyaW5nKSB7XHJcbiAgLy8gXHU0RkE3XHU4RkI5XHU2ODBGXHU1RTc0XHU0RUZEXHU1MjA2XHU3RUM0XHU2NTcwXHU3RUM0XHJcbiAgbGV0IHllYXJHcm91cHM6IERlZmF1bHRUaGVtZS5TaWRlYmFySXRlbVtdID0gW107XHJcbiAgLy8gXHU3RjZFXHU5ODc2XHU2NTcwXHU3RUM0XHJcbiAgbGV0IHRvcEFydGljbGVJdGVtczogRGVmYXVsdFRoZW1lLlNpZGViYXJJdGVtW10gPSBbXTtcclxuXHJcbiAgLy8gMS5cdTgzQjdcdTUzRDZcdTYyNDBcdTY3MDlcdTVFNzRcdTRFRkRcdTc2RUVcdTVGNTVcclxuICBzeW5jKGBkb2NzLyR7cGF0aH0vKmAsIHtcclxuICAgIG9ubHlEaXJlY3RvcmllczogdHJ1ZSxcclxuICAgIG9iamVjdE1vZGU6IHRydWUsXHJcbiAgfSkuZm9yRWFjaCgoeyBuYW1lIH0pID0+IHtcclxuICAgIGxldCB5ZWFyID0gbmFtZTtcclxuICAgIC8vIFx1NUU3NFx1NEVGRFx1NjU3MFx1N0VDNFxyXG4gICAgbGV0IGFydGljbGVJdGVtczogRGVmYXVsdFRoZW1lLlNpZGViYXJJdGVtW10gPSBbXTtcclxuXHJcbiAgICAvLyAyLlx1ODNCN1x1NTNENlx1NjI0MFx1NjcwOVx1NjcwOFx1NEVGRFx1NzZFRVx1NUY1NVxyXG4gICAgc3luYyhgZG9jcy8ke3BhdGh9LyR7eWVhcn0vKmAsIHtcclxuICAgICAgb25seURpcmVjdG9yaWVzOiB0cnVlLFxyXG4gICAgICBvYmplY3RNb2RlOiB0cnVlLFxyXG4gICAgfSkuZm9yRWFjaCgoeyBuYW1lIH0pID0+IHtcclxuICAgICAgbGV0IG1vbnRoID0gbmFtZVxyXG5cclxuICAgICAgLy8gMy5cdTgzQjdcdTUzRDZcdTYyNDBcdTY3MDlcdTY1RTVcdTY3MUZcdTc2RUVcdTVGNTVcclxuICAgICAgc3luYyhgZG9jcy8ke3BhdGh9LyR7eWVhcn0vJHttb250aH0vKmAsIHtcclxuICAgICAgICBvbmx5RGlyZWN0b3JpZXM6IHRydWUsXHJcbiAgICAgICAgb2JqZWN0TW9kZTogdHJ1ZSxcclxuICAgICAgfSkuZm9yRWFjaCgoeyBuYW1lIH0pID0+IHtcclxuICAgICAgICBsZXQgZGF5ID0gbmFtZTtcclxuICAgICAgICAvLyA0Llx1ODNCN1x1NTNENlx1NjVFNVx1NjcxRlx1NzZFRVx1NUY1NVx1NEUwQlx1NzY4NFx1NjI0MFx1NjcwOVx1NjU4N1x1N0FFMFxyXG4gICAgICAgIHN5bmMoYGRvY3MvJHtwYXRofS8ke3llYXJ9LyR7bW9udGh9LyR7ZGF5fS8qYCwge1xyXG4gICAgICAgICAgb25seUZpbGVzOiB0cnVlLFxyXG4gICAgICAgICAgb2JqZWN0TW9kZTogdHJ1ZSxcclxuICAgICAgICB9KS5mb3JFYWNoKChhcnRpY2xlKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBhcnRpY2xlRmlsZSA9IG1hdHRlci5yZWFkKGAke2FydGljbGUucGF0aH1gKTtcclxuICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXJ0aWNsZUZpbGU7XHJcbiAgICAgICAgICBpZiAoZGF0YS5pc1RvcCkge1xyXG4gICAgICAgICAgICAvLyBcdTU0MTFcdTdGNkVcdTk4NzZcdTUyMDZcdTdFQzRcdTUyNERcdThGRkRcdTUyQTBcdTY4MDdcdTk4OThcclxuICAgICAgICAgICAgdG9wQXJ0aWNsZUl0ZW1zLnVuc2hpZnQoe1xyXG4gICAgICAgICAgICAgIHRleHQ6IGRhdGEudGl0bGUsXHJcbiAgICAgICAgICAgICAgbGluazogYC8ke3BhdGh9LyR7eWVhcn0vJHttb250aH0vJHtkYXl9LyR7YXJ0aWNsZS5uYW1lLnJlcGxhY2UoJy5tZCcsICcnKX1gLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBcdTU0MTFcdTVFNzRcdTRFRkRcdTUyMDZcdTdFQzRcdTUyNERcdThGRkRcdTUyQTBcdTY4MDdcdTk4OThcclxuICAgICAgICAgIGFydGljbGVJdGVtcy51bnNoaWZ0KHtcclxuICAgICAgICAgICAgdGV4dDogZGF0YS50aXRsZSxcclxuICAgICAgICAgICAgbGluazogYC8ke3BhdGh9LyR7eWVhcn0vJHttb250aH0vJHtkYXl9LyR7YXJ0aWNsZS5uYW1lLnJlcGxhY2UoJy5tZCcsICcnKX1gLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgLy8gXHU2REZCXHU1MkEwXHU1RTc0XHU0RUZEXHU1MjA2XHU3RUM0XHJcbiAgICB5ZWFyR3JvdXBzLnVuc2hpZnQoe1xyXG4gICAgICB0ZXh0OiBgPGltZyBjbGFzcz1cImNoaW5lc2Utem9kaWFjXCIgc3R5bGU9XCJwb3NpdGlvbjogc3RhdGljOyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBwYWRkaW5nLWJvdHRvbTogM3B4O1wiIHNyYz1cIi9pbWcvc3ZnL2NoaW5lc2Utem9kaWFjLyR7Z2V0Q2hpbmVzZVpvZGlhYyh5ZWFyLnJlcGxhY2UoJ1x1NUU3NCcsICcnKSl9LnN2Z1wiIHRpdGxlPVwiJHtnZXRDaGluZXNlWm9kaWFjQWxpYXMoeWVhci5yZXBsYWNlKCdcdTVFNzQnLCAnJykpfVwiIGFsdD1cIlx1NzUxRlx1ODA5NlwiPlxyXG4gICAgICAgICAgICAke3llYXJ9XHU1RTc0ICgke2FydGljbGVJdGVtcy5sZW5ndGh9XHU3QkM3KWAsXHJcbiAgICAgIGl0ZW1zOiBhcnRpY2xlSXRlbXMsXHJcbiAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcclxuICAgIH0pO1xyXG4gIH0pXHJcblxyXG4gIGlmICh0b3BBcnRpY2xlSXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgLy8gXHU2REZCXHU1MkEwXHU3RjZFXHU5ODc2XHU1MjA2XHU3RUM0XHJcbiAgICB5ZWFyR3JvdXBzLnVuc2hpZnQoe1xyXG4gICAgICB0ZXh0OiBgPHN2ZyBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jazsgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgcGFkZGluZy1ib3R0b206IDNweDtcIiB2aWV3Qm94PVwiMCAwIDE5MjAgMTAyNFwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzMFwiIGhlaWdodD1cIjMwXCI+PHBhdGggZD1cIk0zNjcuNDg4IDY2Ny45MDRoNDIzLjc0NHY0Ny4yMzJIMzY3LjQ4OHYtNDcuMjMyek0zMjAuMjU2IDIwNC4zNTJoMTM3LjI4djY4Ljk5MmgtMTM3LjI4di02OC45OTJ6TTM2Ny40ODggNzU0LjExMmg0MjMuNzQ0djQ4SDM2Ny40ODh2LTQ4ek02OTMuNzYgMjA0LjM1MmgxMzcuOTg0djY4Ljk5Mkg2OTMuNzZ2LTY4Ljk5MnpNNTA3LjAwOCAyMDQuMzUyaDEzNy4yOHY2OC45OTJoLTEzNy4yOHYtNjguOTkyelwiIHAtaWQ9XCIxMDc0OVwiIGZpbGw9XCIjZDgxZTA2XCI+PC9wYXRoPjxwYXRoIGQ9XCJNMTc5Mi41MTIgMEgxMjcuNDg4QzU3LjQ3MiAwIDAgNTcuMTUyIDAgMTI3LjYxNnY3NjguNzY4QzAgOTY2LjcyIDU3LjA4OCAxMDI0IDEyNy40ODggMTAyNGgxNjY1LjA4OGM2OS45NTIgMCAxMjcuNDI0LTU3LjE1MiAxMjcuNDI0LTEyNy42MTZWMTI3LjYxNkMxOTIwIDU3LjIxNiAxODYyLjkxMiAwIDE3OTIuNTEyIDB6IG0tNTI4IDE3NS4xMDRoNDQ2Ljk3NnY1NC4wMTZIMTQ5NC43MmwtMjQgMTAxLjI0OGgyMDYuOTc2VjY4OS42aC01Ny43MjhWMzg0LjMyaC0yODkuNDcydjMwOC4yMjRoLTU3LjcyOHYtMzYyLjI0aDE0MC4yMjRsMjAuOTkyLTEwMS4yNDhoLTE2OS40NzJ2LTUzLjk1MnogbS05OTYuMDMyLTExLjJoNjE0LjI3MnYxNjcuMjMyaC01MS4wMDh2LTE3LjI4SDMyMC4yNTZ2MTcuMjhIMjY4LjQ4VjE2My45MDR6IG02NzguNzg0IDY4MS43MjhoLTc0NHYtNDMuNTJoMTExLjc0NFY0NTQuODQ4aDIyOS41MDR2LTQ4LjcwNEgyMjEuMjQ4di00Mi4wNDhoMzIzLjI2NHYtMzkuNzQ0aDU0LjAxNnYzOS43NDRoMzMxLjUydjQxLjk4NGgtMzMxLjUydjQ4Ljc2OGgyNDUuMjQ4djM0Ny4yNjRoMTAzLjQ4OHY0My41MnogbTIwMy4yNjQtOTQuNTI4YzAgNTkuNTItMzAuNzIgODkuMjgtOTIuMjI0IDg5LjI4LTI1LjQ3MiAwLTQ2LjAxNi0wLjUxMi02MS41MDQtMS40NzItMi40OTYtMjIuOTc2LTYuNTI4LTQ1LjI0OC0xMi4wMzItNjYuNzUyIDIyLjk3NiA1LjUwNCA0Ni43MiA4LjI1NiA3MS4yMzIgOC4yNTYgMjQgMCAzNS45NjgtMTEuNTIgMzUuOTY4LTM0LjQ5NlYyNDcuODcySDk3MS4ydi01NC43MmgyNzguOTc2djU0LjcySDExNTAuNHY1MDMuMjMyeiBtNTIxLjIxNiAxMjEuNTM2Yy02Ny4wMDgtNTUuNDg4LTEzNy4yOC0xMDguMDMyLTIxMC43NTItMTU3LjUwNC00Ljk5MiA5Ljk4NC0xMC40OTYgMTkuMDA4LTE2LjUxMiAyNy4wMDgtNDEuNDcyIDU3LjAyNC0xMTMuMjggMTAxLjUwNC0yMTUuMjMyIDEzMy41MDQtOS40NzItMTYuNTEyLTIxLjUwNC0zNC40OTYtMzUuOTY4LTU0LjAxNiA5NC41MjgtMjcuMDA4IDE2MS4yOC02NC41MTIgMjAwLjI1Ni0xMTIuNTEyIDM0LjQ5Ni00NC45OTIgNTEuNzc2LTExMy4wMjQgNTEuNzc2LTIwNC4wMzJWNDIxLjEyaDU3LjcyOHY4Mi40OTZjMCA2Mi41MjgtNi43MiAxMTUuNzc2LTIwLjIyNCAxNTkuNzQ0IDg0LjQ4IDU0LjAxNiAxNjEuNDcyIDEwNy4wMDggMjMwLjk3NiAxNTguOTc2bC00Mi4wNDggNTAuMzA0elwiIHAtaWQ9XCIxMDc1MFwiIGZpbGw9XCIjZDgxZTA2XCI+PC9wYXRoPjxwYXRoIGQ9XCJNMzY3LjQ4OCA0OTUuMzZoNDIzLjc0NHY0Ny4yMzJIMzY3LjQ4OFY0OTUuMzZ6TTM2Ny40ODggNTgxLjYzMmg0MjMuNzQ0djQ3LjIzMkgzNjcuNDg4di00Ny4yMzJ6XCIgcC1pZD1cIjEwNzUxXCIgZmlsbD1cIiNkODFlMDZcIj48L3BhdGg+PC9zdmc+XHJcbiAgICAgICAgICAgIFx1NjIxMVx1NzY4NFx1N0Y2RVx1OTg3NiAoJHt0b3BBcnRpY2xlSXRlbXMubGVuZ3RofVx1N0JDNylgLFxyXG4gICAgICBpdGVtczogdG9wQXJ0aWNsZUl0ZW1zLFxyXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gXHU1QzA2XHU2NzAwXHU4RkQxXHU1RTc0XHU0RUZEXHU1MjA2XHU3RUM0XHU1QzU1XHU1RjAwXHJcbiAgICB5ZWFyR3JvdXBzWzFdLmNvbGxhcHNlZCA9IGZhbHNlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBcdTVDMDZcdTY3MDBcdThGRDFcdTVFNzRcdTRFRkRcdTUyMDZcdTdFQzRcdTVDNTVcdTVGMDBcclxuICAgIHllYXJHcm91cHNbMF0uY29sbGFwc2VkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvLyBcdTZERkJcdTUyQTBcdTVFOEZcdTUzRjdcclxuICBhZGRPcmRlck51bWJlcih5ZWFyR3JvdXBzKTtcclxuICByZXR1cm4geWVhckdyb3VwcztcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NjgzOVx1NjM2RSBcdTY3RDBcdTVDMEZcdThCRkUvXHU1RThGXHU1M0Y3LVx1NTIwNlx1N0VDNC9cdTVFOEZcdTUzRjcteHh4Lm1kIFx1NzY4NFx1NzZFRVx1NUY1NVx1NjgzQ1x1NUYwRiwgXHU4M0I3XHU1M0Q2XHU0RkE3XHU4RkI5XHU2ODBGXHU1MjA2XHU3RUM0XHU1M0NBXHU1MjA2XHU3RUM0XHU0RTBCXHU2ODA3XHU5ODk4XHJcbiAqIFxyXG4gKiBjb3Vyc2VzL215YmF0aXMvMDEtTXlCYXRpc1x1NTdGQVx1Nzg0MC8wMS14eHgubWRcclxuICogXHJcbiAqIEBwYXJhbSBwYXRoIFx1NjI2Qlx1NjNDRlx1NTdGQVx1Nzg0MFx1OERFRlx1NUY4NFxyXG4gKiBAcmV0dXJucyB7RGVmYXVsdFRoZW1lLlNpZGViYXJJdGVtW119XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRJdGVtcyAocGF0aDogc3RyaW5nKSB7XHJcbiAgLy8gXHU0RkE3XHU4RkI5XHU2ODBGXHU1MjA2XHU3RUM0XHU2NTcwXHU3RUM0XHJcbiAgbGV0IGdyb3VwczogRGVmYXVsdFRoZW1lLlNpZGViYXJJdGVtW10gPSBbXTtcclxuICAvLyBcdTRGQTdcdThGQjlcdTY4MEZcdTUyMDZcdTdFQzRcdTRFMEJcdTY4MDdcdTk4OThcdTY1NzBcdTdFQzRcclxuICBsZXQgaXRlbXM6IERlZmF1bHRUaGVtZS5TaWRlYmFySXRlbVtdID0gW107XHJcbiAgbGV0IHRvdGFsID0gMDtcclxuICAvLyBcdTVGNTNcdTUyMDZcdTdFQzRcdTUxODVcdTY1ODdcdTdBRTBcdTY1NzBcdTkxQ0ZcdTVDMTFcdTRFOEUgMiBcdTdCQzdcdTYyMTZcdTY1ODdcdTdBRTBcdTYwM0JcdTY1NzBcdTY2M0VcdTc5M0FcdThEODVcdThGQzcgMjAgXHU3QkM3XHU2NUY2XHVGRjBDXHU4MUVBXHU1MkE4XHU2Mjk4XHU1M0UwXHU1MjA2XHU3RUM0XHJcbiAgY29uc3QgZ3JvdXBDb2xsYXBzZWRTaXplID0gMjtcclxuICBjb25zdCB0aXRsZUNvbGxhcHNlZFNpemUgPSAyMDtcclxuXHJcbiAgLy8gMS5cdTgzQjdcdTUzRDZcdTYyNDBcdTY3MDlcdTUyMDZcdTdFQzRcdTc2RUVcdTVGNTVcclxuICBzeW5jKGBkb2NzLyR7cGF0aH0vKmAsIHtcclxuICAgIG9ubHlEaXJlY3RvcmllczogdHJ1ZSxcclxuICAgIG9iamVjdE1vZGU6IHRydWUsXHJcbiAgfSkuZm9yRWFjaCgoeyBuYW1lIH0pID0+IHtcclxuICAgIGxldCBncm91cE5hbWUgPSBuYW1lO1xyXG4gICAgLy8gMi5cdTgzQjdcdTUzRDZcdTUyMDZcdTdFQzRcdTRFMEJcdTc2ODRcdTYyNDBcdTY3MDlcdTY1ODdcdTdBRTBcclxuICAgIHN5bmMoYGRvY3MvJHtwYXRofS8ke2dyb3VwTmFtZX0vKmAsIHtcclxuICAgICAgb25seUZpbGVzOiB0cnVlLFxyXG4gICAgICBvYmplY3RNb2RlOiB0cnVlLFxyXG4gICAgfSkuZm9yRWFjaCgoYXJ0aWNsZSkgPT4ge1xyXG4gICAgICBjb25zdCBhcnRpY2xlRmlsZSA9IG1hdHRlci5yZWFkKGAke2FydGljbGUucGF0aH1gKTtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhcnRpY2xlRmlsZTtcclxuICAgICAgLy8gXHU1NDExXHU1MjREXHU4RkZEXHU1MkEwXHU2ODA3XHU5ODk4XHJcbiAgICAgIGl0ZW1zLnB1c2goe1xyXG4gICAgICAgIHRleHQ6IGRhdGEudGl0bGUsXHJcbiAgICAgICAgbGluazogYC8ke3BhdGh9LyR7Z3JvdXBOYW1lfS8ke2FydGljbGUubmFtZS5yZXBsYWNlKCcubWQnLCAnJyl9YCxcclxuICAgICAgfSk7XHJcbiAgICAgIHRvdGFsICs9IDE7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIDMuXHU1NDExXHU1MjREXHU4RkZEXHU1MkEwXHU1MjMwXHU1MjA2XHU3RUM0XHJcbiAgICAvLyBcdTVGNTNcdTUyMDZcdTdFQzRcdTUxODVcdTY1ODdcdTdBRTBcdTY1NzBcdTkxQ0ZcdTVDMTFcdTRFOEUgQSBcdTdCQzdcdTYyMTZcdTY1ODdcdTdBRTBcdTYwM0JcdTY1NzBcdTY2M0VcdTc5M0FcdThEODVcdThGQzcgQiBcdTdCQzdcdTY1RjZcdUZGMENcdTgxRUFcdTUyQThcdTYyOThcdTUzRTBcdTUyMDZcdTdFQzRcclxuICAgIGdyb3Vwcy5wdXNoKHtcclxuICAgICAgdGV4dDogYCR7Z3JvdXBOYW1lLnN1YnN0cmluZyhncm91cE5hbWUuaW5kZXhPZignLScpICsgMSl9ICgke2l0ZW1zLmxlbmd0aH1cdTdCQzcpYCxcclxuICAgICAgaXRlbXM6IGl0ZW1zLFxyXG4gICAgICBjb2xsYXBzZWQ6IGl0ZW1zLmxlbmd0aCA8IGdyb3VwQ29sbGFwc2VkU2l6ZSB8fCB0b3RhbCA+IHRpdGxlQ29sbGFwc2VkU2l6ZSxcclxuICAgIH0pXHJcblxyXG4gICAgLy8gNC5cdTZFMDVcdTdBN0FcdTRGQTdcdThGQjlcdTY4MEZcdTUyMDZcdTdFQzRcdTRFMEJcdTY4MDdcdTk4OThcdTY1NzBcdTdFQzRcclxuICAgIGl0ZW1zID0gW107XHJcbiAgfSlcclxuXHJcbiAgLy8gXHU2REZCXHU1MkEwXHU1RThGXHU1M0Y3XHJcbiAgYWRkT3JkZXJOdW1iZXIoZ3JvdXBzKTtcclxuICByZXR1cm4gZ3JvdXBzO1xyXG59XHJcblxyXG4vKipcclxuICogXHU2REZCXHU1MkEwXHU1RThGXHU1M0Y3XHJcbiAqIFxyXG4gKiBAcGFyYW0gZ3JvdXBzIFx1NTIwNlx1N0VDNFx1NjU3MFx1NjM2RVxyXG4gKi9cclxuZnVuY3Rpb24gYWRkT3JkZXJOdW1iZXIoZ3JvdXBzKSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ3JvdXBzW2ldLml0ZW1zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW1zID0gZ3JvdXBzW2ldLml0ZW1zO1xyXG4gICAgICBjb25zdCBpbmRleCA9IGogKyAxO1xyXG4gICAgICBsZXQgaW5kZXhTdHlsZSA9IGA8ZGl2IGNsYXNzPVwidGV4dC1jb2xvci1ncmF5IG1yLVs2cHhdXCIgc3R5bGU9XCJmb250LXdlaWdodDogNTUwOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCI+JHtpbmRleH08L2Rpdj5gO1xyXG4gICAgICBpZiAoaW5kZXggPT0gMSkge1xyXG4gICAgICAgIGluZGV4U3R5bGUgPSBgPGRpdiBjbGFzcz1cInRleHQtY29sb3ItcmVkIG1yLVs2cHhdXCIgc3R5bGU9XCJmb250LXdlaWdodDogNTUwOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCI+JHtpbmRleH08L2Rpdj5gO1xyXG4gICAgICB9IGVsc2UgaWYgKGluZGV4ID09IDIpIHtcclxuICAgICAgICBpbmRleFN0eWxlID0gYDxkaXYgY2xhc3M9XCJ0ZXh0LWNvbG9yLW9yYW5nZSBtci1bNnB4XVwiIHN0eWxlPVwiZm9udC13ZWlnaHQ6IDU1MDsgZGlzcGxheTogaW5saW5lLWJsb2NrO1wiPiR7aW5kZXh9PC9kaXY+YDtcclxuICAgICAgfSBlbHNlIGlmIChpbmRleCA9PSAzKSB7XHJcbiAgICAgICAgaW5kZXhTdHlsZSA9IGA8ZGl2IGNsYXNzPVwidGV4dC1jb2xvci15ZWxsb3cgbXItWzZweF1cIiBzdHlsZT1cImZvbnQtd2VpZ2h0OiA1NTA7IGRpc3BsYXk6IGlubGluZS1ibG9jaztcIj4ke2luZGV4fTwvZGl2PmA7XHJcbiAgICAgIH1cclxuICAgICAgaXRlbXNbal0udGV4dCA9IGAke2luZGV4U3R5bGV9JHtpdGVtc1tqXS50ZXh0fWA7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxaXFxcXERlc2t0b3BcXFxcY2hhcmxlczdjLmdpdGh1Yi5pb1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdGhlbWVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFpcXFxcRGVza3RvcFxcXFxjaGFybGVzN2MuZ2l0aHViLmlvXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx0aGVtZVxcXFx1dGlscy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvWi9EZXNrdG9wL2NoYXJsZXM3Yy5naXRodWIuaW8vZG9jcy8udml0ZXByZXNzL3RoZW1lL3V0aWxzLnRzXCI7LyoqXHJcbiAqIFx1NjgzQ1x1NUYwRlx1NTMxNlx1NjVGNlx1OTVGNFxyXG4gKlxyXG4gKiBAcGFyYW0gZGF0ZSBcdTVGODVcdTY4M0NcdTVGMEZcdTUzMTZcdTY1RjZcdTk1RjRcclxuICogQHJldHVybnMgXHU2ODNDXHU1RjBGXHU1MzE2XHU1NDBFXHU3Njg0XHU2NUY2XHU5NUY0KFlZWVkvTU0vZGQgQU0gaGg6bW0pXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XHJcbiAgY29uc3QgZm9ybWF0RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gIHJldHVybiBmb3JtYXREYXRlLnRvTG9jYWxlU3RyaW5nKCd6aCcsIHt5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbnVtZXJpYycsIGRheTogJ251bWVyaWMnLCBob3VyOiAnbnVtZXJpYycsIG1pbnV0ZTogJ251bWVyaWMnfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTgzQjdcdTUzRDYgVVJMIFx1OERFRlx1NUY4NFx1NEUyRFx1NzY4NFx1NjMwN1x1NUI5QVx1NTNDMlx1NjU3MFxyXG4gKlxyXG4gKiBAcGFyYW0gcGFyYW1OYW1lIFx1NTNDMlx1NjU3MFx1NTQwRFxyXG4gKiBAcmV0dXJucyBcdTUzQzJcdTY1NzBcdTUwM0NcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRRdWVyeVBhcmFtKHBhcmFtTmFtZSkge1xyXG4gIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAoXCIoXnwmKVwiKyBwYXJhbU5hbWUgK1wiPShbXiZdKikoJnwkKVwiKTtcclxuICBsZXQgdmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHIoMSkpLm1hdGNoKHJlZyk7XHJcbiAgaWYgKHZhbHVlICE9IG51bGwpIHtcclxuICAgIHJldHVybiB1bmVzY2FwZSh2YWx1ZVsyXSk7XHJcbiAgfSBcclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1OERGM1x1OEY2Q1x1NTIzMFx1NjMwN1x1NUI5QVx1OTRGRVx1NjNBNVxyXG4gKlxyXG4gKiBAcGFyYW0gcGFyYW1OYW1lIFx1NTNDMlx1NjU3MFx1NTQwRFxyXG4gKiBAcGFyYW0gcGFyYW1WYWx1ZSBcdTUzQzJcdTY1NzBcdTUwM0NcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnb1RvTGluayh1cmwsIHBhcmFtTmFtZSwgcGFyYW1WYWx1ZSkge1xyXG4gIGlmIChwYXJhbU5hbWUpIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsICsgJz8nICsgcGFyYW1OYW1lICsgJz0nICsgcGFyYW1WYWx1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHU4M0I3XHU1M0Q2XHU3NTFGXHU4MDk2XHU1NkZFXHU2ODA3XHJcbiAqXHJcbiAqIEBwYXJhbSB5ZWFyIFx1NUU3NFx1NEVGRFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENoaW5lc2Vab2RpYWMoeWVhcikge1xyXG4gIGNvbnN0IGFyciA9IFsnbW9ua2V5JywgJ3Jvb3N0ZXInLCAnZG9nJywgJ3BpZycsICdyYXQnLCAnb3gnLCAndGlnZXInLCAncmFiYml0JywgJ2RyYWdvbicsICdzbmFrZScsICdob3JzZScsICdnb2F0J107XHJcbiAgcmV0dXJuIGFyclt5ZWFyICUgMTJdO1xyXG59XHJcblxyXG4vKipcclxuICogXHU4M0I3XHU1M0Q2XHU3NTFGXHU4MDk2XHU1NDBEXHU3OUYwXHJcbiAqXHJcbiAqIEBwYXJhbSB5ZWFyIFx1NUU3NFx1NEVGRFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENoaW5lc2Vab2RpYWNBbGlhcyh5ZWFyKSB7XHJcbiAgY29uc3QgYXJyID0gWydcdTczMzRcdTVFNzQnLCAnXHU5RTIxXHU1RTc0JywgJ1x1NzJEN1x1NUU3NCcsICdcdTczMkFcdTVFNzQnLCAnXHU5RjIwXHU1RTc0JywgJ1x1NzI1Qlx1NUU3NCcsICdcdTg2NEVcdTVFNzQnLCAnXHU1MTU0XHU1RTc0JywgJ1x1OUY5OVx1NUU3NCcsICdcdTg2QzdcdTVFNzQnLCAnXHU5QTZDXHU1RTc0JywgJ1x1N0Y4QVx1NUU3NCddO1xyXG4gIHJldHVybiBhcnJbeWVhciAlIDEyXTtcclxufSIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcWlxcXFxEZXNrdG9wXFxcXGNoYXJsZXM3Yy5naXRodWIuaW9cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1xcXFxzZWFyY2hcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFpcXFxcRGVza3RvcFxcXFxjaGFybGVzN2MuZ2l0aHViLmlvXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcXFxcc2VhcmNoXFxcXGFsZ29saWEtc2VhcmNoLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9aL0Rlc2t0b3AvY2hhcmxlczdjLmdpdGh1Yi5pby9kb2NzLy52aXRlcHJlc3MvY29uZmlnL3NlYXJjaC9hbGdvbGlhLXNlYXJjaC50c1wiO2ltcG9ydCB0eXBlIHsgQWxnb2xpYVNlYXJjaE9wdGlvbnMgfSBmcm9tICd2aXRlcHJlc3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFsZ29saWFTZWFyY2hPcHRpb25zOiBBbGdvbGlhU2VhcmNoT3B0aW9ucyA9IHtcclxuICBhcHBJZDogJ0RCWjBHOUhCVVknLFxyXG4gIGFwaUtleTogJzAwY2VmNDgwYTU0MzAwM2QwNWQ5ODA4MTEwZWE1ZjY1JyxcclxuICBpbmRleE5hbWU6ICdjaGFybGVzN2MnLFxyXG4gIGxvY2FsZXM6IHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgcGxhY2Vob2xkZXI6ICdcdTY0MUNcdTdEMjJcdTY1ODdcdTY4NjMnLFxyXG4gICAgICB0cmFuc2xhdGlvbnM6IHtcclxuICAgICAgICBidXR0b246IHtcclxuICAgICAgICAgIGJ1dHRvblRleHQ6ICdcdTY0MUNcdTdEMjJcdTY1ODdcdTY4NjMnLFxyXG4gICAgICAgICAgYnV0dG9uQXJpYUxhYmVsOiAnXHU2NDFDXHU3RDIyXHU2NTg3XHU2ODYzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kYWw6IHtcclxuICAgICAgICAgIHNlYXJjaEJveDoge1xyXG4gICAgICAgICAgICByZXNldEJ1dHRvblRpdGxlOiAnXHU2RTA1XHU5NjY0XHU2N0U1XHU4QkUyXHU2NzYxXHU0RUY2JyxcclxuICAgICAgICAgICAgcmVzZXRCdXR0b25BcmlhTGFiZWw6ICdcdTZFMDVcdTk2NjRcdTY3RTVcdThCRTJcdTY3NjFcdTRFRjYnLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnXHU1M0Q2XHU2RDg4JyxcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uQXJpYUxhYmVsOiAnXHU1M0Q2XHU2RDg4J1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN0YXJ0U2NyZWVuOiB7XHJcbiAgICAgICAgICAgIHJlY2VudFNlYXJjaGVzVGl0bGU6ICdcdTY0MUNcdTdEMjJcdTUzODZcdTUzRjInLFxyXG4gICAgICAgICAgICBub1JlY2VudFNlYXJjaGVzVGV4dDogJ1x1NkNBMVx1NjcwOVx1NjQxQ1x1N0QyMlx1NTM4Nlx1NTNGMicsXHJcbiAgICAgICAgICAgIHNhdmVSZWNlbnRTZWFyY2hCdXR0b25UaXRsZTogJ1x1NEZERFx1NUI1OFx1ODFGM1x1NjQxQ1x1N0QyMlx1NTM4Nlx1NTNGMicsXHJcbiAgICAgICAgICAgIHJlbW92ZVJlY2VudFNlYXJjaEJ1dHRvblRpdGxlOiAnXHU0RUNFXHU2NDFDXHU3RDIyXHU1Mzg2XHU1M0YyXHU0RTJEXHU3OUZCXHU5NjY0JyxcclxuICAgICAgICAgICAgZmF2b3JpdGVTZWFyY2hlc1RpdGxlOiAnXHU2NTM2XHU4NUNGJyxcclxuICAgICAgICAgICAgcmVtb3ZlRmF2b3JpdGVTZWFyY2hCdXR0b25UaXRsZTogJ1x1NEVDRVx1NjUzNlx1ODVDRlx1NEUyRFx1NzlGQlx1OTY2NCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlcnJvclNjcmVlbjoge1xyXG4gICAgICAgICAgICB0aXRsZVRleHQ6ICdcdTY1RTBcdTZDRDVcdTgzQjdcdTUzRDZcdTdFRDNcdTY3OUMnLFxyXG4gICAgICAgICAgICBoZWxwVGV4dDogJ1x1NEY2MFx1NTNFRlx1ODBGRFx1OTcwMFx1ODk4MVx1NjhDMFx1NjdFNVx1NEY2MFx1NzY4NFx1N0Y1MVx1N0VEQ1x1OEZERVx1NjNBNSdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmb290ZXI6IHtcclxuICAgICAgICAgICAgc2VsZWN0VGV4dDogJ1x1OTAwOVx1NjJFOScsXHJcbiAgICAgICAgICAgIG5hdmlnYXRlVGV4dDogJ1x1NTIwN1x1NjM2MicsXHJcbiAgICAgICAgICAgIGNsb3NlVGV4dDogJ1x1NTE3M1x1OTVFRCcsXHJcbiAgICAgICAgICAgIHNlYXJjaEJ5VGV4dDogJ1x1NjQxQ1x1N0QyMlx1NjNEMFx1NEY5Qlx1ODAwNSdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBub1Jlc3VsdHNTY3JlZW46IHtcclxuICAgICAgICAgICAgbm9SZXN1bHRzVGV4dDogJ1x1NjVFMFx1NkNENVx1NjI3RVx1NTIzMFx1NzZGOFx1NTE3M1x1N0VEM1x1Njc5QycsXHJcbiAgICAgICAgICAgIHN1Z2dlc3RlZFF1ZXJ5VGV4dDogJ1x1NEY2MFx1NTNFRlx1NEVFNVx1NUMxRFx1OEJENVx1NjdFNVx1OEJFMicsXHJcbiAgICAgICAgICAgIHJlcG9ydE1pc3NpbmdSZXN1bHRzVGV4dDogJ1x1NEY2MFx1OEJBNFx1NEUzQVx1OEJFNVx1NjdFNVx1OEJFMlx1NUU5NFx1OEJFNVx1NjcwOVx1N0VEM1x1Njc5Q1x1RkYxRicsXHJcbiAgICAgICAgICAgIHJlcG9ydE1pc3NpbmdSZXN1bHRzTGlua1RleHQ6ICdcdTcwQjlcdTUxRkJcdTUzQ0RcdTk5ODgnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59OyIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcWlxcXFxEZXNrdG9wXFxcXGNoYXJsZXM3Yy5naXRodWIuaW9cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcWlxcXFxEZXNrdG9wXFxcXGNoYXJsZXM3Yy5naXRodWIuaW9cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1xcXFx0aGVtZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvWi9EZXNrdG9wL2NoYXJsZXM3Yy5naXRodWIuaW8vZG9jcy8udml0ZXByZXNzL2NvbmZpZy90aGVtZS50c1wiO2ltcG9ydCB0eXBlIHsgRGVmYXVsdFRoZW1lIH0gZnJvbSAndml0ZXByZXNzJztcclxuaW1wb3J0IHsgbmF2IH0gZnJvbSAnLi9uYXYnO1xyXG5pbXBvcnQgeyBzaWRlYmFyIH0gZnJvbSAnLi9zaWRlYmFyJztcclxuaW1wb3J0IHsgYWxnb2xpYVNlYXJjaE9wdGlvbnMgfSBmcm9tICcuL3NlYXJjaC9hbGdvbGlhLXNlYXJjaCc7XHJcbmltcG9ydCB7IGxvY2FsU2VhcmNoT3B0aW9ucyB9IGZyb20gJy4vc2VhcmNoL2xvY2FsLXNlYXJjaCc7XHJcblxyXG5leHBvcnQgY29uc3QgdGhlbWVDb25maWc6IERlZmF1bHRUaGVtZS5Db25maWcgPSB7XHJcbiAgbmF2LCAvLyBcdTVCRkNcdTgyMkFcdTY4MEZcdTkxNERcdTdGNkVcclxuICBzaWRlYmFyLCAvLyBcdTRGQTdcdThGQjlcdTY4MEZcdTkxNERcdTdGNkVcclxuXHJcbiAgbG9nbzogJy90aXRsZS5wbmcnLFxyXG4gIG91dGxpbmU6IHtcclxuICAgIGxldmVsOiAnZGVlcCcsIC8vIFx1NTNGM1x1NEZBN1x1NTkyN1x1N0VCMlx1NjgwN1x1OTg5OFx1NUM0Mlx1N0VBN1xyXG4gICAgbGFiZWw6ICdcdTc2RUVcdTVGNTUnLCAvLyBcdTUzRjNcdTRGQTdcdTU5MjdcdTdFQjJcdTY4MDdcdTk4OThcdTY1ODdcdTY3MkNcdTkxNERcdTdGNkVcclxuICB9LFxyXG4gIGRhcmtNb2RlU3dpdGNoTGFiZWw6ICdcdTUyMDdcdTYzNjJcdTY1RTVcdTUxNDkvXHU2Njk3XHU5RUQxXHU2QTIxXHU1RjBGJyxcclxuICBzaWRlYmFyTWVudUxhYmVsOiAnXHU2NTg3XHU3QUUwJyxcclxuICByZXR1cm5Ub1RvcExhYmVsOiAnXHU4RkQ0XHU1NkRFXHU5ODc2XHU5MEU4JyxcclxuICBsYXN0VXBkYXRlZFRleHQ6ICdcdTY3MDBcdTU0MEVcdTY2RjRcdTY1QjAnLCAvLyBcdTY3MDBcdTU0MEVcdTY2RjRcdTY1QjBcdTY1RjZcdTk1RjRcdTY1ODdcdTY3MkNcdTkxNERcdTdGNkUsIFx1OTcwMFx1NTE0OFx1OTE0RFx1N0Y2RWxhc3RVcGRhdGVkXHU0RTNBdHJ1ZVxyXG4gIC8vIFx1NjU4N1x1Njg2M1x1OTg3NVx1ODExQVx1NjU4N1x1NjcyQ1x1OTE0RFx1N0Y2RVxyXG4gIGRvY0Zvb3Rlcjoge1xyXG4gICAgcHJldjogJ1x1NEUwQVx1NEUwMFx1N0JDNycsXHJcbiAgICBuZXh0OiAnXHU0RTBCXHU0RTAwXHU3QkM3J1xyXG4gIH0sXHJcbiAgLy8gXHU3RjE2XHU4RjkxXHU5NEZFXHU2M0E1XHU5MTREXHU3RjZFXHJcbiAgZWRpdExpbms6IHtcclxuICAgIHBhdHRlcm46ICdodHRwczovL2dpdGh1Yi5jb20vQ2hhcmxlczdjL2NoYXJsZXM3Yy5naXRodWIuaW8vZWRpdC9tYWluL2RvY3MvOnBhdGgnLFxyXG4gICAgdGV4dDogJ1x1NEUwRFx1NTlBNVx1NEU0Qlx1NTkwNFx1RkYwQ1x1NjU2Q1x1OEJGN1x1OTZDNVx1NkI2MydcclxuICB9LFxyXG4gIC8vIFx1NjQxQ1x1N0QyMlx1OTE0RFx1N0Y2RVx1RkYwOFx1NEU4Q1x1OTAwOVx1NEUwMFx1RkYwOVxyXG4gIHNlYXJjaDoge1xyXG4gICAgcHJvdmlkZXI6ICdhbGdvbGlhJyxcclxuICAgIG9wdGlvbnM6IGFsZ29saWFTZWFyY2hPcHRpb25zLFxyXG4gICAgLy8gXHU2NzJDXHU1NzMwXHU3OUJCXHU3RUJGXHU2NDFDXHU3RDIyXHJcbiAgICAvLyBwcm92aWRlcjogJ2xvY2FsJyxcclxuICAgIC8vIG9wdGlvbnM6IGxvY2FsU2VhcmNoT3B0aW9uc1xyXG4gIH0sXHJcbiAgLy8gXHU1QkZDXHU4MjJBXHU2ODBGXHU1M0YzXHU0RkE3XHU3OTNFXHU0RUE0XHU5NEZFXHU2M0E1XHU5MTREXHU3RjZFXHJcbiAgc29jaWFsTGlua3M6IFtcclxuICAgIHsgaWNvbjogJ2dpdGh1YicsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vQ2hhcmxlczdjL2NoYXJsZXM3Yy5naXRodWIuaW8nIH0sXHJcbiAgICB7XHJcbiAgICAgIGljb246IHtcclxuICAgICAgICBzdmc6ICc8c3ZnIHJvbGU9XCJpbWdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjx0aXRsZT5cdTc4MDFcdTRFOTE8L3RpdGxlPjxwYXRoIGQ9XCJNMTEuOTg0IDBBMTIgMTIgMCAwIDAgMCAxMmExMiAxMiAwIDAgMCAxMiAxMiAxMiAxMiAwIDAgMCAxMi0xMkExMiAxMiAwIDAgMCAxMiAwYTEyIDEyIDAgMCAwLS4wMTYgMHptNi4wOSA1LjMzM2MuMzI4IDAgLjU5My4yNjYuNTkyLjU5M3YxLjQ4MmEuNTk0LjU5NCAwIDAgMS0uNTkzLjU5Mkg5Ljc3N2MtLjk4MiAwLTEuNzc4Ljc5Ni0xLjc3OCAxLjc3OHY1LjYzYzAgLjMyNy4yNjYuNTkyLjU5My41OTJoNS42M2MuOTgyIDAgMS43NzgtLjc5NiAxLjc3OC0xLjc3OHYtLjI5NmEuNTkzLjU5MyAwIDAgMC0uNTkyLS41OTNoLTQuMTVhLjU5Mi41OTIgMCAwIDEtLjU5Mi0uNTkydi0xLjQ4MmEuNTkzLjU5MyAwIDAgMSAuNTkzLS41OTJoNi44MTVjLjMyNyAwIC41OTMuMjY1LjU5My41OTJ2My40MDhhNCA0IDAgMCAxLTQgNEg1LjkyNmEuNTkzLjU5MyAwIDAgMS0uNTkzLS41OTNWOS43NzhhNC40NDQgNC40NDQgMCAwIDEgNC40NDUtNC40NDRoOC4yOTZaXCIvPjwvc3ZnPidcclxuICAgICAgfSxcclxuICAgICAgbGluazogJ2h0dHBzOi8vZ2l0ZWUuY29tL0NoYXJsZXM3Yy9jaGFybGVzN2MnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpY29uOiB7XHJcbiAgICAgICAgc3ZnOiBgPHN2ZyB3aWR0aD1cIjMzXCIgaGVpZ2h0PVwiMzNcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxNzQuOCAyMDRcIj5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5Db250aU5ldyBBZG1pbjwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiIzMwN0FGMlwiIGQ9XCJNODYuNywwbDg4LDUxdi4ybC0xNi4zLDkuNHYtLjJMODYuNywxOC45Wm03MS44LDE0My41LDE2LjMsOS40di4yTDg2LjgsMjA0aDBsLTE2LjMtOS40LDE2LjMtOS40aDBsNzEuNy00MS41di0uMlpcIi8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiIzEyRDJBQ1wiIGQ9XCJNMTYuMywxNDMuNXYuMkw1OCwxNjcuOGwtMTYuMyw5LjRMMCwxNTMuMXYtLjJaXCIvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cIiMxMkQyQUNcIiBkPVwiTTEwNC4xLDkzLDE1LjksMTQzLjhsLS4yLS4xVjEyNC45bC4yLjFMODcuNyw4My42LDEwNC4xLDkzWlwiLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDA1N0ZFXCIgZD1cIk04OC4xLDAsLjEsNTF2LjJsMTYuMyw5LjR2LS4yTDg4LjEsMTguOVpcIi8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiIzMwN0FGMlwiIGQ9XCJNLjEsNTAuOS4yLDE1Mi42bC4yLjEsMTYuMy05LjQtLjItLjEtLjEtODIuOUwuMSw1MC45WlwiLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDA1N0ZFXCIgZD1cIk0xNzQuNyw1MC45bC0uMSwxMDEuNy0uMi4xLTE2LjMtOS40LjItLjEuMS04Mi45WlwiLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMTJEMkFDXCIgZD1cIk00MS43LDE1OC41bDE2LjEsOS40LDEwMC42LTU4LjdWOTAuNFpcIi8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+YFxyXG4gICAgICB9LFxyXG4gICAgICBsaW5rOiAnaHR0cHM6Ly9jbmFkbWluLmNoYXJsZXM3Yy50b3AvJ1xyXG4gICAgfVxyXG4gIF0sXHJcblxyXG4gIC8vIFx1ODFFQVx1NUI5QVx1NEU0OVx1NjI2OVx1NUM1NTogXHU2NTg3XHU3QUUwXHU1MTQzXHU2NTcwXHU2MzZFXHU5MTREXHU3RjZFXHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIGFydGljbGVNZXRhZGF0YUNvbmZpZzoge1xyXG4gICAgYXV0aG9yOiAnXHU2N0U1XHU1QzE0XHU2NUFGJywgLy8gXHU2NTg3XHU3QUUwXHU1MTY4XHU1QzQwXHU5RUQ4XHU4QkE0XHU0RjVDXHU4MDA1XHU1NDBEXHU3OUYwXHJcbiAgICBhdXRob3JMaW5rOiAnL2Fib3V0L21lJywgLy8gXHU3MEI5XHU1MUZCXHU0RjVDXHU4MDA1XHU1NDBEXHU2NUY2XHU5RUQ4XHU4QkE0XHU4REYzXHU4RjZDXHU3Njg0XHU5NEZFXHU2M0E1XHJcbiAgICBzaG93Vmlld0NvdW50OiBmYWxzZSwgLy8gXHU2NjJGXHU1NDI2XHU2NjNFXHU3OTNBXHU2NTg3XHU3QUUwXHU5NjA1XHU4QkZCXHU2NTcwLCBcdTk3MDBcdTg5ODFcdTU3MjggZG9jcy8udml0ZXByZXNzL3RoZW1lL2FwaS9jb25maWcuanMgXHU1M0NBIGludGVyZmFjZS5qcyBcdTkxNERcdTdGNkVcdTU5N0RcdTc2RjhcdTVFOTQgQVBJIFx1NjNBNVx1NTNFM1xyXG4gIH0sXHJcbiAgLy8gXHU4MUVBXHU1QjlBXHU0RTQ5XHU2MjY5XHU1QzU1OiBcdTY1ODdcdTdBRTBcdTcyNDhcdTY3NDNcdTkxNERcdTdGNkVcclxuICBjb3B5cmlnaHRDb25maWc6IHtcclxuICAgIGxpY2Vuc2U6ICdcdTdGNzJcdTU0MEQtXHU3NkY4XHU1NDBDXHU2NUI5XHU1RjBGXHU1MTcxXHU0RUFCIDQuMCBcdTU2RkRcdTk2NDUgKENDIEJZLVNBIDQuMCknLFxyXG4gICAgbGljZW5zZUxpbms6ICdodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1zYS80LjAvJ1xyXG4gIH0sXHJcbiAgLy8gXHU4MUVBXHU1QjlBXHU0RTQ5XHU2MjY5XHU1QzU1OiBcdThCQzRcdThCQkFcdTkxNERcdTdGNkVcclxuICBjb21tZW50Q29uZmlnOiB7XHJcbiAgICB0eXBlOiAnZ2l0YWxrJyxcclxuICAgIHNob3dDb21tZW50OiB0cnVlIC8vIFx1NjYyRlx1NTQyNlx1NjYzRVx1NzkzQVx1OEJDNFx1OEJCQVxyXG4gIH0sXHJcbiAgLy8gXHU4MUVBXHU1QjlBXHU0RTQ5XHU2MjY5XHU1QzU1OiBcdTk4NzVcdTgxMUFcdTkxNERcdTdGNkVcclxuICBmb290ZXJDb25maWc6IHtcclxuICAgIHNob3dGb290ZXI6IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1NjYzRVx1NzkzQVx1OTg3NVx1ODExQVxyXG4gICAgaWNwUmVjb3JkQ29kZTogJ1x1NkQyNUlDUFx1NTkwNzIwMjIwMDU4NjRcdTUzRjctMicsIC8vIElDUFx1NTkwN1x1Njg0OFx1NTNGN1xyXG4gICAgcHVibGljU2VjdXJpdHlSZWNvcmRDb2RlOiAnXHU2RDI1XHU1MTZDXHU3RjUxXHU1Qjg5XHU1OTA3MTIwMTEyMDIwMDA2NzdcdTUzRjcnLCAvLyBcdTgwNTRcdTdGNTFcdTU5MDdcdTY4NDhcdTUzRjdcclxuICAgIGNvcHlyaWdodDogYENvcHlyaWdodCBcdTAwQTkgMjAxOS0ke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gQ2hhcmxlczdjYCAvLyBcdTcyNDhcdTY3NDNcdTRGRTFcdTYwNkZcclxuICB9XHJcbn0iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdWLFNBQVMsb0JBQW9CO0FBQ3JYLFNBQVMsbUJBQW1COzs7QUNEeVYsSUFBTSxPQUFPO0FBRTNYLElBQU0sV0FBVztBQUFBLEVBQ3RCLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLE9BQU87QUFBQSxFQUNQLGFB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QUEsSUFDQTtBQUFBO0FBQUEsSUFDQSxLQUFLO0FBQUEsTUFDSCxVQUFVO0FBQUEsUUFDUixpQkFBaUI7QUFBQSxVQUNmLGlCQUFpQixDQUFDLFFBQVEsZUFBZSxTQUFTLEdBQUc7QUFBQSxRQUN2RDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBO0FBQUEsRUFDRixDQUFDO0FBQ0g7QUFFQSxJQUFNLGlCQUFpQjtBQUFBLEVBQ3JCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFDRjsiLAogICJuYW1lcyI6IFsibmFtZSJdCn0K
