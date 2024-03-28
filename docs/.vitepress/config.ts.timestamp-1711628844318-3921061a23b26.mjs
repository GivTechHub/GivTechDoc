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
      { text: "Bug\u4E07\u8C61\u96C6", link: "/categories/issues/index", activeMatch: "/categories/issues/" },
      { text: '"\u6742\u788E"\u9006\u88AD\u53F2', link: "/categories/fragments/index", activeMatch: "/categories/fragments/" },
      { text: "\u5DE5\u5177\u56DB\u6D77\u8C08", link: "/categories/tools/index", activeMatch: "/categories/tools/" },
      { text: "\u65B9\u6848\u6625\u79CB\u5FD7", link: "/categories/solutions/index", activeMatch: "/categories/solutions/" }
    ],
    activeMatch: "/categories/"
  },
  {
    text: "\u56E2\u961F\u6210\u5458",
    items: [
      { text: "Java\u57FA\u7840\u5FEB\u901F\u5165\u95E8", link: "/courses/java/index", activeMatch: "/courses/java/" },
      { text: "MySQL\u5FEB\u901F\u5165\u95E8", link: "/courses/mysql/index", activeMatch: "/courses/mysql/" },
      { text: "MyBatis\u5FEB\u901F\u5165\u95E8", link: "/courses/mybatis/index", activeMatch: "/courses/mybatis/" }
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy50cyIsICJkb2NzLy52aXRlcHJlc3MvY29uZmlnL2NvbnN0YW50cy50cyIsICJkb2NzLy52aXRlcHJlc3MvY29uZmlnL2hlYWQudHMiLCAiZG9jcy8udml0ZXByZXNzL2NvbmZpZy9tYXJrZG93bi50cyIsICJkb2NzLy52aXRlcHJlc3MvY29uZmlnL25hdi50cyIsICJkb2NzLy52aXRlcHJlc3MvY29uZmlnL3NpZGViYXIudHMiLCAiZG9jcy8udml0ZXByZXNzL3RoZW1lL3V0aWxzLnRzIiwgImRvY3MvLnZpdGVwcmVzcy9jb25maWcvc2VhcmNoL2FsZ29saWEtc2VhcmNoLnRzIiwgImRvY3MvLnZpdGVwcmVzcy9jb25maWcvdGhlbWUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxaXFxcXERlc2t0b3BcXFxcY2hhcmxlczdjLmdpdGh1Yi5pb1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFpcXFxcRGVza3RvcFxcXFxjaGFybGVzN2MuZ2l0aHViLmlvXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1ovRGVza3RvcC9jaGFybGVzN2MuZ2l0aHViLmlvL2RvY3MvLnZpdGVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlcHJlc3MnO1xyXG5pbXBvcnQgeyB3aXRoTWVybWFpZCB9IGZyb20gJ3ZpdGVwcmVzcy1wbHVnaW4tbWVybWFpZCc7XHJcbmltcG9ydCB7IG1ldGFEYXRhIH0gZnJvbSAnLi9jb25maWcvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgaGVhZCB9IGZyb20gJy4vY29uZmlnL2hlYWQnO1xyXG5pbXBvcnQgeyBtYXJrZG93biB9IGZyb20gJy4vY29uZmlnL21hcmtkb3duJztcclxuaW1wb3J0IHsgdGhlbWVDb25maWcgfSBmcm9tICcuL2NvbmZpZy90aGVtZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoTWVybWFpZChcclxuICBkZWZpbmVDb25maWcoe1xyXG4gICAgbGFuZzogbWV0YURhdGEubGFuZyxcclxuICAgIHRpdGxlOiBtZXRhRGF0YS50aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uOiBtZXRhRGF0YS5kZXNjcmlwdGlvbixcclxuXHJcbiAgICBjbGVhblVybHM6IHRydWUsXHJcbiAgICBsYXN0VXBkYXRlZDogdHJ1ZSwgLy8gXHU2NjNFXHU3OTNBXHU2NzAwXHU1NDBFXHU2NkY0XHU2NUIwXHU2NUY2XHU5NUY0XHJcblxyXG4gICAgaGVhZCwgLy8gPGhlYWQ+XHU1MTg1XHU2ODA3XHU3QjdFXHU5MTREXHU3RjZFXHJcbiAgICBtYXJrZG93bjogbWFya2Rvd24sIC8vIE1hcmtkb3duXHU5MTREXHU3RjZFXHJcbiAgICB2dWU6IHtcclxuICAgICAgdGVtcGxhdGU6IHtcclxuICAgICAgICBjb21waWxlck9wdGlvbnM6IHtcclxuICAgICAgICAgIGlzQ3VzdG9tRWxlbWVudDogKHRhZykgPT4gY3VzdG9tRWxlbWVudHMuaW5jbHVkZXModGFnKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHRoZW1lQ29uZmlnLCAvLyBcdTRFM0JcdTk4OThcdTkxNERcdTdGNkVcclxuICB9KSxcclxuKTtcclxuXHJcbmNvbnN0IGN1c3RvbUVsZW1lbnRzID0gW1xyXG4gICdtangtY29udGFpbmVyJyxcclxuICAnbWp4LWFzc2lzdGl2ZS1tbWwnLFxyXG4gICdtYXRoJyxcclxuICAnbWFjdGlvbicsXHJcbiAgJ21hbGlnbmdyb3VwJyxcclxuICAnbWFsaWdubWFyaycsXHJcbiAgJ21lbmNsb3NlJyxcclxuICAnbWVycm9yJyxcclxuICAnbWZlbmNlZCcsXHJcbiAgJ21mcmFjJyxcclxuICAnbWknLFxyXG4gICdtbG9uZ2RpdicsXHJcbiAgJ21tdWx0aXNjcmlwdHMnLFxyXG4gICdtbicsXHJcbiAgJ21vJyxcclxuICAnbW92ZXInLFxyXG4gICdtcGFkZGVkJyxcclxuICAnbXBoYW50b20nLFxyXG4gICdtcm9vdCcsXHJcbiAgJ21yb3cnLFxyXG4gICdtcycsXHJcbiAgJ21zY2FycmllcycsXHJcbiAgJ21zY2FycnknLFxyXG4gICdtc2NhcnJpZXMnLFxyXG4gICdtc2dyb3VwJyxcclxuICAnbXN0YWNrJyxcclxuICAnbWxvbmdkaXYnLFxyXG4gICdtc2xpbmUnLFxyXG4gICdtc3RhY2snLFxyXG4gICdtc3BhY2UnLFxyXG4gICdtc3FydCcsXHJcbiAgJ21zcm93JyxcclxuICAnbXN0YWNrJyxcclxuICAnbXN0YWNrJyxcclxuICAnbXN0eWxlJyxcclxuICAnbXN1YicsXHJcbiAgJ21zdXAnLFxyXG4gICdtc3Vic3VwJyxcclxuICAnbXRhYmxlJyxcclxuICAnbXRkJyxcclxuICAnbXRleHQnLFxyXG4gICdtdHInLFxyXG4gICdtdW5kZXInLFxyXG4gICdtdW5kZXJvdmVyJyxcclxuICAnc2VtYW50aWNzJyxcclxuICAnbWF0aCcsXHJcbiAgJ21pJyxcclxuICAnbW4nLFxyXG4gICdtbycsXHJcbiAgJ21zJyxcclxuICAnbXNwYWNlJyxcclxuICAnbXRleHQnLFxyXG4gICdtZW5jbG9zZScsXHJcbiAgJ21lcnJvcicsXHJcbiAgJ21mZW5jZWQnLFxyXG4gICdtZnJhYycsXHJcbiAgJ21wYWRkZWQnLFxyXG4gICdtcGhhbnRvbScsXHJcbiAgJ21yb290JyxcclxuICAnbXJvdycsXHJcbiAgJ21zcXJ0JyxcclxuICAnbXN0eWxlJyxcclxuICAnbW11bHRpc2NyaXB0cycsXHJcbiAgJ21vdmVyJyxcclxuICAnbXByZXNjcmlwdHMnLFxyXG4gICdtc3ViJyxcclxuICAnbXN1YnN1cCcsXHJcbiAgJ21zdXAnLFxyXG4gICdtdW5kZXInLFxyXG4gICdtdW5kZXJvdmVyJyxcclxuICAnbm9uZScsXHJcbiAgJ21hbGlnbmdyb3VwJyxcclxuICAnbWFsaWdubWFyaycsXHJcbiAgJ210YWJsZScsXHJcbiAgJ210ZCcsXHJcbiAgJ210cicsXHJcbiAgJ21sb25nZGl2JyxcclxuICAnbXNjYXJyaWVzJyxcclxuICAnbXNjYXJyeScsXHJcbiAgJ21zZ3JvdXAnLFxyXG4gICdtc2xpbmUnLFxyXG4gICdtc3JvdycsXHJcbiAgJ21zdGFjaycsXHJcbiAgJ21hY3Rpb24nLFxyXG4gICdzZW1hbnRpY3MnLFxyXG4gICdhbm5vdGF0aW9uJyxcclxuICAnYW5ub3RhdGlvbi14bWwnLFxyXG5dOyIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcWlxcXFxEZXNrdG9wXFxcXGNoYXJsZXM3Yy5naXRodWIuaW9cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcWlxcXFxEZXNrdG9wXFxcXGNoYXJsZXM3Yy5naXRodWIuaW9cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1xcXFxjb25zdGFudHMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1ovRGVza3RvcC9jaGFybGVzN2MuZ2l0aHViLmlvL2RvY3MvLnZpdGVwcmVzcy9jb25maWcvY29uc3RhbnRzLnRzXCI7Y29uc3Qgc2l0ZSA9ICdodHRwczovL2Jsb2cuY2hhcmxlczdjLnRvcCc7XHJcblxyXG5leHBvcnQgY29uc3QgbWV0YURhdGEgPSB7XHJcbiAgbGFuZzogJ3poLUNOJyxcclxuICBsb2NhbGU6ICd6aF9DTicsXHJcbiAgdGl0bGU6ICdHaXZUZWNoJyxcclxuICBkZXNjcmlwdGlvbjogJ1x1NEUyQVx1NEVCQVx1NjI4MFx1NjcyRlx1NzdFNVx1OEJDNlx1NUU5M1x1RkYwQ1x1OEJCMFx1NUY1NSAmIFx1NTIwNlx1NEVBQlx1NEUyQVx1NEVCQVx1Nzg4RVx1NzI0N1x1NTMxNlx1MzAwMVx1N0VEM1x1Njc4NFx1NTMxNlx1MzAwMVx1NEY1M1x1N0NGQlx1NTMxNlx1NzY4NFx1NjI4MFx1NjcyRlx1NzdFNVx1OEJDNlx1NTE4NVx1NUJCOVx1MzAwMicsXHJcbiAgc2l0ZSxcclxuICBpbWFnZTogYCR7c2l0ZX0vdGl0bGUucG5nYCxcclxufTsiLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFpcXFxcRGVza3RvcFxcXFxjaGFybGVzN2MuZ2l0aHViLmlvXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFpcXFxcRGVza3RvcFxcXFxjaGFybGVzN2MuZ2l0aHViLmlvXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcXFxcaGVhZC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvWi9EZXNrdG9wL2NoYXJsZXM3Yy5naXRodWIuaW8vZG9jcy8udml0ZXByZXNzL2NvbmZpZy9oZWFkLnRzXCI7aW1wb3J0IHR5cGUgeyBIZWFkQ29uZmlnIH0gZnJvbSAndml0ZXByZXNzJztcclxuaW1wb3J0IHsgbWV0YURhdGEgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgaGVhZDogSGVhZENvbmZpZ1tdID0gW1xyXG4gIFsnbGluaycsIHsgcmVsOiAnaWNvbicsIGhyZWY6ICcvZmF2aWNvbi5pY28nIH1dLFxyXG4gIFsnbWV0YScsIHsgbmFtZTogJ2F1dGhvcicsIGNvbnRlbnQ6ICdDaGFybGVzN2MnIH1dLFxyXG4gIFsnbWV0YScsIHsgbmFtZTogJ2tleXdvcmRzJywgY29udGVudDogJ1x1NjdFNVx1NUMxNFx1NjVBRlx1NzY4NFx1NzdFNVx1OEJDNlx1NUU5MywgXHU3N0U1XHU4QkM2XHU1RTkzLCBcdTUzNUFcdTVCQTIsIENoYXJsZXM3YycgfV0sXHJcblxyXG4gIFsnbWV0YScsIHsgbmFtZTogJ0hhbmRoZWxkRnJpZW5kbHknLCBjb250ZW50OiAnVHJ1ZScgfV0sXHJcbiAgWydtZXRhJywgeyBuYW1lOiAnTW9iaWxlT3B0aW1pemVkJywgY29udGVudDogJzMyMCcgfV0sXHJcbiAgWydtZXRhJywgeyBuYW1lOiAndGhlbWUtY29sb3InLCBjb250ZW50OiAnIzNjODc3MicgfV0sXHJcblxyXG4gIFsnbWV0YScsIHsgcHJvcGVydHk6ICdvZzp0eXBlJywgY29udGVudDogJ3dlYnNpdGUnIH1dLFxyXG4gIFsnbWV0YScsIHsgcHJvcGVydHk6ICdvZzpsb2NhbGUnLCBjb250ZW50OiBtZXRhRGF0YS5sb2NhbGUgfV0sXHJcbiAgWydtZXRhJywgeyBwcm9wZXJ0eTogJ29nOnRpdGxlJywgY29udGVudDogbWV0YURhdGEudGl0bGUgfV0sXHJcbiAgWydtZXRhJywgeyBwcm9wZXJ0eTogJ29nOmRlc2NyaXB0aW9uJywgY29udGVudDogbWV0YURhdGEuZGVzY3JpcHRpb24gfV0sXHJcbiAgWydtZXRhJywgeyBwcm9wZXJ0eTogJ29nOnNpdGUnLCBjb250ZW50OiBtZXRhRGF0YS5zaXRlIH1dLFxyXG4gIFsnbWV0YScsIHsgcHJvcGVydHk6ICdvZzpzaXRlX25hbWUnLCBjb250ZW50OiBtZXRhRGF0YS50aXRsZSB9XSxcclxuICBbJ21ldGEnLCB7IHByb3BlcnR5OiAnb2c6aW1hZ2UnLCBjb250ZW50OiBtZXRhRGF0YS5pbWFnZSB9XSxcclxuXHJcbiAgLy8gXHU3NjdFXHU1RUE2XHU3RURGXHU4QkExXHU0RUUzXHU3ODAxXHVGRjFBaHR0cHM6Ly90b25namkuYmFpZHUuY29tXHJcbiAgWydzY3JpcHQnLCB7fSwgYHZhciBfaG10ID0gX2htdCB8fCBbXTtcclxuICAoZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgaG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgaG0uc3JjID0gXCJodHRwczovL2htLmJhaWR1LmNvbS9obS5qcz81M2FmNGIxYTEyZmJlNDA4MTBjYTdhZDM5ZjhkYjljN1wiO1xyXG4gICAgdmFyIHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKVswXTsgXHJcbiAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGhtLCBzKTtcclxuICB9KSgpO2BdLFxyXG4gIC8vIFx1OTg3NVx1OTc2Mlx1OEJCRlx1OTVFRVx1OTFDRlx1N0VERlx1OEJBMVxyXG4gIC8vIFsnc2NyaXB0Jywge30sIGBcclxuICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG4gIC8vICAgbGV0IG9sZEhyZWYgPSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLCBib2R5RE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gIC8vICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbihtdXRhdGlvbnMpIHtcclxuICAvLyAgICAgaWYgKG9sZEhyZWYgIT0gZG9jdW1lbnQubG9jYXRpb24uaHJlZikge1xyXG4gIC8vICAgICAgIG9sZEhyZWYgPSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xyXG4gIC8vICAgICAgIGdldFB2KClcclxuICAvLyAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xyXG4gIC8vICAgICAgICAgbGV0IHRtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAvLyAgICAgICAgIGlmKHRtcCAhPSBib2R5RE9NKSB7XHJcbiAgLy8gICAgICAgICAgIGJvZHlET00gPSB0bXA7XHJcbiAgLy8gICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoYm9keURPTSwgY29uZmlnKTtcclxuICAvLyAgICAgICAgIH1cclxuICAvLyAgICAgICB9KVxyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9KTtcclxuICAvLyAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAvLyAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gIC8vICAgICBzdWJ0cmVlOiB0cnVlXHJcbiAgLy8gICB9O1xyXG4gIC8vICAgb2JzZXJ2ZXIub2JzZXJ2ZShib2R5RE9NLCBjb25maWcpO1xyXG4gIC8vICAgZ2V0UHYoKVxyXG4gIC8vIH0sIHRydWUpO1xyXG5cclxuICAvLyBmdW5jdGlvbiBnZXRQdigpIHtcclxuICAvLyAgIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gIC8vICAgeGhyLm9wZW4oJ0dFVCcsICdodHRwczovL2FwaS5jaGFybGVzN2MudG9wL2Jsb2cvcHY/cGFnZVVybD0nICsgbG9jYXRpb24uaHJlZik7XHJcbiAgLy8gICB4aHIuc2VuZCgpO1xyXG4gIC8vIH1gXVxyXG5dOyIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcWlxcXFxEZXNrdG9wXFxcXGNoYXJsZXM3Yy5naXRodWIuaW9cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcWlxcXFxEZXNrdG9wXFxcXGNoYXJsZXM3Yy5naXRodWIuaW9cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1xcXFxtYXJrZG93bi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvWi9EZXNrdG9wL2NoYXJsZXM3Yy5naXRodWIuaW8vZG9jcy8udml0ZXByZXNzL2NvbmZpZy9tYXJrZG93bi50c1wiO2ltcG9ydCB0eXBlIHsgTWFya2Rvd25PcHRpb25zIH0gZnJvbSAndml0ZXByZXNzJztcclxuaW1wb3J0IG1hdGhqYXgzIGZyb20gJ21hcmtkb3duLWl0LW1hdGhqYXgzJztcclxuaW1wb3J0IGZvb3Rub3RlIGZyb20gJ21hcmtkb3duLWl0LWZvb3Rub3RlJztcclxuXHJcbmV4cG9ydCBjb25zdCBtYXJrZG93bjogTWFya2Rvd25PcHRpb25zID0ge1xyXG4gIC8vIFNoaWtpXHU0RTNCXHU5ODk4LCBcdTYyNDBcdTY3MDlcdTRFM0JcdTk4OThcdTUzQzJcdTg5QzE6IGh0dHBzOi8vZ2l0aHViLmNvbS9zaGlraWpzL3NoaWtpL2Jsb2IvbWFpbi9kb2NzL3RoZW1lcy5tZFxyXG4gIHRoZW1lOiB7XHJcbiAgICBsaWdodDogJ2dpdGh1Yi1saWdodCcsXHJcbiAgICBkYXJrOiAnZ2l0aHViLWRhcmstZGltbWVkJ1xyXG4gIH0sXHJcbiAgLy8gbGluZU51bWJlcnM6IHRydWUsIC8vIFx1NTQyRlx1NzUyOFx1ODg0Q1x1NTNGN1xyXG5cclxuICBjb25maWc6IChtZCkgPT4ge1xyXG4gICAgbWQudXNlKG1hdGhqYXgzKTtcclxuICAgIG1kLnVzZShmb290bm90ZSk7XHJcblxyXG4gICAgLy8gXHU1NzI4XHU2MjQwXHU2NzA5XHU2NTg3XHU2ODYzXHU3Njg0PGgxPlx1NjgwN1x1N0I3RVx1NTQwRVx1NkRGQlx1NTJBMDxBcnRpY2xlTWV0YWRhdGEvPlx1N0VDNFx1NEVGNlxyXG4gICAgbWQucmVuZGVyZXIucnVsZXMuaGVhZGluZ19jbG9zZSA9ICh0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52LCBzbGYpID0+IHtcclxuICAgICAgbGV0IGh0bWxSZXN1bHQgPSBzbGYucmVuZGVyVG9rZW4odG9rZW5zLCBpZHgsIG9wdGlvbnMpO1xyXG4gICAgICBpZiAodG9rZW5zW2lkeF0udGFnID09PSAnaDEnKSBodG1sUmVzdWx0ICs9IGBcXG48Q2xpZW50T25seT48QXJ0aWNsZU1ldGFkYXRhIHYtaWY9XCIoJGZyb250bWF0dGVyPy5hc2lkZSA/PyB0cnVlKSAmJiAoJGZyb250bWF0dGVyPy5zaG93QXJ0aWNsZU1ldGFkYXRhID8/IHRydWUpXCIgOmFydGljbGU9XCIkZnJvbnRtYXR0ZXJcIiAvPjwvQ2xpZW50T25seT5gO1xyXG4gICAgICByZXR1cm4gaHRtbFJlc3VsdDtcclxuICAgIH1cclxuICB9LFxyXG59O1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFpcXFxcRGVza3RvcFxcXFxjaGFybGVzN2MuZ2l0aHViLmlvXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFpcXFxcRGVza3RvcFxcXFxjaGFybGVzN2MuZ2l0aHViLmlvXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcXFxcbmF2LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9aL0Rlc2t0b3AvY2hhcmxlczdjLmdpdGh1Yi5pby9kb2NzLy52aXRlcHJlc3MvY29uZmlnL25hdi50c1wiO2ltcG9ydCB0eXBlIHsgRGVmYXVsdFRoZW1lIH0gZnJvbSAndml0ZXByZXNzJztcclxuXHJcbmV4cG9ydCBjb25zdCBuYXY6IERlZmF1bHRUaGVtZS5Db25maWdbJ25hdiddID0gW1xyXG4gIHtcclxuICAgIHRleHQ6ICdcdTVGRUJcdTkwMUZcdTVGMDBcdTU5Q0InLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAgeyB0ZXh0OiAnQnVnXHU0RTA3XHU4QzYxXHU5NkM2JywgbGluazogJy9jYXRlZ29yaWVzL2lzc3Vlcy9pbmRleCcsIGFjdGl2ZU1hdGNoOiAnL2NhdGVnb3JpZXMvaXNzdWVzLycgfSxcclxuICAgICAgeyB0ZXh0OiAnXCJcdTY3NDJcdTc4OEVcIlx1OTAwNlx1ODhBRFx1NTNGMicsIGxpbms6ICcvY2F0ZWdvcmllcy9mcmFnbWVudHMvaW5kZXgnLCBhY3RpdmVNYXRjaDogJy9jYXRlZ29yaWVzL2ZyYWdtZW50cy8nIH0sXHJcbiAgICAgIHsgdGV4dDogJ1x1NURFNVx1NTE3N1x1NTZEQlx1NkQ3N1x1OEMwOCcsIGxpbms6ICcvY2F0ZWdvcmllcy90b29scy9pbmRleCcsIGFjdGl2ZU1hdGNoOiAnL2NhdGVnb3JpZXMvdG9vbHMvJyB9LFxyXG4gICAgICB7IHRleHQ6ICdcdTY1QjlcdTY4NDhcdTY2MjVcdTc5Q0JcdTVGRDcnLCBsaW5rOiAnL2NhdGVnb3JpZXMvc29sdXRpb25zL2luZGV4JywgYWN0aXZlTWF0Y2g6ICcvY2F0ZWdvcmllcy9zb2x1dGlvbnMvJyB9XHJcbiAgICBdLFxyXG4gICAgYWN0aXZlTWF0Y2g6ICcvY2F0ZWdvcmllcy8nXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiAnXHU1NkUyXHU5NjFGXHU2MjEwXHU1NDU4JyxcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHsgdGV4dDogJ0phdmFcdTU3RkFcdTc4NDBcdTVGRUJcdTkwMUZcdTUxNjVcdTk1RTgnLCBsaW5rOiAnL2NvdXJzZXMvamF2YS9pbmRleCcsIGFjdGl2ZU1hdGNoOiAnL2NvdXJzZXMvamF2YS8nIH0sXHJcbiAgICAgIHsgdGV4dDogJ015U1FMXHU1RkVCXHU5MDFGXHU1MTY1XHU5NUU4JywgbGluazogJy9jb3Vyc2VzL215c3FsL2luZGV4JywgYWN0aXZlTWF0Y2g6ICcvY291cnNlcy9teXNxbC8nIH0sXHJcbiAgICAgIHsgdGV4dDogJ015QmF0aXNcdTVGRUJcdTkwMUZcdTUxNjVcdTk1RTgnLCBsaW5rOiAnL2NvdXJzZXMvbXliYXRpcy9pbmRleCcsIGFjdGl2ZU1hdGNoOiAnL2NvdXJzZXMvbXliYXRpcy8nIH1cclxuICAgIF0sXHJcbiAgICBhY3RpdmVNYXRjaDogJy9jb3Vyc2VzLydcclxuICB9LFxyXG4gIHtcclxuICAgIHRleHQ6ICdcdTkwRThcdTdGNzJcdTY1ODdcdTY4NjMnLFxyXG4gICAgbGluazogJy90YWdzJyxcclxuICAgIGFjdGl2ZU1hdGNoOiAnL3RhZ3MnXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiAnXHU1MTczXHU0RThFJyxcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHsgdGV4dDogJ1x1NTE3M1x1NEU4RVx1NzdFNVx1OEJDNlx1NUU5MycsIGxpbms6ICcvYWJvdXQvaW5kZXgnLCBhY3RpdmVNYXRjaDogJy9hYm91dC9pbmRleCcgfSxcclxuICAgICAgeyB0ZXh0OiAnXHU1MTczXHU0RThFXHU2MjExJywgbGluazogJy9hYm91dC9tZScsIGFjdGl2ZU1hdGNoOiAnL2Fib3V0L21lJyB9XHJcbiAgICBdLFxyXG4gICAgYWN0aXZlTWF0Y2g6ICcvYWJvdXQvJyAvLyAvLyBcdTVGNTNcdTUyNERcdTk4NzVcdTk3NjJcdTU5MDRcdTRFOEVcdTUzMzlcdTkxNERcdThERUZcdTVGODRcdTRFMEJcdTY1RjYsIFx1NUJGOVx1NUU5NFx1NUJGQ1x1ODIyQVx1ODNEQ1x1NTM1NVx1NUMwNlx1N0E4MVx1NTFGQVx1NjYzRVx1NzkzQVxyXG4gIH0sXHJcbl07IiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxaXFxcXERlc2t0b3BcXFxcY2hhcmxlczdjLmdpdGh1Yi5pb1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxaXFxcXERlc2t0b3BcXFxcY2hhcmxlczdjLmdpdGh1Yi5pb1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXFxcXHNpZGViYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1ovRGVza3RvcC9jaGFybGVzN2MuZ2l0aHViLmlvL2RvY3MvLnZpdGVwcmVzcy9jb25maWcvc2lkZWJhci50c1wiO2ltcG9ydCB0eXBlIHsgRGVmYXVsdFRoZW1lIH0gZnJvbSAndml0ZXByZXNzJztcclxuaW1wb3J0IGZnIGZyb20gJ2Zhc3QtZ2xvYic7XHJcbmltcG9ydCBtYXR0ZXIgZnJvbSAnZ3JheS1tYXR0ZXInO1xyXG5pbXBvcnQgeyBnZXRDaGluZXNlWm9kaWFjLCBnZXRDaGluZXNlWm9kaWFjQWxpYXMgfSBmcm9tICcuLi90aGVtZS91dGlscy50cyc7XHJcbmNvbnN0IHN5bmMgPSBmZy5zeW5jO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZGViYXI6IERlZmF1bHRUaGVtZS5Db25maWdbJ3NpZGViYXInXSA9IHtcclxuICAnL2NhdGVnb3JpZXMvaXNzdWVzLyc6IGdldEl0ZW1zQnlEYXRlKFwiY2F0ZWdvcmllcy9pc3N1ZXNcIiksXHJcbiAgJy9jYXRlZ29yaWVzL2ZyYWdtZW50cy8nOiBnZXRJdGVtc0J5RGF0ZShcImNhdGVnb3JpZXMvZnJhZ21lbnRzXCIpLFxyXG4gICcvY2F0ZWdvcmllcy9zb2x1dGlvbnMvJzogZ2V0SXRlbXNCeURhdGUoXCJjYXRlZ29yaWVzL3NvbHV0aW9uc1wiKSxcclxuICAnL2NhdGVnb3JpZXMvdG9vbHMvJzogZ2V0SXRlbXNCeURhdGUoXCJjYXRlZ29yaWVzL3Rvb2xzXCIpLFxyXG5cclxuICAnL2NvdXJzZXMvamF2YS8nOiBnZXRJdGVtcyhcImNvdXJzZXMvamF2YVwiKSxcclxuICAnL2NvdXJzZXMvbXlzcWwvJzogZ2V0SXRlbXMoXCJjb3Vyc2VzL215c3FsXCIpLFxyXG4gICcvY291cnNlcy9teWJhdGlzLyc6IGdldEl0ZW1zKFwiY291cnNlcy9teWJhdGlzXCIpLFxyXG59XHJcblxyXG4vKipcclxuICogXHU2ODM5XHU2MzZFIFx1NjdEMFx1NTIwNlx1N0M3Qi9ZWVlZL01NL2RkL3h4eC5tZCBcdTc2ODRcdTc2RUVcdTVGNTVcdTY4M0NcdTVGMEYsIFx1ODNCN1x1NTNENlx1NEZBN1x1OEZCOVx1NjgwRlx1NTIwNlx1N0VDNFx1NTNDQVx1NTIwNlx1N0VDNFx1NEUwQlx1NjgwN1x1OTg5OFxyXG4gKiBcclxuICogL2NhdGVnb3JpZXMvaXNzdWVzLzIwMjIvMDcvMjAveHh4Lm1kXHJcbiAqIFxyXG4gKiBAcGFyYW0gcGF0aCBcdTYyNkJcdTYzQ0ZcdTU3RkFcdTc4NDBcdThERUZcdTVGODRcclxuICogQHJldHVybnMge0RlZmF1bHRUaGVtZS5TaWRlYmFySXRlbVtdfVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0SXRlbXNCeURhdGUgKHBhdGg6IHN0cmluZykge1xyXG4gIC8vIFx1NEZBN1x1OEZCOVx1NjgwRlx1NUU3NFx1NEVGRFx1NTIwNlx1N0VDNFx1NjU3MFx1N0VDNFxyXG4gIGxldCB5ZWFyR3JvdXBzOiBEZWZhdWx0VGhlbWUuU2lkZWJhckl0ZW1bXSA9IFtdO1xyXG4gIC8vIFx1N0Y2RVx1OTg3Nlx1NjU3MFx1N0VDNFxyXG4gIGxldCB0b3BBcnRpY2xlSXRlbXM6IERlZmF1bHRUaGVtZS5TaWRlYmFySXRlbVtdID0gW107XHJcblxyXG4gIC8vIDEuXHU4M0I3XHU1M0Q2XHU2MjQwXHU2NzA5XHU1RTc0XHU0RUZEXHU3NkVFXHU1RjU1XHJcbiAgc3luYyhgZG9jcy8ke3BhdGh9LypgLCB7XHJcbiAgICBvbmx5RGlyZWN0b3JpZXM6IHRydWUsXHJcbiAgICBvYmplY3RNb2RlOiB0cnVlLFxyXG4gIH0pLmZvckVhY2goKHsgbmFtZSB9KSA9PiB7XHJcbiAgICBsZXQgeWVhciA9IG5hbWU7XHJcbiAgICAvLyBcdTVFNzRcdTRFRkRcdTY1NzBcdTdFQzRcclxuICAgIGxldCBhcnRpY2xlSXRlbXM6IERlZmF1bHRUaGVtZS5TaWRlYmFySXRlbVtdID0gW107XHJcblxyXG4gICAgLy8gMi5cdTgzQjdcdTUzRDZcdTYyNDBcdTY3MDlcdTY3MDhcdTRFRkRcdTc2RUVcdTVGNTVcclxuICAgIHN5bmMoYGRvY3MvJHtwYXRofS8ke3llYXJ9LypgLCB7XHJcbiAgICAgIG9ubHlEaXJlY3RvcmllczogdHJ1ZSxcclxuICAgICAgb2JqZWN0TW9kZTogdHJ1ZSxcclxuICAgIH0pLmZvckVhY2goKHsgbmFtZSB9KSA9PiB7XHJcbiAgICAgIGxldCBtb250aCA9IG5hbWVcclxuXHJcbiAgICAgIC8vIDMuXHU4M0I3XHU1M0Q2XHU2MjQwXHU2NzA5XHU2NUU1XHU2NzFGXHU3NkVFXHU1RjU1XHJcbiAgICAgIHN5bmMoYGRvY3MvJHtwYXRofS8ke3llYXJ9LyR7bW9udGh9LypgLCB7XHJcbiAgICAgICAgb25seURpcmVjdG9yaWVzOiB0cnVlLFxyXG4gICAgICAgIG9iamVjdE1vZGU6IHRydWUsXHJcbiAgICAgIH0pLmZvckVhY2goKHsgbmFtZSB9KSA9PiB7XHJcbiAgICAgICAgbGV0IGRheSA9IG5hbWU7XHJcbiAgICAgICAgLy8gNC5cdTgzQjdcdTUzRDZcdTY1RTVcdTY3MUZcdTc2RUVcdTVGNTVcdTRFMEJcdTc2ODRcdTYyNDBcdTY3MDlcdTY1ODdcdTdBRTBcclxuICAgICAgICBzeW5jKGBkb2NzLyR7cGF0aH0vJHt5ZWFyfS8ke21vbnRofS8ke2RheX0vKmAsIHtcclxuICAgICAgICAgIG9ubHlGaWxlczogdHJ1ZSxcclxuICAgICAgICAgIG9iamVjdE1vZGU6IHRydWUsXHJcbiAgICAgICAgfSkuZm9yRWFjaCgoYXJ0aWNsZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgYXJ0aWNsZUZpbGUgPSBtYXR0ZXIucmVhZChgJHthcnRpY2xlLnBhdGh9YCk7XHJcbiAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGFydGljbGVGaWxlO1xyXG4gICAgICAgICAgaWYgKGRhdGEuaXNUb3ApIHtcclxuICAgICAgICAgICAgLy8gXHU1NDExXHU3RjZFXHU5ODc2XHU1MjA2XHU3RUM0XHU1MjREXHU4RkZEXHU1MkEwXHU2ODA3XHU5ODk4XHJcbiAgICAgICAgICAgIHRvcEFydGljbGVJdGVtcy51bnNoaWZ0KHtcclxuICAgICAgICAgICAgICB0ZXh0OiBkYXRhLnRpdGxlLFxyXG4gICAgICAgICAgICAgIGxpbms6IGAvJHtwYXRofS8ke3llYXJ9LyR7bW9udGh9LyR7ZGF5fS8ke2FydGljbGUubmFtZS5yZXBsYWNlKCcubWQnLCAnJyl9YCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gXHU1NDExXHU1RTc0XHU0RUZEXHU1MjA2XHU3RUM0XHU1MjREXHU4RkZEXHU1MkEwXHU2ODA3XHU5ODk4XHJcbiAgICAgICAgICBhcnRpY2xlSXRlbXMudW5zaGlmdCh7XHJcbiAgICAgICAgICAgIHRleHQ6IGRhdGEudGl0bGUsXHJcbiAgICAgICAgICAgIGxpbms6IGAvJHtwYXRofS8ke3llYXJ9LyR7bW9udGh9LyR7ZGF5fS8ke2FydGljbGUubmFtZS5yZXBsYWNlKCcubWQnLCAnJyl9YCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIFx1NkRGQlx1NTJBMFx1NUU3NFx1NEVGRFx1NTIwNlx1N0VDNFxyXG4gICAgeWVhckdyb3Vwcy51bnNoaWZ0KHtcclxuICAgICAgdGV4dDogYDxpbWcgY2xhc3M9XCJjaGluZXNlLXpvZGlhY1wiIHN0eWxlPVwicG9zaXRpb246IHN0YXRpYzsgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgcGFkZGluZy1ib3R0b206IDNweDtcIiBzcmM9XCIvaW1nL3N2Zy9jaGluZXNlLXpvZGlhYy8ke2dldENoaW5lc2Vab2RpYWMoeWVhci5yZXBsYWNlKCdcdTVFNzQnLCAnJykpfS5zdmdcIiB0aXRsZT1cIiR7Z2V0Q2hpbmVzZVpvZGlhY0FsaWFzKHllYXIucmVwbGFjZSgnXHU1RTc0JywgJycpKX1cIiBhbHQ9XCJcdTc1MUZcdTgwOTZcIj5cclxuICAgICAgICAgICAgJHt5ZWFyfVx1NUU3NCAoJHthcnRpY2xlSXRlbXMubGVuZ3RofVx1N0JDNylgLFxyXG4gICAgICBpdGVtczogYXJ0aWNsZUl0ZW1zLFxyXG4gICAgICBjb2xsYXBzZWQ6IHRydWUsXHJcbiAgICB9KTtcclxuICB9KVxyXG5cclxuICBpZiAodG9wQXJ0aWNsZUl0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgIC8vIFx1NkRGQlx1NTJBMFx1N0Y2RVx1OTg3Nlx1NTIwNlx1N0VDNFxyXG4gICAgeWVhckdyb3Vwcy51bnNoaWZ0KHtcclxuICAgICAgdGV4dDogYDxzdmcgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IHBhZGRpbmctYm90dG9tOiAzcHg7XCIgdmlld0JveD1cIjAgMCAxOTIwIDEwMjRcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiPjxwYXRoIGQ9XCJNMzY3LjQ4OCA2NjcuOTA0aDQyMy43NDR2NDcuMjMySDM2Ny40ODh2LTQ3LjIzMnpNMzIwLjI1NiAyMDQuMzUyaDEzNy4yOHY2OC45OTJoLTEzNy4yOHYtNjguOTkyek0zNjcuNDg4IDc1NC4xMTJoNDIzLjc0NHY0OEgzNjcuNDg4di00OHpNNjkzLjc2IDIwNC4zNTJoMTM3Ljk4NHY2OC45OTJINjkzLjc2di02OC45OTJ6TTUwNy4wMDggMjA0LjM1MmgxMzcuMjh2NjguOTkyaC0xMzcuMjh2LTY4Ljk5MnpcIiBwLWlkPVwiMTA3NDlcIiBmaWxsPVwiI2Q4MWUwNlwiPjwvcGF0aD48cGF0aCBkPVwiTTE3OTIuNTEyIDBIMTI3LjQ4OEM1Ny40NzIgMCAwIDU3LjE1MiAwIDEyNy42MTZ2NzY4Ljc2OEMwIDk2Ni43MiA1Ny4wODggMTAyNCAxMjcuNDg4IDEwMjRoMTY2NS4wODhjNjkuOTUyIDAgMTI3LjQyNC01Ny4xNTIgMTI3LjQyNC0xMjcuNjE2VjEyNy42MTZDMTkyMCA1Ny4yMTYgMTg2Mi45MTIgMCAxNzkyLjUxMiAweiBtLTUyOCAxNzUuMTA0aDQ0Ni45NzZ2NTQuMDE2SDE0OTQuNzJsLTI0IDEwMS4yNDhoMjA2Ljk3NlY2ODkuNmgtNTcuNzI4VjM4NC4zMmgtMjg5LjQ3MnYzMDguMjI0aC01Ny43Mjh2LTM2Mi4yNGgxNDAuMjI0bDIwLjk5Mi0xMDEuMjQ4aC0xNjkuNDcydi01My45NTJ6IG0tOTk2LjAzMi0xMS4yaDYxNC4yNzJ2MTY3LjIzMmgtNTEuMDA4di0xNy4yOEgzMjAuMjU2djE3LjI4SDI2OC40OFYxNjMuOTA0eiBtNjc4Ljc4NCA2ODEuNzI4aC03NDR2LTQzLjUyaDExMS43NDRWNDU0Ljg0OGgyMjkuNTA0di00OC43MDRIMjIxLjI0OHYtNDIuMDQ4aDMyMy4yNjR2LTM5Ljc0NGg1NC4wMTZ2MzkuNzQ0aDMzMS41MnY0MS45ODRoLTMzMS41MnY0OC43NjhoMjQ1LjI0OHYzNDcuMjY0aDEwMy40ODh2NDMuNTJ6IG0yMDMuMjY0LTk0LjUyOGMwIDU5LjUyLTMwLjcyIDg5LjI4LTkyLjIyNCA4OS4yOC0yNS40NzIgMC00Ni4wMTYtMC41MTItNjEuNTA0LTEuNDcyLTIuNDk2LTIyLjk3Ni02LjUyOC00NS4yNDgtMTIuMDMyLTY2Ljc1MiAyMi45NzYgNS41MDQgNDYuNzIgOC4yNTYgNzEuMjMyIDguMjU2IDI0IDAgMzUuOTY4LTExLjUyIDM1Ljk2OC0zNC40OTZWMjQ3Ljg3Mkg5NzEuMnYtNTQuNzJoMjc4Ljk3NnY1NC43MkgxMTUwLjR2NTAzLjIzMnogbTUyMS4yMTYgMTIxLjUzNmMtNjcuMDA4LTU1LjQ4OC0xMzcuMjgtMTA4LjAzMi0yMTAuNzUyLTE1Ny41MDQtNC45OTIgOS45ODQtMTAuNDk2IDE5LjAwOC0xNi41MTIgMjcuMDA4LTQxLjQ3MiA1Ny4wMjQtMTEzLjI4IDEwMS41MDQtMjE1LjIzMiAxMzMuNTA0LTkuNDcyLTE2LjUxMi0yMS41MDQtMzQuNDk2LTM1Ljk2OC01NC4wMTYgOTQuNTI4LTI3LjAwOCAxNjEuMjgtNjQuNTEyIDIwMC4yNTYtMTEyLjUxMiAzNC40OTYtNDQuOTkyIDUxLjc3Ni0xMTMuMDI0IDUxLjc3Ni0yMDQuMDMyVjQyMS4xMmg1Ny43Mjh2ODIuNDk2YzAgNjIuNTI4LTYuNzIgMTE1Ljc3Ni0yMC4yMjQgMTU5Ljc0NCA4NC40OCA1NC4wMTYgMTYxLjQ3MiAxMDcuMDA4IDIzMC45NzYgMTU4Ljk3NmwtNDIuMDQ4IDUwLjMwNHpcIiBwLWlkPVwiMTA3NTBcIiBmaWxsPVwiI2Q4MWUwNlwiPjwvcGF0aD48cGF0aCBkPVwiTTM2Ny40ODggNDk1LjM2aDQyMy43NDR2NDcuMjMySDM2Ny40ODhWNDk1LjM2ek0zNjcuNDg4IDU4MS42MzJoNDIzLjc0NHY0Ny4yMzJIMzY3LjQ4OHYtNDcuMjMyelwiIHAtaWQ9XCIxMDc1MVwiIGZpbGw9XCIjZDgxZTA2XCI+PC9wYXRoPjwvc3ZnPlxyXG4gICAgICAgICAgICBcdTYyMTFcdTc2ODRcdTdGNkVcdTk4NzYgKCR7dG9wQXJ0aWNsZUl0ZW1zLmxlbmd0aH1cdTdCQzcpYCxcclxuICAgICAgaXRlbXM6IHRvcEFydGljbGVJdGVtcyxcclxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFx1NUMwNlx1NjcwMFx1OEZEMVx1NUU3NFx1NEVGRFx1NTIwNlx1N0VDNFx1NUM1NVx1NUYwMFxyXG4gICAgeWVhckdyb3Vwc1sxXS5jb2xsYXBzZWQgPSBmYWxzZTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gXHU1QzA2XHU2NzAwXHU4RkQxXHU1RTc0XHU0RUZEXHU1MjA2XHU3RUM0XHU1QzU1XHU1RjAwXHJcbiAgICB5ZWFyR3JvdXBzWzBdLmNvbGxhcHNlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLy8gXHU2REZCXHU1MkEwXHU1RThGXHU1M0Y3XHJcbiAgYWRkT3JkZXJOdW1iZXIoeWVhckdyb3Vwcyk7XHJcbiAgcmV0dXJuIHllYXJHcm91cHM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTY4MzlcdTYzNkUgXHU2N0QwXHU1QzBGXHU4QkZFL1x1NUU4Rlx1NTNGNy1cdTUyMDZcdTdFQzQvXHU1RThGXHU1M0Y3LXh4eC5tZCBcdTc2ODRcdTc2RUVcdTVGNTVcdTY4M0NcdTVGMEYsIFx1ODNCN1x1NTNENlx1NEZBN1x1OEZCOVx1NjgwRlx1NTIwNlx1N0VDNFx1NTNDQVx1NTIwNlx1N0VDNFx1NEUwQlx1NjgwN1x1OTg5OFxyXG4gKiBcclxuICogY291cnNlcy9teWJhdGlzLzAxLU15QmF0aXNcdTU3RkFcdTc4NDAvMDEteHh4Lm1kXHJcbiAqIFxyXG4gKiBAcGFyYW0gcGF0aCBcdTYyNkJcdTYzQ0ZcdTU3RkFcdTc4NDBcdThERUZcdTVGODRcclxuICogQHJldHVybnMge0RlZmF1bHRUaGVtZS5TaWRlYmFySXRlbVtdfVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0SXRlbXMgKHBhdGg6IHN0cmluZykge1xyXG4gIC8vIFx1NEZBN1x1OEZCOVx1NjgwRlx1NTIwNlx1N0VDNFx1NjU3MFx1N0VDNFxyXG4gIGxldCBncm91cHM6IERlZmF1bHRUaGVtZS5TaWRlYmFySXRlbVtdID0gW107XHJcbiAgLy8gXHU0RkE3XHU4RkI5XHU2ODBGXHU1MjA2XHU3RUM0XHU0RTBCXHU2ODA3XHU5ODk4XHU2NTcwXHU3RUM0XHJcbiAgbGV0IGl0ZW1zOiBEZWZhdWx0VGhlbWUuU2lkZWJhckl0ZW1bXSA9IFtdO1xyXG4gIGxldCB0b3RhbCA9IDA7XHJcbiAgLy8gXHU1RjUzXHU1MjA2XHU3RUM0XHU1MTg1XHU2NTg3XHU3QUUwXHU2NTcwXHU5MUNGXHU1QzExXHU0RThFIDIgXHU3QkM3XHU2MjE2XHU2NTg3XHU3QUUwXHU2MDNCXHU2NTcwXHU2NjNFXHU3OTNBXHU4RDg1XHU4RkM3IDIwIFx1N0JDN1x1NjVGNlx1RkYwQ1x1ODFFQVx1NTJBOFx1NjI5OFx1NTNFMFx1NTIwNlx1N0VDNFxyXG4gIGNvbnN0IGdyb3VwQ29sbGFwc2VkU2l6ZSA9IDI7XHJcbiAgY29uc3QgdGl0bGVDb2xsYXBzZWRTaXplID0gMjA7XHJcblxyXG4gIC8vIDEuXHU4M0I3XHU1M0Q2XHU2MjQwXHU2NzA5XHU1MjA2XHU3RUM0XHU3NkVFXHU1RjU1XHJcbiAgc3luYyhgZG9jcy8ke3BhdGh9LypgLCB7XHJcbiAgICBvbmx5RGlyZWN0b3JpZXM6IHRydWUsXHJcbiAgICBvYmplY3RNb2RlOiB0cnVlLFxyXG4gIH0pLmZvckVhY2goKHsgbmFtZSB9KSA9PiB7XHJcbiAgICBsZXQgZ3JvdXBOYW1lID0gbmFtZTtcclxuICAgIC8vIDIuXHU4M0I3XHU1M0Q2XHU1MjA2XHU3RUM0XHU0RTBCXHU3Njg0XHU2MjQwXHU2NzA5XHU2NTg3XHU3QUUwXHJcbiAgICBzeW5jKGBkb2NzLyR7cGF0aH0vJHtncm91cE5hbWV9LypgLCB7XHJcbiAgICAgIG9ubHlGaWxlczogdHJ1ZSxcclxuICAgICAgb2JqZWN0TW9kZTogdHJ1ZSxcclxuICAgIH0pLmZvckVhY2goKGFydGljbGUpID0+IHtcclxuICAgICAgY29uc3QgYXJ0aWNsZUZpbGUgPSBtYXR0ZXIucmVhZChgJHthcnRpY2xlLnBhdGh9YCk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXJ0aWNsZUZpbGU7XHJcbiAgICAgIC8vIFx1NTQxMVx1NTI0RFx1OEZGRFx1NTJBMFx1NjgwN1x1OTg5OFxyXG4gICAgICBpdGVtcy5wdXNoKHtcclxuICAgICAgICB0ZXh0OiBkYXRhLnRpdGxlLFxyXG4gICAgICAgIGxpbms6IGAvJHtwYXRofS8ke2dyb3VwTmFtZX0vJHthcnRpY2xlLm5hbWUucmVwbGFjZSgnLm1kJywgJycpfWAsXHJcbiAgICAgIH0pO1xyXG4gICAgICB0b3RhbCArPSAxO1xyXG4gICAgfSlcclxuXHJcbiAgICAvLyAzLlx1NTQxMVx1NTI0RFx1OEZGRFx1NTJBMFx1NTIzMFx1NTIwNlx1N0VDNFxyXG4gICAgLy8gXHU1RjUzXHU1MjA2XHU3RUM0XHU1MTg1XHU2NTg3XHU3QUUwXHU2NTcwXHU5MUNGXHU1QzExXHU0RThFIEEgXHU3QkM3XHU2MjE2XHU2NTg3XHU3QUUwXHU2MDNCXHU2NTcwXHU2NjNFXHU3OTNBXHU4RDg1XHU4RkM3IEIgXHU3QkM3XHU2NUY2XHVGRjBDXHU4MUVBXHU1MkE4XHU2Mjk4XHU1M0UwXHU1MjA2XHU3RUM0XHJcbiAgICBncm91cHMucHVzaCh7XHJcbiAgICAgIHRleHQ6IGAke2dyb3VwTmFtZS5zdWJzdHJpbmcoZ3JvdXBOYW1lLmluZGV4T2YoJy0nKSArIDEpfSAoJHtpdGVtcy5sZW5ndGh9XHU3QkM3KWAsXHJcbiAgICAgIGl0ZW1zOiBpdGVtcyxcclxuICAgICAgY29sbGFwc2VkOiBpdGVtcy5sZW5ndGggPCBncm91cENvbGxhcHNlZFNpemUgfHwgdG90YWwgPiB0aXRsZUNvbGxhcHNlZFNpemUsXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIDQuXHU2RTA1XHU3QTdBXHU0RkE3XHU4RkI5XHU2ODBGXHU1MjA2XHU3RUM0XHU0RTBCXHU2ODA3XHU5ODk4XHU2NTcwXHU3RUM0XHJcbiAgICBpdGVtcyA9IFtdO1xyXG4gIH0pXHJcblxyXG4gIC8vIFx1NkRGQlx1NTJBMFx1NUU4Rlx1NTNGN1xyXG4gIGFkZE9yZGVyTnVtYmVyKGdyb3Vwcyk7XHJcbiAgcmV0dXJuIGdyb3VwcztcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NkRGQlx1NTJBMFx1NUU4Rlx1NTNGN1xyXG4gKiBcclxuICogQHBhcmFtIGdyb3VwcyBcdTUyMDZcdTdFQzRcdTY1NzBcdTYzNkVcclxuICovXHJcbmZ1bmN0aW9uIGFkZE9yZGVyTnVtYmVyKGdyb3Vwcykge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdyb3Vwc1tpXS5pdGVtcy5sZW5ndGg7IGorKykge1xyXG4gICAgICBjb25zdCBpdGVtcyA9IGdyb3Vwc1tpXS5pdGVtcztcclxuICAgICAgY29uc3QgaW5kZXggPSBqICsgMTtcclxuICAgICAgbGV0IGluZGV4U3R5bGUgPSBgPGRpdiBjbGFzcz1cInRleHQtY29sb3ItZ3JheSBtci1bNnB4XVwiIHN0eWxlPVwiZm9udC13ZWlnaHQ6IDU1MDsgZGlzcGxheTogaW5saW5lLWJsb2NrO1wiPiR7aW5kZXh9PC9kaXY+YDtcclxuICAgICAgaWYgKGluZGV4ID09IDEpIHtcclxuICAgICAgICBpbmRleFN0eWxlID0gYDxkaXYgY2xhc3M9XCJ0ZXh0LWNvbG9yLXJlZCBtci1bNnB4XVwiIHN0eWxlPVwiZm9udC13ZWlnaHQ6IDU1MDsgZGlzcGxheTogaW5saW5lLWJsb2NrO1wiPiR7aW5kZXh9PC9kaXY+YDtcclxuICAgICAgfSBlbHNlIGlmIChpbmRleCA9PSAyKSB7XHJcbiAgICAgICAgaW5kZXhTdHlsZSA9IGA8ZGl2IGNsYXNzPVwidGV4dC1jb2xvci1vcmFuZ2UgbXItWzZweF1cIiBzdHlsZT1cImZvbnQtd2VpZ2h0OiA1NTA7IGRpc3BsYXk6IGlubGluZS1ibG9jaztcIj4ke2luZGV4fTwvZGl2PmA7XHJcbiAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT0gMykge1xyXG4gICAgICAgIGluZGV4U3R5bGUgPSBgPGRpdiBjbGFzcz1cInRleHQtY29sb3IteWVsbG93IG1yLVs2cHhdXCIgc3R5bGU9XCJmb250LXdlaWdodDogNTUwOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCI+JHtpbmRleH08L2Rpdj5gO1xyXG4gICAgICB9XHJcbiAgICAgIGl0ZW1zW2pdLnRleHQgPSBgJHtpbmRleFN0eWxlfSR7aXRlbXNbal0udGV4dH1gO1xyXG4gICAgfVxyXG4gIH1cclxufSIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcWlxcXFxEZXNrdG9wXFxcXGNoYXJsZXM3Yy5naXRodWIuaW9cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHRoZW1lXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxaXFxcXERlc2t0b3BcXFxcY2hhcmxlczdjLmdpdGh1Yi5pb1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdGhlbWVcXFxcdXRpbHMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1ovRGVza3RvcC9jaGFybGVzN2MuZ2l0aHViLmlvL2RvY3MvLnZpdGVwcmVzcy90aGVtZS91dGlscy50c1wiOy8qKlxyXG4gKiBcdTY4M0NcdTVGMEZcdTUzMTZcdTY1RjZcdTk1RjRcclxuICpcclxuICogQHBhcmFtIGRhdGUgXHU1Rjg1XHU2ODNDXHU1RjBGXHU1MzE2XHU2NUY2XHU5NUY0XHJcbiAqIEByZXR1cm5zIFx1NjgzQ1x1NUYwRlx1NTMxNlx1NTQwRVx1NzY4NFx1NjVGNlx1OTVGNChZWVlZL01NL2RkIEFNIGhoOm1tKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xyXG4gIGNvbnN0IGZvcm1hdERhdGUgPSBuZXcgRGF0ZShkYXRlKTtcclxuICByZXR1cm4gZm9ybWF0RGF0ZS50b0xvY2FsZVN0cmluZygnemgnLCB7eWVhcjogJ251bWVyaWMnLCBtb250aDogJ251bWVyaWMnLCBkYXk6ICdudW1lcmljJywgaG91cjogJ251bWVyaWMnLCBtaW51dGU6ICdudW1lcmljJ30pO1xyXG59XHJcblxyXG4vKipcclxuICogXHU4M0I3XHU1M0Q2IFVSTCBcdThERUZcdTVGODRcdTRFMkRcdTc2ODRcdTYzMDdcdTVCOUFcdTUzQzJcdTY1NzBcclxuICpcclxuICogQHBhcmFtIHBhcmFtTmFtZSBcdTUzQzJcdTY1NzBcdTU0MERcclxuICogQHJldHVybnMgXHU1M0MyXHU2NTcwXHU1MDNDXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UXVlcnlQYXJhbShwYXJhbU5hbWUpIHtcclxuICBjb25zdCByZWcgPSBuZXcgUmVnRXhwKFwiKF58JilcIisgcGFyYW1OYW1lICtcIj0oW14mXSopKCZ8JClcIik7XHJcbiAgbGV0IHZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyKDEpKS5tYXRjaChyZWcpO1xyXG4gIGlmICh2YWx1ZSAhPSBudWxsKSB7XHJcbiAgICByZXR1cm4gdW5lc2NhcGUodmFsdWVbMl0pO1xyXG4gIH0gXHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdThERjNcdThGNkNcdTUyMzBcdTYzMDdcdTVCOUFcdTk0RkVcdTYzQTVcclxuICpcclxuICogQHBhcmFtIHBhcmFtTmFtZSBcdTUzQzJcdTY1NzBcdTU0MERcclxuICogQHBhcmFtIHBhcmFtVmFsdWUgXHU1M0MyXHU2NTcwXHU1MDNDXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ29Ub0xpbmsodXJsLCBwYXJhbU5hbWUsIHBhcmFtVmFsdWUpIHtcclxuICBpZiAocGFyYW1OYW1lKSB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybCArICc/JyArIHBhcmFtTmFtZSArICc9JyArIHBhcmFtVmFsdWU7XHJcbiAgfSBlbHNlIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFx1ODNCN1x1NTNENlx1NzUxRlx1ODA5Nlx1NTZGRVx1NjgwN1xyXG4gKlxyXG4gKiBAcGFyYW0geWVhciBcdTVFNzRcdTRFRkRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGluZXNlWm9kaWFjKHllYXIpIHtcclxuICBjb25zdCBhcnIgPSBbJ21vbmtleScsICdyb29zdGVyJywgJ2RvZycsICdwaWcnLCAncmF0JywgJ294JywgJ3RpZ2VyJywgJ3JhYmJpdCcsICdkcmFnb24nLCAnc25ha2UnLCAnaG9yc2UnLCAnZ29hdCddO1xyXG4gIHJldHVybiBhcnJbeWVhciAlIDEyXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1ODNCN1x1NTNENlx1NzUxRlx1ODA5Nlx1NTQwRFx1NzlGMFxyXG4gKlxyXG4gKiBAcGFyYW0geWVhciBcdTVFNzRcdTRFRkRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGluZXNlWm9kaWFjQWxpYXMoeWVhcikge1xyXG4gIGNvbnN0IGFyciA9IFsnXHU3MzM0XHU1RTc0JywgJ1x1OUUyMVx1NUU3NCcsICdcdTcyRDdcdTVFNzQnLCAnXHU3MzJBXHU1RTc0JywgJ1x1OUYyMFx1NUU3NCcsICdcdTcyNUJcdTVFNzQnLCAnXHU4NjRFXHU1RTc0JywgJ1x1NTE1NFx1NUU3NCcsICdcdTlGOTlcdTVFNzQnLCAnXHU4NkM3XHU1RTc0JywgJ1x1OUE2Q1x1NUU3NCcsICdcdTdGOEFcdTVFNzQnXTtcclxuICByZXR1cm4gYXJyW3llYXIgJSAxMl07XHJcbn0iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFpcXFxcRGVza3RvcFxcXFxjaGFybGVzN2MuZ2l0aHViLmlvXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcXFxcc2VhcmNoXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxaXFxcXERlc2t0b3BcXFxcY2hhcmxlczdjLmdpdGh1Yi5pb1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXFxcXHNlYXJjaFxcXFxhbGdvbGlhLXNlYXJjaC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvWi9EZXNrdG9wL2NoYXJsZXM3Yy5naXRodWIuaW8vZG9jcy8udml0ZXByZXNzL2NvbmZpZy9zZWFyY2gvYWxnb2xpYS1zZWFyY2gudHNcIjtpbXBvcnQgdHlwZSB7IEFsZ29saWFTZWFyY2hPcHRpb25zIH0gZnJvbSAndml0ZXByZXNzJztcclxuXHJcbmV4cG9ydCBjb25zdCBhbGdvbGlhU2VhcmNoT3B0aW9uczogQWxnb2xpYVNlYXJjaE9wdGlvbnMgPSB7XHJcbiAgYXBwSWQ6ICdEQlowRzlIQlVZJyxcclxuICBhcGlLZXk6ICcwMGNlZjQ4MGE1NDMwMDNkMDVkOTgwODExMGVhNWY2NScsXHJcbiAgaW5kZXhOYW1lOiAnY2hhcmxlczdjJyxcclxuICBsb2NhbGVzOiB7XHJcbiAgICByb290OiB7XHJcbiAgICAgIHBsYWNlaG9sZGVyOiAnXHU2NDFDXHU3RDIyXHU2NTg3XHU2ODYzJyxcclxuICAgICAgdHJhbnNsYXRpb25zOiB7XHJcbiAgICAgICAgYnV0dG9uOiB7XHJcbiAgICAgICAgICBidXR0b25UZXh0OiAnXHU2NDFDXHU3RDIyXHU2NTg3XHU2ODYzJyxcclxuICAgICAgICAgIGJ1dHRvbkFyaWFMYWJlbDogJ1x1NjQxQ1x1N0QyMlx1NjU4N1x1Njg2MydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGFsOiB7XHJcbiAgICAgICAgICBzZWFyY2hCb3g6IHtcclxuICAgICAgICAgICAgcmVzZXRCdXR0b25UaXRsZTogJ1x1NkUwNVx1OTY2NFx1NjdFNVx1OEJFMlx1Njc2MVx1NEVGNicsXHJcbiAgICAgICAgICAgIHJlc2V0QnV0dG9uQXJpYUxhYmVsOiAnXHU2RTA1XHU5NjY0XHU2N0U1XHU4QkUyXHU2NzYxXHU0RUY2JyxcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ1x1NTNENlx1NkQ4OCcsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkFyaWFMYWJlbDogJ1x1NTNENlx1NkQ4OCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdGFydFNjcmVlbjoge1xyXG4gICAgICAgICAgICByZWNlbnRTZWFyY2hlc1RpdGxlOiAnXHU2NDFDXHU3RDIyXHU1Mzg2XHU1M0YyJyxcclxuICAgICAgICAgICAgbm9SZWNlbnRTZWFyY2hlc1RleHQ6ICdcdTZDQTFcdTY3MDlcdTY0MUNcdTdEMjJcdTUzODZcdTUzRjInLFxyXG4gICAgICAgICAgICBzYXZlUmVjZW50U2VhcmNoQnV0dG9uVGl0bGU6ICdcdTRGRERcdTVCNThcdTgxRjNcdTY0MUNcdTdEMjJcdTUzODZcdTUzRjInLFxyXG4gICAgICAgICAgICByZW1vdmVSZWNlbnRTZWFyY2hCdXR0b25UaXRsZTogJ1x1NEVDRVx1NjQxQ1x1N0QyMlx1NTM4Nlx1NTNGMlx1NEUyRFx1NzlGQlx1OTY2NCcsXHJcbiAgICAgICAgICAgIGZhdm9yaXRlU2VhcmNoZXNUaXRsZTogJ1x1NjUzNlx1ODVDRicsXHJcbiAgICAgICAgICAgIHJlbW92ZUZhdm9yaXRlU2VhcmNoQnV0dG9uVGl0bGU6ICdcdTRFQ0VcdTY1MzZcdTg1Q0ZcdTRFMkRcdTc5RkJcdTk2NjQnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZXJyb3JTY3JlZW46IHtcclxuICAgICAgICAgICAgdGl0bGVUZXh0OiAnXHU2NUUwXHU2Q0Q1XHU4M0I3XHU1M0Q2XHU3RUQzXHU2NzlDJyxcclxuICAgICAgICAgICAgaGVscFRleHQ6ICdcdTRGNjBcdTUzRUZcdTgwRkRcdTk3MDBcdTg5ODFcdTY4QzBcdTY3RTVcdTRGNjBcdTc2ODRcdTdGNTFcdTdFRENcdThGREVcdTYzQTUnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZm9vdGVyOiB7XHJcbiAgICAgICAgICAgIHNlbGVjdFRleHQ6ICdcdTkwMDlcdTYyRTknLFxyXG4gICAgICAgICAgICBuYXZpZ2F0ZVRleHQ6ICdcdTUyMDdcdTYzNjInLFxyXG4gICAgICAgICAgICBjbG9zZVRleHQ6ICdcdTUxNzNcdTk1RUQnLFxyXG4gICAgICAgICAgICBzZWFyY2hCeVRleHQ6ICdcdTY0MUNcdTdEMjJcdTYzRDBcdTRGOUJcdTgwMDUnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbm9SZXN1bHRzU2NyZWVuOiB7XHJcbiAgICAgICAgICAgIG5vUmVzdWx0c1RleHQ6ICdcdTY1RTBcdTZDRDVcdTYyN0VcdTUyMzBcdTc2RjhcdTUxNzNcdTdFRDNcdTY3OUMnLFxyXG4gICAgICAgICAgICBzdWdnZXN0ZWRRdWVyeVRleHQ6ICdcdTRGNjBcdTUzRUZcdTRFRTVcdTVDMURcdThCRDVcdTY3RTVcdThCRTInLFxyXG4gICAgICAgICAgICByZXBvcnRNaXNzaW5nUmVzdWx0c1RleHQ6ICdcdTRGNjBcdThCQTRcdTRFM0FcdThCRTVcdTY3RTVcdThCRTJcdTVFOTRcdThCRTVcdTY3MDlcdTdFRDNcdTY3OUNcdUZGMUYnLFxyXG4gICAgICAgICAgICByZXBvcnRNaXNzaW5nUmVzdWx0c0xpbmtUZXh0OiAnXHU3MEI5XHU1MUZCXHU1M0NEXHU5OTg4J1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufTsiLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFpcXFxcRGVza3RvcFxcXFxjaGFybGVzN2MuZ2l0aHViLmlvXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFpcXFxcRGVza3RvcFxcXFxjaGFybGVzN2MuZ2l0aHViLmlvXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcXFxcdGhlbWUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1ovRGVza3RvcC9jaGFybGVzN2MuZ2l0aHViLmlvL2RvY3MvLnZpdGVwcmVzcy9jb25maWcvdGhlbWUudHNcIjtpbXBvcnQgdHlwZSB7IERlZmF1bHRUaGVtZSB9IGZyb20gJ3ZpdGVwcmVzcyc7XHJcbmltcG9ydCB7IG5hdiB9IGZyb20gJy4vbmF2JztcclxuaW1wb3J0IHsgc2lkZWJhciB9IGZyb20gJy4vc2lkZWJhcic7XHJcbmltcG9ydCB7IGFsZ29saWFTZWFyY2hPcHRpb25zIH0gZnJvbSAnLi9zZWFyY2gvYWxnb2xpYS1zZWFyY2gnO1xyXG5pbXBvcnQgeyBsb2NhbFNlYXJjaE9wdGlvbnMgfSBmcm9tICcuL3NlYXJjaC9sb2NhbC1zZWFyY2gnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRoZW1lQ29uZmlnOiBEZWZhdWx0VGhlbWUuQ29uZmlnID0ge1xyXG4gIG5hdiwgLy8gXHU1QkZDXHU4MjJBXHU2ODBGXHU5MTREXHU3RjZFXHJcbiAgc2lkZWJhciwgLy8gXHU0RkE3XHU4RkI5XHU2ODBGXHU5MTREXHU3RjZFXHJcblxyXG4gIGxvZ286ICcvdGl0bGUucG5nJyxcclxuICBvdXRsaW5lOiB7XHJcbiAgICBsZXZlbDogJ2RlZXAnLCAvLyBcdTUzRjNcdTRGQTdcdTU5MjdcdTdFQjJcdTY4MDdcdTk4OThcdTVDNDJcdTdFQTdcclxuICAgIGxhYmVsOiAnXHU3NkVFXHU1RjU1JywgLy8gXHU1M0YzXHU0RkE3XHU1OTI3XHU3RUIyXHU2ODA3XHU5ODk4XHU2NTg3XHU2NzJDXHU5MTREXHU3RjZFXHJcbiAgfSxcclxuICBkYXJrTW9kZVN3aXRjaExhYmVsOiAnXHU1MjA3XHU2MzYyXHU2NUU1XHU1MTQ5L1x1NjY5N1x1OUVEMVx1NkEyMVx1NUYwRicsXHJcbiAgc2lkZWJhck1lbnVMYWJlbDogJ1x1NjU4N1x1N0FFMCcsXHJcbiAgcmV0dXJuVG9Ub3BMYWJlbDogJ1x1OEZENFx1NTZERVx1OTg3Nlx1OTBFOCcsXHJcbiAgbGFzdFVwZGF0ZWRUZXh0OiAnXHU2NzAwXHU1NDBFXHU2NkY0XHU2NUIwJywgLy8gXHU2NzAwXHU1NDBFXHU2NkY0XHU2NUIwXHU2NUY2XHU5NUY0XHU2NTg3XHU2NzJDXHU5MTREXHU3RjZFLCBcdTk3MDBcdTUxNDhcdTkxNERcdTdGNkVsYXN0VXBkYXRlZFx1NEUzQXRydWVcclxuICAvLyBcdTY1ODdcdTY4NjNcdTk4NzVcdTgxMUFcdTY1ODdcdTY3MkNcdTkxNERcdTdGNkVcclxuICBkb2NGb290ZXI6IHtcclxuICAgIHByZXY6ICdcdTRFMEFcdTRFMDBcdTdCQzcnLFxyXG4gICAgbmV4dDogJ1x1NEUwQlx1NEUwMFx1N0JDNydcclxuICB9LFxyXG4gIC8vIFx1N0YxNlx1OEY5MVx1OTRGRVx1NjNBNVx1OTE0RFx1N0Y2RVxyXG4gIGVkaXRMaW5rOiB7XHJcbiAgICBwYXR0ZXJuOiAnaHR0cHM6Ly9naXRodWIuY29tL0NoYXJsZXM3Yy9jaGFybGVzN2MuZ2l0aHViLmlvL2VkaXQvbWFpbi9kb2NzLzpwYXRoJyxcclxuICAgIHRleHQ6ICdcdTRFMERcdTU5QTVcdTRFNEJcdTU5MDRcdUZGMENcdTY1NkNcdThCRjdcdTk2QzVcdTZCNjMnXHJcbiAgfSxcclxuICAvLyBcdTY0MUNcdTdEMjJcdTkxNERcdTdGNkVcdUZGMDhcdTRFOENcdTkwMDlcdTRFMDBcdUZGMDlcclxuICBzZWFyY2g6IHtcclxuICAgIHByb3ZpZGVyOiAnYWxnb2xpYScsXHJcbiAgICBvcHRpb25zOiBhbGdvbGlhU2VhcmNoT3B0aW9ucyxcclxuICAgIC8vIFx1NjcyQ1x1NTczMFx1NzlCQlx1N0VCRlx1NjQxQ1x1N0QyMlxyXG4gICAgLy8gcHJvdmlkZXI6ICdsb2NhbCcsXHJcbiAgICAvLyBvcHRpb25zOiBsb2NhbFNlYXJjaE9wdGlvbnNcclxuICB9LFxyXG4gIC8vIFx1NUJGQ1x1ODIyQVx1NjgwRlx1NTNGM1x1NEZBN1x1NzkzRVx1NEVBNFx1OTRGRVx1NjNBNVx1OTE0RFx1N0Y2RVxyXG4gIHNvY2lhbExpbmtzOiBbXHJcbiAgICB7IGljb246ICdnaXRodWInLCBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL0NoYXJsZXM3Yy9jaGFybGVzN2MuZ2l0aHViLmlvJyB9LFxyXG4gICAge1xyXG4gICAgICBpY29uOiB7XHJcbiAgICAgICAgc3ZnOiAnPHN2ZyByb2xlPVwiaW1nXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48dGl0bGU+XHU3ODAxXHU0RTkxPC90aXRsZT48cGF0aCBkPVwiTTExLjk4NCAwQTEyIDEyIDAgMCAwIDAgMTJhMTIgMTIgMCAwIDAgMTIgMTIgMTIgMTIgMCAwIDAgMTItMTJBMTIgMTIgMCAwIDAgMTIgMGExMiAxMiAwIDAgMC0uMDE2IDB6bTYuMDkgNS4zMzNjLjMyOCAwIC41OTMuMjY2LjU5Mi41OTN2MS40ODJhLjU5NC41OTQgMCAwIDEtLjU5My41OTJIOS43NzdjLS45ODIgMC0xLjc3OC43OTYtMS43NzggMS43Nzh2NS42M2MwIC4zMjcuMjY2LjU5Mi41OTMuNTkyaDUuNjNjLjk4MiAwIDEuNzc4LS43OTYgMS43NzgtMS43Nzh2LS4yOTZhLjU5My41OTMgMCAwIDAtLjU5Mi0uNTkzaC00LjE1YS41OTIuNTkyIDAgMCAxLS41OTItLjU5MnYtMS40ODJhLjU5My41OTMgMCAwIDEgLjU5My0uNTkyaDYuODE1Yy4zMjcgMCAuNTkzLjI2NS41OTMuNTkydjMuNDA4YTQgNCAwIDAgMS00IDRINS45MjZhLjU5My41OTMgMCAwIDEtLjU5My0uNTkzVjkuNzc4YTQuNDQ0IDQuNDQ0IDAgMCAxIDQuNDQ1LTQuNDQ0aDguMjk2WlwiLz48L3N2Zz4nXHJcbiAgICAgIH0sXHJcbiAgICAgIGxpbms6ICdodHRwczovL2dpdGVlLmNvbS9DaGFybGVzN2MvY2hhcmxlczdjJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWNvbjoge1xyXG4gICAgICAgIHN2ZzogYDxzdmcgd2lkdGg9XCIzM1wiIGhlaWdodD1cIjMzXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTc0LjggMjA0XCI+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+Q29udGlOZXcgQWRtaW48L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cIiMzMDdBRjJcIiBkPVwiTTg2LjcsMGw4OCw1MXYuMmwtMTYuMyw5LjR2LS4yTDg2LjcsMTguOVptNzEuOCwxNDMuNSwxNi4zLDkuNHYuMkw4Ni44LDIwNGgwbC0xNi4zLTkuNCwxNi4zLTkuNGgwbDcxLjctNDEuNXYtLjJaXCIvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cIiMxMkQyQUNcIiBkPVwiTTE2LjMsMTQzLjV2LjJMNTgsMTY3LjhsLTE2LjMsOS40TDAsMTUzLjF2LS4yWlwiLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMTJEMkFDXCIgZD1cIk0xMDQuMSw5MywxNS45LDE0My44bC0uMi0uMVYxMjQuOWwuMi4xTDg3LjcsODMuNiwxMDQuMSw5M1pcIi8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAwNTdGRVwiIGQ9XCJNODguMSwwLC4xLDUxdi4ybDE2LjMsOS40di0uMkw4OC4xLDE4LjlaXCIvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cIiMzMDdBRjJcIiBkPVwiTS4xLDUwLjkuMiwxNTIuNmwuMi4xLDE2LjMtOS40LS4yLS4xLS4xLTgyLjlMLjEsNTAuOVpcIi8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAwNTdGRVwiIGQ9XCJNMTc0LjcsNTAuOWwtLjEsMTAxLjctLjIuMS0xNi4zLTkuNC4yLS4xLjEtODIuOVpcIi8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiIzEyRDJBQ1wiIGQ9XCJNNDEuNywxNTguNWwxNi4xLDkuNCwxMDAuNi01OC43VjkwLjRaXCIvPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPmBcclxuICAgICAgfSxcclxuICAgICAgbGluazogJ2h0dHBzOi8vY25hZG1pbi5jaGFybGVzN2MudG9wLydcclxuICAgIH1cclxuICBdLFxyXG5cclxuICAvLyBcdTgxRUFcdTVCOUFcdTRFNDlcdTYyNjlcdTVDNTU6IFx1NjU4N1x1N0FFMFx1NTE0M1x1NjU3MFx1NjM2RVx1OTE0RFx1N0Y2RVxyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBhcnRpY2xlTWV0YWRhdGFDb25maWc6IHtcclxuICAgIGF1dGhvcjogJ1x1NjdFNVx1NUMxNFx1NjVBRicsIC8vIFx1NjU4N1x1N0FFMFx1NTE2OFx1NUM0MFx1OUVEOFx1OEJBNFx1NEY1Q1x1ODAwNVx1NTQwRFx1NzlGMFxyXG4gICAgYXV0aG9yTGluazogJy9hYm91dC9tZScsIC8vIFx1NzBCOVx1NTFGQlx1NEY1Q1x1ODAwNVx1NTQwRFx1NjVGNlx1OUVEOFx1OEJBNFx1OERGM1x1OEY2Q1x1NzY4NFx1OTRGRVx1NjNBNVxyXG4gICAgc2hvd1ZpZXdDb3VudDogZmFsc2UsIC8vIFx1NjYyRlx1NTQyNlx1NjYzRVx1NzkzQVx1NjU4N1x1N0FFMFx1OTYwNVx1OEJGQlx1NjU3MCwgXHU5NzAwXHU4OTgxXHU1NzI4IGRvY3MvLnZpdGVwcmVzcy90aGVtZS9hcGkvY29uZmlnLmpzIFx1NTNDQSBpbnRlcmZhY2UuanMgXHU5MTREXHU3RjZFXHU1OTdEXHU3NkY4XHU1RTk0IEFQSSBcdTYzQTVcdTUzRTNcclxuICB9LFxyXG4gIC8vIFx1ODFFQVx1NUI5QVx1NEU0OVx1NjI2OVx1NUM1NTogXHU2NTg3XHU3QUUwXHU3MjQ4XHU2NzQzXHU5MTREXHU3RjZFXHJcbiAgY29weXJpZ2h0Q29uZmlnOiB7XHJcbiAgICBsaWNlbnNlOiAnXHU3RjcyXHU1NDBELVx1NzZGOFx1NTQwQ1x1NjVCOVx1NUYwRlx1NTE3MVx1NEVBQiA0LjAgXHU1NkZEXHU5NjQ1IChDQyBCWS1TQSA0LjApJyxcclxuICAgIGxpY2Vuc2VMaW5rOiAnaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvNC4wLydcclxuICB9LFxyXG4gIC8vIFx1ODFFQVx1NUI5QVx1NEU0OVx1NjI2OVx1NUM1NTogXHU4QkM0XHU4QkJBXHU5MTREXHU3RjZFXHJcbiAgY29tbWVudENvbmZpZzoge1xyXG4gICAgdHlwZTogJ2dpdGFsaycsXHJcbiAgICBzaG93Q29tbWVudDogdHJ1ZSAvLyBcdTY2MkZcdTU0MjZcdTY2M0VcdTc5M0FcdThCQzRcdThCQkFcclxuICB9LFxyXG4gIC8vIFx1ODFFQVx1NUI5QVx1NEU0OVx1NjI2OVx1NUM1NTogXHU5ODc1XHU4MTFBXHU5MTREXHU3RjZFXHJcbiAgZm9vdGVyQ29uZmlnOiB7XHJcbiAgICBzaG93Rm9vdGVyOiB0cnVlLCAvLyBcdTY2MkZcdTU0MjZcdTY2M0VcdTc5M0FcdTk4NzVcdTgxMUFcclxuICAgIGljcFJlY29yZENvZGU6ICdcdTZEMjVJQ1BcdTU5MDcyMDIyMDA1ODY0XHU1M0Y3LTInLCAvLyBJQ1BcdTU5MDdcdTY4NDhcdTUzRjdcclxuICAgIHB1YmxpY1NlY3VyaXR5UmVjb3JkQ29kZTogJ1x1NkQyNVx1NTE2Q1x1N0Y1MVx1NUI4OVx1NTkwNzEyMDExMjAyMDAwNjc3XHU1M0Y3JywgLy8gXHU4MDU0XHU3RjUxXHU1OTA3XHU2ODQ4XHU1M0Y3XHJcbiAgICBjb3B5cmlnaHQ6IGBDb3B5cmlnaHQgXHUwMEE5IDIwMTktJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IENoYXJsZXM3Y2AgLy8gXHU3MjQ4XHU2NzQzXHU0RkUxXHU2MDZGXHJcbiAgfVxyXG59Il0sCiAgIm1hcHBpbmdzIjogIjtBQUF3VixTQUFTLG9CQUFvQjtBQUNyWCxTQUFTLG1CQUFtQjs7O0FDRHlWLElBQU0sT0FBTztBQUUzWCxJQUFNLFdBQVc7QUFBQSxFQUN0QixNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsRUFDUixPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYjtBQUFBLEVBQ0EsT0FBTyxHQUFHLElBQUk7QUFDaEI7OztBQ05PLElBQU0sT0FBcUI7QUFBQSxFQUNoQyxDQUFDLFFBQVEsRUFBRSxLQUFLLFFBQVEsTUFBTSxlQUFlLENBQUM7QUFBQSxFQUM5QyxDQUFDLFFBQVEsRUFBRSxNQUFNLFVBQVUsU0FBUyxZQUFZLENBQUM7QUFBQSxFQUNqRCxDQUFDLFFBQVEsRUFBRSxNQUFNLFlBQVksU0FBUywwRkFBOEIsQ0FBQztBQUFBLEVBRXJFLENBQUMsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLFNBQVMsT0FBTyxDQUFDO0FBQUEsRUFDdEQsQ0FBQyxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsU0FBUyxNQUFNLENBQUM7QUFBQSxFQUNwRCxDQUFDLFFBQVEsRUFBRSxNQUFNLGVBQWUsU0FBUyxVQUFVLENBQUM7QUFBQSxFQUVwRCxDQUFDLFFBQVEsRUFBRSxVQUFVLFdBQVcsU0FBUyxVQUFVLENBQUM7QUFBQSxFQUNwRCxDQUFDLFFBQVEsRUFBRSxVQUFVLGFBQWEsU0FBUyxTQUFTLE9BQU8sQ0FBQztBQUFBLEVBQzVELENBQUMsUUFBUSxFQUFFLFVBQVUsWUFBWSxTQUFTLFNBQVMsTUFBTSxDQUFDO0FBQUEsRUFDMUQsQ0FBQyxRQUFRLEVBQUUsVUFBVSxrQkFBa0IsU0FBUyxTQUFTLFlBQVksQ0FBQztBQUFBLEVBQ3RFLENBQUMsUUFBUSxFQUFFLFVBQVUsV0FBVyxTQUFTLFNBQVMsS0FBSyxDQUFDO0FBQUEsRUFDeEQsQ0FBQyxRQUFRLEVBQUUsVUFB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QUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0Y7IiwKICAibmFtZXMiOiBbIm5hbWUiXQp9Cg==
