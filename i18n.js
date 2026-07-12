// ============================================================
//  i18n — EN / 中文(繁) / 日本語 language switching for the portfolio.
//  Text nodes carry data-i18n="key" (textContent) or data-i18n-html="key" (innerHTML).
//  Project cards / case studies localise via cases.js `loc` fields (see caseT()).
//  Loaded by index-c.html (and inner pages for standalone). app.js calls
//  window.applyLang() again after it injects sections / renders cases.
// ============================================================
(function () {
  const LANGS = ['en', 'zh', 'ja'];
  const T = {
    en: {
      'hero.avail': 'Open to 2026 roles', 'hero.loc': 'London, UK',
      'hero.eyebrow': 'Portfolio · 2026', 'hero.sub': 'Product <b>×</b> AI Systems',
      'hero.scroll': 'Scroll Down',
      'mq.1': 'Product thinking', 'mq.2': 'AI engineering', 'mq.3': 'Systems that ship',
      'mq.4': 'From prompting to production', 'mq.5': 'DeFi · Live-streaming · Research', 'mq.6': 'Trilingual PM',
      'nav.home': 'Home', 'nav.about': 'About', 'nav.experience': 'Work', 'nav.side-projects': 'Projects', 'nav.contact': 'Contact',
      'about.title': 'About',
      'about.lead': 'Product Manager with <span class="em">4 years</span> of cross-functional experience across Web3/DeFi and B2C software, with a deep understanding of the full product development lifecycle and a proven track record of shipping products end to end and bringing AI agents into production workflows. Skilled in Agile and grounded in a user-centric, data-informed mindset.',
      'about.edu': 'Education', 'about.langs': 'Languages', 'about.product': 'Product', 'about.ai': 'AI Engineering', 'about.tools': 'Tools',
      'deg.msc': 'MSc Management & Technological Change', 'deg.exch': 'Exchange · Social Sciences', 'deg.ba': 'BA Cultural & Creative Industries Management',
      'lang.native': 'Native',
      'sk.roadmap': 'Product roadmapping', 'sk.agile': 'Agile', 'sk.prd': 'Stakeholder management', 'sk.research': 'User research', 'sk.abtest': 'A/B testing', 'sk.stake': 'Stakeholder alignment',
      'sk.prompt': 'Prompt engineering',
      'work.title': 'Work',
      'work.lead': 'Product delivery across blockchain and live-streaming products.',
      'role.pm': 'Product Manager', 'role.epa': 'Assistant Product Manager',
      'when.intern': 'Jul 2019 – Aug 2020 · Internship', 'when.parttime': 'Jan 2019 – Apr 2019 · Part-time',
      'ctx.typus': 'Decentralized derivatives protocol on the Sui blockchain.',
      'ctx.17live': "Asia's largest live-streaming platform, publicly listed on the Singapore Exchange (SGX).",
      'ctx.eslite': 'On-site event operations, Taipei.',
      'b.typus.lead': 'End-to-end product owner for on-chain derivatives at Sui\'s #1 DeFi options-vault protocol, driving roadmap and product execution → <span class="m">30+ features and iterations</span>',
      'b.typus.perp': 'Built a new leveraged-trading product (perpetual futures) from 0 to 1, scaling it to <span class="m">~$87M in trading volume in its first quarter (+383% MoM)</span>, with <span class="m">TLP (liquidity pool) TVL +217%</span>',
      'b.typus.rebrand': 'Orchestrated a major rebrand with the product-operations team, reshaping the site experience → <span class="m">unique site visitors +15%</span>',
      'b.typus.metrics': 'Launched SAFU, a principal-protected structured product (deposits protected while earning returns) → <span class="m">~20× growth in platform MAU</span>',
      'b.17live.lead1': 'Owned cross-regional product initiatives focused on improving platform user satisfaction, collaborating with TW / JP / SEA regional teams and aligning with stakeholders up to C-level',
      'b.17live.lead2': 'Led initiatives to improve the livestream viewing experience, from user interviews and competitor analysis to MVP delivery',
      'b.17live.clip': 'Built short-form livestream clips, enabling users to create and share highlights → <span class="m">content creation +10%</span>, with top homepage click-through and share rates',
      'b.17live.dash': 'Built a user-feedback dashboard, leading a <span class="m">5-person cross-functional team</span> to unify and auto-classify scattered complaints → <span class="m">resolution speed +15%</span>',
      'b.17live.avatar': 'Optimized the V-Liver virtual avatar with the livestream-effects team → <span class="m">effective viewing time +10%</span>',
      'b.17live.roadmap': 'Turned cross-regional user feedback and complaint data into prioritized product requirements → <span class="m">retention +10%</span>, <span class="m">positive feedback +30%</span>',
      'b.eslite1': 'Coordinated <span class="m">20+ on-site events</span> across suppliers, staff and participants',
      'b.eslite2': 'Managed venue setup, timelines and resources, and provided documentation and data support',
      'work.title2': 'Projects',
      'work.lead2': 'Product work at 17LIVE, plus agentic-AI experiments built hands-on with AI agents. Tap a card to open the full case study.',
      'pcar.prev': 'PREV', 'pcar.next': 'NEXT', 'pcar.playing': 'PLAYING',
      'contact.title': "Let's talk",
    },
    zh: {
      // landing/hero + left nav stay English in the Chinese version (per request)
      'hero.avail': 'Open to 2026 roles', 'hero.loc': 'London, UK',
      'hero.eyebrow': 'Portfolio · 2026', 'hero.sub': 'Product <b>×</b> AI Systems',
      'hero.scroll': 'Scroll Down',
      'mq.1': 'Product thinking', 'mq.2': 'AI engineering', 'mq.3': 'Systems that ship',
      'mq.4': 'From prompting to production', 'mq.5': 'DeFi · Live-streaming · Research', 'mq.6': 'Trilingual PM',
      'nav.home': 'Home', 'nav.about': 'About', 'nav.experience': 'Work', 'nav.side-projects': 'Projects', 'nav.contact': 'Contact',
      'about.title': '關於',
      'about.lead': '具備 <span class="em">4 年</span>跨職能經驗的產品經理,橫跨 Web3／DeFi 與 B2C 軟體,對完整產品開發生命週期有深入理解。擅長將產品端到端交付,並把 AI agent 導入正式生產流程。熟悉 Agile,並以使用者為中心、數據導向的思維為根基。',
      'about.edu': '學歷', 'about.langs': '語言', 'about.product': '產品經驗', 'about.ai': 'AI 工程經驗', 'about.tools': '工具經驗',
      'deg.msc': '管理與科技變革 碩士', 'deg.exch': '交換 · 社會科學', 'deg.ba': '文化創意產業經營 學士',
      'lang.native': '母語',
      'sk.roadmap': '產品 roadmap 規劃', 'sk.agile': '敏捷開發', 'sk.prd': '利害關係人管理', 'sk.research': '使用者研究', 'sk.abtest': 'A/B 測試', 'sk.stake': '跨團隊對齊',
      'sk.prompt': 'Prompt engineering',
      'work.title': '經歷',
      'work.lead': '橫跨區塊鏈、直播產業的產品交付。',
      'role.pm': '產品經理', 'role.epa': '產品經理助理',
      'when.intern': '2019.7 – 2020.8 · 實習', 'when.parttime': '2019.1 – 2019.4 · 兼職',
      'ctx.typus': 'Sui 區塊鏈上的去中心化衍生性金融協議。',
      'ctx.17live': '亞洲最大直播平台, 於新加坡交易所(SGX)掛牌上市。',
      'ctx.eslite': '現場活動執行, 台北。',
      'b.typus.lead': '於 Sui 上排名第一的 DeFi 選擇權 vault 協議端到端負責衍生性產品, 主導 roadmap 與產品開發流程 → <span class="m">30+ 項功能與迭代</span>',
      'b.typus.perp': '從 0→1 打造全新的槓桿交易產品 (永續合約), 上線首季衝到 <span class="m">約 $87M 交易量, 月增 +383%</span>, <span class="m">TLP (流動性池) 鎖倉 +217%</span>',
      'b.typus.rebrand': '統籌大型品牌改版, 與產品運營團隊協作重塑官網體驗 → <span class="m">網站不重複訪客 +15%</span>',
      'b.typus.metrics': '上線 SAFU 保本型結構商品 (本金受保護、同時賺取收益) → 帶動平台 <span class="m">月活躍用戶成長約 20 倍</span>',
      'b.17live.lead1': '以提升平台用戶滿意度為核心, 主導跨區產品體驗, 與台/日/東南亞的各區協作並向上對齊至 C-level',
      'b.17live.lead2': '聚焦提升直播內容的觀看體驗, 從用戶訪談、競品分析到 MVP 落地',
      'b.17live.clip': '打造短影音直播剪輯 (創建並分享精華) → <span class="m">內容產出 +10%</span>、首頁點擊率與分享率居冠',
      'b.17live.dash': '打造用戶回饋儀表板, 帶領 <span class="m">5 人跨職能團隊</span>整合並自動分類分散客訴 → <span class="m">問題處理速度 +15%</span>',
      'b.17live.avatar': '與直播特效團隊優化 V-Liver 虛擬人像 →<span class="m">有效觀看時長 +10%</span>',
      'b.17live.roadmap': '將跨區用戶反饋與客訴數據轉化為產品需求, 驅動 roadmap 優先排序 → <span class="m">用戶留存 +10%</span>、<span class="m">正面回饋 +30%</span>',
      'b.eslite1': '統籌 <span class="m">20+ 場現場活動</span>, 協調供應商、工作人員與參與者',
      'b.eslite2': '管理場地配置、時程與資源, 並提供文件與數據支援',
      'work.title2': '作品',
      'work.lead2': '17LIVE 的產品工作,加上親手與 AI agent 打造的 agentic-AI 實驗。點卡片可開啟完整案例。',
      'pcar.prev': '上一個', 'pcar.next': '下一個', 'pcar.playing': '播放中',
      'contact.title': '聯絡我',
    },
    ja: {
      'hero.avail': '2026年 就職活動中', 'hero.loc': 'イギリス・ロンドン',
      'hero.eyebrow': 'ポートフォリオ · 2026', 'hero.sub': 'プロダクト <b>×</b> AI システム',
      'hero.scroll': 'スクロール',
      'mq.1': 'プロダクト思考', 'mq.2': 'AI エンジニアリング', 'mq.3': 'リリースできるシステム',
      'mq.4': 'プロンプトから本番へ', 'mq.5': 'DeFi · ライブ配信 · リサーチ', 'mq.6': 'トリリンガル PM',
      'nav.home': 'ホーム', 'nav.about': 'プロフィール', 'nav.experience': '経歴', 'nav.side-projects': '制作', 'nav.contact': '連絡',
      'about.title': 'プロフィール',
      'about.lead': '<span class="em">4年</span>のクロスファンクショナルな経験を持つプロダクトマネージャー。Web3／DeFi と B2C ソフトウェアにまたがり、プロダクト開発ライフサイクル全体を深く理解。プロダクトをエンドツーエンドで出荷し、AI エージェントを本番ワークフローに組み込んだ実績を持つ。Agile に精通し、ユーザー中心・データドリブンな思考を軸とする。',
      'about.edu': '学歴', 'about.langs': '言語', 'about.product': 'プロダクト経験', 'about.ai': 'AI エンジニアリング経験', 'about.tools': 'ツール経験',
      'deg.msc': '経営・技術変革 修士', 'deg.exch': '交換留学 · 社会科学', 'deg.ba': '文化創造産業経営 学士',
      'lang.native': 'ネイティブ',
      'sk.roadmap': 'プロダクトロードマップ策定', 'sk.agile': 'アジャイル', 'sk.prd': 'ステークホルダー管理', 'sk.research': 'ユーザーリサーチ', 'sk.abtest': 'A/B テスト', 'sk.stake': 'ステークホルダー調整',
      'sk.prompt': 'プロンプトエンジニアリング',
      'work.title': '経歴',
      'work.lead': 'ブロックチェーン、ライブ配信にわたるプロダクト提供。',
      'role.pm': 'プロダクトマネージャー', 'role.epa': 'プロダクトマネージャーアシスタント',
      'when.intern': '2019.7 – 2020.8 · インターン', 'when.parttime': '2019.1 – 2019.4 · アルバイト',
      'ctx.typus': 'Sui ブロックチェーン上の分散型デリバティブ・プロトコル。',
      'ctx.17live': 'アジア最大のライブ配信プラットフォーム。シンガポール証券取引所(SGX)に上場。',
      'ctx.eslite': '現場イベント運営、台北。',
      'b.typus.lead': 'Sui で第1位の DeFi オプション Vault プロトコルにて、オンチェーンデリバティブをエンドツーエンドで担当し、ロードマップと開発プロセスを主導 → <span class="m">30以上の機能・改善</span>をリリース',
      'b.typus.perp': '新たなレバレッジ取引プロダクト(無期限契約)を0→1で構築し、ローンチ初四半期で <span class="m">約$87Mの取引量(前月比+383%)</span>、<span class="m">TLP(流動性プール)TVL +217%</span>',
      'b.typus.rebrand': '大規模ブランドリブランドを統括し、プロダクト運営チームと協働して公式サイト体験を刷新 → <span class="m">サイトのユニークビジター +15%</span>',
      'b.typus.metrics': 'SAFU(元本保護型の仕組み商品。元本を守りつつ利回りを得る)をローンチ → プラットフォームの <span class="m">月間アクティブユーザー約20倍</span>の成長に貢献',
      'b.17live.lead1': 'プラットフォームのユーザー満足度向上を軸に地域横断のプロダクト体験を担当し、台湾 / 日本 / 東南アジアの各地域と連携し C-level まで調整',
      'b.17live.lead2': 'ライブ配信コンテンツの視聴体験の向上に注力し、ユーザーインタビューと競合分析から MVP まで',
      'b.17live.clip': 'ライブ配信のショートクリップ(精華の作成・共有)を構築 → <span class="m">コンテンツ制作 +10%</span>、ホーム面のクリック率・シェア率トップ',
      'b.17live.dash': 'ユーザーフィードバックのダッシュボードを構築し、<span class="m">5名のクロスファンクショナルチーム</span>で分散した苦情を統合・自動分類 → <span class="m">問題解決スピード +15%</span>',
      'b.17live.avatar': 'ライブ配信エフェクトチームと V-Liver アバターを最適化、<span class="m">有効視聴時間 +10%</span>',
      'b.17live.roadmap': '地域横断のユーザーフィードバックと苦情データをプロダクト要件へ転換し、ロードマップ優先順位付けを主導 → <span class="m">継続率 +10%</span>、<span class="m">ポジティブ評価 +30%</span>',
      'b.eslite1': 'サプライヤー・スタッフ・参加者を横断して <span class="m">20以上の現場イベント</span>を運営',
      'b.eslite2': '会場レイアウト・スケジュール・リソースを管理し、ドキュメントとデータ面で支援',
      'work.title2': '制作',
      'work.lead2': '17LIVE でのプロダクト業務に加え、AI エージェントで自ら作った agentic-AI の実験群。カードをタップでケーススタディへ。',
      'pcar.prev': '前へ', 'pcar.next': '次へ', 'pcar.playing': '再生中',
      'contact.title': 'お問い合わせ',
    },
  };

  function detect() {
    try { const s = localStorage.getItem('lang'); if (s && LANGS.includes(s)) return s; } catch (e) {}
    const p = new URLSearchParams(location.search).get('lang');
    if (p && LANGS.includes(p)) return p;
    return 'en';
  }
  let cur = detect();
  window.currentLang = () => cur;
  window.caseT = (c, field) => (c && c.loc && c.loc[cur] && c.loc[cur][field] != null) ? c.loc[cur][field] : c[field];

  function apply(root) {
    const d = T[cur] || T.en;
    (root || document).querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.getAttribute('data-i18n'); if (d[k] != null) el.textContent = d[k];
    });
    (root || document).querySelectorAll('[data-i18n-html]').forEach(el => {
      const k = el.getAttribute('data-i18n-html'); if (d[k] != null) el.innerHTML = d[k];
    });
  }
  window.applyLang = apply;

  function setLang(l) {
    if (!LANGS.includes(l)) return;
    cur = l;
    try { localStorage.setItem('lang', l); } catch (e) {}
    document.documentElement.setAttribute('lang', l === 'zh' ? 'zh-Hant' : l);
    apply(document);
    document.querySelectorAll('.langtab button').forEach(b => b.classList.toggle('on', b.dataset.l === l));
    window.dispatchEvent(new CustomEvent('langchange', { detail: { lang: l } }));
  }
  window.setLang = setLang;

  // floating language tab (top-right, left of the dark/light toggle)
  function injectTab() {
    if (document.querySelector('.langtab')) return;
    const css = `.langtab{position:fixed;bottom:26px;right:28px;z-index:60;display:flex;gap:1px;
      background:var(--glass);border:1px solid var(--glass-line);border-radius:22px;padding:3px;
      box-shadow:0 8px 26px -12px rgba(0,0,0,.6);
      backdrop-filter:blur(16px) saturate(1.3);-webkit-backdrop-filter:blur(16px) saturate(1.3)}
      .langtab button{font-family:"Space Mono",monospace;font-size:.62rem;letter-spacing:.03em;
      background:none;border:none;color:var(--ink-soft);padding:5px 9px;border-radius:16px;cursor:pointer;transition:.25s;line-height:1}
      .langtab button:hover{color:var(--ink)}
      .langtab button.on{background:var(--accent);color:var(--paper)}
      @media(max-width:880px){.langtab{bottom:18px;right:16px}.langtab button{padding:5px 7px;font-size:.58rem}}`;
    const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    const tab = document.createElement('div'); tab.className = 'langtab';
    tab.innerHTML = [['en', 'EN'], ['zh', '中'], ['ja', '日']]
      .map(([l, t]) => `<button data-l="${l}"${l === cur ? ' class="on"' : ''}>${t}</button>`).join('');
    tab.querySelectorAll('button').forEach(b => b.onclick = () => setLang(b.dataset.l));
    document.body.appendChild(tab);
  }

  function init() {
    document.documentElement.setAttribute('lang', cur === 'zh' ? 'zh-Hant' : cur);
    injectTab();
    apply(document);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
