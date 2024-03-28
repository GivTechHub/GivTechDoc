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
      { text: "\u667A\u80FD\u5408\u7EA6\u8BBE\u8BA1", link: "/categories/start/index", activeMatch: "/categories/start/GivTech\u6148\u5584\u516C\u76CA\u667A\u80FD\u5408\u7EA6\u8BBE\u8BA1" },
      { text: "\u540E\u7AEF\u5F00\u53D1\u8BBE\u8BA1", link: "/categories/start/index", activeMatch: "/categories/start/GivTech\u6148\u5584\u516C\u76CA\u540E\u7AEF\u5F00\u53D1\u8BBE\u8BA1" },
      { text: "\u524D\u7AEF\u5F00\u53D1\u8BBE\u8BA1", link: "/categories/start/index", activeMatch: "/categories/start/GivTech\u6148\u5584\u516C\u76CA\u524D\u7AEF\u5F00\u53D1\u8BBE\u8BA1" },
      { text: "\u8FD0\u7EF4\u90E8\u7F72\u8BBE\u8BA1", link: "/categories/start/index", activeMatch: "/categories/start/GivTech\u6148\u5584\u516C\u76CA\u8FD0\u7EF4\u90E8\u7F72\u8BBE\u8BA1" }
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
      { text: "\u5173\u4E8E\u9879\u76EE", link: "/about/index", activeMatch: "/about/index" },
      { text: "\u5173\u4E8E\u6211", link: "/about/me", activeMatch: "/about/me" }
    ],
    activeMatch: "/about/"
    // // 当前页面处于匹配路径下时, 对应导航菜单将突出显示
  }
];

