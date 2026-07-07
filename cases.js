// Single source of truth for the 17LIVE work case studies.
// The drawer (variant A), accordion (variant B) and standalone case page
// (variant C) all render from this object via renderCase().
//
// NOTE: spans wrapped in [[ ... ]] are CONFIRM markers, content Vivian still
// needs to verify / replace (the inferred Decisions / Execution). They render
// as a subtle dashed highlight so they are easy to spot and edit, and should
// be removed (brackets and all) once the real detail is filled in.

window.CASES = {
  uft: {
    tag: '17LIVE · Internal Tooling',
    title: 'User Feedback Tracking Dashboard',
    summary: 'An internal dashboard unifying scattered user feedback, built with regional CS teams',
    metric: 'Problem resolution +15%',
    tags: ['Internal Tooling', 'Dashboard', 'Data Analytics'],
    loc: {
      zh: { title: '用戶回饋追蹤儀表板', summary: '與各區客服團隊協作, 整合分散用戶回饋的內部儀表板', tags: ['內部工具', '儀表板', '數據分析'],
        tag: '17LIVE · 內部工具', metric: '問題解決 +15%', stack: ['Superset', '數據分析', 'SQL', 'Zendesk', '跨職能(客服 / PM / 數據)'], note: '儀表板與規格為真實的內部產物,所有數字與識別資訊皆已模糊處理以維護保密。',
        sections: [
          { k: '背景', b: '17LIVE 的用戶回饋分散在不同系統:客服工單、雙平台評論、滿意度調查問卷。客服團隊與 PM 沒有統一視角,跨團隊交接也慢。' },
          { k: '問題', b: '蒐集與分析回饋仰賴人工、速度慢,問題太晚浮現、修復也被拖延。' },
          { k: '決策', b: '選擇把各來源整合進可查詢的資料庫與儀表板(以公司既有的 Superset 接 BigQuery),而非各團隊各自匯出報表,用單一真實來源減少重工。取捨:前期資料整合成本 vs 長期人工報表。' },
          { k: '執行', b: '向 PM 提案後,與台灣、日本、東南亞的客服團隊合作整合各地的回饋資料,並協調 DE/DS 建立資料 pipeline,帶領 5 人團隊交付儀表板。' },
          { k: '成效', b: '問題解決速度 +15%(直接)。同期整體 VOC(Voice of Customer,顧客之聲)正面 +30% / 負面 −10%(間接,期間有其他專案並行)。團隊能快速定位主要痛點。' },
          { k: '學習', b: '整合來自不同系統、格式不一的資料,並做跨職能協調。可延伸的優化方向:新功能回饋的自動告警,以及回饋翻譯。' },
        ] },
      ja: { title: 'ユーザーフィードバック ダッシュボード', summary: '各地域の CS チームと取り組んだ、散在するユーザーフィードバックを統合する社内ダッシュボード', tags: ['社内ツール', 'ダッシュボード', 'データ分析'],
        tag: '17LIVE · 社内ツール', metric: '問題解決 +15%', stack: ['Superset', 'データ分析', 'SQL', 'Zendesk', '部門横断(CS / PM / データ)'], note: 'ダッシュボードと仕様は実際の社内成果物で、機密保持のため数値と識別情報はぼかしています。',
        sections: [
          { k: '背景', b: '17LIVE のユーザーフィードバックは別々のシステム(CS チケット、両ストアのレビュー、満足度アンケート)に散在。CS と PM に統一ビューがなく、部門間の引き継ぎも遅かった。' },
          { k: '課題', b: 'フィードバックの収集と分析が手作業で遅く、問題の表面化も修正も後手に回っていた。' },
          { k: '意思決定', b: '各チームが個別にレポートを出すのではなく、ソースを一つのクエリ可能な DB とダッシュボード(社内既存の Superset + BigQuery)に統合し、単一の信頼できる情報源で重複作業を削減。トレードオフ:初期のデータ統合コスト vs 継続的な手作業レポート。' },
          { k: '実行', b: 'PM に提案し、台湾・日本・東南アジアのカスタマーサポートチームと連携して各地域のフィードバックデータを統合、DE/DS と調整してパイプラインを構築し、5名チームを率いてダッシュボードをリリースした。' },
          { k: '成果', b: '問題解決スピード +15%(直接)。同期間に全体 VOC(Voice of Customer、顧客の声)はポジティブ +30% / ネガティブ −10%(間接、並行施策あり)。チームは主要な痛点を素早く特定できた。' },
          { k: '学び', b: '形式の異なる複数ソースのデータ統合と部門横断の調整。今後の改善アイデア:新機能フィードバックの自動アラートと、フィードバックの翻訳。' },
        ] },
    },
    scene: 'dashboard',
    stack: ['Superset', 'Data Analytics', 'SQL', 'Zendesk', 'Cross-functional (CS / PM / DE-DS)'],
    cover: 'assets/cases/uft-cover2.jpg',
    images: [
      { src: 'assets/cases/uft-dashboard.jpg', kind: 'redacted', cap: { en: 'Live Superset dashboard', zh: '實際 Superset 儀表板', ja: '実際の Superset ダッシュボード' } },
      { src: 'assets/cases/uft-spec.jpg', kind: 'redacted', cap: { en: 'Spec / planning board (redacted)', zh: '規格與規劃看板(已去識別化)', ja: '仕様・設計ボード(非表示)' } },
    ],
    sections: [
      { k: 'Context', b: 'User feedback at 17LIVE lived across separate systems: CS tickets, dual-platform (App Store and Play) reviews, and satisfaction surveys. CS and PMs had no single view, and cross-team handoffs were slow.' },
      { k: 'Problem', b: 'Collecting and analysing feedback was manual and slow, so issues surfaced late and fixes were delayed.' },
      { k: 'Decisions', b: 'Chose to integrate the sources into one queryable database and dashboard (on Superset, the company-standard analytics tool, over BigQuery), rather than each team exporting its own reports, a single source of truth that cut duplicated work. Tradeoff: upfront data-integration effort against ongoing manual reporting.' },
      { k: 'Execution', b: 'Pitched the dashboard to the PM, then partnered with the customer-support teams in Taiwan, Japan, and Southeast Asia to consolidate feedback data from each region, and coordinated DE/DS to build the pipeline, leading a 5-person team to ship it.' },
      { k: 'Impact', b: 'Problem-resolution speed +15% (direct). Over the same period overall VOC (Voice of Customer) moved +30% positive / -10% negative (indirect, other initiatives ran in parallel). Teams could pinpoint top pain points quickly.' },
      { k: 'Learning', b: 'Integrating data from systems in different formats, and coordinating across functions. Future optimisation ideas: automated alerts for feedback on new features, and feedback translation.' },
    ],
    note: 'The dashboard and spec are real internal artifacts, shown with all figures and identifiers blurred for confidentiality.',
  },

  sec90: {
    tag: '17LIVE · New Feature',
    title: '90-Second Clip',
    summary: 'Rode the short-video trend, layering a 90s clip onto the existing Archive',
    metric: 'Content +10% · top homepage click & share rates',
    tags: ['New Feature', 'Short Video', 'A/B Testing'],
    loc: {
      zh: { title: '90 秒短影音', summary: '順應短影音趨勢, 在既有典藏功能上加層 90 秒短片', tags: ['新功能', '短影音', 'A/B 測試'],
        tag: '17LIVE · 新功能', metric: '內容 +10% · 首頁點擊與分享率最高', stack: ['功能定義', '目標設定', 'A/B 量測', '建構於 Archive 之上'],
        impactTable: [
          ['內容 +10%', '每日離線內容 +10%;其中 10% 為首次離線創作者', 'win'],
          ['(互動)', '首頁區塊點擊率最高;在離線內容中分享率最高', 'win'],
          ['註冊 0→1,500', '透過分享的安裝 / 註冊率低於其他來源', 'miss'],
          ['留存 +5%', '無顯著變化', 'miss'],
        ],
        sections: [
          { k: '背景', b: '短影音正夯,而 17LIVE 已有「典藏」功能,讓主播錄製並保存直播。' },
          { k: '問題', b: '這個功能得同時顧到三個指標:用戶留存(D0–D7)、靠社群分享帶來的新註冊,以及短片和離線內容的產出量。' },
          { k: '決策', b: '選擇建在「典藏」之上、而不是另外建一條全新的 pipeline:重用既有的錄製素材,工程成本更低、上線更快,也能直接驗證「可分享的精華片段能不能增長粉絲、帶動新安裝」這個假設。' },
          { k: '執行', b: '事前設定明確的成功指標:留存 +5%、註冊 0→1,500、內容 +5%。我負責定義這些指標,並與工程一起把 MVP 拆成五大功能:編輯(剪出最長 90 秒短片,含封面、標題與隱私設定)、發布(個人化首頁區塊並做 A/B 測試)、分享(串接社群)、通知(互動提醒)與權限(主播控制),再協調開發與上線。' },
          { k: '成效', b: 'TARGETS_VS_ACTUAL' },
          { k: '學習', b: '90 秒短片真正的價值是帶動內容產出和互動,而不是拉進新用戶,因此團隊把它重新定位為內容與互動的工具,而非獲客管道。' },
        ] },
      ja: { title: '90秒クリップ', summary: 'ショート動画のトレンドに乗り、既存の Archive に90秒クリップを追加', tags: ['新機能', 'ショート動画', 'A/Bテスト'],
        tag: '17LIVE · 新機能', metric: 'コンテンツ +10% · ホーム画面のクリック率・シェア率が最高', stack: ['機能定義', '目標設定', 'A/B 計測', 'Archive 上に構築'],
        impactTable: [
          ['コンテンツ +10%', '日次オフラインコンテンツ +10%;うち10%が初オフライン制作者', 'win'],
          ['(エンゲージ)', 'ホーム画面区画のクリック率が最高;オフラインコンテンツの中でシェア率が最高', 'win'],
          ['登録 0→1,500', 'シェア経由のインストール / 登録率は他チャネルより低い', 'miss'],
          ['継続率 +5%', '有意な変化なし', 'miss'],
        ],
        sections: [
          { k: '背景', b: 'ショート動画が急成長する中、17LIVE には配信を録画・保存できる Archive 機能が既にあった。' },
          { k: '課題', b: 'この機能は3つの数字を同時に動かす必要があった:D0–D7 継続率、SNS シェア経由の新規登録、クリップ / オフラインコンテンツの生成。' },
          { k: '意思決定', b: '新規パイプラインではなく Archive の上に構築:既存の録画素材を再利用して開発コストを抑え、早くリリースでき、「シェア可能なハイライトがファンを増やし新規インストールを促す」という仮説を直接検証できた。' },
          { k: '実行', b: '事前に明確な成功指標を設定:継続率 +5%、登録 0→1,500、コンテンツ +5%。これらの指標を定義し、エンジニアと MVP を5つのコア機能に整理した:編集(カバー・タイトル・公開範囲付きで最大90秒のクリップを作成)、投稿(A/Bテスト付きのパーソナライズされたホーム区画)、シェア(SNS連携)、通知(エンゲージメント通知)、権限(配信者コントロール)。その上で開発とローンチを調整した。' },
          { k: '成果', b: 'TARGETS_VS_ACTUAL' },
          { k: '学び', b: '90秒クリップの本当の価値は新規ユーザー獲得ではなく、コンテンツ産出とエンゲージメントを促す点にあり、チームはこの機能を獲得チャネルではなくコンテンツ・エンゲージメントのツールとして位置づけ直した。' },
        ] },
    },
    scene: 'clip',
    stack: ['Feature definition', 'Goal setting', 'A/B measurement', 'Built on Archive'],
    cover: 'assets/cases/sec90-cover.jpg',
    link: 'https://17mediahelp.zendesk.com/hc/en-us/articles/31074123595545-Stream-Clips',
    linkText: { en: 'See the feature on 17LIVE', zh: '在 17LIVE 看此功能', ja: '17LIVE で機能を見る' },
    images: [
      { src: 'assets/cases/sec90-2.png', kind: 'mock', cap: { en: 'In-app mockup', zh: 'App 內畫面', ja: 'アプリ内モックアップ' } },
      { src: 'assets/cases/sec90-3.png', kind: 'mock', cap: { en: 'In-app mockup', zh: 'App 內畫面', ja: 'アプリ内モックアップ' } },
    ],
    sections: [
      { k: 'Context', b: 'Short-video was surging, and 17LIVE already had an Archive feature that let streamers record and save their live sessions.' },
      { k: 'Problem', b: 'The feature had to move three numbers at once: D0-D7 retention, new registrations via social sharing, and clip / offline-content creation.' },
      { k: 'Decisions', b: 'Built on top of Archive rather than a net-new pipeline: reusing existing recorded assets meant lower engineering cost and a faster ship, and it let us test the hypothesis directly, that shareable highlights would grow fans and drive new installs.' },
      { k: 'Execution', b: 'Set explicit success metrics up front: retention +5%, registrations 0 to 1,500, content +5%. Defined these metrics and, with engineering, scoped the MVP into five core capabilities: edit (clips up to 90s with cover, title and privacy), post (a personalised homepage section with A/B testing), share (social integration), notify (engagement alerts) and permission (streamer controls). I then coordinated the build and launch.' },
      { k: 'Impact', b: 'TARGETS_VS_ACTUAL' }, // rendered as a table, see renderCase()
      { k: 'Learning', b: '90s clips proved to be a lever for content generation and engagement rather than an acquisition channel, so the team repositioned the feature as a content-and-engagement tool instead of a growth channel.' },
    ],
    impactTable: [
      ['Content +10%', 'Offline content +10% daily; 10% were first-time offline creators', 'win'],
      ['(engagement)', 'Highest section click-rate on the homepage; highest share rate among offline content', 'win'],
      ['Registrations 0 to 1,500', 'Install / register rate via sharing below other sources', 'miss'],
      ['Retention +5%', 'No significant change', 'miss'],
    ],
  },

  avatar: {
    tag: '17LIVE · Product',
    title: 'Avatar',
    summary: 'A product effort around the V-Liver virtual avatar feature, with the livestream-effects team',
    metric: 'Complaints 30/mo → 0 · effective view time +10%',
    tags: ['Cross-functional', 'V-Liver Optimization', 'Reversible Toggle'],
    loc: {
      zh: { title: '虛擬人像', summary: '與直播特效團隊協作, 圍繞 V-Liver 虛擬人像功能的產品優化', tags: ['跨職能', 'V-Liver 優化', '可逆開關'],
        tag: '17LIVE · 產品', metric: '客訴 30/月 → 0 · 有效觀看時長 +10%', stack: ['方案評估', '取捨決策', '與 PM 跨職能協作'],
        sections: [
          { k: '背景', b: '使用者完成虛擬人像後,常對成果不滿意,卻沒有任何移除或關閉的途徑。' },
          { k: '問題', b: '每月約 30 件相關客訴持續累積,且缺乏關閉虛擬人像的機制,負面回饋難以收斂。' },
          { k: '決策', b: '與 PM、工程師共同評估後,採用可逆的開 / 關切換作為解法,而非直接下架功能或強制全體啟用。考量在於工程成本最低、決策可回復,且不影響已投入製作虛擬人像的使用者。' },
          { k: '執行', b: '與 PM 共同評估方案,並協調切換功能的開發與上線。同時與直播特效團隊協作,因應日本市場 V-Liver(虛擬主播)的需求優化虛擬人像,並整合進核心 App 體驗。' },
          { k: '成效', b: '相關客訴由每月 30 件收斂至 0,部分使用者主動來信致謝,構成明確的質性訊號。後續針對日本市場的 V-Liver 優化,帶動有效觀看時長 +10%。' },
          { k: '學習', b: '一個輕量且可回復的控制項,即可徹底化解長期累積的 UX 客訴。克制範圍往往勝過大規模改動。' },
        ] },
      ja: { title: 'アバター', summary: 'ライブ配信エフェクトチームと取り組んだ、V-Liver アバター機能のプロダクト改善', tags: ['部門横断', 'V-Liver 最適化', '可逆トグル'],
        tag: '17LIVE · プロダクト', metric: 'クレーム 30/月 → 0 · 有効視聴時間 +10%', stack: ['選択肢評価', 'トレードオフ判断', 'PM との部門横断'],
        sections: [
          { k: '背景', b: 'ユーザーはアバターを作るものの結果に不満なことが多く、削除する手段がなかった。' },
          { k: '課題', b: '月に約30件のクレーム。アバターをオフにする選択肢がなく、ネガティブな声が届き続けた。' },
          { k: '意思決定', b: 'PM・エンジニアとともに、機能の強制削除や全員強制ではなく、可逆のオン / オフボタンというワークアラウンドを選択。この方法を採った理由:開発コストが最小で可逆、そしてアバターに労力をかけたユーザーを罰しない。' },
          { k: '実行', b: 'PM と選択肢を評価し、トグル機能の開発・ローンチを調整。並行して、ライブ配信エフェクトチームと連携し、日本市場の V-Liver(バーチャル配信者)需要に向けてアバターを最適化し、コアなアプリ体験に統合した。' },
          { k: '成果', b: 'クレームは月30件から0に。一部のユーザーが自発的に感謝のメールを送ってきた、強い定性的シグナル。その後の日本市場向け V-Liver 最適化で有効視聴時間 +10%。' },
          { k: '学び', b: '小さく可逆なコントロールが、長年の UX クレームを完全に解消できる。大きな開発よりスコープの規律。' },
        ] },
    },
    scene: 'vtuber',
    stack: ['Option evaluation', 'Tradeoff decision', 'Cross-functional with PM'],
    cover: 'assets/cases/avatar-cover2.jpg',
    images: [
      { src: 'assets/cases/avatar-vstream.png', kind: 'mock', cap: { en: 'V-Stream avatar', zh: 'V-Stream 虛擬人像', ja: 'V-Stream アバター' } },
      { src: 'assets/cases/avatar-create.png', kind: 'mock', cap: { en: 'Avatar creation', zh: '虛擬人像建立方式', ja: 'アバター作成' } },
    ],
    link: 'https://17mediahelp.zendesk.com/hc/en-us/articles/31079422567321-V-LIVER',
    linkText: { en: 'See the feature on 17LIVE', zh: '在 17LIVE 看此功能', ja: '17LIVE で機能を見る' },
    sections: [
      { k: 'Context', b: 'Users created virtual avatars, often disliked the result, and had no way to remove them.' },
      { k: 'Problem', b: 'About 30 complaints a month, with no way to turn the avatar off, so negative feedback kept coming in.' },
      { k: 'Decisions', b: 'With the PM and engineers, chose a reversible on/off toggle as a workaround, rather than hard-deleting the feature or forcing it on everyone. Why this approach: lowest engineering cost, reversible, and it does not penalise users who had invested in their avatar.' },
      { k: 'Execution', b: 'Evaluated the options with the PM and coordinated the build and launch of the toggle. In parallel, partnered with the livestream-effects team to optimise the avatar for V-Liver (virtual-streamer) demand in the Japan market, integrating it into the core app experience.' },
      { k: 'Impact', b: 'Complaints dropped from 30 a month to 0. Some users proactively emailed to say thank you, a strong qualitative signal. The follow-on V-Liver optimization for the Japan market lifted effective view time +10%.' },
      { k: 'Learning', b: 'A small, reversible control can fully resolve a long-standing UX complaint. Scope discipline over a bigger build.' },
    ],
  },

  pipeline: {
    tag: 'Side Project · Agentic AI',
    title: 'Creator-Persona Content Engine',
    summary: 'An agentic system that models creator personas to auto-generate similar platform posts',
    metric: 'In progress · self-built with Claude Code',
    tags: ['Agentic AI', 'Content Automation', 'Persona Modeling'],
    loc: {
      zh: { title: '創作者人設內容引擎', summary: '從成功創作者建立角色模型, 自動生成相似的平台貼文', tags: ['Agentic AI', '內容自動化', '人設建模'],
        tag: 'Side Project · Agentic AI', metric: '進行中 · 以 Claude Code 自建', stack: ['Claude Code', '多 LLM 協作', '人設建模', '內容生成', 'Agentic Python'],
        sections: [
          { k: '背景', b: '在 Threads、Instagram 持續穩定發文很耗神,而通用 AI 生成的內容沒有「人味」,讀起來不像值得追蹤的人。真正會成長的帳號,都有可辨識的語氣與一套可複製的內容結構。' },
          { k: '問題', b: '要產出讀起來像某位成功創作者、而非通用 AI 的貼文,並一路做到「排程自動發文」,而不是停在草稿。' },
          { k: '決策', b: '先把語氣建模,再開始寫。定期爬取數百篇成功 KOL 的貼文,搭配幾支影片,把每位創作者提煉成可重用的人設:語氣、開場鉤子與內容架構。整套做成 agentic、多階段流程(擷取、建模、撰寫、排程、發布),每一步都跑在最合適的工具上。' },
          { k: '執行', b: '以 Claude Code 自建。擷取層定期拉進數百篇 KOL 貼文與參考影片;建模階段把每位創作者轉成人設;生成階段再依該人設為各平台產出貼文。多 LLM 協作,每階段依成本與品質挑模型。' },
          { k: '成效', b: '進行中。擷取、人設建模到依語氣產出貼文已能端到端運作;發布與排程的全自動化是下一步。' },
          { k: '學習', b: '語氣本身就是產品。前期投資在人設模型,勝過每篇各自下提示,也把零散的生成變成一套能自己發文的系統。' },
        ] },
      ja: { title: 'クリエイターペルソナ・コンテンツエンジン', summary: 'クリエイターのキャラクターモデルから、似た語り口の投稿を自動生成する agentic システム', tags: ['Agentic AI', 'コンテンツ自動化', 'ペルソナモデリング'],
        tag: 'Side Project · Agentic AI', metric: '進行中 · Claude Code で自作', stack: ['Claude Code', 'マルチ LLM オーケストレーション', 'ペルソナモデリング', 'コンテンツ生成', 'Agentic Python'],
        sections: [
          { k: '背景', b: 'Threads や Instagram で安定して投稿し続けるのは重労働で、汎用 AI の文章は「らしさ」がなく、フォローする価値のある人物には聞こえない。伸びるアカウントには、見分けのつく語り口と再現可能な構成がある。' },
          { k: '課題', b: '汎用 AI ではなく、実在の成功クリエイターのように読める投稿を生成し、下書きで止めず「スケジュール自動投稿」まで到達する。' },
          { k: '意思決定', b: '何かを書く前に、まず語り口をモデル化する。成功 KOL の投稿を数百件、定期的にクロールし、参考動画も取り込んで、各クリエイターを再利用可能なペルソナ(語り口・フック・構成)に蒸留。全体を agentic で多段の流れ(取得、モデル化、執筆、スケジュール、投稿)にし、各ステップを最適なツールで動かす。' },
          { k: '実行', b: 'Claude Code で自作。取得層が数百件の KOL 投稿と参考動画を定期的に取り込み、モデル化段が各クリエイターをペルソナ化し、生成段がそのペルソナで各プラットフォーム向けに執筆。マルチ LLM で、段ごとにコストと品質でモデルを選ぶ。' },
          { k: '成果', b: '進行中。取得・ペルソナ化・語り口に沿った執筆まではエンドツーエンドで動作する。投稿とスケジュールの完全自動化が次の段階。' },
          { k: '学び', b: '語り口こそがプロダクト。先にペルソナモデルへ投資する方が、投稿ごとのプロンプトより強く、散発的な生成を自走できる投稿システムに変える。' },
        ] },
    },
    scene: 'pipeline',
    stack: ['Claude Code', 'Multi-LLM orchestration', 'Persona modeling', 'Content generation', 'Agentic Python'],
    cover: 'assets/cases/pipeline-cover2.jpg?v=2',
    images: ['assets/cases/pipeline-1.jpg?v=2'],
    sections: [
      { k: 'Context', b: 'Posting consistently across Threads and Instagram is a grind, and generic AI copy never sounds like anyone worth following. The accounts that grow have a recognisable voice and a repeatable content structure.' },
      { k: 'Problem', b: 'Produce posts that read like a proven creator rather than generic AI, and carry them all the way to scheduled auto-posting instead of stopping at drafts.' },
      { k: 'Decisions', b: 'Model the voice before writing anything. Regularly crawl hundreds of posts plus a handful of videos from successful KOLs, then distil each creator into a reusable persona: their tone, hooks, and structure. Build it as an agentic, multi-stage flow (ingest, model, draft, schedule, post) so every step runs on the tool that fits it.' },
      { k: 'Execution', b: 'Self-built with Claude Code. The ingestion layer pulls hundreds of KOL posts on a schedule alongside reference videos; a modeling stage turns each creator into a persona; a generation stage drafts in that persona for each platform. Multi-LLM, with the model per stage chosen for cost and quality.' },
      { k: 'Impact', b: 'In progress. Ingestion, persona modeling, and on-voice drafting run end to end; auto-posting and scheduling to Threads and Instagram are next.' },
      { k: 'Learning', b: 'Voice is the product. Investing in persona models up front beats one-off prompting and turns scattered generation into a system that can post on its own.' },
    ],
  },

  dissertation: {
    tag: 'MSc Dissertation · Research Tooling',
    title: 'From PRD to Implementation',
    summary: 'MSc dissertation: how AI reshapes coordination work in the handoff from PRD to implementation',
    metric: 'Self-built with Claude Code · multi-role synthesis',
    link: 'https://giraffe2257-tech.github.io/prd-interview-previews/',
    tags: ['PRD', 'Product Research', 'Development Workflow'],
    loc: {
      zh: { title: '從 PRD 到實作', summary: '碩士論文:AI 如何重塑「從 PRD 到實作」交接中的協作', tags: ['PRD', '產品研究', '開發流程'],
        tag: '碩士論文 · 研究工具', metric: '以 Claude Code 自建 · 多角色綜整', stack: ['Claude Code', '質性研究', '轉錄管線', '資訊架構'],
        sections: [
          { k: '背景', b: '我的碩士論文研究真實的產品工作流程與跨職能協作,取材自對 PM、設計師、工程師的深度訪談,包含 TikTok 等公司的受訪者。研究問題:PRD 如何在 PM／設計／工程之間轉譯產品意圖,AI 又如何重塑這個角色?(聚焦 PM／工程／設計三方,以實際產品流程為範圍)' },
          { k: '問題', b: '原始錄音與逐字稿難以跨角色比較,模式與跨職能痛點因而被埋沒。' },
          { k: '決策', b: '不用試算表或文件,而是自建一個互動式平台,讓發現對應到角色與工作流程。設計了「訪談 → 逐字稿 → 摘要 → 發現」的管線。' },
          { k: '執行', b: '以 Claude Code 自建:一條轉錄錄音、清理逐字稿、萃取摘要,並把標註角色的發現發布到 workbook 網站的管線。目前完成 3 場深度訪談(一位產品經理、一位 mobile iOS 工程師、一位後端工程師),並視文獻需求評估是否補充訪談以支撐學術論證。' },
          { k: '成效', b: '進行中(論文 2026 年 9 月完成)。互動式 workbook 本身已是有用的產物:讓研究有了可導覽、對應角色的形式,在與指導教授討論時能清楚走過目前進度與階段發現,取代零散的逐字稿。' },
          { k: '學習', b: '打造這套工具反過來磨利了研究本身,也成為 AI 輔助產品開發的端到端示範。' },
        ] },
      ja: { title: 'PRD から実装へ', summary: '修士論文:AI が「PRD から実装」への協働をどう変えるか', tags: ['PRD', 'プロダクト研究', '開発フロー'],
        tag: '修士論文 · リサーチツール', metric: 'Claude Code で自作 · マルチロール統合', stack: ['Claude Code', '定性研究', '文字起こしパイプライン', '情報設計'],
        sections: [
          { k: '背景', b: '修士論文では、PM・デザイナー・エンジニア(TikTok など含む)への詳細なインタビューから、実際のプロダクトワークフローと部門横断のコラボレーションを研究。研究課題:PRD が PM／デザイン／エンジニアリング間でプロダクトの意図をどう翻訳し、AI がその役割をどう変えるか(PM／エンジニア／デザインの三者に焦点、実際のプロダクトフローを範囲とする)。' },
          { k: '課題', b: '生の録音や文字起こしは役割を超えて比較しづらく、パターンや部門横断の痛点が埋もれてしまう。' },
          { k: '意思決定', b: 'スプレッドシートやドキュメントではなく、発見が役割とワークフローに対応するカスタムのインタラクティブプラットフォームを構築。「インタビュー → 文字起こし → 要約 → 発見」のパイプラインを設計。' },
          { k: '実行', b: 'Claude Code で自作:録音を文字起こしし、トランスクリプトを整え、要約を抽出し、役割タグ付きの発見を workbook サイトへ公開するパイプライン。現時点で3件の詳細インタビュー(プロダクトマネージャー1名、モバイル iOS エンジニア1名、バックエンドエンジニア1名)を実施し、学術的な主張を支えるのに十分な詳細が必要であれば追加を検討。' },
          { k: '成果', b: '進行中(論文は2026年9月完成)。インタラクティブな workbook 自体が有用な成果物となり、研究にナビゲート可能で役割に対応した形を与え、指導教員とのディスカッションで進捗と現時点の発見を明確にたどれる。散在するトランスクリプトの代わりになる。' },
          { k: '学び', b: 'ツールを作ること自体がリサーチを鋭くし、AI 支援によるプロダクト構築のエンドツーエンドの実証にもなった。' },
        ] },
    },
    stack: ['Claude Code', 'Qualitative research', 'Transcription pipeline', 'Information architecture'],
    cover: 'assets/cases/dissertation-cover2.jpg',
    images: ['assets/cases/dissertation-1.jpg'],
    sections: [
      { k: 'Context', b: 'My MSc dissertation studies real product workflows and cross-functional collaboration, drawn from in-depth interviews with PMs, designers and engineers, including people at companies like TikTok. The research question: how the PRD translates product intent across PM, design and engineering, and how AI is reshaping that role (scoped to the PM / engineering / design triad, framed around real product workflows).' },
      { k: 'Problem', b: 'Raw recordings and transcripts are hard to compare across roles, so patterns and cross-functional pain points stay buried.' },
      { k: 'Decisions', b: 'Built a custom interactive platform instead of spreadsheets or docs, so findings map onto roles and workflows. Designed an interview to transcript to summary to findings pipeline.' },
      { k: 'Execution', b: 'Self-built with Claude Code: a pipeline that transcribes recordings, cleans transcripts, extracts summaries, and publishes role-tagged findings to a workbook site. Three in-depth interviews to date (a product manager, a mobile iOS engineer, and a backend engineer), with more added if the literature calls for the detail to support the academic argument.' },
      { k: 'Impact', b: 'In progress (dissertation completes Sept 2026). The interactive workbook already pays off as a working artifact: it gives the research a navigable, role-mapped form that makes progress and findings-so-far easy to walk through with my supervisor, instead of scattered transcripts.' },
      { k: 'Learning', b: 'Building the tooling sharpened the research itself, and it doubled as an end-to-end demonstration of AI-assisted product building.' },
    ],
  },

  rental: {
    tag: 'Side Project · Built with AI',
    title: 'Hearth · Rental Finder',
    summary: 'A self-built rental search site over multiple platforms, tuned to student needs',
    metric: 'A personal tool that out-filtered the big portals',
    link: 'https://musereed.github.io/london-flats/',
    scene: 'mosaic',
    tags: ['Built with AI', 'AI Agents', 'Competitive Analysis'],
    loc: {
      zh: { title: 'Hearth · Rental Finder', summary: '自建租屋搜尋網站, 整合各平台房源並貼合留學生需求', tags: ['AI 打造', 'AI Agents', '競品分析'],
        tag: 'Side Project · AI 打造', metric: '比大型平台更會篩選的個人工具', stack: ['Claude Code', 'AI Agents', '房源資料管線'],
        sections: [
          { k: '背景', b: '在英國找房時,主流平台塞給我大量不合適的房源,而它們的篩選器太粗,無法表達我真正想要的條件。' },
          { k: '問題', b: '現成租屋網站無法依我在意的條件篩選,每次搜尋都留下一堆不相關的房源要手動整理。' },
          { k: '決策', b: '與其繼續跟平台的篩選器硬碰,不如在它們的房源之上自建 agent 驅動的過濾器,彙整六大租屋平台的房源,把我真正的優先條件(通勤、預算、格局、地雷)編成大平台沒有的規則。' },
          { k: '執行', b: '親手用 Claude Code 打造:從主要平台蒐集房源、依我的條件評分,只浮現符合的。目前仍在測試與宣傳階段。' },
          { k: '成效', b: '初步已能把雜訊收斂成一份精簡且相關的清單,比滑平台更快找到落腳處,完整成效數據仍在蒐集中。' },
          { k: '學習', b: '當產品無法表達你真正的意圖,在它的資料之上加一層薄薄的 agent,就能勝過產品本身。把個人痛點變成出貨工具的好練習。' },
        ] },
      ja: { title: 'Hearth · Rental Finder', summary: '複数プラットフォームの物件を統合し、留学生のニーズに合わせた自作の賃貸検索サイト', tags: ['AI 製', 'AIエージェント', '競合分析'],
        tag: 'Side Project · AI 製', metric: '大手ポータルより的確に絞る個人ツール', stack: ['Claude Code', 'AIエージェント', '物件データパイプライン'],
        sections: [
          { k: '背景', b: '英国で物件を探す中、主流ポータルは合わない物件を大量に表示し、フィルターは粗すぎて本当に欲しい条件を表現できなかった。' },
          { k: '課題', b: '既製の賃貸サイトは自分にとって重要な条件で絞り込めず、検索のたびに無関係な物件を手作業で仕分けする羽目に。' },
          { k: '意思決定', b: 'ポータルのフィルターと戦い続けるのではなく、6大賃貸プラットフォームから集めた物件データの上に自作のエージェント駆動フィルターを構築し、本当の優先条件(通勤、予算、間取り、NG 条件)を大手にはないルールとして表現。' },
          { k: '実行', b: 'Claude Code で自作:主要プラットフォームから物件を収集し、自分の条件でスコアリングして合致したものだけを表示。現在はテストとプロモーションの段階。' },
          { k: '成果', b: '初期段階でもノイズを短く関連性の高いショートリストに絞れており、ポータルをスクロールするより速く住まいを見つけられた。具体的な成果数値は収集中。' },
          { k: '学び', b: 'プロダクトが本当の意図を表現できないとき、そのデータの上の薄いエージェント層がプロダクト自体に勝てる。個人の痛みを出荷可能なツールに変える良い実践。' },
        ] },
    },
    stack: ['Claude Code', 'AI agents', 'Listing data pipeline'],
    cover: 'assets/cases/rental-cover2.jpg',
    images: ['assets/cases/rental-1.jpg'],
    sections: [
      { k: 'Context', b: 'Hunting for a flat in the UK, the mainstream portals flooded me with listings that did not fit, and their filters were too blunt to express what I actually wanted.' },
      { k: 'Problem', b: 'Off-the-shelf rental sites could not filter on the criteria that mattered to me, so every search left a pile of irrelevant listings to sort by hand.' },
      { k: 'Decisions', b: 'Rather than keep fighting the portals own filters, built my own agent-driven filter over listings drawn from six major UK rental platforms, encoding my real priorities (commute, budget, layout, deal-breakers) as rules the big sites do not offer.' },
      { k: 'Execution', b: 'Built hands-on with Claude Code: gathered listings from the major UK portals and scored them against my criteria to surface only the matches. The tool is currently in a testing and promotion phase.' },
      { k: 'Impact', b: 'Early use already cut the noise into a short, relevant shortlist and helped me find a place faster than scrolling the portals; fuller results are still being gathered.' },
      { k: 'Learning', b: 'When a product cannot express your real intent, a thin agent layer over its data can beat the product itself. Good practice in turning a personal pain into a shipped tool.' },
    ],
  },

  course: {
    tag: 'Side Project · Claude Code Workshop',
    title: 'Agentic-Coding Course',
    summary: 'A hands-on Claude Code course built as a zero-to-one on-ramp for complete beginners',
    metric: '3 cohorts run · hands-on workshop',
    link: 'workshop/index.html',
    tags: ['Claude Code', 'Workshop', 'AI Certificate'],
    loc: {
      zh: { title: 'Agentic 編程課程', summary: '零基礎入門的 Claude Code 實作課程', tags: ['Claude Code', '工作坊', 'AI 證書'],
        tag: 'Side Project · Claude Code 工作坊', metric: '已辦 3 場 · 實作工作坊', stack: ['Claude Code', 'Agentic 工具', 'AI Agents 證書'],
        sections: [
          { k: '背景', b: '平常關注科技社群、也自己修 AI 相關課程,把學到的分享給身邊人後,發現資訊落差比想像中大。' },
          { k: '問題', b: 'AI 工具的入門門檻比想像中高,文件往往無法建立操作信心;非工程師背景的學員尤其需要有結構、能動手做的引導路徑。' },
          { k: '決策', b: '把學到的東西整理成一堂三小時的實作工作坊,以 KCL 科技管理碩士生為目標對象,設計了八個模組,讓非工程師背景的人也能在課程結束前完成完整的 AI 協作循環。' },
          { k: '執行', b: '以單堂三小時形式規劃八個模組:從 AI 術語、三個層級、CCC 溝通框架到分組實作,讓學員跑完「下指令 → 看輸出 → 判斷」的完整循環,課程結束時帶走一個能運行的 Claude Code 環境。' },
          { k: '成效', b: '已開辦 3 場,學員多為帝國理工學院(Imperial College London)非工程背景的學生。' },
          { k: '學習', b: '準備課程讓我發現「以為自己懂」和「能教清楚」之間的落差,反而是深化對 agentic 工具理解的最好方式。' },
        ] },
      ja: { title: 'エージェンティック・コーディング講座', summary: 'ゼロから始める Claude Code ハンズオン講座', tags: ['Claude Code', 'ワークショップ', 'AI 証書'],
        tag: 'Side Project · Claude Code ワークショップ', metric: '3回開催 · ハンズオン講座', stack: ['Claude Code', 'エージェンティックツール', 'AI エージェント証明書'],
        sections: [
          { k: '背景', b: 'テクノロジーコミュニティを追いながら自分でも AI 関連コースを受講し、周囲にシェアしてみると、情報格差が思ったより大きいことに気づいた。' },
          { k: '課題', b: 'Claude Code のようなツールは入門のハードルが想像以上に高く、ドキュメントだけでは操作の自信がつかない。特にエンジニアリング経験のない学習者には構造的なハンズオン導線が必要だった。' },
          { k: '意思決定', b: '学んだことを単回3時間のハンズオンワークショップにまとめ、KCL テクノロジーマネジメント修士生を対象に8つのモジュールを設計。エンジニアリング経験がなくても AI 協働の完全なサイクルを体験できるようにした。' },
          { k: '実行', b: 'AI 用語・AIの3層・CCC プロンプトフレームワーク・グループ実習の8モジュールを1回3時間で設計。全員が「指示 → 出力確認 → 判断」の完全なサイクルを体験し、動作する Claude Code 環境を持ち帰れるようにした。' },
          { k: '成果', b: '3回開催。受講者は主に帝国理工大学(Imperial College London)の非エンジニア学生。' },
          { k: '学び', b: '講座の準備を通じて、「わかっているつもり」と「明確に説明できる」の差に気づき、それが agentic ツールへの理解を深める最も効果的な機会になった。' },
        ] },
    },
    scene: 'course',
    stack: ['Claude Code', 'Agentic tooling', 'Certificate of AI Agents'],
    cover: 'assets/cases/course-cover2.jpg',
    images: ['assets/cases/course-1.png'],
    sections: [
      { k: 'Context', b: 'I follow tech communities and study AI courses on my own; when I started sharing what I was learning, I noticed a real information gap among the people around me.' },
      { k: 'Problem', b: 'The entry barrier for tools like Claude Code is higher than it looks: documentation alone rarely builds hands-on confidence, and people without an engineering background need a structured, guided path, not a reference manual.' },
      { k: 'Decisions', b: 'Packaged what I had learned into a single three-hour workshop targeting KCL Tech Management MSc students, designing eight modules so people without an engineering background could complete a full AI-collaboration cycle before the session ended.' },
      { k: 'Execution', b: 'Structured the session across eight modules (AI vocabulary, three levels of AI, the CCC prompt framework, and a group hands-on block), so every participant ran the full "instruct → review output → decide" cycle and left with a working Claude Code environment.' },
      { k: 'Impact', b: 'Three cohorts delivered, mostly for non-engineering students at Imperial College London.' },
      { k: 'Learning', b: 'Preparing the course revealed the gap between "I think I know this" and "I can explain it clearly"; working through that gap turned out to be the most effective way to deepen my own understanding of agentic tooling.' },
    ],
  },
};

