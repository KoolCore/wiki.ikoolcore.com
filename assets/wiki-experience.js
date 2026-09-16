/* iKOOLCORE Knowledge Base experience layer */
(() => {
  "use strict";

  const ICONS = {
    search: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="6.5" stroke="currentColor" stroke-width="1.8"/><path d="m16 16 4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3 5.5 5.7v5.6c0 4.2 2.7 7.8 6.5 9.2 3.8-1.4 6.5-5 6.5-9.2V5.7L12 3Z" stroke="currentColor" stroke-width="1.7"/><path d="m9.2 11.7 1.8 1.8 3.9-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    version: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 4h10a1 1 0 0 1 1 1v15l-6-3-6 3V5a1 1 0 0 1 1-1Z" stroke="currentColor" stroke-width="1.7"/><path d="M9 8h6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.7"/><path d="M12 7.5V12l3 2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    team: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="9" cy="9" r="3" stroke="currentColor" stroke-width="1.7"/><path d="M3.8 19c.5-3 2.2-4.5 5.2-4.5s4.7 1.5 5.2 4.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M15.5 6.3a3 3 0 0 1 0 5.4M17 14.8c1.8.6 2.8 2 3.2 4.2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    doc: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 3.5h7l3 3V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" stroke="currentColor" stroke-width="1.7"/><path d="M14 3.5V7h3M9 11h6M9 14.5h6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4.5 5.5c3.2-.8 5.7-.2 7.5 1.7v12c-1.8-1.9-4.3-2.5-7.5-1.7v-12Z" stroke="currentColor" stroke-width="1.6"/><path d="M19.5 5.5c-3.2-.8-5.7-.2-7.5 1.7v12c1.8-1.9 4.3-2.5 7.5-1.7v-12Z" stroke="currentColor" stroke-width="1.6"/></svg>',
    cpu: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="6.5" y="6.5" width="11" height="11" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M9.5 9.5h5v5h-5zM9 3v3.5M12 3v3.5M15 3v3.5M9 17.5V21M12 17.5V21M15 17.5V21M3 9h3.5M3 12h3.5M3 15h3.5M17.5 9H21M17.5 12H21M17.5 15H21" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
    support: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 13v-2a7 7 0 0 1 14 0v2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M5 12.5h2.2v5H6a1 1 0 0 1-1-1v-4ZM16.8 12.5H19v4a1 1 0 0 1-1 1h-1.2v-5ZM16 18c-.8 1.2-2 1.8-3.7 1.8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h13M14 8l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };

  const state = {
    tocObserver: null,
    routeObserver: null,
    scheduled: false,
    searchEntries: [],
    sectionEntries: [],
    selectedSearchIndex: 0
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  function isChinese() {
    const routeLanguage = location.hash.match(/\/(en|zh)(?:\/|$)/i);
    if (routeLanguage) return routeLanguage[1].toLowerCase() === "zh";
    return /^zh(?:-|$)/i.test(document.documentElement.lang);
  }

  function labels() {
    return isChinese()
      ? {
          badge: "官方知识库",
          search: "搜索文档、产品与支持内容",
          searchShort: "搜索文档",
          kbKicker: "iKOOLCORE / 官方知识库",
          kbTitle: "产品知识与技术支持",
          kbText: "按产品、固件与使用场景整理的官方资料。",
          officialDocs: "OFFICIAL DOCUMENTATION",
          official: "官方文档",
          version: "内容版本",
          maintained: "官方团队维护",
          reading: "预计阅读",
          minutes: "分钟",
          toc: "本页目录",
          trustTitle: "官方支持",
          trustText: "内容由 iKOOLCORE 官方维护。发现文档错误或需要技术支持，请通过官方邮箱联系我们。",
          contact: "联系技术支持",
          footerVerified: "官方内容",
          footerVerifiedText: "本文档由 iKOOLCORE 官方发布与维护。",
          footerHelp: "需要帮助？",
          footerHelpText: "提交问题、订单信息或设备日志，我们会跟进处理。",
          footerResources: "资源与固件",
          footerResourcesText: "获取驱动、BIOS 更新和售后支持资料。",
          openSupport: "前往支持",
          openResources: "查看下载资源",
          resultType: "文档",
          sectionType: "本页",
          empty: "没有找到匹配的文档，请尝试更短的关键词。",
          allDocs: "知识与支持文档",
          currentPage: "当前页面",
          close: "Esc"
        }
      : {
          badge: "Official KB",
          search: "Search products, guides and support",
          searchShort: "Search docs",
          kbKicker: "iKOOLCORE / OFFICIAL KB",
          kbTitle: "Product knowledge & support",
          kbText: "Official resources organized by product, firmware and use case.",
          officialDocs: "OFFICIAL DOCUMENTATION",
          official: "Official document",
          version: "Content version",
          maintained: "Maintained by iKOOLCORE",
          reading: "Reading time",
          minutes: "min",
          toc: "On this page",
          trustTitle: "Official support",
          trustText: "Maintained by the iKOOLCORE team. Contact us for technical support or documentation feedback.",
          contact: "Contact support",
          footerVerified: "Official content",
          footerVerifiedText: "Published and maintained by iKOOLCORE.",
          footerHelp: "Need help?",
          footerHelpText: "Share your issue, order details or device logs with our support team.",
          footerResources: "Resources & firmware",
          footerResourcesText: "Find drivers, BIOS updates and after-sales support resources.",
          openSupport: "Contact support",
          openResources: "Browse downloads",
          resultType: "Doc",
          sectionType: "Page",
          empty: "No matching document found. Try a shorter keyword.",
          allDocs: "Knowledge & support",
          currentPage: "Current page",
          close: "Esc"
        };
  }

  function make(tag, className, html) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (html !== undefined) element.innerHTML = html;
    return element;
  }

  function cleanText(value) {
    return (value || "").replace(/\s+/g, " ").trim();
  }

  function stripNumbers(value) {
    return cleanText(value).replace(/^[一二三四五六七八九十百]+[、.．]\s*/, "");
  }

  function slugify(value, index) {
    const base = cleanText(value)
      .toLowerCase()
      .replace(/[\s/\\]+/g, "-")
      .replace(/[^\p{L}\p{N}-]+/gu, "")
      .replace(/^-+|-+$/g, "");
    return "section-" + (base || index + 1);
  }

  function readingMinutes(text) {
    const chinese = (text.match(/[\u3400-\u9fff]/g) || []).length;
    const latin = (text.replace(/[\u3400-\u9fff]/g, " ").match(/[A-Za-z0-9]+/g) || []).length;
    return Math.max(2, Math.ceil(chinese / 300 + latin / 220));
  }

  function installShell() {
    const app = document.getElementById("app");
    if (app) {
      let skip = $(".wiki-skip-link");
      if (!skip) {
        skip = make("a", "wiki-skip-link");
        skip.href = "#wiki-main-content";
        document.body.insertBefore(skip, app);
      }
      skip.textContent = isChinese() ? "跳到正文" : "Skip to content";
    }

    if (!$(".wiki-reading-progress")) {
      document.body.appendChild(make("div", "wiki-reading-progress"));
    }

    const header = $(".wiki-header");
    if (header) {
      const logoItem = $(".logo", header)?.closest(".l-space-item");
      if (logoItem && !$(".wiki-brand-badge")) {
        const badge = make("span", "wiki-brand-badge");
        badge.textContent = labels().badge;
        logoItem.insertAdjacentElement("afterend", badge);
      }

      let navItems = $(".nav-items", header);
      if (!navItems) {
        navItems = make("div", "nav-items wiki-header-actions");
        $(".l-space", header)?.appendChild(navItems);
      }
      if (!$(".wiki-search-trigger")) {
        const trigger = make("button", "wiki-search-trigger");
        trigger.type = "button";
        trigger.setAttribute("aria-label", labels().search);
        trigger.innerHTML = ICONS.search + "<span>" + labels().searchShort + "</span><kbd>Ctrl K</kbd>";
        trigger.addEventListener("click", openSearch);
        navItems.insertAdjacentElement("beforebegin", trigger);
        const mobileTrigger = make("button", "wiki-mobile-nav-toggle", ICONS.book);
        mobileTrigger.type = "button";
        mobileTrigger.setAttribute("aria-label", isChinese() ? "打开文档目录" : "Open documentation navigation");
        mobileTrigger.addEventListener("click", openMobileNav);
        navItems.insertAdjacentElement("beforebegin", mobileTrigger);
      }
    }

    createSearchOverlay();
    createMobileNav();
  }

  function sidebarRoot() {
    const host = $(".wiki-aside");
    return host?.shadowRoot || host || null;
  }

  function ensureSidebarStyles(root) {
    if (!root || root === document || root.querySelector('link[data-wiki-sidebar-css]')) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "./assets/wiki-sidebar.css?v=20260916p";
    link.dataset.wikiSidebarCss = "true";
    root.appendChild(link);
  }

  function enhanceSidebar() {
    const root = sidebarRoot();
    if (!root) return;
    ensureSidebarStyles(root);
    const sidenav = $(".ldesign-doc-sidenav", root);
    if (!sidenav) return;
    const copy = labels();

    if (!$(".wiki-sidebar-intro", sidenav)) {
      const intro = make("div", "wiki-sidebar-intro");
      intro.innerHTML = '<span class="wiki-sidebar-kicker"></span><strong></strong><small></small>';
      $(".wiki-sidebar-kicker", intro).textContent = copy.kbKicker;
      $("strong", intro).textContent = copy.kbTitle;
      $("small", intro).textContent = copy.kbText;
      sidenav.prepend(intro);
    }

    $$(".ldesign-doc-sidenav-group", sidenav).forEach((group) => {
      const title = $(".ldesign-doc-sidenav-group__title", group);
      if (!title) return;
      const rawTitle = cleanText(title.textContent).replace(/🙋‍♂️?/g, "").replace(/^\s+/, "");
      if (!group.dataset.wikiOriginalTitle) group.dataset.wikiOriginalTitle = rawTitle;
      const source = group.dataset.wikiOriginalTitle;
      const icon = /bios|固件/i.test(source) ? ICONS.cpu : /support|支持/i.test(source) ? ICONS.support : ICONS.book;
      let translated = source;
      if (isChinese()) {
        if (/bios|固件/i.test(source)) translated = "固件与 BIOS";
        else if (/support|支持/i.test(source)) translated = "服务与支持";
        else if (/products?|产品/i.test(source)) translated = "产品文档";
      } else {
        if (/bios|固件/i.test(source)) translated = "Firmware & BIOS";
        else if (/support|支持/i.test(source)) translated = "Support & Resources";
        else if (/products?|产品/i.test(source)) translated = "Product Docs";
      }
      title.textContent = translated;
      if (!$(".wiki-nav-icon", title)) title.prepend(make("span", "wiki-nav-icon", icon));
      group.dataset.wikiGroup = translated;
    });

    $$(".ldesign-doc-sidenav-link", sidenav).forEach((link) => {
      const text = cleanText(link.textContent);
      if (text === "virtualization") link.textContent = "Virtualization";
      if (text === "Downloads" && isChinese()) link.textContent = "资源下载";
      if (text === "Firewall" && isChinese()) link.textContent = "防火墙与路由";
      if (text === "virtualization" && isChinese()) link.textContent = "虚拟化支持";
    });

    if (!$(".wiki-sidebar-footer", sidenav)) {
      const footer = make("div", "wiki-sidebar-footer");
      footer.innerHTML = '<div class="wiki-trust-line"></div><p></p><a></a>';
      $(".wiki-trust-line", footer).textContent = copy.maintained;
      $("p", footer).textContent = isChinese() ? "官方资料持续维护，支持邮件响应。" : "Official documentation with direct support escalation.";
      const contact = $("a", footer);
      contact.href = "mailto:service@ikoolcore.com";
      contact.textContent = "service@ikoolcore.com";
      sidenav.appendChild(footer);
    }
  }

  function activeDocumentLink() {
    const root = sidebarRoot() || document;
    return $(".ldesign-doc-sidenav-link.active", root) || $(".ldesign-doc-sidenav-link", root);
  }

  function documentTitle(article) {
    const active = activeDocumentLink();
    const activeText = cleanText(active?.textContent);
    if (/^(?:R\d(?:\s*Max)?)$/i.test(activeText)) {
      return activeText + (isChinese() ? " 产品文档" : " Documentation");
    }
    if (activeText) return activeText;
    const pageTitle = cleanText(document.title).replace(/\s*\([^)]*\)\s*$/, "").split("|")[0];
    if (pageTitle && !/wiki/i.test(pageTitle)) return pageTitle;
    const notice = $(".notice", article);
    const firstText = notice ? cleanText(notice.textContent) : "";
    return firstText.split(/[。.!?]/)[0].slice(0, 54) || "iKOOLCORE";
  }

  function documentSummary(article) {
    const notice = $(".notice", article);
    if (notice) {
      const text = cleanText(notice.textContent);
      return text.length > 180 ? text.slice(0, 178) + "…" : text;
    }
    const paragraph = $$("p", article).find((p) => !$("img", p) && cleanText(p.textContent).length > 40);
    const text = paragraph ? cleanText(paragraph.textContent) : "";
    if (text) return text.length > 180 ? text.slice(0, 178) + "…" : text;
    return isChinese() ? "iKOOLCORE 官方产品文档、配置指南与技术支持资料。" : "Official iKOOLCORE product documentation, setup guides and support resources.";
  }

  function currentVersion() {
    const button = $(".wiki-header .nav-btn");
    return cleanText(button?.textContent) || "v1.2";
  }

  function createMetaPill(icon, text, className) {
    const pill = make("span", "wiki-meta-pill" + (className ? " " + className : ""), icon);
    pill.appendChild(document.createTextNode(text));
    return pill;
  }

  function createHero(article) {
    const copy = labels();
    const title = documentTitle(article);
    const hero = make("section", "wiki-page-hero");
    const visual = make("div", "wiki-hero-visual");
    const firstImage = $$("p", article).slice(0, 3).map((p) => $("img", p)).find(Boolean);

    if (firstImage) {
      firstImage.loading = "eager";
      firstImage.fetchPriority = "high";
      visual.appendChild(firstImage);
      const parent = firstImage.closest("p");
      if (parent && !cleanText(parent.textContent)) parent.remove();
    } else {
      hero.classList.add("no-visual");
      visual.appendChild(make("div", "wiki-hero-orb"));
    }

    const content = make("div", "wiki-hero-copy");
    const eyebrow = make("span", "wiki-hero-eyebrow");
    eyebrow.textContent = copy.officialDocs;
    const heading = make("h1");
    heading.textContent = title;
    const description = make("p", "wiki-hero-description");
    description.textContent = documentSummary(article);
    const summaryNotice = $(".notice", article);
    if (summaryNotice && cleanText(summaryNotice.textContent).length > 40) summaryNotice.remove();
    const meta = make("div", "wiki-hero-meta");
    meta.append(
      createMetaPill(ICONS.shield, copy.official, "official"),
      createMetaPill(ICONS.version, copy.version + " " + currentVersion()),
      createMetaPill(ICONS.clock, copy.reading + " " + readingMinutes(article.textContent || "") + " " + copy.minutes)
    );
    content.append(eyebrow, heading, description, meta);
    hero.append(content, visual);
    return hero;
  }

  function semanticSections(article) {
    const blocks = $$("p.block, p:has(> strong.block)", article);
    return blocks.map((block, index) => {
      const title = stripNumbers(block.textContent) || (isChinese() ? "内容章节" : "Section");
      if (!block.id) block.id = slugify(title, index);
      block.setAttribute("role", "heading");
      block.setAttribute("aria-level", "2");
      return { title, id: block.id, element: block };
    });
  }

  function createRail(sections, article) {
    const copy = labels();
    const rail = make("aside", "wiki-page-rail");
    rail.setAttribute("aria-label", copy.toc);

    if (sections.length >= 2) {
      const card = make("div", "wiki-rail-card");
      const title = make("div", "wiki-rail-title");
      title.textContent = copy.toc;
      const list = make("ol", "wiki-toc-list");
      sections.forEach((section) => {
        const item = make("li");
        const link = make("a", "wiki-toc-link");
        link.href = "#" + section.id;
        link.textContent = section.title;
        link.addEventListener("click", (event) => {
          event.preventDefault();
          section.element.scrollIntoView({ behavior: "smooth", block: "start" });
          history.replaceState(null, "", "#" + section.id);
        });
        item.appendChild(link);
        list.appendChild(item);
      });
      card.append(title, list);
      rail.appendChild(card);
    }

    const trust = make("div", "wiki-trust-card");
    const trustTitle = make("div", "wiki-rail-title");
    trustTitle.textContent = copy.trustTitle;
    const trustText = make("p");
    trustText.textContent = copy.trustText;
    const contact = make("a");
    contact.href = "mailto:service@ikoolcore.com";
    contact.innerHTML = ICONS.arrow;
    contact.appendChild(document.createTextNode(copy.contact));
    trust.append(trustTitle, trustText, contact);
    rail.appendChild(trust);

    if (sections.length >= 2) {
      if (state.tocObserver) state.tocObserver.disconnect();
      state.tocObserver = new IntersectionObserver((entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (!visible) return;
        $$(".wiki-toc-link", rail).forEach((link) => link.classList.toggle("active", link.getAttribute("href") === "#" + visible.target.id));
      }, { rootMargin: "-18% 0px -68% 0px", threshold: [0, 1] });
      sections.forEach((section) => state.tocObserver.observe(section.element));
    }
    return rail;
  }

  function createDocumentFooter(article) {
    const copy = labels();
    const footer = make("section", "wiki-doc-footer");
    const lang = isChinese() ? "zh" : "en";
    const resourcesHref = "#/v1.2/" + lang + "/source";
    const cards = [
      { icon: ICONS.shield, title: copy.footerVerified, text: copy.footerVerifiedText, href: "mailto:service@ikoolcore.com", link: "service@ikoolcore.com" },
      { icon: ICONS.support, title: copy.footerHelp, text: copy.footerHelpText, href: "mailto:service@ikoolcore.com", link: copy.openSupport },
      { icon: ICONS.doc, title: copy.footerResources, text: copy.footerResourcesText, href: resourcesHref, link: copy.openResources }
    ];
    cards.forEach((data) => {
      const card = make("div", "wiki-doc-footer-card", data.icon);
      const title = make("strong");
      title.textContent = data.title;
      const text = make("span");
      text.textContent = data.text;
      const link = make("a");
      link.href = data.href;
      link.textContent = data.link;
      card.append(title, text, link);
      footer.appendChild(card);
    });
    article.appendChild(footer);
  }

  function collectSearchEntries() {
    const docs = $$(".ldesign-doc-sidenav-link", sidebarRoot() || document).map((link) => {
      const group = link.closest(".ldesign-doc-sidenav-group");
      const groupTitle = cleanText($(".ldesign-doc-sidenav-group__title", group)?.textContent) || labels().allDocs;
      const href = link.getAttribute("href") || "";
      const hashHref = href.startsWith("#") ? href : "#" + href;
      return { title: cleanText(link.textContent), subtitle: groupTitle, href: hashHref, type: labels().resultType };
    });
    const unique = new Map();
    docs.forEach((item) => unique.set(item.href, item));
    state.searchEntries = [...unique.values()];

    const currentTitle = cleanText(activeDocumentLink()?.textContent) || documentTitle($(".markdown-body") || document.body);
    state.sectionEntries = $$(".markdown-body [role='heading'][aria-level='2']").map((section) => ({
      title: cleanText(section.textContent),
      subtitle: currentTitle,
      href: "#" + section.id,
      type: labels().sectionType,
      element: section
    }));
  }

  function navigateSearchResult(result) {
    closeSearch();
    if (result.href.startsWith("#") && !result.href.startsWith("#/")) {
      const target = document.getElementById(result.href.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", result.href);
      }
      return;
    }
    location.hash = result.href.replace(/^#/, "");
  }

  function renderSearchResults(query) {
    const results = $(".wiki-search-results");
    if (!results) return;
    const input = $(".wiki-search-input");
    const normalized = cleanText(query).toLowerCase();
    const all = [...state.searchEntries, ...state.sectionEntries];
    const matches = all.filter((item) => {
      if (!normalized) return true;
      return (item.title + " " + item.subtitle + " " + item.type).toLowerCase().includes(normalized);
    }).slice(0, 18);

    state.selectedSearchIndex = 0;
    results.innerHTML = "";
    if (!matches.length) {
      const empty = make("div", "wiki-search-empty");
      empty.textContent = labels().empty;
      results.appendChild(empty);
      return;
    }

    matches.forEach((result, index) => {
      const link = make("a", "wiki-search-result" + (index === 0 ? " selected" : ""));
      link.href = result.href;
      link.dataset.index = String(index);
      const icon = make("span", "wiki-search-result-icon", result.type === labels().sectionType ? ICONS.book : ICONS.doc);
      const body = make("span");
      const title = make("strong");
      title.textContent = result.title;
      const subtitle = make("small");
      subtitle.textContent = result.subtitle;
      const type = make("span", "wiki-search-result-type");
      type.textContent = result.type;
      body.append(title, subtitle);
      link.append(icon, body, type);
      link.addEventListener("click", (event) => {
        event.preventDefault();
        navigateSearchResult(result);
      });
      results.appendChild(link);
    });

    if (input) input.setAttribute("aria-activedescendant", "wiki-search-result-" + matches[0].href);
  }

  function updateSearchSelection(nextIndex) {
    const results = $$(".wiki-search-result");
    if (!results.length) return;
    state.selectedSearchIndex = (nextIndex + results.length) % results.length;
    results.forEach((result, index) => result.classList.toggle("selected", index === state.selectedSearchIndex));
    results[state.selectedSearchIndex].scrollIntoView({ block: "nearest" });
  }


  function openMobileNav() {
    const overlay = $(".wiki-mobile-nav-overlay");
    if (!overlay) return;
    const body = $(".wiki-mobile-nav-body", overlay);
    const root = sidebarRoot() || document;
    const copy = labels();
    body.replaceChildren();
    const intro = $(".wiki-sidebar-intro", root);
    if (intro) body.appendChild(intro.cloneNode(true));
    $$(".ldesign-doc-sidenav-group", root).forEach((group) => {
      const groupBox = make("section", "wiki-mobile-group");
      const heading = make("h3");
      const icon = /bios|固件/i.test(group.textContent) ? ICONS.cpu : /support|支持/i.test(group.textContent) ? ICONS.support : ICONS.book;
      heading.innerHTML = icon;
      heading.appendChild(document.createTextNode(cleanText($(".ldesign-doc-sidenav-group__title", group)?.textContent)));
      groupBox.appendChild(heading);
      $$(".ldesign-doc-sidenav-link", group).forEach((link) => {
        const href = link.getAttribute("href") || "";
        const hashHref = href.startsWith("#") ? href : "#" + href;
        const item = make("a", "wiki-mobile-link" + (link.classList.contains("active") ? " active" : ""));
        item.href = hashHref;
        item.textContent = cleanText(link.textContent);
        item.addEventListener("click", (event) => {
          event.preventDefault();
          closeMobileNav();
          location.hash = hashHref.replace(/^#/, "");
        });
        groupBox.appendChild(item);
      });
      body.appendChild(groupBox);
    });
    $(".wiki-mobile-nav-head strong", overlay).textContent = copy.kbTitle;
    $(".wiki-mobile-nav-close", overlay).setAttribute("aria-label", isChinese() ? "关闭目录" : "Close navigation");
    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeMobileNav() {
    const overlay = $(".wiki-mobile-nav-overlay");
    if (!overlay) return;
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    if (!$(".wiki-search-overlay")?.classList.contains("open")) document.body.style.overflow = "";
  }
  function createMobileNav() {
    if ($(".wiki-mobile-nav-overlay")) return;
    const overlay = make("div", "wiki-mobile-nav-overlay");
    overlay.setAttribute("aria-hidden", "true");
    const sheet = make("div", "wiki-mobile-nav-sheet");
    const head = make("div", "wiki-mobile-nav-head");
    const title = make("strong");
    const close = make("button", "wiki-mobile-nav-close");
    close.type = "button";
    close.textContent = "×";
    close.addEventListener("click", closeMobileNav);
    head.append(title, close);
    const body = make("div", "wiki-mobile-nav-body");
    sheet.append(head, body);
    overlay.appendChild(sheet);
    overlay.addEventListener("mousedown", (event) => { if (event.target === overlay) closeMobileNav(); });
    document.body.appendChild(overlay);
  }

  function openSearch() {
    const overlay = $(".wiki-search-overlay");
    const input = $(".wiki-search-input");
    if (!overlay || !input) return;
    collectSearchEntries();
    const copy = labels();
    $(".wiki-search-group-label") && null;
    $(".wiki-search-foot .wiki-docs-label") && null;
    const footer = $(".wiki-search-foot");
    if (footer) {
      $(".wiki-docs-label", footer).textContent = copy.allDocs;
      $(".wiki-close-label", footer).textContent = copy.close;
    }
    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    input.value = "";
    input.placeholder = copy.search;
    renderSearchResults("");
    requestAnimationFrame(() => input.focus());
  }

  function closeSearch() {
    const overlay = $(".wiki-search-overlay");
    if (!overlay) return;
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function createSearchOverlay() {
    if ($(".wiki-search-overlay")) return;
    const copy = labels();
    const overlay = make("div", "wiki-search-overlay");
    overlay.setAttribute("aria-hidden", "true");
    const panel = make("div", "wiki-search-panel");
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-modal", "true");
    panel.setAttribute("aria-label", copy.search);
    const head = make("div", "wiki-search-head");
    const icon = make("span", "", ICONS.search);
    const input = make("input", "wiki-search-input");
    input.type = "search";
    input.autocomplete = "off";
    input.spellcheck = false;
    input.placeholder = copy.search;
    const close = make("button", "wiki-search-close");
    close.type = "button";
    close.textContent = copy.close;
    close.addEventListener("click", closeSearch);
    head.append(icon, input, close);

    const results = make("div", "wiki-search-results");
    const foot = make("div", "wiki-search-foot");
    const docsLabel = make("span", "wiki-docs-label");
    docsLabel.textContent = copy.allDocs;
    const shortcut = make("span");
    shortcut.innerHTML = '<kbd>↑</kbd> <kbd>↓</kbd> ' + (isChinese() ? "选择" : "select") + ' &nbsp; <kbd class="wiki-close-label">Esc</kbd>';
    foot.append(docsLabel, shortcut);
    panel.append(head, results, foot);
    overlay.appendChild(panel);
    document.body.appendChild(overlay);

    input.addEventListener("input", (event) => renderSearchResults(event.target.value));
    input.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        updateSearchSelection(state.selectedSearchIndex + 1);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        updateSearchSelection(state.selectedSearchIndex - 1);
      } else if (event.key === "Enter") {
        const selected = $$(".wiki-search-result")[state.selectedSearchIndex];
        if (selected) selected.click();
      }
    });
    overlay.addEventListener("mousedown", (event) => {
      if (event.target === overlay) closeSearch();
    });
  }

  function cleanupPreviousPage(article) {
    if (state.tocObserver) {
      state.tocObserver.disconnect();
      state.tocObserver = null;
    }
    $$(".wiki-page-hero, .wiki-page-rail").forEach((element) => element.remove());
    $$(".wiki-doc-footer", article).forEach((element) => element.remove());
  }

  function applyResponsiveLayout(pageContent) {
    if (!pageContent) return;
    const narrow = window.matchMedia("(max-width: 960px)").matches;
    if (narrow) {
      pageContent.style.setProperty("position", "relative", "important");
      pageContent.style.setProperty("inset", "auto", "important");
      pageContent.style.setProperty("width", "100%", "important");
      pageContent.style.setProperty("margin", "calc(var(--ik-header-height) + 8px) 0 0", "important");
      pageContent.style.setProperty("padding", "16px 16px 70px", "important");
    } else {
      pageContent.style.setProperty("position", "absolute", "important");
      pageContent.style.setProperty("top", "var(--ik-header-height)", "important");
      pageContent.style.setProperty("right", "0", "important");
      pageContent.style.setProperty("left", "var(--ik-aside-width)", "important");
      pageContent.style.setProperty("width", "auto", "important");
      pageContent.style.setProperty("margin", "0", "important");
      pageContent.style.setProperty("padding", "30px clamp(22px, 3.2vw, 54px) 90px", "important");
    }
  }

  function articleCoreKey(article) {
    return [...article.children]
      .filter((child) => !child.classList?.contains("wiki-doc-footer"))
      .map((child) => cleanText(child.textContent).slice(0, 220))
      .join("|")
      .slice(0, 1600);
  }

  function enhancePage() {
    const article = $(".markdown-body");
    if (!article) return;
    applyResponsiveLayout(article.parentElement);
    const route = location.hash || "#/";
    const currentKey = articleCoreKey(article);
    if (article.dataset.wikiEnhancedRoute === route && article.dataset.wikiContentKey === currentKey) {
      installShell();
      return;
    }

    installShell();
    cleanupPreviousPage(article);
    article.dataset.wikiEnhancedRoute = route;
    article.id = "wiki-main-content";
    article.setAttribute("tabindex", "-1");
    let leadingNode = article.firstElementChild;
    while (leadingNode && (leadingNode.tagName === "BR" || (leadingNode.tagName === "P" && !cleanText(leadingNode.textContent) && !$("img", leadingNode)))) {
      const next = leadingNode.nextElementSibling;
      leadingNode.remove();
      leadingNode = next;
    }

    const sections = semanticSections(article);
    const hero = createHero(article);
    const rail = createRail(sections, article);
    const pageContent = article.parentElement;
    pageContent.insertBefore(hero, article);
    pageContent.appendChild(rail);
    createDocumentFooter(article);

    article.dataset.wikiContentKey = articleCoreKey(article);

    $$("article img:not(.wiki-hero-visual img), .markdown-body img:not(.wiki-hero-visual img)").forEach((image) => {
      image.loading = "lazy";
      image.decoding = "async";
    });

    const badge = $(".wiki-brand-badge");
    const trigger = $(".wiki-search-trigger");
    if (badge) badge.textContent = labels().badge;
    if (trigger) {
      trigger.setAttribute("aria-label", labels().search);
      const span = $("span", trigger);
      if (span) span.textContent = labels().searchShort;
    }
    updateProgress();
  }

  function scheduleEnhance(delay = 70) {
    if (state.scheduled) return;
    state.scheduled = true;
    window.setTimeout(() => {
      state.scheduled = false;
      enhancePage();
    }, delay);
  }

  function updateProgress() {
    const progress = $(".wiki-reading-progress");
    if (!progress) return;
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const value = Math.min(100, Math.max(0, (window.scrollY / max) * 100));
    progress.style.width = value.toFixed(2) + "%";
  }

  function bindEvents() {
    window.addEventListener("hashchange", () => {
      window.scrollTo({ top: 0, behavior: "auto" });
      scheduleEnhance(90);
    });
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", () => scheduleEnhance(120), { passive: true });
    document.addEventListener("keydown", (event) => {
      const overlayOpen = $(".wiki-search-overlay")?.classList.contains("open");
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        overlayOpen ? closeSearch() : openSearch();
        return;
      }
      if (event.key === "Escape") {
        if (overlayOpen) closeSearch();
        closeMobileNav();
      }
    });
  }

  function boot() {
    installShell();
    enhanceSidebar();
    enhancePage();
    bindEvents();
    const root = document.getElementById("app");
    if (root) {
      state.routeObserver = new MutationObserver(() => {
        installShell();
        enhanceSidebar();
        scheduleEnhance(80);
      });
      state.routeObserver.observe(root, { childList: true, subtree: true });
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot, { once: true });
  else boot();
})();