// docs/.vitepress/config/sidebar.ts
import fg from "file:///C:/Users/Z/Desktop/charles7c.github.io/node_modules/.pnpm/fast-glob@3.3.2/node_modules/fast-glob/out/index.js";
import matter from "file:///C:/Users/Z/Desktop/charles7c.github.io/node_modules/.pnpm/gray-matter@4.0.3/node_modules/gray-matter/index.js";
var sync = fg.sync;
var sidebar = {
  "/categories/issues/": getItemsByDate("categories/issues"),
  "/categories/fragments/": getItemsByDate("categories/fragments"),
  "/categories/solutions/": getItemsByDate("categories/solutions"),
  "/categories/tools/": getItemsByDate("categories/tools"),
  "/categories/start/": getItemsByDate("categories/start"),
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
      text: `<img class="chinese-zodiac" style="position: static; vertical-align: middle; padding-bottom: 3px;" src="/img/svg/chinese-zodiac/article.svg">
            ${year}`,
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy50cyIsICJkb2NzLy52aXRlcHJlc3MvY29uZmlnL2NvbnN0YW50cy50cyIsICJkb2NzLy52aXRlcHJlc3MvY29uZmlnL2hlYWQudHMiLCAiZG9jcy8udml0ZXByZXNzL2NvbmZpZy9tYXJrZG93bi50cyIsICJkb2NzLy52aXRlcHJlc3MvY29uZmlnL25hdi50cyIsICJkb2NzLy52aXRlcHJlc3MvY29uZmlnL3NpZGViYXIudHMiLCAiZG9jcy8udml0ZXByZXNzL2NvbmZpZy9zZWFyY2gvYWxnb2xpYS1zZWFyY2gudHMiLCAiZG9jcy8udml0ZXByZXNzL2NvbmZpZy90aGVtZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFpcXFxcRGVza3RvcFxcXFxjaGFybGVzN2MuZ2l0aHViLmlvXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcWlxcXFxEZXNrdG9wXFxcXGNoYXJsZXM3Yy5naXRodWIuaW9cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvWi9EZXNrdG9wL2NoYXJsZXM3Yy5naXRodWIuaW8vZG9jcy8udml0ZXByZXNzL2NvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcyc7XHJcbmltcG9ydCB7IHdpdGhNZXJtYWlkIH0gZnJvbSAndml0ZXByZXNzLXBsdWdpbi1tZXJtYWlkJztcclxuaW1wb3J0IHsgbWV0YURhdGEgfSBmcm9tICcuL2NvbmZpZy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBoZWFkIH0gZnJvbSAnLi9jb25maWcvaGVhZCc7XHJcbmltcG9ydCB7IG1hcmtkb3duIH0gZnJvbSAnLi9jb25maWcvbWFya2Rvd24nO1xyXG5pbXBvcnQgeyB0aGVtZUNvbmZpZyB9IGZyb20gJy4vY29uZmlnL3RoZW1lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhNZXJtYWlkKFxyXG4gIGRlZmluZUNvbmZpZyh7XHJcbiAgICBsYW5nOiBtZXRhRGF0YS5sYW5nLFxyXG4gICAgdGl0bGU6IG1ldGFEYXRhLnRpdGxlLFxyXG4gICAgZGVzY3JpcHRpb246IG1ldGFEYXRhLmRlc2NyaXB0aW9uLFxyXG5cclxuICAgIGNsZWFuVXJsczogdHJ1ZSxcclxuICAgIGxhc3RVcGRhdGVkOiB0cnVlLCAvLyBcdTY2M0VcdTc5M0FcdTY3MDBcdTU0MEVcdTY2RjRcdTY1QjBcdTY1RjZcdTk1RjRcclxuXHJcbiAgICBoZWFkLCAvLyA8aGVhZD5cdTUxODVcdTY4MDdcdTdCN0VcdTkxNERcdTdGNkVcclxuICAgIG1hcmtkb3duOiBtYXJrZG93biwgLy8gTWFya2Rvd25cdTkxNERcdTdGNkVcclxuICAgIHZ1ZToge1xyXG4gICAgICB0ZW1wbGF0ZToge1xyXG4gICAgICAgIGNvbXBpbGVyT3B0aW9uczoge1xyXG4gICAgICAgICAgaXNDdXN0b21FbGVtZW50OiAodGFnKSA9PiBjdXN0b21FbGVtZW50cy5pbmNsdWRlcyh0YWcpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgdGhlbWVDb25maWcsIC8vIFx1NEUzQlx1OTg5OFx1OTE0RFx1N0Y2RVxyXG4gIH0pLFxyXG4pO1xyXG5cclxuY29uc3QgY3VzdG9tRWxlbWVudHMgPSBbXHJcbiAgJ21qeC1jb250YWluZXInLFxyXG4gICdtangtYXNzaXN0aXZlLW1tbCcsXHJcbiAgJ21hdGgnLFxyXG4gICdtYWN0aW9uJyxcclxuICAnbWFsaWduZ3JvdXAnLFxyXG4gICdtYWxpZ25tYXJrJyxcclxuICAnbWVuY2xvc2UnLFxyXG4gICdtZXJyb3InLFxyXG4gICdtZmVuY2VkJyxcclxuICAnbWZyYWMnLFxyXG4gICdtaScsXHJcbiAgJ21sb25nZGl2JyxcclxuICAnbW11bHRpc2NyaXB0cycsXHJcbiAgJ21uJyxcclxuICAnbW8nLFxyXG4gICdtb3ZlcicsXHJcbiAgJ21wYWRkZWQnLFxyXG4gICdtcGhhbnRvbScsXHJcbiAgJ21yb290JyxcclxuICAnbXJvdycsXHJcbiAgJ21zJyxcclxuICAnbXNjYXJyaWVzJyxcclxuICAnbXNjYXJyeScsXHJcbiAgJ21zY2FycmllcycsXHJcbiAgJ21zZ3JvdXAnLFxyXG4gICdtc3RhY2snLFxyXG4gICdtbG9uZ2RpdicsXHJcbiAgJ21zbGluZScsXHJcbiAgJ21zdGFjaycsXHJcbiAgJ21zcGFjZScsXHJcbiAgJ21zcXJ0JyxcclxuICAnbXNyb3cnLFxyXG4gICdtc3RhY2snLFxyXG4gICdtc3RhY2snLFxyXG4gICdtc3R5bGUnLFxyXG4gICdtc3ViJyxcclxuICAnbXN1cCcsXHJcbiAgJ21zdWJzdXAnLFxyXG4gICdtdGFibGUnLFxyXG4gICdtdGQnLFxyXG4gICdtdGV4dCcsXHJcbiAgJ210cicsXHJcbiAgJ211bmRlcicsXHJcbiAgJ211bmRlcm92ZXInLFxyXG4gICdzZW1hbnRpY3MnLFxyXG4gICdtYXRoJyxcclxuICAnbWknLFxyXG4gICdtbicsXHJcbiAgJ21vJyxcclxuICAnbXMnLFxyXG4gICdtc3BhY2UnLFxyXG4gICdtdGV4dCcsXHJcbiAgJ21lbmNsb3NlJyxcclxuICAnbWVycm9yJyxcclxuICAnbWZlbmNlZCcsXHJcbiAgJ21mcmFjJyxcclxuICAnbXBhZGRlZCcsXHJcbiAgJ21waGFudG9tJyxcclxuICAnbXJvb3QnLFxyXG4gICdtcm93JyxcclxuICAnbXNxcnQnLFxyXG4gICdtc3R5bGUnLFxyXG4gICdtbXVsdGlzY3JpcHRzJyxcclxuICAnbW92ZXInLFxyXG4gICdtcHJlc2NyaXB0cycsXHJcbiAgJ21zdWInLFxyXG4gICdtc3Vic3VwJyxcclxuICAnbXN1cCcsXHJcbiAgJ211bmRlcicsXHJcbiAgJ211bmRlcm92ZXInLFxyXG4gICdub25lJyxcclxuICAnbWFsaWduZ3JvdXAnLFxyXG4gICdtYWxpZ25tYXJrJyxcclxuICAnbXRhYmxlJyxcclxuICAnbXRkJyxcclxuICAnbXRyJyxcclxuICAnbWxvbmdkaXYnLFxyXG4gICdtc2NhcnJpZXMnLFxyXG4gICdtc2NhcnJ5JyxcclxuICAnbXNncm91cCcsXHJcbiAgJ21zbGluZScsXHJcbiAgJ21zcm93JyxcclxuICAnbXN0YWNrJyxcclxuICAnbWFjdGlvbicsXHJcbiAgJ3NlbWFudGljcycsXHJcbiAgJ2Fubm90YXRpb24nLFxyXG4gICdhbm5vdGF0aW9uLXhtbCcsXHJcbl07IiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxaXFxcXERlc2t0b3BcXFxcY2hhcmxlczdjLmdpdGh1Yi5pb1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxaXFxcXERlc2t0b3BcXFxcY2hhcmxlczdjLmdpdGh1Yi5pb1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXFxcXGNvbnN0YW50cy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvWi9EZXNrdG9wL2NoYXJsZXM3Yy5naXRodWIuaW8vZG9jcy8udml0ZXByZXNzL2NvbmZpZy9jb25zdGFudHMudHNcIjtjb25zdCBzaXRlID0gJ2h0dHBzOi8vYmxvZy5jaGFybGVzN2MudG9wJztcclxuXHJcbmV4cG9ydCBjb25zdCBtZXRhRGF0YSA9IHtcclxuICBsYW5nOiAnemgtQ04nLFxyXG4gIGxvY2FsZTogJ3poX0NOJyxcclxuICB0aXRsZTogJ0dpdlRlY2gnLFxyXG4gIGRlc2NyaXB0aW9uOiAnXHU0RTJBXHU0RUJBXHU2MjgwXHU2NzJGXHU3N0U1XHU4QkM2XHU1RTkzXHVGRjBDXHU4QkIwXHU1RjU1ICYgXHU1MjA2XHU0RUFCXHU0RTJBXHU0RUJBXHU3ODhFXHU3MjQ3XHU1MzE2XHUzMDAxXHU3RUQzXHU2Nzg0XHU1MzE2XHUzMDAxXHU0RjUzXHU3Q0ZCXHU1MzE2XHU3Njg0XHU2MjgwXHU2NzJGXHU3N0U1XHU4QkM2XHU1MTg1XHU1QkI5XHUzMDAyJyxcclxuICBzaXRlLFxyXG4gIGltYWdlOiBgJHtzaXRlfS90aXRsZS5wbmdgLFxyXG59OyIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcWlxcXFxEZXNrdG9wXFxcXGNoYXJsZXM3Yy5naXRodWIuaW9cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcWlxcXFxEZXNrdG9wXFxcXGNoYXJsZXM3Yy5naXRodWIuaW9cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1xcXFxoZWFkLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9aL0Rlc2t0b3AvY2hhcmxlczdjLmdpdGh1Yi5pby9kb2NzLy52aXRlcHJlc3MvY29uZmlnL2hlYWQudHNcIjtpbXBvcnQgdHlwZSB7IEhlYWRDb25maWcgfSBmcm9tICd2aXRlcHJlc3MnO1xyXG5pbXBvcnQgeyBtZXRhRGF0YSB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBoZWFkOiBIZWFkQ29uZmlnW10gPSBbXHJcbiAgWydsaW5rJywgeyByZWw6ICdpY29uJywgaHJlZjogJy9mYXZpY29uLmljbycgfV0sXHJcbiAgWydtZXRhJywgeyBuYW1lOiAnYXV0aG9yJywgY29udGVudDogJ0NoYXJsZXM3YycgfV0sXHJcbiAgWydtZXRhJywgeyBuYW1lOiAna2V5d29yZHMnLCBjb250ZW50OiAnXHU2N0U1XHU1QzE0XHU2NUFGXHU3Njg0XHU3N0U1XHU4QkM2XHU1RTkzLCBcdTc3RTVcdThCQzZcdTVFOTMsIFx1NTM1QVx1NUJBMiwgQ2hhcmxlczdjJyB9XSxcclxuXHJcbiAgWydtZXRhJywgeyBuYW1lOiAnSGFuZGhlbGRGcmllbmRseScsIGNvbnRlbnQ6ICdUcnVlJyB9XSxcclxuICBbJ21ldGEnLCB7IG5hbWU6ICdNb2JpbGVPcHRpbWl6ZWQnLCBjb250ZW50OiAnMzIwJyB9XSxcclxuICBbJ21ldGEnLCB7IG5hbWU6ICd0aGVtZS1jb2xvcicsIGNvbnRlbnQ6ICcjM2M4NzcyJyB9XSxcclxuXHJcbiAgWydtZXRhJywgeyBwcm9wZXJ0eTogJ29nOnR5cGUnLCBjb250ZW50OiAnd2Vic2l0ZScgfV0sXHJcbiAgWydtZXRhJywgeyBwcm9wZXJ0eTogJ29nOmxvY2FsZScsIGNvbnRlbnQ6IG1ldGFEYXRhLmxvY2FsZSB9XSxcclxuICBbJ21ldGEnLCB7IHByb3BlcnR5OiAnb2c6dGl0bGUnLCBjb250ZW50OiBtZXRhRGF0YS50aXRsZSB9XSxcclxuICBbJ21ldGEnLCB7IHByb3BlcnR5OiAnb2c6ZGVzY3JpcHRpb24nLCBjb250ZW50OiBtZXRhRGF0YS5kZXNjcmlwdGlvbiB9XSxcclxuICBbJ21ldGEnLCB7IHByb3BlcnR5OiAnb2c6c2l0ZScsIGNvbnRlbnQ6IG1ldGFEYXRhLnNpdGUgfV0sXHJcbiAgWydtZXRhJywgeyBwcm9wZXJ0eTogJ29nOnNpdGVfbmFtZScsIGNvbnRlbnQ6IG1ldGFEYXRhLnRpdGxlIH1dLFxyXG4gIFsnbWV0YScsIHsgcHJvcGVydHk6ICdvZzppbWFnZScsIGNvbnRlbnQ6IG1ldGFEYXRhLmltYWdlIH1dLFxyXG5cclxuICAvLyBcdTc2N0VcdTVFQTZcdTdFREZcdThCQTFcdTRFRTNcdTc4MDFcdUZGMUFodHRwczovL3RvbmdqaS5iYWlkdS5jb21cclxuICBbJ3NjcmlwdCcsIHt9LCBgdmFyIF9obXQgPSBfaG10IHx8IFtdO1xyXG4gIChmdW5jdGlvbigpIHtcclxuICAgIHZhciBobSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcbiAgICBobS5zcmMgPSBcImh0dHBzOi8vaG0uYmFpZHUuY29tL2htLmpzPzUzYWY0YjFhMTJmYmU0MDgxMGNhN2FkMzlmOGRiOWM3XCI7XHJcbiAgICB2YXIgcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpWzBdOyBcclxuICAgIHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaG0sIHMpO1xyXG4gIH0pKCk7YF0sXHJcbiAgLy8gXHU5ODc1XHU5NzYyXHU4QkJGXHU5NUVFXHU5MUNGXHU3RURGXHU4QkExXHJcbiAgLy8gWydzY3JpcHQnLCB7fSwgYFxyXG4gIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XHJcbiAgLy8gICBsZXQgb2xkSHJlZiA9IGRvY3VtZW50LmxvY2F0aW9uLmhyZWYsIGJvZHlET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgLy8gICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKG11dGF0aW9ucykge1xyXG4gIC8vICAgICBpZiAob2xkSHJlZiAhPSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmKSB7XHJcbiAgLy8gICAgICAgb2xkSHJlZiA9IGRvY3VtZW50LmxvY2F0aW9uLmhyZWY7XHJcbiAgLy8gICAgICAgZ2V0UHYoKVxyXG4gIC8vICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XHJcbiAgLy8gICAgICAgICBsZXQgdG1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gIC8vICAgICAgICAgaWYodG1wICE9IGJvZHlET00pIHtcclxuICAvLyAgICAgICAgICAgYm9keURPTSA9IHRtcDtcclxuICAvLyAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShib2R5RE9NLCBjb25maWcpO1xyXG4gIC8vICAgICAgICAgfVxyXG4gIC8vICAgICAgIH0pXHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH0pO1xyXG4gIC8vICAgY29uc3QgY29uZmlnID0ge1xyXG4gIC8vICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgLy8gICAgIHN1YnRyZWU6IHRydWVcclxuICAvLyAgIH07XHJcbiAgLy8gICBvYnNlcnZlci5vYnNlcnZlKGJvZHlET00sIGNvbmZpZyk7XHJcbiAgLy8gICBnZXRQdigpXHJcbiAgLy8gfSwgdHJ1ZSk7XHJcblxyXG4gIC8vIGZ1bmN0aW9uIGdldFB2KCkge1xyXG4gIC8vICAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgLy8gICB4aHIub3BlbignR0VUJywgJ2h0dHBzOi8vYXBpLmNoYXJsZXM3Yy50b3AvYmxvZy9wdj9wYWdlVXJsPScgKyBsb2NhdGlvbi5ocmVmKTtcclxuICAvLyAgIHhoci5zZW5kKCk7XHJcbiAgLy8gfWBdXHJcbl07IiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxaXFxcXERlc2t0b3BcXFxcY2hhcmxlczdjLmdpdGh1Yi5pb1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxaXFxcXERlc2t0b3BcXFxcY2hhcmxlczdjLmdpdGh1Yi5pb1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXFxcXG1hcmtkb3duLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9aL0Rlc2t0b3AvY2hhcmxlczdjLmdpdGh1Yi5pby9kb2NzLy52aXRlcHJlc3MvY29uZmlnL21hcmtkb3duLnRzXCI7aW1wb3J0IHR5cGUgeyBNYXJrZG93bk9wdGlvbnMgfSBmcm9tICd2aXRlcHJlc3MnO1xyXG5pbXBvcnQgbWF0aGpheDMgZnJvbSAnbWFya2Rvd24taXQtbWF0aGpheDMnO1xyXG5pbXBvcnQgZm9vdG5vdGUgZnJvbSAnbWFya2Rvd24taXQtZm9vdG5vdGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1hcmtkb3duOiBNYXJrZG93bk9wdGlvbnMgPSB7XHJcbiAgLy8gU2hpa2lcdTRFM0JcdTk4OTgsIFx1NjI0MFx1NjcwOVx1NEUzQlx1OTg5OFx1NTNDMlx1ODlDMTogaHR0cHM6Ly9naXRodWIuY29tL3NoaWtpanMvc2hpa2kvYmxvYi9tYWluL2RvY3MvdGhlbWVzLm1kXHJcbiAgdGhlbWU6IHtcclxuICAgIGxpZ2h0OiAnZ2l0aHViLWxpZ2h0JyxcclxuICAgIGRhcms6ICdnaXRodWItZGFyay1kaW1tZWQnXHJcbiAgfSxcclxuICAvLyBsaW5lTnVtYmVyczogdHJ1ZSwgLy8gXHU1NDJGXHU3NTI4XHU4ODRDXHU1M0Y3XHJcblxyXG4gIGNvbmZpZzogKG1kKSA9PiB7XHJcbiAgICBtZC51c2UobWF0aGpheDMpO1xyXG4gICAgbWQudXNlKGZvb3Rub3RlKTtcclxuXHJcbiAgICAvLyBcdTU3MjhcdTYyNDBcdTY3MDlcdTY1ODdcdTY4NjNcdTc2ODQ8aDE+XHU2ODA3XHU3QjdFXHU1NDBFXHU2REZCXHU1MkEwPEFydGljbGVNZXRhZGF0YS8+XHU3RUM0XHU0RUY2XHJcbiAgICBtZC5yZW5kZXJlci5ydWxlcy5oZWFkaW5nX2Nsb3NlID0gKHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYsIHNsZikgPT4ge1xyXG4gICAgICBsZXQgaHRtbFJlc3VsdCA9IHNsZi5yZW5kZXJUb2tlbih0b2tlbnMsIGlkeCwgb3B0aW9ucyk7XHJcbiAgICAgIGlmICh0b2tlbnNbaWR4XS50YWcgPT09ICdoMScpIGh0bWxSZXN1bHQgKz0gYFxcbjxDbGllbnRPbmx5PjxBcnRpY2xlTWV0YWRhdGEgdi1pZj1cIigkZnJvbnRtYXR0ZXI/LmFzaWRlID8/IHRydWUpICYmICgkZnJvbnRtYXR0ZXI/LnNob3dBcnRpY2xlTWV0YWRhdGEgPz8gdHJ1ZSlcIiA6YXJ0aWNsZT1cIiRmcm9udG1hdHRlclwiIC8+PC9DbGllbnRPbmx5PmA7XHJcbiAgICAgIHJldHVybiBodG1sUmVzdWx0O1xyXG4gICAgfVxyXG4gIH0sXHJcbn07XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcWlxcXFxEZXNrdG9wXFxcXGNoYXJsZXM3Yy5naXRodWIuaW9cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcWlxcXFxEZXNrdG9wXFxcXGNoYXJsZXM3Yy5naXRodWIuaW9cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1xcXFxuYXYudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1ovRGVza3RvcC9jaGFybGVzN2MuZ2l0aHViLmlvL2RvY3MvLnZpdGVwcmVzcy9jb25maWcvbmF2LnRzXCI7aW1wb3J0IHR5cGUgeyBEZWZhdWx0VGhlbWUgfSBmcm9tICd2aXRlcHJlc3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5hdjogRGVmYXVsdFRoZW1lLkNvbmZpZ1snbmF2J10gPSBbXHJcbiAge1xyXG4gICAgdGV4dDogJ1x1NUZFQlx1OTAxRlx1NUYwMFx1NTlDQicsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7IHRleHQ6ICdcdTY2N0FcdTgwRkRcdTU0MDhcdTdFQTZcdThCQkVcdThCQTEnLCBsaW5rOiAnL2NhdGVnb3JpZXMvc3RhcnQvaW5kZXgnLCBhY3RpdmVNYXRjaDogJy9jYXRlZ29yaWVzL3N0YXJ0L0dpdlRlY2hcdTYxNDhcdTU1ODRcdTUxNkNcdTc2Q0FcdTY2N0FcdTgwRkRcdTU0MDhcdTdFQTZcdThCQkVcdThCQTEnIH0sXHJcbiAgICAgIHsgdGV4dDogJ1x1NTQwRVx1N0FFRlx1NUYwMFx1NTNEMVx1OEJCRVx1OEJBMScsIGxpbms6ICcvY2F0ZWdvcmllcy9zdGFydC9pbmRleCcsIGFjdGl2ZU1hdGNoOiAnL2NhdGVnb3JpZXMvc3RhcnQvR2l2VGVjaFx1NjE0OFx1NTU4NFx1NTE2Q1x1NzZDQVx1NTQwRVx1N0FFRlx1NUYwMFx1NTNEMVx1OEJCRVx1OEJBMScgfSxcclxuICAgICAgeyB0ZXh0OiAnXHU1MjREXHU3QUVGXHU1RjAwXHU1M0QxXHU4QkJFXHU4QkExJywgbGluazogJy9jYXRlZ29yaWVzL3N0YXJ0L2luZGV4JywgYWN0aXZlTWF0Y2g6ICcvY2F0ZWdvcmllcy9zdGFydC9HaXZUZWNoXHU2MTQ4XHU1NTg0XHU1MTZDXHU3NkNBXHU1MjREXHU3QUVGXHU1RjAwXHU1M0QxXHU4QkJFXHU4QkExJyB9LFxyXG4gICAgICB7IHRleHQ6ICdcdThGRDBcdTdFRjRcdTkwRThcdTdGNzJcdThCQkVcdThCQTEnLCBsaW5rOiAnL2NhdGVnb3JpZXMvc3RhcnQvaW5kZXgnLCBhY3RpdmVNYXRjaDogJy9jYXRlZ29yaWVzL3N0YXJ0L0dpdlRlY2hcdTYxNDhcdTU1ODRcdTUxNkNcdTc2Q0FcdThGRDBcdTdFRjRcdTkwRThcdTdGNzJcdThCQkVcdThCQTEnIH1cclxuICAgIF0sXHJcbiAgICBhY3RpdmVNYXRjaDogJy9jYXRlZ29yaWVzLydcclxuICB9LFxyXG4gIHtcclxuICAgIHRleHQ6ICdcdTU2RTJcdTk2MUZcdTYyMTBcdTU0NTgnLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAgeyB0ZXh0OiAnXHU2MjEwXHU1NDU4XHU0RUNCXHU3RUNEJywgbGluazogJy9jb3Vyc2VzL2phdmEvaW5kZXgnLCBhY3RpdmVNYXRjaDogJy9jb3Vyc2VzL2phdmEvJyB9LFxyXG4gICAgXSxcclxuICAgIGFjdGl2ZU1hdGNoOiAnL2NvdXJzZXMvJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGV4dDogJ1x1OTBFOFx1N0Y3Mlx1NjU4N1x1Njg2MycsXHJcbiAgICBsaW5rOiAnL3RhZ3MnLFxyXG4gICAgYWN0aXZlTWF0Y2g6ICcvdGFncydcclxuICB9LFxyXG4gIHtcclxuICAgIHRleHQ6ICdcdTUxNzNcdTRFOEUnLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAgeyB0ZXh0OiAnXHU1MTczXHU0RThFXHU5ODc5XHU3NkVFJywgbGluazogJy9hYm91dC9pbmRleCcsIGFjdGl2ZU1hdGNoOiAnL2Fib3V0L2luZGV4JyB9LFxyXG4gICAgICB7IHRleHQ6ICdcdTUxNzNcdTRFOEVcdTYyMTEnLCBsaW5rOiAnL2Fib3V0L21lJywgYWN0aXZlTWF0Y2g6ICcvYWJvdXQvbWUnIH1cclxuICAgIF0sXHJcbiAgICBhY3RpdmVNYXRjaDogJy9hYm91dC8nIC8vIC8vIFx1NUY1M1x1NTI0RFx1OTg3NVx1OTc2Mlx1NTkwNFx1NEU4RVx1NTMzOVx1OTE0RFx1OERFRlx1NUY4NFx1NEUwQlx1NjVGNiwgXHU1QkY5XHU1RTk0XHU1QkZDXHU4MjJBXHU4M0RDXHU1MzU1XHU1QzA2XHU3QTgxXHU1MUZBXHU2NjNFXHU3OTNBXHJcbiAgfSxcclxuXTsiLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFpcXFxcRGVza3RvcFxcXFxjaGFybGVzN2MuZ2l0aHViLmlvXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFpcXFxcRGVza3RvcFxcXFxjaGFybGVzN2MuZ2l0aHViLmlvXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcXFxcc2lkZWJhci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvWi9EZXNrdG9wL2NoYXJsZXM3Yy5naXRodWIuaW8vZG9jcy8udml0ZXByZXNzL2NvbmZpZy9zaWRlYmFyLnRzXCI7aW1wb3J0IHR5cGUgeyBEZWZhdWx0VGhlbWUgfSBmcm9tICd2aXRlcHJlc3MnO1xyXG5pbXBvcnQgZmcgZnJvbSAnZmFzdC1nbG9iJztcclxuaW1wb3J0IG1hdHRlciBmcm9tICdncmF5LW1hdHRlcic7XHJcbmltcG9ydCB7IGdldENoaW5lc2Vab2RpYWMsIGdldENoaW5lc2Vab2RpYWNBbGlhcyB9IGZyb20gJy4uL3RoZW1lL3V0aWxzLnRzJztcclxuY29uc3Qgc3luYyA9IGZnLnN5bmM7XHJcblxyXG5leHBvcnQgY29uc3Qgc2lkZWJhcjogRGVmYXVsdFRoZW1lLkNvbmZpZ1snc2lkZWJhciddID0ge1xyXG4gICcvY2F0ZWdvcmllcy9pc3N1ZXMvJzogZ2V0SXRlbXNCeURhdGUoXCJjYXRlZ29yaWVzL2lzc3Vlc1wiKSxcclxuICAnL2NhdGVnb3JpZXMvZnJhZ21lbnRzLyc6IGdldEl0ZW1zQnlEYXRlKFwiY2F0ZWdvcmllcy9mcmFnbWVudHNcIiksXHJcbiAgJy9jYXRlZ29yaWVzL3NvbHV0aW9ucy8nOiBnZXRJdGVtc0J5RGF0ZShcImNhdGVnb3JpZXMvc29sdXRpb25zXCIpLFxyXG4gICcvY2F0ZWdvcmllcy90b29scy8nOiBnZXRJdGVtc0J5RGF0ZShcImNhdGVnb3JpZXMvdG9vbHNcIiksXHJcbiAgJy9jYXRlZ29yaWVzL3N0YXJ0Lyc6IGdldEl0ZW1zQnlEYXRlKFwiY2F0ZWdvcmllcy9zdGFydFwiKSxcclxuXHJcbiAgJy9jb3Vyc2VzL2phdmEvJzogZ2V0SXRlbXMoXCJjb3Vyc2VzL2phdmFcIiksXHJcbiAgJy9jb3Vyc2VzL215c3FsLyc6IGdldEl0ZW1zKFwiY291cnNlcy9teXNxbFwiKSxcclxuICAnL2NvdXJzZXMvbXliYXRpcy8nOiBnZXRJdGVtcyhcImNvdXJzZXMvbXliYXRpc1wiKSxcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NjgzOVx1NjM2RSBcdTY3RDBcdTUyMDZcdTdDN0IvWVlZWS9NTS9kZC94eHgubWQgXHU3Njg0XHU3NkVFXHU1RjU1XHU2ODNDXHU1RjBGLCBcdTgzQjdcdTUzRDZcdTRGQTdcdThGQjlcdTY4MEZcdTUyMDZcdTdFQzRcdTUzQ0FcdTUyMDZcdTdFQzRcdTRFMEJcdTY4MDdcdTk4OThcclxuICogXHJcbiAqIC9jYXRlZ29yaWVzL2lzc3Vlcy8yMDIyLzA3LzIwL3h4eC5tZFxyXG4gKiBcclxuICogQHBhcmFtIHBhdGggXHU2MjZCXHU2M0NGXHU1N0ZBXHU3ODQwXHU4REVGXHU1Rjg0XHJcbiAqIEByZXR1cm5zIHtEZWZhdWx0VGhlbWUuU2lkZWJhckl0ZW1bXX1cclxuICovXHJcbmZ1bmN0aW9uIGdldEl0ZW1zQnlEYXRlIChwYXRoOiBzdHJpbmcpIHtcclxuICAvLyBcdTRGQTdcdThGQjlcdTY4MEZcdTVFNzRcdTRFRkRcdTUyMDZcdTdFQzRcdTY1NzBcdTdFQzRcclxuICBsZXQgeWVhckdyb3VwczogRGVmYXVsdFRoZW1lLlNpZGViYXJJdGVtW10gPSBbXTtcclxuICAvLyBcdTdGNkVcdTk4NzZcdTY1NzBcdTdFQzRcclxuICBsZXQgdG9wQXJ0aWNsZUl0ZW1zOiBEZWZhdWx0VGhlbWUuU2lkZWJhckl0ZW1bXSA9IFtdO1xyXG5cclxuICAvLyAxLlx1ODNCN1x1NTNENlx1NjI0MFx1NjcwOVx1NUU3NFx1NEVGRFx1NzZFRVx1NUY1NVxyXG4gIHN5bmMoYGRvY3MvJHtwYXRofS8qYCwge1xyXG4gICAgb25seURpcmVjdG9yaWVzOiB0cnVlLFxyXG4gICAgb2JqZWN0TW9kZTogdHJ1ZSxcclxuICB9KS5mb3JFYWNoKCh7IG5hbWUgfSkgPT4ge1xyXG4gICAgbGV0IHllYXIgPSBuYW1lO1xyXG4gICAgLy8gXHU1RTc0XHU0RUZEXHU2NTcwXHU3RUM0XHJcbiAgICBsZXQgYXJ0aWNsZUl0ZW1zOiBEZWZhdWx0VGhlbWUuU2lkZWJhckl0ZW1bXSA9IFtdO1xyXG5cclxuICAgIC8vIDIuXHU4M0I3XHU1M0Q2XHU2MjQwXHU2NzA5XHU2NzA4XHU0RUZEXHU3NkVFXHU1RjU1XHJcbiAgICBzeW5jKGBkb2NzLyR7cGF0aH0vJHt5ZWFyfS8qYCwge1xyXG4gICAgICBvbmx5RGlyZWN0b3JpZXM6IHRydWUsXHJcbiAgICAgIG9iamVjdE1vZGU6IHRydWUsXHJcbiAgICB9KS5mb3JFYWNoKCh7IG5hbWUgfSkgPT4ge1xyXG4gICAgICBsZXQgbW9udGggPSBuYW1lXHJcblxyXG4gICAgICAvLyAzLlx1ODNCN1x1NTNENlx1NjI0MFx1NjcwOVx1NjVFNVx1NjcxRlx1NzZFRVx1NUY1NVxyXG4gICAgICBzeW5jKGBkb2NzLyR7cGF0aH0vJHt5ZWFyfS8ke21vbnRofS8qYCwge1xyXG4gICAgICAgIG9ubHlEaXJlY3RvcmllczogdHJ1ZSxcclxuICAgICAgICBvYmplY3RNb2RlOiB0cnVlLFxyXG4gICAgICB9KS5mb3JFYWNoKCh7IG5hbWUgfSkgPT4ge1xyXG4gICAgICAgIGxldCBkYXkgPSBuYW1lO1xyXG4gICAgICAgIC8vIDQuXHU4M0I3XHU1M0Q2XHU2NUU1XHU2NzFGXHU3NkVFXHU1RjU1XHU0RTBCXHU3Njg0XHU2MjQwXHU2NzA5XHU2NTg3XHU3QUUwXHJcbiAgICAgICAgc3luYyhgZG9jcy8ke3BhdGh9LyR7eWVhcn0vJHttb250aH0vJHtkYXl9LypgLCB7XHJcbiAgICAgICAgICBvbmx5RmlsZXM6IHRydWUsXHJcbiAgICAgICAgICBvYmplY3RNb2RlOiB0cnVlLFxyXG4gICAgICAgIH0pLmZvckVhY2goKGFydGljbGUpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGFydGljbGVGaWxlID0gbWF0dGVyLnJlYWQoYCR7YXJ0aWNsZS5wYXRofWApO1xyXG4gICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhcnRpY2xlRmlsZTtcclxuICAgICAgICAgIGlmIChkYXRhLmlzVG9wKSB7XHJcbiAgICAgICAgICAgIC8vIFx1NTQxMVx1N0Y2RVx1OTg3Nlx1NTIwNlx1N0VDNFx1NTI0RFx1OEZGRFx1NTJBMFx1NjgwN1x1OTg5OFxyXG4gICAgICAgICAgICB0b3BBcnRpY2xlSXRlbXMudW5zaGlmdCh7XHJcbiAgICAgICAgICAgICAgdGV4dDogZGF0YS50aXRsZSxcclxuICAgICAgICAgICAgICBsaW5rOiBgLyR7cGF0aH0vJHt5ZWFyfS8ke21vbnRofS8ke2RheX0vJHthcnRpY2xlLm5hbWUucmVwbGFjZSgnLm1kJywgJycpfWAsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIFx1NTQxMVx1NUU3NFx1NEVGRFx1NTIwNlx1N0VDNFx1NTI0RFx1OEZGRFx1NTJBMFx1NjgwN1x1OTg5OFxyXG4gICAgICAgICAgYXJ0aWNsZUl0ZW1zLnVuc2hpZnQoe1xyXG4gICAgICAgICAgICB0ZXh0OiBkYXRhLnRpdGxlLFxyXG4gICAgICAgICAgICBsaW5rOiBgLyR7cGF0aH0vJHt5ZWFyfS8ke21vbnRofS8ke2RheX0vJHthcnRpY2xlLm5hbWUucmVwbGFjZSgnLm1kJywgJycpfWAsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBcdTZERkJcdTUyQTBcdTVFNzRcdTRFRkRcdTUyMDZcdTdFQzRcclxuICAgIHllYXJHcm91cHMudW5zaGlmdCh7XHJcbiAgICAgIHRleHQ6IGA8aW1nIGNsYXNzPVwiY2hpbmVzZS16b2RpYWNcIiBzdHlsZT1cInBvc2l0aW9uOiBzdGF0aWM7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IHBhZGRpbmctYm90dG9tOiAzcHg7XCIgc3JjPVwiL2ltZy9zdmcvY2hpbmVzZS16b2RpYWMvYXJ0aWNsZS5zdmdcIj5cclxuICAgICAgICAgICAgJHt5ZWFyfWAsXHJcbiAgICAgIGl0ZW1zOiBhcnRpY2xlSXRlbXMsXHJcbiAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcclxuICAgIH0pO1xyXG4gIH0pXHJcblxyXG4gIGlmICh0b3BBcnRpY2xlSXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgLy8gXHU2REZCXHU1MkEwXHU3RjZFXHU5ODc2XHU1MjA2XHU3RUM0XHJcbiAgICB5ZWFyR3JvdXBzLnVuc2hpZnQoe1xyXG4gICAgICB0ZXh0OiBgPHN2ZyBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jazsgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgcGFkZGluZy1ib3R0b206IDNweDtcIiB2aWV3Qm94PVwiMCAwIDE5MjAgMTAyNFwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzMFwiIGhlaWdodD1cIjMwXCI+PHBhdGggZD1cIk0zNjcuNDg4IDY2Ny45MDRoNDIzLjc0NHY0Ny4yMzJIMzY3LjQ4OHYtNDcuMjMyek0zMjAuMjU2IDIwNC4zNTJoMTM3LjI4djY4Ljk5MmgtMTM3LjI4di02OC45OTJ6TTM2Ny40ODggNzU0LjExMmg0MjMuNzQ0djQ4SDM2Ny40ODh2LTQ4ek02OTMuNzYgMjA0LjM1MmgxMzcuOTg0djY4Ljk5Mkg2OTMuNzZ2LTY4Ljk5MnpNNTA3LjAwOCAyMDQuMzUyaDEzNy4yOHY2OC45OTJoLTEzNy4yOHYtNjguOTkyelwiIHAtaWQ9XCIxMDc0OVwiIGZpbGw9XCIjZDgxZTA2XCI+PC9wYXRoPjxwYXRoIGQ9XCJNMTc5Mi41MTIgMEgxMjcuNDg4QzU3LjQ3MiAwIDAgNTcuMTUyIDAgMTI3LjYxNnY3NjguNzY4QzAgOTY2LjcyIDU3LjA4OCAxMDI0IDEyNy40ODggMTAyNGgxNjY1LjA4OGM2OS45NTIgMCAxMjcuNDI0LTU3LjE1MiAxMjcuNDI0LTEyNy42MTZWMTI3LjYxNkMxOTIwIDU3LjIxNiAxODYyLjkxMiAwIDE3OTIuNTEyIDB6IG0tNTI4IDE3NS4xMDRoNDQ2Ljk3NnY1NC4wMTZIMTQ5NC43MmwtMjQgMTAxLjI0OGgyMDYuOTc2VjY4OS42aC01Ny43MjhWMzg0LjMyaC0yODkuNDcydjMwOC4yMjRoLTU3LjcyOHYtMzYyLjI0aDE0MC4yMjRsMjAuOTkyLTEwMS4yNDhoLTE2OS40NzJ2LTUzLjk1MnogbS05OTYuMDMyLTExLjJoNjE0LjI3MnYxNjcuMjMyaC01MS4wMDh2LTE3LjI4SDMyMC4yNTZ2MTcuMjhIMjY4LjQ4VjE2My45MDR6IG02NzguNzg0IDY4MS43MjhoLTc0NHYtNDMuNTJoMTExLjc0NFY0NTQuODQ4aDIyOS41MDR2LTQ4LjcwNEgyMjEuMjQ4di00Mi4wNDhoMzIzLjI2NHYtMzkuNzQ0aDU0LjAxNnYzOS43NDRoMzMxLjUydjQxLjk4NGgtMzMxLjUydjQ4Ljc2OGgyNDUuMjQ4djM0Ny4yNjRoMTAzLjQ4OHY0My41MnogbTIwMy4yNjQtOTQuNTI4YzAgNTkuNTItMzAuNzIgODkuMjgtOTIuMjI0IDg5LjI4LTI1LjQ3MiAwLTQ2LjAxNi0wLjUxMi02MS41MDQtMS40NzItMi40OTYtMjIuOTc2LTYuNTI4LTQ1LjI0OC0xMi4wMzItNjYuNzUyIDIyLjk3NiA1LjUwNCA0Ni43MiA4LjI1NiA3MS4yMzIgOC4yNTYgMjQgMCAzNS45NjgtMTEuNTIgMzUuOTY4LTM0LjQ5NlYyNDcuODcySDk3MS4ydi01NC43MmgyNzguOTc2djU0LjcySDExNTAuNHY1MDMuMjMyeiBtNTIxLjIxNiAxMjEuNTM2Yy02Ny4wMDgtNTUuNDg4LTEzNy4yOC0xMDguMDMyLTIxMC43NTItMTU3LjUwNC00Ljk5MiA5Ljk4NC0xMC40OTYgMTkuMDA4LTE2LjUxMiAyNy4wMDgtNDEuNDcyIDU3LjAyNC0xMTMuMjggMTAxLjUwNC0yMTUuMjMyIDEzMy41MDQtOS40NzItMTYuNTEyLTIxLjUwNC0zNC40OTYtMzUuOTY4LTU0LjAxNiA5NC41MjgtMjcuMDA4IDE2MS4yOC02NC41MTIgMjAwLjI1Ni0xMTIuNTEyIDM0LjQ5Ni00NC45OTIgNTEuNzc2LTExMy4wMjQgNTEuNzc2LTIwNC4wMzJWNDIxLjEyaDU3LjcyOHY4Mi40OTZjMCA2Mi41MjgtNi43MiAxMTUuNzc2LTIwLjIyNCAxNTkuNzQ0IDg0LjQ4IDU0LjAxNiAxNjEuNDcyIDEwNy4wMDggMjMwLjk3NiAxNTguOTc2bC00Mi4wNDggNTAuMzA0elwiIHAtaWQ9XCIxMDc1MFwiIGZpbGw9XCIjZDgxZTA2XCI+PC9wYXRoPjxwYXRoIGQ9XCJNMzY3LjQ4OCA0OTUuMzZoNDIzLjc0NHY0Ny4yMzJIMzY3LjQ4OFY0OTUuMzZ6TTM2Ny40ODggNTgxLjYzMmg0MjMuNzQ0djQ3LjIzMkgzNjcuNDg4di00Ny4yMzJ6XCIgcC1pZD1cIjEwNzUxXCIgZmlsbD1cIiNkODFlMDZcIj48L3BhdGg+PC9zdmc+XHJcbiAgICAgICAgICAgIFx1NjIxMVx1NzY4NFx1N0Y2RVx1OTg3NiAoJHt0b3BBcnRpY2xlSXRlbXMubGVuZ3RofVx1N0JDNylgLFxyXG4gICAgICBpdGVtczogdG9wQXJ0aWNsZUl0ZW1zLFxyXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gXHU1QzA2XHU2NzAwXHU4RkQxXHU1RTc0XHU0RUZEXHU1MjA2XHU3RUM0XHU1QzU1XHU1RjAwXHJcbiAgICB5ZWFyR3JvdXBzWzFdLmNvbGxhcHNlZCA9IGZhbHNlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBcdTVDMDZcdTY3MDBcdThGRDFcdTVFNzRcdTRFRkRcdTUyMDZcdTdFQzRcdTVDNTVcdTVGMDBcclxuICAgIHllYXJHcm91cHNbMF0uY29sbGFwc2VkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvLyBcdTZERkJcdTUyQTBcdTVFOEZcdTUzRjdcclxuICBhZGRPcmRlck51bWJlcih5ZWFyR3JvdXBzKTtcclxuICByZXR1cm4geWVhckdyb3VwcztcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NjgzOVx1NjM2RSBcdTY3RDBcdTVDMEZcdThCRkUvXHU1RThGXHU1M0Y3LVx1NTIwNlx1N0VDNC9cdTVFOEZcdTUzRjcteHh4Lm1kIFx1NzY4NFx1NzZFRVx1NUY1NVx1NjgzQ1x1NUYwRiwgXHU4M0I3XHU1M0Q2XHU0RkE3XHU4RkI5XHU2ODBGXHU1MjA2XHU3RUM0XHU1M0NBXHU1MjA2XHU3RUM0XHU0RTBCXHU2ODA3XHU5ODk4XHJcbiAqIFxyXG4gKiBjb3Vyc2VzL215YmF0aXMvMDEtTXlCYXRpc1x1NTdGQVx1Nzg0MC8wMS14eHgubWRcclxuICogXHJcbiAqIEBwYXJhbSBwYXRoIFx1NjI2Qlx1NjNDRlx1NTdGQVx1Nzg0MFx1OERFRlx1NUY4NFxyXG4gKiBAcmV0dXJucyB7RGVmYXVsdFRoZW1lLlNpZGViYXJJdGVtW119XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRJdGVtcyAocGF0aDogc3RyaW5nKSB7XHJcbiAgLy8gXHU0RkE3XHU4RkI5XHU2ODBGXHU1MjA2XHU3RUM0XHU2NTcwXHU3RUM0XHJcbiAgbGV0IGdyb3VwczogRGVmYXVsdFRoZW1lLlNpZGViYXJJdGVtW10gPSBbXTtcclxuICAvLyBcdTRGQTdcdThGQjlcdTY4MEZcdTUyMDZcdTdFQzRcdTRFMEJcdTY4MDdcdTk4OThcdTY1NzBcdTdFQzRcclxuICBsZXQgaXRlbXM6IERlZmF1bHRUaGVtZS5TaWRlYmFySXRlbVtdID0gW107XHJcbiAgbGV0IHRvdGFsID0gMDtcclxuICAvLyBcdTVGNTNcdTUyMDZcdTdFQzRcdTUxODVcdTY1ODdcdTdBRTBcdTY1NzBcdTkxQ0ZcdTVDMTFcdTRFOEUgMiBcdTdCQzdcdTYyMTZcdTY1ODdcdTdBRTBcdTYwM0JcdTY1NzBcdTY2M0VcdTc5M0FcdThEODVcdThGQzcgMjAgXHU3QkM3XHU2NUY2XHVGRjBDXHU4MUVBXHU1MkE4XHU2Mjk4XHU1M0UwXHU1MjA2XHU3RUM0XHJcbiAgY29uc3QgZ3JvdXBDb2xsYXBzZWRTaXplID0gMjtcclxuICBjb25zdCB0aXRsZUNvbGxhcHNlZFNpemUgPSAyMDtcclxuXHJcbiAgLy8gMS5cdTgzQjdcdTUzRDZcdTYyNDBcdTY3MDlcdTUyMDZcdTdFQzRcdTc2RUVcdTVGNTVcclxuICBzeW5jKGBkb2NzLyR7cGF0aH0vKmAsIHtcclxuICAgIG9ubHlEaXJlY3RvcmllczogdHJ1ZSxcclxuICAgIG9iamVjdE1vZGU6IHRydWUsXHJcbiAgfSkuZm9yRWFjaCgoeyBuYW1lIH0pID0+IHtcclxuICAgIGxldCBncm91cE5hbWUgPSBuYW1lO1xyXG4gICAgLy8gMi5cdTgzQjdcdTUzRDZcdTUyMDZcdTdFQzRcdTRFMEJcdTc2ODRcdTYyNDBcdTY3MDlcdTY1ODdcdTdBRTBcclxuICAgIHN5bmMoYGRvY3MvJHtwYXRofS8ke2dyb3VwTmFtZX0vKmAsIHtcclxuICAgICAgb25seUZpbGVzOiB0cnVlLFxyXG4gICAgICBvYmplY3RNb2RlOiB0cnVlLFxyXG4gICAgfSkuZm9yRWFjaCgoYXJ0aWNsZSkgPT4ge1xyXG4gICAgICBjb25zdCBhcnRpY2xlRmlsZSA9IG1hdHRlci5yZWFkKGAke2FydGljbGUucGF0aH1gKTtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhcnRpY2xlRmlsZTtcclxuICAgICAgLy8gXHU1NDExXHU1MjREXHU4RkZEXHU1MkEwXHU2ODA3XHU5ODk4XHJcbiAgICAgIGl0ZW1zLnB1c2goe1xyXG4gICAgICAgIHRleHQ6IGRhdGEudGl0bGUsXHJcbiAgICAgICAgbGluazogYC8ke3BhdGh9LyR7Z3JvdXBOYW1lfS8ke2FydGljbGUubmFtZS5yZXBsYWNlKCcubWQnLCAnJyl9YCxcclxuICAgICAgfSk7XHJcbiAgICAgIHRvdGFsICs9IDE7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIDMuXHU1NDExXHU1MjREXHU4RkZEXHU1MkEwXHU1MjMwXHU1MjA2XHU3RUM0XHJcbiAgICAvLyBcdTVGNTNcdTUyMDZcdTdFQzRcdTUxODVcdTY1ODdcdTdBRTBcdTY1NzBcdTkxQ0ZcdTVDMTFcdTRFOEUgQSBcdTdCQzdcdTYyMTZcdTY1ODdcdTdBRTBcdTYwM0JcdTY1NzBcdTY2M0VcdTc5M0FcdThEODVcdThGQzcgQiBcdTdCQzdcdTY1RjZcdUZGMENcdTgxRUFcdTUyQThcdTYyOThcdTUzRTBcdTUyMDZcdTdFQzRcclxuICAgIGdyb3Vwcy5wdXNoKHtcclxuICAgICAgdGV4dDogYCR7Z3JvdXBOYW1lLnN1YnN0cmluZyhncm91cE5hbWUuaW5kZXhPZignLScpICsgMSl9ICgke2l0ZW1zLmxlbmd0aH1cdTdCQzcpYCxcclxuICAgICAgaXRlbXM6IGl0ZW1zLFxyXG4gICAgICBjb2xsYXBzZWQ6IGl0ZW1zLmxlbmd0aCA8IGdyb3VwQ29sbGFwc2VkU2l6ZSB8fCB0b3RhbCA+IHRpdGxlQ29sbGFwc2VkU2l6ZSxcclxuICAgIH0pXHJcblxyXG4gICAgLy8gNC5cdTZFMDVcdTdBN0FcdTRGQTdcdThGQjlcdTY4MEZcdTUyMDZcdTdFQzRcdTRFMEJcdTY4MDdcdTk4OThcdTY1NzBcdTdFQzRcclxuICAgIGl0ZW1zID0gW107XHJcbiAgfSlcclxuXHJcbiAgLy8gXHU2REZCXHU1MkEwXHU1RThGXHU1M0Y3XHJcbiAgYWRkT3JkZXJOdW1iZXIoZ3JvdXBzKTtcclxuICByZXR1cm4gZ3JvdXBzO1xyXG59XHJcblxyXG4vKipcclxuICogXHU2REZCXHU1MkEwXHU1RThGXHU1M0Y3XHJcbiAqIFxyXG4gKiBAcGFyYW0gZ3JvdXBzIFx1NTIwNlx1N0VDNFx1NjU3MFx1NjM2RVxyXG4gKi9cclxuZnVuY3Rpb24gYWRkT3JkZXJOdW1iZXIoZ3JvdXBzKSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ3JvdXBzW2ldLml0ZW1zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW1zID0gZ3JvdXBzW2ldLml0ZW1zO1xyXG4gICAgICBjb25zdCBpbmRleCA9IGogKyAxO1xyXG4gICAgICBsZXQgaW5kZXhTdHlsZSA9IGA8ZGl2IGNsYXNzPVwidGV4dC1jb2xvci1ncmF5IG1yLVs2cHhdXCIgc3R5bGU9XCJmb250LXdlaWdodDogNTUwOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCI+JHtpbmRleH08L2Rpdj5gO1xyXG4gICAgICBpZiAoaW5kZXggPT0gMSkge1xyXG4gICAgICAgIGluZGV4U3R5bGUgPSBgPGRpdiBjbGFzcz1cInRleHQtY29sb3ItcmVkIG1yLVs2cHhdXCIgc3R5bGU9XCJmb250LXdlaWdodDogNTUwOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCI+JHtpbmRleH08L2Rpdj5gO1xyXG4gICAgICB9IGVsc2UgaWYgKGluZGV4ID09IDIpIHtcclxuICAgICAgICBpbmRleFN0eWxlID0gYDxkaXYgY2xhc3M9XCJ0ZXh0LWNvbG9yLW9yYW5nZSBtci1bNnB4XVwiIHN0eWxlPVwiZm9udC13ZWlnaHQ6IDU1MDsgZGlzcGxheTogaW5saW5lLWJsb2NrO1wiPiR7aW5kZXh9PC9kaXY+YDtcclxuICAgICAgfSBlbHNlIGlmIChpbmRleCA9PSAzKSB7XHJcbiAgICAgICAgaW5kZXhTdHlsZSA9IGA8ZGl2IGNsYXNzPVwidGV4dC1jb2xvci15ZWxsb3cgbXItWzZweF1cIiBzdHlsZT1cImZvbnQtd2VpZ2h0OiA1NTA7IGRpc3BsYXk6IGlubGluZS1ibG9jaztcIj4ke2luZGV4fTwvZGl2PmA7XHJcbiAgICAgIH1cclxuICAgICAgaXRlbXNbal0udGV4dCA9IGAke2luZGV4U3R5bGV9JHtpdGVtc1tqXS50ZXh0fWA7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxaXFxcXERlc2t0b3BcXFxcY2hhcmxlczdjLmdpdGh1Yi5pb1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXFxcXHNlYXJjaFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcWlxcXFxEZXNrdG9wXFxcXGNoYXJsZXM3Yy5naXRodWIuaW9cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1xcXFxzZWFyY2hcXFxcYWxnb2xpYS1zZWFyY2gudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1ovRGVza3RvcC9jaGFybGVzN2MuZ2l0aHViLmlvL2RvY3MvLnZpdGVwcmVzcy9jb25maWcvc2VhcmNoL2FsZ29saWEtc2VhcmNoLnRzXCI7aW1wb3J0IHR5cGUgeyBBbGdvbGlhU2VhcmNoT3B0aW9ucyB9IGZyb20gJ3ZpdGVwcmVzcyc7XHJcblxyXG5leHBvcnQgY29uc3QgYWxnb2xpYVNlYXJjaE9wdGlvbnM6IEFsZ29saWFTZWFyY2hPcHRpb25zID0ge1xyXG4gIGFwcElkOiAnREJaMEc5SEJVWScsXHJcbiAgYXBpS2V5OiAnMDBjZWY0ODBhNTQzMDAzZDA1ZDk4MDgxMTBlYTVmNjUnLFxyXG4gIGluZGV4TmFtZTogJ2NoYXJsZXM3YycsXHJcbiAgbG9jYWxlczoge1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBwbGFjZWhvbGRlcjogJ1x1NjQxQ1x1N0QyMlx1NjU4N1x1Njg2MycsXHJcbiAgICAgIHRyYW5zbGF0aW9uczoge1xyXG4gICAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgICAgYnV0dG9uVGV4dDogJ1x1NjQxQ1x1N0QyMlx1NjU4N1x1Njg2MycsXHJcbiAgICAgICAgICBidXR0b25BcmlhTGFiZWw6ICdcdTY0MUNcdTdEMjJcdTY1ODdcdTY4NjMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RhbDoge1xyXG4gICAgICAgICAgc2VhcmNoQm94OiB7XHJcbiAgICAgICAgICAgIHJlc2V0QnV0dG9uVGl0bGU6ICdcdTZFMDVcdTk2NjRcdTY3RTVcdThCRTJcdTY3NjFcdTRFRjYnLFxyXG4gICAgICAgICAgICByZXNldEJ1dHRvbkFyaWFMYWJlbDogJ1x1NkUwNVx1OTY2NFx1NjdFNVx1OEJFMlx1Njc2MVx1NEVGNicsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdcdTUzRDZcdTZEODgnLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25BcmlhTGFiZWw6ICdcdTUzRDZcdTZEODgnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3RhcnRTY3JlZW46IHtcclxuICAgICAgICAgICAgcmVjZW50U2VhcmNoZXNUaXRsZTogJ1x1NjQxQ1x1N0QyMlx1NTM4Nlx1NTNGMicsXHJcbiAgICAgICAgICAgIG5vUmVjZW50U2VhcmNoZXNUZXh0OiAnXHU2Q0ExXHU2NzA5XHU2NDFDXHU3RDIyXHU1Mzg2XHU1M0YyJyxcclxuICAgICAgICAgICAgc2F2ZVJlY2VudFNlYXJjaEJ1dHRvblRpdGxlOiAnXHU0RkREXHU1QjU4XHU4MUYzXHU2NDFDXHU3RDIyXHU1Mzg2XHU1M0YyJyxcclxuICAgICAgICAgICAgcmVtb3ZlUmVjZW50U2VhcmNoQnV0dG9uVGl0bGU6ICdcdTRFQ0VcdTY0MUNcdTdEMjJcdTUzODZcdTUzRjJcdTRFMkRcdTc5RkJcdTk2NjQnLFxyXG4gICAgICAgICAgICBmYXZvcml0ZVNlYXJjaGVzVGl0bGU6ICdcdTY1MzZcdTg1Q0YnLFxyXG4gICAgICAgICAgICByZW1vdmVGYXZvcml0ZVNlYXJjaEJ1dHRvblRpdGxlOiAnXHU0RUNFXHU2NTM2XHU4NUNGXHU0RTJEXHU3OUZCXHU5NjY0J1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVycm9yU2NyZWVuOiB7XHJcbiAgICAgICAgICAgIHRpdGxlVGV4dDogJ1x1NjVFMFx1NkNENVx1ODNCN1x1NTNENlx1N0VEM1x1Njc5QycsXHJcbiAgICAgICAgICAgIGhlbHBUZXh0OiAnXHU0RjYwXHU1M0VGXHU4MEZEXHU5NzAwXHU4OTgxXHU2OEMwXHU2N0U1XHU0RjYwXHU3Njg0XHU3RjUxXHU3RURDXHU4RkRFXHU2M0E1J1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZvb3Rlcjoge1xyXG4gICAgICAgICAgICBzZWxlY3RUZXh0OiAnXHU5MDA5XHU2MkU5JyxcclxuICAgICAgICAgICAgbmF2aWdhdGVUZXh0OiAnXHU1MjA3XHU2MzYyJyxcclxuICAgICAgICAgICAgY2xvc2VUZXh0OiAnXHU1MTczXHU5NUVEJyxcclxuICAgICAgICAgICAgc2VhcmNoQnlUZXh0OiAnXHU2NDFDXHU3RDIyXHU2M0QwXHU0RjlCXHU4MDA1J1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG5vUmVzdWx0c1NjcmVlbjoge1xyXG4gICAgICAgICAgICBub1Jlc3VsdHNUZXh0OiAnXHU2NUUwXHU2Q0Q1XHU2MjdFXHU1MjMwXHU3NkY4XHU1MTczXHU3RUQzXHU2NzlDJyxcclxuICAgICAgICAgICAgc3VnZ2VzdGVkUXVlcnlUZXh0OiAnXHU0RjYwXHU1M0VGXHU0RUU1XHU1QzFEXHU4QkQ1XHU2N0U1XHU4QkUyJyxcclxuICAgICAgICAgICAgcmVwb3J0TWlzc2luZ1Jlc3VsdHNUZXh0OiAnXHU0RjYwXHU4QkE0XHU0RTNBXHU4QkU1XHU2N0U1XHU4QkUyXHU1RTk0XHU4QkU1XHU2NzA5XHU3RUQzXHU2NzlDXHVGRjFGJyxcclxuICAgICAgICAgICAgcmVwb3J0TWlzc2luZ1Jlc3VsdHNMaW5rVGV4dDogJ1x1NzBCOVx1NTFGQlx1NTNDRFx1OTk4OCdcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn07IiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxaXFxcXERlc2t0b3BcXFxcY2hhcmxlczdjLmdpdGh1Yi5pb1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxaXFxcXERlc2t0b3BcXFxcY2hhcmxlczdjLmdpdGh1Yi5pb1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXFxcXHRoZW1lLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9aL0Rlc2t0b3AvY2hhcmxlczdjLmdpdGh1Yi5pby9kb2NzLy52aXRlcHJlc3MvY29uZmlnL3RoZW1lLnRzXCI7aW1wb3J0IHR5cGUgeyBEZWZhdWx0VGhlbWUgfSBmcm9tICd2aXRlcHJlc3MnO1xyXG5pbXBvcnQgeyBuYXYgfSBmcm9tICcuL25hdic7XHJcbmltcG9ydCB7IHNpZGViYXIgfSBmcm9tICcuL3NpZGViYXInO1xyXG5pbXBvcnQgeyBhbGdvbGlhU2VhcmNoT3B0aW9ucyB9IGZyb20gJy4vc2VhcmNoL2FsZ29saWEtc2VhcmNoJztcclxuaW1wb3J0IHsgbG9jYWxTZWFyY2hPcHRpb25zIH0gZnJvbSAnLi9zZWFyY2gvbG9jYWwtc2VhcmNoJztcclxuXHJcbmV4cG9ydCBjb25zdCB0aGVtZUNvbmZpZzogRGVmYXVsdFRoZW1lLkNvbmZpZyA9IHtcclxuICBuYXYsIC8vIFx1NUJGQ1x1ODIyQVx1NjgwRlx1OTE0RFx1N0Y2RVxyXG4gIHNpZGViYXIsIC8vIFx1NEZBN1x1OEZCOVx1NjgwRlx1OTE0RFx1N0Y2RVxyXG5cclxuICBsb2dvOiAnL3RpdGxlLnBuZycsXHJcbiAgb3V0bGluZToge1xyXG4gICAgbGV2ZWw6ICdkZWVwJywgLy8gXHU1M0YzXHU0RkE3XHU1OTI3XHU3RUIyXHU2ODA3XHU5ODk4XHU1QzQyXHU3RUE3XHJcbiAgICBsYWJlbDogJ1x1NzZFRVx1NUY1NScsIC8vIFx1NTNGM1x1NEZBN1x1NTkyN1x1N0VCMlx1NjgwN1x1OTg5OFx1NjU4N1x1NjcyQ1x1OTE0RFx1N0Y2RVxyXG4gIH0sXHJcbiAgZGFya01vZGVTd2l0Y2hMYWJlbDogJ1x1NTIwN1x1NjM2Mlx1NjVFNVx1NTE0OS9cdTY2OTdcdTlFRDFcdTZBMjFcdTVGMEYnLFxyXG4gIHNpZGViYXJNZW51TGFiZWw6ICdcdTY1ODdcdTdBRTAnLFxyXG4gIHJldHVyblRvVG9wTGFiZWw6ICdcdThGRDRcdTU2REVcdTk4NzZcdTkwRTgnLFxyXG4gIGxhc3RVcGRhdGVkVGV4dDogJ1x1NjcwMFx1NTQwRVx1NjZGNFx1NjVCMCcsIC8vIFx1NjcwMFx1NTQwRVx1NjZGNFx1NjVCMFx1NjVGNlx1OTVGNFx1NjU4N1x1NjcyQ1x1OTE0RFx1N0Y2RSwgXHU5NzAwXHU1MTQ4XHU5MTREXHU3RjZFbGFzdFVwZGF0ZWRcdTRFM0F0cnVlXHJcbiAgLy8gXHU2NTg3XHU2ODYzXHU5ODc1XHU4MTFBXHU2NTg3XHU2NzJDXHU5MTREXHU3RjZFXHJcbiAgZG9jRm9vdGVyOiB7XHJcbiAgICBwcmV2OiAnXHU0RTBBXHU0RTAwXHU3QkM3JyxcclxuICAgIG5leHQ6ICdcdTRFMEJcdTRFMDBcdTdCQzcnXHJcbiAgfSxcclxuICAvLyBcdTdGMTZcdThGOTFcdTk0RkVcdTYzQTVcdTkxNERcdTdGNkVcclxuICBlZGl0TGluazoge1xyXG4gICAgcGF0dGVybjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9DaGFybGVzN2MvY2hhcmxlczdjLmdpdGh1Yi5pby9lZGl0L21haW4vZG9jcy86cGF0aCcsXHJcbiAgICB0ZXh0OiAnXHU0RTBEXHU1OUE1XHU0RTRCXHU1OTA0XHVGRjBDXHU2NTZDXHU4QkY3XHU5NkM1XHU2QjYzJ1xyXG4gIH0sXHJcbiAgLy8gXHU2NDFDXHU3RDIyXHU5MTREXHU3RjZFXHVGRjA4XHU0RThDXHU5MDA5XHU0RTAwXHVGRjA5XHJcbiAgc2VhcmNoOiB7XHJcbiAgICBwcm92aWRlcjogJ2FsZ29saWEnLFxyXG4gICAgb3B0aW9uczogYWxnb2xpYVNlYXJjaE9wdGlvbnMsXHJcbiAgICAvLyBcdTY3MkNcdTU3MzBcdTc5QkJcdTdFQkZcdTY0MUNcdTdEMjJcclxuICAgIC8vIHByb3ZpZGVyOiAnbG9jYWwnLFxyXG4gICAgLy8gb3B0aW9uczogbG9jYWxTZWFyY2hPcHRpb25zXHJcbiAgfSxcclxuICAvLyBcdTVCRkNcdTgyMkFcdTY4MEZcdTUzRjNcdTRGQTdcdTc5M0VcdTRFQTRcdTk0RkVcdTYzQTVcdTkxNERcdTdGNkVcclxuICBzb2NpYWxMaW5rczogW1xyXG4gICAgeyBpY29uOiAnZ2l0aHViJywgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9DaGFybGVzN2MvY2hhcmxlczdjLmdpdGh1Yi5pbycgfSxcclxuICAgIHtcclxuICAgICAgaWNvbjoge1xyXG4gICAgICAgIHN2ZzogJzxzdmcgcm9sZT1cImltZ1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHRpdGxlPlx1NzgwMVx1NEU5MTwvdGl0bGU+PHBhdGggZD1cIk0xMS45ODQgMEExMiAxMiAwIDAgMCAwIDEyYTEyIDEyIDAgMCAwIDEyIDEyIDEyIDEyIDAgMCAwIDEyLTEyQTEyIDEyIDAgMCAwIDEyIDBhMTIgMTIgMCAwIDAtLjAxNiAwem02LjA5IDUuMzMzYy4zMjggMCAuNTkzLjI2Ni41OTIuNTkzdjEuNDgyYS41OTQuNTk0IDAgMCAxLS41OTMuNTkySDkuNzc3Yy0uOTgyIDAtMS43NzguNzk2LTEuNzc4IDEuNzc4djUuNjNjMCAuMzI3LjI2Ni41OTIuNTkzLjU5Mmg1LjYzYy45ODIgMCAxLjc3OC0uNzk2IDEuNzc4LTEuNzc4di0uMjk2YS41OTMuNTkzIDAgMCAwLS41OTItLjU5M2gtNC4xNWEuNTkyLjU5MiAwIDAgMS0uNTkyLS41OTJ2LTEuNDgyYS41OTMuNTkzIDAgMCAxIC41OTMtLjU5Mmg2LjgxNWMuMzI3IDAgLjU5My4yNjUuNTkzLjU5MnYzLjQwOGE0IDQgMCAwIDEtNCA0SDUuOTI2YS41OTMuNTkzIDAgMCAxLS41OTMtLjU5M1Y5Ljc3OGE0LjQ0NCA0LjQ0NCAwIDAgMSA0LjQ0NS00LjQ0NGg4LjI5NlpcIi8+PC9zdmc+J1xyXG4gICAgICB9LFxyXG4gICAgICBsaW5rOiAnaHR0cHM6Ly9naXRlZS5jb20vQ2hhcmxlczdjL2NoYXJsZXM3YydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGljb246IHtcclxuICAgICAgICBzdmc6IGA8c3ZnIHdpZHRoPVwiMzNcIiBoZWlnaHQ9XCIzM1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDE3NC44IDIwNFwiPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkNvbnRpTmV3IEFkbWluPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMzA3QUYyXCIgZD1cIk04Ni43LDBsODgsNTF2LjJsLTE2LjMsOS40di0uMkw4Ni43LDE4LjlabTcxLjgsMTQzLjUsMTYuMyw5LjR2LjJMODYuOCwyMDRoMGwtMTYuMy05LjQsMTYuMy05LjRoMGw3MS43LTQxLjV2LS4yWlwiLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMTJEMkFDXCIgZD1cIk0xNi4zLDE0My41di4yTDU4LDE2Ny44bC0xNi4zLDkuNEwwLDE1My4xdi0uMlpcIi8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiIzEyRDJBQ1wiIGQ9XCJNMTA0LjEsOTMsMTUuOSwxNDMuOGwtLjItLjFWMTI0LjlsLjIuMUw4Ny43LDgzLjYsMTA0LjEsOTNaXCIvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cIiMwMDU3RkVcIiBkPVwiTTg4LjEsMCwuMSw1MXYuMmwxNi4zLDkuNHYtLjJMODguMSwxOC45WlwiLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMzA3QUYyXCIgZD1cIk0uMSw1MC45LjIsMTUyLjZsLjIuMSwxNi4zLTkuNC0uMi0uMS0uMS04Mi45TC4xLDUwLjlaXCIvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cIiMwMDU3RkVcIiBkPVwiTTE3NC43LDUwLjlsLS4xLDEwMS43LS4yLjEtMTYuMy05LjQuMi0uMS4xLTgyLjlaXCIvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cIiMxMkQyQUNcIiBkPVwiTTQxLjcsMTU4LjVsMTYuMSw5LjQsMTAwLjYtNTguN1Y5MC40WlwiLz5cclxuICAgICAgICAgICAgICA8L3N2Zz5gXHJcbiAgICAgIH0sXHJcbiAgICAgIGxpbms6ICdodHRwczovL2NuYWRtaW4uY2hhcmxlczdjLnRvcC8nXHJcbiAgICB9XHJcbiAgXSxcclxuXHJcbiAgLy8gXHU4MUVBXHU1QjlBXHU0RTQ5XHU2MjY5XHU1QzU1OiBcdTY1ODdcdTdBRTBcdTUxNDNcdTY1NzBcdTYzNkVcdTkxNERcdTdGNkVcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgYXJ0aWNsZU1ldGFkYXRhQ29uZmlnOiB7XHJcbiAgICBhdXRob3I6ICdcdTY3RTVcdTVDMTRcdTY1QUYnLCAvLyBcdTY1ODdcdTdBRTBcdTUxNjhcdTVDNDBcdTlFRDhcdThCQTRcdTRGNUNcdTgwMDVcdTU0MERcdTc5RjBcclxuICAgIGF1dGhvckxpbms6ICcvYWJvdXQvbWUnLCAvLyBcdTcwQjlcdTUxRkJcdTRGNUNcdTgwMDVcdTU0MERcdTY1RjZcdTlFRDhcdThCQTRcdThERjNcdThGNkNcdTc2ODRcdTk0RkVcdTYzQTVcclxuICAgIHNob3dWaWV3Q291bnQ6IGZhbHNlLCAvLyBcdTY2MkZcdTU0MjZcdTY2M0VcdTc5M0FcdTY1ODdcdTdBRTBcdTk2MDVcdThCRkJcdTY1NzAsIFx1OTcwMFx1ODk4MVx1NTcyOCBkb2NzLy52aXRlcHJlc3MvdGhlbWUvYXBpL2NvbmZpZy5qcyBcdTUzQ0EgaW50ZXJmYWNlLmpzIFx1OTE0RFx1N0Y2RVx1NTk3RFx1NzZGOFx1NUU5NCBBUEkgXHU2M0E1XHU1M0UzXHJcbiAgfSxcclxuICAvLyBcdTgxRUFcdTVCOUFcdTRFNDlcdTYyNjlcdTVDNTU6IFx1NjU4N1x1N0FFMFx1NzI0OFx1Njc0M1x1OTE0RFx1N0Y2RVxyXG4gIGNvcHlyaWdodENvbmZpZzoge1xyXG4gICAgbGljZW5zZTogJ1x1N0Y3Mlx1NTQwRC1cdTc2RjhcdTU0MENcdTY1QjlcdTVGMEZcdTUxNzFcdTRFQUIgNC4wIFx1NTZGRFx1OTY0NSAoQ0MgQlktU0EgNC4wKScsXHJcbiAgICBsaWNlbnNlTGluazogJ2h0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LXNhLzQuMC8nXHJcbiAgfSxcclxuICAvLyBcdTgxRUFcdTVCOUFcdTRFNDlcdTYyNjlcdTVDNTU6IFx1OEJDNFx1OEJCQVx1OTE0RFx1N0Y2RVxyXG4gIGNvbW1lbnRDb25maWc6IHtcclxuICAgIHR5cGU6ICdnaXRhbGsnLFxyXG4gICAgc2hvd0NvbW1lbnQ6IHRydWUgLy8gXHU2NjJGXHU1NDI2XHU2NjNFXHU3OTNBXHU4QkM0XHU4QkJBXHJcbiAgfSxcclxuICAvLyBcdTgxRUFcdTVCOUFcdTRFNDlcdTYyNjlcdTVDNTU6IFx1OTg3NVx1ODExQVx1OTE0RFx1N0Y2RVxyXG4gIGZvb3RlckNvbmZpZzoge1xyXG4gICAgc2hvd0Zvb3RlcjogdHJ1ZSwgLy8gXHU2NjJGXHU1NDI2XHU2NjNFXHU3OTNBXHU5ODc1XHU4MTFBXHJcbiAgICBpY3BSZWNvcmRDb2RlOiAnXHU2RDI1SUNQXHU1OTA3MjAyMjAwNTg2NFx1NTNGNy0yJywgLy8gSUNQXHU1OTA3XHU2ODQ4XHU1M0Y3XHJcbiAgICBwdWJsaWNTZWN1cml0eVJlY29yZENvZGU6ICdcdTZEMjVcdTUxNkNcdTdGNTFcdTVCODlcdTU5MDcxMjAxMTIwMjAwMDY3N1x1NTNGNycsIC8vIFx1ODA1NFx1N0Y1MVx1NTkwN1x1Njg0OFx1NTNGN1xyXG4gICAgY29weXJpZ2h0OiBgQ29weXJpZ2h0IFx1MDBBOSAyMDE5LSR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBDaGFybGVzN2NgIC8vIFx1NzI0OFx1Njc0M1x1NEZFMVx1NjA2RlxyXG4gIH1cclxufSJdLAogICJtYXBwaW5ncyI6ICI7QUFBd1YsU0FBUyxvQkFBb0I7QUFDclgsU0FBUyxtQkFBbUI7OztBQ0R5VixJQUFNLE9BQU87QUFFM1gsSUFBTSxXQUFXO0FBQUEsRUFDdEIsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLEVBQ1IsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2I7QUFBQSxFQUNBLE9BQU8sR0FBRyxJQUFJO0FBQ2hCOzs7QUNOTyxJQUFNLE9BQXFCO0FBQUEsRUFDaEMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxRQUFRLE1BQU0sZUFBZSxDQUFDO0FBQUEsRUFDOUMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxVQUFVLFNBQVMsWUFBWSxDQUFDO0FBQUEsRUFDakQsQ0FBQyxRQUFRLEVBQUUsTUFBTSxZQUFZLFNBQVMsMEZBQThCLENBQUM7QUFBQSxFQUVyRSxDQUFDLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixTQUFTLE9BQU8sQ0FBQztBQUFBLEVBQ3RELENBQUMsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLFNBQVMsTUFBTSxDQUFDO0FBQUEsRUFDcEQsQ0FBQyxRQUFRLEVBQUUsTUFBTSxlQUFlLFNBQVMsVUFBVSxDQUFDO0FBQUEsRUFFcEQsQ0FBQyxRQUFRLEVBQUUsVUFBVSxXQUFXLFNB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QUEsRUFDYixhQUFhO0FBQUEsSUFDWCxNQUFNLFNBQVM7QUFBQSxJQUNmLE9BQU8sU0FBUztBQUFBLElBQ2hCLGFBQWEsU0FBUztBQUFBLElBRXRCLFdBQVc7QUFBQSxJQUNYLGFBQWE7QUFBQTtBQUFBLElBRWI7QUFBQTtBQUFBLElBQ0E7QUFBQTtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0gsVUFBVTtBQUFBLFFBQ1IsaUJBQWlCO0FBQUEsVUFDZixpQkFBaUIsQ0FBQyxRQUFRLGVBQWUsU0FBUyxHQUFHO0FBQUEsUUFDdkQ7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQTtBQUFBLEVBQ0YsQ0FBQztBQUNIO0FBRUEsSUFBTSxpQkFBaUI7QUFBQSxFQUNyQjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0Y7IiwKICAibmFtZXMiOiBbIm5hbWUiXQp9Cg==
