const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle, WidthType, LevelFormat } = require('docx');
const fs = require('fs');

const doc = new Document({
  styles: {
    default: { document: { run: { font: 'Microsoft YaHei', size: 24 } } },
    paragraphStyles: [
      { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 32, bold: true, font: 'Microsoft YaHei' },
        paragraph: { spacing: { before: 240, after: 240 }, outlineLevel: 0 } },
      { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 28, bold: true, font: 'Microsoft YaHei' },
        paragraph: { spacing: { before: 180, after: 180 }, outlineLevel: 1 } },
    ]
  },
  numbering: {
    config: [
      { reference: 'numbers',
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    children: [
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun('腾讯在"AI+游戏"的战略、布局与方向')] }),
      
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('一、态度和战略部署')] }),
      new Paragraph({ children: [new TextRun('腾讯将AI定位为游戏业务的"生死线"和核心增长引擎。2025年末内部战略会上，马化腾明确表态："AI不是可选项，是游戏业务下一轮增长的生死线，所有工作室必须全面拥抱AI研发，实现降本增效与玩法创新双突破。"这一表态体现了腾讯将AI从辅助工具上升为战略必选项的高度认知。')] }),
      new Paragraph({ children: [new TextRun('在战略层面，腾讯采取"技术外溢"路径——在游戏场景中打磨成熟的AI能力、工程化经验，向社交、广告、企业服务等核心业务延伸，同时对外输出技术服务，开辟新的盈利增长点。花旗将腾讯列为核心AI投资概念股，指出腾讯的AI战略转型是推动未来发展的"关键催化剂"。')] }),
      new Paragraph({ children: [new TextRun('财报显示，2025年腾讯AI节奏全面提速：AI快速融入游戏、广告和社交等核心业务；同时以混元大模型为底座的AI产品线迅速铺开。AI驱动下，腾讯游戏业务全年总收入2416亿元，同比增长22%，其中国际市场游戏收入突破100亿美元，同比增长33%，创历史新高。')] }),
      
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('二、游戏产线方面的具体升级')] }),
      new Paragraph({ children: [new TextRun('腾讯游戏产线已实现AI深度应用，覆盖40余款产品，包括《王者荣耀》《和平精英》等头部游戏。主要升级体现在三个维度：')] }),
      new Paragraph({ children: [new TextRun('用户维度——AI伙伴体系革新玩家体验')] }),
      new Paragraph({ numbering: { reference: 'numbers', level: 0 }, children: [new TextRun('《和平精英》推出的AI队友模式是典型代表。该功能累计体验用户达1.1亿，最高日活跃玩家突破1770万，麦克风开启率飙升至75%（显示AI有效缓解社交压力、促进玩家互动）。该模式显著提升了玩家游戏时长、对局频次和用户留存，直接支撑商业价值增长。')] }),
      new Paragraph({ children: [new TextRun('成本维度——研发管线重构实现降本')] }),
      new Paragraph({ numbering: { reference: 'numbers', level: 0 }, children: [new TextRun('《异人之下》采用实时AI武术动作生成技术，让相关环节人力成本降低75%，AI训练所需动作数据需求从"小时级"降至"分钟级"，整套AI动作生成能在手机端1毫秒内完成。')] }),
      new Paragraph({ children: [new TextRun('质量维度——内容生产标准化与质控')] }),
      new Paragraph({ numbering: { reference: 'numbers', level: 0 }, children: [new TextRun('VISVISE AI创作套件让动画制作自动化率超85%，执行环节合格率超90%，大幅削减美术制作的人力与时间成本。该工具整体提升动画制作效率8倍，实现"分钟级"内容生产。')] }),
      
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('三、游戏制作工具、核心技术的升级情况')] }),
      new Paragraph({ children: [new TextRun('腾讯构建了全栈AI工具体系，核心包括：')] }),
      new Paragraph({ children: [new TextRun('VISVISE全链路AI创作解决方案')] }),
      new Paragraph({ children: [new TextRun('这是腾讯游戏在GDC 2026重磅展示的工具套件，涵盖游戏美术降本增效全流程。核心能力包括：')] }),
      new Paragraph({ numbering: { reference: 'numbers', level: 0 }, children: [new TextRun('MotionBlink工具：原本需要数天制作的动画流程压缩至分钟级')] }),
      new Paragraph({ numbering: { reference: 'numbers', level: 0 }, children: [new TextRun('动画制作效率提升8倍，自动化率超85%')] }),
      new Paragraph({ numbering: { reference: 'numbers', level: 0 }, children: [new TextRun('执行环节合格率超90%')] }),
      new Paragraph({ numbering: { reference: 'numbers', level: 0 }, children: [new TextRun('获得微软专家现场体验后称赞"太酷了"，特别是快速理解项目需求、自动生成文档并创建原型的能力')] }),
      new Paragraph({ children: [new TextRun('GiiNEX自研游戏AI引擎')] }),
      new Paragraph({ children: [new TextRun('2024年GDC发布，基于生成式AI和决策AI技术，支持游戏全生命周期。核心功能包括：')] }),
      new Paragraph({ numbering: { reference: 'numbers', level: 0 }, children: [new TextRun('高效生成NPC对话、3D城市、剧情等，提升UGC内容创作效率')] }),
      new Paragraph({ numbering: { reference: 'numbers', level: 0 }, children: [new TextRun('3D城市布局效率提升百倍')] }),
      new Paragraph({ numbering: { reference: 'numbers', level: 0 }, children: [new TextRun('为AI NPC、场景制作、内测等环节提供技术支撑')] }),
      new Paragraph({ children: [new TextRun('混元游戏视觉生成平台')] }),
      new Paragraph({ children: [new TextRun('2025年5月发布，依托混元大模型打造的工业级AIGC游戏内容生产引擎：')] }),
      new Paragraph({ numbering: { reference: 'numbers', level: 0 }, children: [new TextRun('大幅优化游戏资产生成与游戏制作流程')] }),
      new Paragraph({ numbering: { reference: 'numbers', level: 0 }, children: [new TextRun('2025年9月升级至2.0版本，三大核心能力升级并全面开放')] }),
      new Paragraph({ numbering: { reference: 'numbers', level: 0 }, children: [new TextRun('为游戏行业带来数十倍效率提升')] }),
      new Paragraph({ children: [new TextRun('混元3D Studio')] }),
      new Paragraph({ children: [new TextRun('2025年11月推出1.1版本，接入美术级3D生成能力，AI生成的3D模型能直接用在游戏动画中。2025年腾讯全球数字生态大会游戏专场上发布混元3D 3.0模型，聚焦游戏美术创作和游戏内容创作，已在超过15个游戏场景落地应用。')] }),
      
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('四、大型游戏制作中的应用与增强情况')] }),
      new Paragraph({ children: [new TextRun('AI技术已在腾讯大型游戏中规模化落地，主要应用方向包括：')] }),
      new Paragraph({ numbering: { reference: 'numbers', level: 0 }, children: [new TextRun('内容生产加速：AI显著加快游戏内容制作速度。财报显示，通过在游戏中部署AI，腾讯实现了加速内容制作、改善用户体验及提升效益的目标。')] }),
      new Paragraph({ numbering: { reference: 'numbers', level: 0 }, children: [new TextRun('用户体验提升：除《和平精英》AI伙伴体系外，《王者荣耀》《三角洲行动》《无畏契约：源能行动》等多款游戏已应用AI丰富玩家体验。')] }),
      new Paragraph({ numbering: { reference: 'numbers', level: 0 }, children: [new TextRun('玩法创新：AI为传统玩法注入新元素。例如《和平精英》AI队友模式不仅提升效率，更创造新的社交互动模式，将竞技射击与AI陪伴结合，拓展玩法边界。')] }),
      new Paragraph({ numbering: { reference: 'numbers', level: 0 }, children: [new TextRun('运营优化：AI助力游戏精细化运营。通过腾讯云全生命周期解决方案，AI技术覆盖游戏创意构思、美术创作、研发测试、发行上线到运营增长的全流程技术支撑体系。')] }),
      
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('五、游戏发行方面的AI+')] }),
      new Paragraph({ children: [new TextRun('腾讯在游戏发行环节深度应用AI，主要体现在：')] }),
      new Paragraph({ numbering: { reference: 'numbers', level: 0 }, children: [new TextRun('AI精准营销：利用AI技术对用户画像进行深度刻画，包括用户游戏偏好、游戏时长、付费习惯等维度，实现个性化推荐和精准触达。点击率提升背后的技术逻辑基于复杂的数据分析和算法优化。')] }),
      new Paragraph({ numbering: { reference: 'numbers', level: 0 }, children: [new TextRun('智能分发：AI降低研发门槛后，游戏数量增多，发行与分销环节重要性提升。腾讯高管在财报电话会上指出，AI不会改变开发与发行之间的价值平衡，成熟的游戏运营团队将更能利用AI优势，提升运营效率和质量。')] }),
      new Paragraph({ numbering: { reference: 'numbers', level: 0 }, children: [new TextRun('数据驱动决策：通过AI分析海量用户行为数据，指导发行策略。微信/QQ社交链为AI模型提供超过13亿用户行为数据，推动模型精准优化，反哺发行决策。')] }),
      new Paragraph({ numbering: { reference: 'numbers', level: 0 }, children: [new TextRun('营销服务增长：AI赋能营销服务业务，2025年腾讯营销服务全年收入达1450亿元，同比增长19%。')] }),
      
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('六、小游戏方面的AI+')] }),
      new Paragraph({ children: [new TextRun('腾讯在小游戏领域积极布局AI+，主要体现在：')] }),
      new Paragraph({ numbering: { reference: 'numbers', level: 0 }, children: [new TextRun('开发工具智能化：腾讯云AI代码助手已支持微信开发者IDE下的编码辅助，通过自然语言描述需求快速生成代码，大幅提升开发效率。据案例展示，开发者可在5分钟内完成微信小程序游戏原型开发。')] }),
      new Paragraph({ numbering: { reference: 'numbers', level: 0 }, children: [new TextRun('全方位解决方案：2025微信小游戏开发者大会上，腾讯云发布业内首个"小游戏全方位解决方案"，覆盖从美术创作、技术测试到上线运营的全流程，为小游戏厂商提供"提速+提质"新解法。')] }),
      new Paragraph({ numbering: { reference: 'numbers', level: 0 }, children: [new TextRun('AI小游戏赛道布局：2025年3月，腾讯测试名为"哈皮"的小程序，这是首款以AI互动玩法集合为主的桌游类小游戏产品。玩家可与好友、智能体一道参与文字冒险、答题、海龟汤和剧本等各类互动游戏，标志着腾讯首次入局AI小游戏赛道。')] }),
      new Paragraph({ numbering: { reference: 'numbers', level: 0 }, children: [new TextRun('低门槛创作生态：通过轻游梦工坊与混元大模型结合，降低小游戏开发门槛，推动"人人皆可创作"时代到来。')] }),
      
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('七、游戏投资、海外布局中对AI+的考虑')] }),
      new Paragraph({ children: [new TextRun('腾讯在全球化战略中充分考虑AI+因素：')] }),
      new Paragraph({ numbering: { reference: 'numbers', level: 0 }, children: [new TextRun('海外投资布局：早年腾讯广泛参与全球游戏市场投资布局，被投海外工作室近年推出的产品受到用户广泛欢迎，如拳头游戏的《英雄联盟手游》、Supercell的《部落冲突》系列等。这些投资为腾讯获取全球AI技术、了解海外市场AI应用趋势提供了重要窗口。')] }),
      new Paragraph({ numbering: { reference: 'numbers', level: 0 }, children: [new TextRun('海外收入增长：AI战略助力腾讯海外收入连续三个季度刷新纪录。2025年国际市场游戏收入突破100亿美元，同比增长33%，创历史新高。')] }),
      new Paragraph({ numbering: { reference: 'numbers', level: 0 }, children: [new TextRun('全球技术输出：腾讯在2026年GDC上展示40款游戏AI应用成果，获得谷歌云战略产业全球游戏总监公开肯定，称其技术已规模化应用并视为"行业方向标"。微软专家亦现场体验后给予高度评价。这为腾讯AI技术对外输出、服务全球游戏开发者奠定基础。')] }),
      new Paragraph({ numbering: { reference: 'numbers', level: 0 }, children: [new TextRun('本地化适配：在全球化进程中，腾讯注重AI技术的本地化适配，利用海外工作室了解不同市场用户偏好，指导AI模型优化和产品迭代，确保AI+游戏在海外市场的有效性。')] }),
      
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('八、未来发展方向')] }),
      new Paragraph({ children: [new TextRun('腾讯高管在财报电话会上分享了AI+游戏的未来展望，主要方向包括：')] }),
      new Paragraph({ numbering: { reference: 'numbers', level: 0 }, children: [new TextRun('世界模型探索：腾讯高管称世界模型目前是"小众机会"。虽然腾讯拥有游戏资产能为3D工具提供数据，但相比于其他更紧迫的机会，这并非当下重点。这反映腾讯对AI技术优先级的务实判断。')] }),
      new Paragraph({ numbering: { reference: 'numbers', level: 0 }, children: [new TextRun('多模态融合：多模态融合是未来"AI+游戏"的一大趋势。AI技术将视觉、听觉、触觉等多种感官体验整合，创造更沉浸的游戏体验。腾讯混元3D Studio、游戏视觉生成平台等产品已布局多模态能力。')] }),
      new Paragraph({ numbering: { reference: 'numbers', level: 0 }, children: [new TextRun('AI专属服务订阅模式：未来游戏可能会推出AI专属服务的订阅模式，为玩家提供更高级的AI互动体验；另一些游戏则可能通过AI生成的个性化内容，吸引玩家进行付费购买。这将为游戏商业模式创新提供新路径。')] }),
      new Paragraph({ numbering: { reference: 'numbers', level: 0 }, children: [new TextRun('技术持续迭代：腾讯混元大模型3.0版本计划于2026年4月正式对外发布，定位为重大迭代，在模型效果、推理能力及智能体（Agent）应用方面均有显著提升。技术持续迭代将为AI+游戏提供更强底层支撑。')] }),
      new Paragraph({ numbering: { reference: 'numbers', level: 0 }, children: [new TextRun('人才与组织升级：腾讯采用Player-Coach模式，技术负责人每周投入20%时间实操AI工具（如优化动作生成提示词），确保决策基于真实生产场景，避免技术与业务脱节。这种组织模式将帮助腾讯保持AI应用的前沿性。')] }),
      
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun('总结与评估')] }),
      new Paragraph({ children: [new TextRun('腾讯在AI+游戏领域展现出显著能力和价值：')] }),
      new Paragraph({ children: [new TextRun('能力层面')] }),
      new Paragraph({ children: [new TextRun('腾讯已构建从底层大模型（混元）、中层引擎（GiiNEX）、上层工具（VISVISE）到产品应用（40余款游戏）的完整AI技术栈。其在游戏AI的规模化应用、工业化落地、工具生态建设方面处于行业领先地位，获得谷歌、微软等国际巨头认可。')] }),
      new Paragraph({ children: [new TextRun('价值体现')] }),
      new Paragraph({ children: [new TextRun('对内：AI重构研发管线，实现降本增效。如《异人之下》人力成本降低75%，MagicDawn光照烘焙效率提升百倍，VISVISE动画制作效率提升8倍。这将显著改善腾讯游戏的盈利能力和产品迭代速度。')] }),
      new Paragraph({ children: [new TextRun('对外：AI创新用户体验，推动收入增长。如《和平精英》AI伙伴体系吸引1.1亿用户，提升留存和商业化表现。2025年腾讯游戏收入增长22%，国际收入突破100亿美元，AI是重要驱动力。')] }),
      new Paragraph({ children: [new TextRun('对外赋能：AI能力外溢，开辟新增长点。腾讯将游戏领域打磨的AI能力向社交、广告、企业服务延伸，2025年AI驱动广告业务增长近50%。同时，AI技术服务对外输出，服务全球游戏开发者，构建新的盈利增长点。')] }),
      new Paragraph({ children: [new TextRun('未来潜力')] }),
      new Paragraph({ children: [new TextRun('腾讯在AI+游戏领域已从技术突破走向生态构建，其"技术外溢"战略将形成正向循环：游戏场景打磨AI能力→能力延伸至其他业务→数据反馈优化模型→反哺游戏创新。这种生态化布局将帮助腾讯在AI+游戏时代保持长期竞争力。')] }),
      new Paragraph({ children: [new TextRun('综合评估，腾讯在AI+游戏领域的能力已从"工具辅助"升级为"战略核心"，其价值不仅体现在降本增效和收入增长，更在于构建了AI技术生态和对外赋能平台。随着混元3.0等新一代技术迭代，以及全球化布局深化，腾讯在AI+游戏领域的领先优势将进一步扩大。')] }),
      
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun('参考文献')] }),
      new Paragraph({ children: [new TextRun('[1] 守得住江山,破不了瓶颈!腾讯游戏的2025年与米哈游差距拉大. 搜狐. https://www.sohu.com/a/978194330_613239')] }),
      new Paragraph({ children: [new TextRun('[2] AI重构研发底层：腾讯游戏工业化升级与估值提升逻辑. 雪球. https://xueqiu.com/4410154833/380003877')] }),
      new Paragraph({ children: [new TextRun('[3] 腾讯发布2025年全年业绩：AI驱动盈利创新高，混元3.0将于4月发布. 新华网. https://www.xinhuanet.com/tech/20260318/8b00d51b86ca42e88f9b98dd9134ab2e/c.html')] }),
      new Paragraph({ children: [new TextRun('[4] 腾讯游戏AI规模化应用40款产品：获谷歌微软高管盛赞. PChome. https://article.pchome.net/info/11775.html')] }),
      new Paragraph({ children: [new TextRun('[5] 估值视角：腾讯游戏AI实践的长期价值解析. 腾讯新闻. https://news.qq.com/rain/a/20260318A08D9D00')] }),
      new Paragraph({ children: [new TextRun('[6] 腾讯游戏VISVISE亮相GDC 2026，解锁游戏美术降本增效新路径. 游民星空. https://ol.gamersky.com/news/202603/2106235.shtml')] }),
      new Paragraph({ children: [new TextRun('[7] 开发效率提升100倍！腾讯自研游戏AI引擎GiiNEX发布. 知乎. https://zhuanlan.zhihu.com/p/688364186')] }),
      new Paragraph({ children: [new TextRun('[8] 腾讯发布"业内首个"混元游戏视觉生成平台！AI又要改造游戏行业. 知乎. https://zhuanlan.zhihu.com/p/1908847647265109199')] }),
      new Paragraph({ children: [new TextRun('[9] 腾讯混元游戏2.0重磅升级，AI视觉生成技术开启游戏创作新纪元. GuideAI. https://www.guideai.com.cn/archives/10914')] }),
      new Paragraph({ children: [new TextRun('[10] 腾讯混元3D再进化！AI生成的3D模型能直接用在游戏动画了. 腾讯新闻. https://news.qq.com/rain/a/20251128A04HJ700')] }),
      new Paragraph({ children: [new TextRun('[11] 腾讯高管称世界模型是小众机会，称AI给游戏会带来三大影响. 36氪. https://www.36kr.com/p/3728512058146434')] }),
      new Paragraph({ children: [new TextRun('[12] 腾讯2025年游戏营收同比增22%，AI驱动内容制作、用户体验等提升. 新华网. https://www.xinhuanet.com/tech/20260318/f8dd0672c8554770b9d3bffdf783c7c1/c.html')] }),
      new Paragraph({ children: [new TextRun('[13] AI重塑游戏研发管线 腾讯云升级全新游戏行业全生命周期方案. 今日头条. https://www.toutiao.com/article/7551300928524845568/')] }),
      new Paragraph({ children: [new TextRun('[14] AI驱动游戏增长：腾讯游戏业务收入提升22%，AI精准营销... 搜狐. https://www.sohu.com/a/935330556_122362510')] }),
      new Paragraph({ children: [new TextRun('[15] 腾讯2025年财报：营销服务全年收入达1450亿增19%，"AI+...". 央广网. https://tech.cnr.cn/techph/20260319/t20260319_527556237.shtml')] }),
      new Paragraph({ children: [new TextRun('[16] 震惊！5分钟就能开发一个微信小程序游戏？腾讯云. https://cloud.tencent.com/developer/article/2474316')] }),
      new Paragraph({ children: [new TextRun('[17] @小游戏开发者，业内首个「小游戏全方位解决方案」来了. 腾讯云. https://cloud.tencent.com/developer/article/2534746')] }),
      new Paragraph({ children: [new TextRun('[18] 腾讯首次入局AI小游戏赛道，微信"哈皮"小程序小范围测试... 搜狐. https://www.sohu.com/a/874874793_121984121')] }),
      new Paragraph({ children: [new TextRun('[19] AI浪潮下的游戏开发：腾讯轻游梦工坊与混元大模型，人人... 搜狐. https://www.sohu.com/a/942715203_122362510')] }),
      new Paragraph({ children: [new TextRun('[20] 海外收入连续三个季度刷新纪录！AI战略、长青游戏获马化... 每日经济新闻. https://www.nbd.com.cn/articles/2025-05-15/3875553.html')] }),
      new Paragraph({ children: [new TextRun('[21] 腾讯公布2025年财报：长青游戏组合扩充、海外游戏收入破百... IT之家. https://www.ithome.com/0/930/614.htm')] }),
      new Paragraph({ children: [new TextRun('[22] 行业前瞻：《2025 AI游戏应用白皮书》揭示技术新趋势. 搜狐. https://www.sohu.com/a/949194441_121886013')] }),
      new Paragraph({ children: [new TextRun('[23] 2025年AI+游戏行业研究报告：AI赋能游戏产业的变革与机遇. 报告盒子. https://www.baogaobox.com/insights/250312000008574.html')] }),
      new Paragraph({ children: [new TextRun('[24] 腾讯混元新模型HY 3.0下月发布，正在内部业务测试. IT之家. https://www.ithome.com/0/930/373.htm')] }),
      new Paragraph({ children: [new TextRun('[25] 当AI成为游戏核心生产力，中小工作室如何避免技术代差？ 新浪科技. https://news.sina.cn/bignews/insight/2026-03-18/detail-inhrmpqi7375170.d.html?vt=4')] }),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync('腾讯AI+游戏战略布局报告.docx', buffer);
  console.log('Word文档创建成功！');
});