// Renders the full 5-stage case study body.
// layout: 'panel' (default, drawer A / modal B, single column) or 'page' (variant C, two-column editorial).
window.renderCase = function (id, layout) {
  const c = window.CASES[id];
  if (!c) return '';
  const mark = s => s.replace(/\[\[(.+?)\]\]/g, '<mark class="cs-confirm">$1</mark>');
  const L = f => (window.caseT ? window.caseT(c, f) : c[f]);   // localised field (zh/ja), English fallback
  const sections = L('sections') || c.sections;
  const impactTable = L('impactTable') || c.impactTable;

  const secHTML = sections.map(s => {
    let body;
    if (s.b === 'TARGETS_VS_ACTUAL' && impactTable) {
      body = '<table class="cs-tbl"><tbody>' + impactTable.map(r =>
        `<tr class="t-${r[2]}"><td>${r[0]}</td><td>${r[1]}</td><td class="t-mark"></td></tr>`
      ).join('') + '</tbody></table>';
    } else {
      body = `<p>${mark(s.b)}</p>`;
    }
    return `<div class="cs-sec"><span class="cs-sk">${s.k}</span><div class="cs-sb">${body}</div></div>`;
  }).join('');

  const stackArr = L('stack');
  const stack = stackArr ? `<div class="cs-stack">${stackArr.map(t => `<span>${t}</span>`).join('')}</div>` : '';
  const liveLang = window.currentLang ? window.currentLang() : 'en';
  const liveTxt = (c.linkText && (c.linkText[liveLang] || c.linkText.en)) || { en: 'Visit the site', zh: '造訪網站', ja: 'サイトを見る' }[liveLang] || 'Visit the site';
  const live = c.link ? `<a class="cs-live" href="${c.link}" target="_blank" rel="noopener"><span class="cs-live-dot"></span><span class="cs-live-txt">${liveTxt}</span><i class="cs-live-arrow">↗</i></a>` : '';
  const lang = window.currentLang ? window.currentLang() : 'en';
  const gallery = (c.images && c.images.length)
    ? `<div class="cs-gallery${c.images.length >= 2 ? ' cs-gallery-grid' : ''}">${c.images.map(it => {
        const o = (typeof it === 'string') ? { src: it } : it;
        const cap = o.cap ? (o.cap[lang] || o.cap.en || '') : '';
        const kc = o.kind ? ` cs-shot-${o.kind}` : '';
        return `<figure class="cs-shot${kc}"><img src="${o.src}" alt="${cap || c.title}" loading="lazy">${cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`;
      }).join('')}</div>`
    : '';
  const noteV = L('note');
  const note = noteV ? `<p class="cs-note">${noteV}</p>` : '';
  const head = `<span class="cs-tag">${L('tag')}</span>
    <h3 class="cs-title">${c.title}</h3>
    <p class="cs-metric">${L('metric')}</p>
    ${stack}
    ${live}`;

  if (layout === 'page') {
    return `<div class="cs-doc cs-doc-page">
      <aside class="cs-aside">${head}${gallery}</aside>
      <div class="cs-main"><div class="cs-secs">${secHTML}</div>${note}</div>
    </div>`;
  }

  return `<div class="cs-doc">
    ${head}
    ${gallery}
    <div class="cs-secs">${secHTML}</div>
    ${note}
  </div>`;
};
