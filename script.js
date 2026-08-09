const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}

const form = document.querySelector('[data-contact-form]');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(`Tree of Life inquiry — ${data.get('service') || 'General question'}`);
    const body = encodeURIComponent([
      `Name: ${data.get('name') || ''}`,
      `Email: ${data.get('email') || ''}`,
      `Phone: ${data.get('phone') || ''}`,
      `Student grade: ${data.get('grade') || ''}`,
      `Service: ${data.get('service') || ''}`,
      '',
      data.get('message') || ''
    ].join('\n'));
    window.location.href = `mailto:beata@treeoflifedfw.com?subject=${subject}&body=${body}`;
  });
}

document.querySelectorAll('[data-year]').forEach(node => {
  node.textContent = new Date().getFullYear();
});

const translations = {
  'zh-CN': {
    'Skip to content':'跳到主要内容','Home':'首页','About':'关于我们','Services':'服务项目','Workshops':'讲座与工作坊','Contact':'联系我们','Book a Discovery Call':'预约初步咨询','Explore':'网站导航','Email':'电子邮箱','Dallas, Texas':'美国德州达拉斯',
    'Personalized high school & college planning':'个性化高中规划与大学申请指导','A clearer path from high school to college.':'从高中到大学，一条更清晰的成长之路。','We help students and parents make thoughtful decisions about courses, strengths, activities, applications, and the future—with clarity, confidence, and purpose.':'我们帮助学生和家长从容规划课程、优势发展、课外活动、大学申请与未来方向，以清晰的思路、自信的心态和明确的目标前行。','Explore Services':'了解服务项目','More than 300 families supported through seminars and individualized consultation.':'已通过讲座与个性化咨询服务超过300个家庭。',
    'Thoughtful guidance':'用心指导','Planning feels lighter when you have a guide.':'有专业伙伴同行，规划可以更从容。','High school brings dozens of decisions. You do not have to navigate them alone.':'高中阶段充满重要选择，而您无需独自面对。','We listen first, identify priorities, and turn uncertainty into a practical plan that fits the student and the family—from course selection and talent discovery to essays, interviews, and scholarships.':'我们先倾听，再理清重点，把不确定转化为适合学生与家庭的可行方案——从选课、兴趣与潜能探索，到文书、面试及奖学金规划。','Learn about our approach →':'了解我们的理念 →',
    'Ways we can help':'我们如何帮助您','Support for the decisions that matter now—and the journey ahead.':'为当下的重要选择和未来的成长旅程提供支持。','One-on-One Consulting':'一对一咨询','Focused guidance for academic planning, college strategy, essays, interviews, study habits, scholarships, and family communication.':'针对学业规划、大学申请策略、文书、面试、学习习惯、奖学金和家庭沟通提供专注指导。','Explore consulting →':'了解一对一咨询 →','Long-Term Mentorship':'长期成长陪伴','Consistent planning, accountability, and encouragement across semesters, grade levels, and the college application journey.':'在不同学期、年级及整个大学申请过程中，提供持续规划、督促和鼓励。','Explore mentorship →':'了解长期陪伴 →','Workshops & Seminars':'讲座与工作坊','Practical group learning for students and parents on high school planning, applications, communication, and family growth.':'面向学生与家长，分享高中规划、大学申请、沟通及家庭成长的实用方法。','Explore workshops →':'了解讲座与工作坊 →',
    'Rooted in service':'以服务为根基','More than an application plan.':'不只是大学申请方案。','We help students grow in confidence, responsibility, leadership, character, and self-understanding.':'我们帮助学生在自信、责任感、领导力、品格和自我认识方面共同成长。','families supported':'服务家庭','the first seeds were planted':'梦想开始萌芽','personalized family guidance':'个性化家庭指导','A simple process':'清晰的流程','From uncertainty to an actionable roadmap.':'把不确定转化为可以执行的成长路线。','Start with a conversation':'从一次对话开始','Tell us where you are and what decisions feel unclear.':'告诉我们目前的情况和仍感困惑的选择。','Build the roadmap':'制定专属路线','We identify priorities and recommend the right level of support.':'我们理清优先事项，并建议合适的支持方式。','Work the plan':'落实计划','Receive practical guidance, useful tools, and clear next steps.':'获得实用指导、有效工具和清晰的下一步。','Review and adjust':'定期回顾与调整','The plan evolves as goals, opportunities, and deadlines change.':'根据目标、机会和时间节点的变化持续优化方案。',
    'Learn together':'共同学习成长','Practical workshops for students and parents.':'为学生和家长打造的实用讲座。','Clear instruction, useful tools, and thoughtful conversation—without information overload.':'清晰讲解、实用工具与深入交流，让信息真正易懂可用。','Topics include four-year high school planning, college application strategy, student confidence, communication, and parenting.':'主题包括高中四年规划、大学申请策略、学生自信、沟通与亲子教育。','View Workshops':'查看讲座','Your next step':'下一步','Ready to replace uncertainty with a plan?':'准备好用清晰计划告别迷茫了吗？','Begin with a conversation. We will learn about your student, answer initial questions, and help you decide whether Tree of Life is the right fit.':'从一次对话开始。我们会了解学生情况、回答初步问题，并帮助您判断生命树是否适合您的家庭。',
    'Our story':'我们的故事','Guidance rooted in purpose, service, and genuine care.':'以使命、服务与真诚关怀为根基的教育指导。','Helping students prepare not only for college, but for thoughtful, confident lives.':'帮助学生准备的不只是大学申请，更是有思考、有自信的人生。','It began with a single seed.':'一切始于一颗小小的种子。','What we believe':'我们的信念','The goal is bigger than admission.':'目标远不止一纸录取通知。','A successful journey helps a student understand who they are, what matters to them, and how to move forward responsibly.':'真正成功的成长旅程，是帮助学生认识自己、理解什么最重要，并学会负责任地向前迈进。','Our approach':'我们的方式','Listen carefully. Plan thoughtfully. Walk alongside.':'认真倾听，用心规划，一路同行。','Personal':'因人而异','Practical':'务实可行','Purposeful':'目标明确','Let’s talk about your student’s next chapter.':'让我们一起聊聊孩子人生的下一篇章。','Start a Conversation':'开始沟通',
    'Our services':'我们的服务','The right level of guidance for where your family is today.':'根据家庭当下的需要，提供恰到好处的支持。','Choose a focused consultation, ongoing mentorship, or practical group learning. We will help you determine the best starting point.':'您可以选择针对性咨询、长期陪伴或实用小组课程。我们会帮助您找到最合适的起点。','Focused support':'针对性支持','For a defined question, an upcoming decision, or a specific part of the college-planning process that needs expert attention.':'适合有明确问题、即将做出重要决定，或在升学规划某一环节需要专业帮助的家庭。','Ask About Consulting':'咨询一对一服务','Consulting may include':'咨询内容可包括','Ongoing partnership':'持续陪伴','For students who benefit from consistent guidance, accountability, and a strategy that develops over multiple semesters.':'适合需要持续指导、目标监督和跨学期成长策略的学生。','Ask About Mentorship':'咨询长期陪伴','Mentorship may include':'长期陪伴可包括','Not sure where to begin?':'不知道从哪里开始？','Start with the question in front of you.':'从眼前最重要的问题开始。',
    'Workshops & seminars':'讲座与工作坊','Practical learning for stronger students and more confident parents.':'帮助学生更强大、家长更从容的实用学习。','Clear instruction, useful tools, and thoughtful conversation for families navigating high school, college planning, and communication.':'为正在面对高中学习、大学规划和家庭沟通的家庭，提供清晰讲解、实用工具和深入交流。','Featured workshop':'精选讲座','Building a Four-Year High School Plan':'制定高中四年成长规划','You will learn how to':'您将学习如何','Request Workshop Information':'获取讲座信息','Popular topics':'热门主题','Information families can put into practice.':'让家庭能够真正付诸实践的知识。','College Planning':'大学规划','Student Growth':'学生成长','Family Communication':'家庭沟通','Bring a Tree of Life workshop to your community.':'把生命树讲座带到您的社区。','Request a Private Workshop':'预约团体专场讲座',
    'Start a conversation':'开始沟通','Let’s talk about where your student is—and where they want to go.':'让我们聊聊孩子目前的位置，以及他们想去的方向。','Tell us what feels unclear, what decisions are approaching, and what kind of support you are considering.':'请告诉我们哪些问题仍不清晰、哪些决定即将到来，以及您正在考虑哪一种支持。','Contact details':'联系方式','We would love to hear from you.':'期待听到您的声音。','Email is the fastest way to begin.':'通过电子邮件联系我们，是最快的开始方式。','Location':'地点','Meeting options':'咨询方式','In person and virtual':'线下及线上','Tell us how we can help.':'请告诉我们如何帮助您。','This form opens an email in your computer’s email application. You can review the message before sending it.':'此表格会在您电脑的邮件应用中生成一封邮件，发送前您可以再次检查。','Name':'姓名','Phone':'电话','Student grade':'学生年级','What are you interested in?':'您对哪项服务感兴趣？','How can we help?':'请简要说明您的需要','Prepare Email':'生成邮件','Select one':'请选择','Middle school':'初中','9th grade':'九年级','10th grade':'十年级','11th grade':'十一年级','12th grade':'十二年级','College student':'大学生','Parent-only consultation':'仅家长咨询','Discovery call':'初步咨询','One-on-one consulting':'一对一咨询','Long-term mentorship':'长期成长陪伴','Workshop or seminar':'讲座或工作坊','General question':'一般问题'
  }
};

translations['zh-TW'] = Object.fromEntries(Object.entries(translations['zh-CN']).map(([key, value]) => [key, value
  .replaceAll('简体','簡體').replaceAll('规划','規劃').replaceAll('申请','申請').replaceAll('指导','指導').replaceAll('学生','學生')
  .replaceAll('家长','家長').replaceAll('课程','課程').replaceAll('选择','選擇').replaceAll('服务','服務').replaceAll('咨询','諮詢')
  .replaceAll('讲座','講座').replaceAll('工作坊','工作坊').replaceAll('沟通','溝通').replaceAll('成长','成長').replaceAll('学习','學習')
  .replaceAll('专业','專業').replaceAll('问题','問題').replaceAll('时间','時間').replaceAll('发现','發現').replaceAll('领导','領導')
  .replaceAll('目标','目標').replaceAll('明确','明確').replaceAll('实践','實踐').replaceAll('听','聽').replaceAll('为','為')
  .replaceAll('与','與').replaceAll('从','從').replaceAll('个','個').replaceAll('们','們').replaceAll('这','這').replaceAll('对','對')
  .replaceAll('会','會').replaceAll('还','還').replaceAll('进','進').replaceAll('过','過').replaceAll('种','種').replaceAll('体','體')
  .replaceAll('发','發').replaceAll('应','應').replaceAll('实','實').replaceAll('门','門').replaceAll('间','間').replaceAll('并','並')
  .replaceAll('开','開').replaceAll('线','線').replaceAll('话','話').replaceAll('现','現').replaceAll('让','讓').replaceAll('够','夠')
]));

Object.assign(translations['zh-TW'], {
  'Skip to content':'跳到主要內容','Home':'首頁','About':'關於我們','Services':'服務項目','Workshops':'講座與工作坊','Contact':'聯絡我們','Book a Discovery Call':'預約初步諮詢','Explore':'網站導覽','Email':'電子郵件','Dallas, Texas':'美國德州達拉斯',
  'Personalized high school & college planning':'個人化高中規劃與大學申請指導','A clearer path from high school to college.':'從高中到大學，一條更清晰的成長之路。','Explore Services':'瞭解服務項目','More than 300 families supported through seminars and individualized consultation.':'已透過講座與個人化諮詢服務超過300個家庭。',
  'Ways we can help':'我們如何幫助您','One-on-One Consulting':'一對一諮詢','Explore consulting →':'瞭解一對一諮詢 →','Long-Term Mentorship':'長期成長陪伴','Explore mentorship →':'瞭解長期陪伴 →','Workshops & Seminars':'講座與工作坊','Explore workshops →':'瞭解講座與工作坊 →',
  'Our story':'我們的故事','What we believe':'我們的信念','Our approach':'我們的方式','Personal':'因人而異','Practical':'務實可行','Purposeful':'目標明確','Start a Conversation':'開始溝通',
  'Our services':'我們的服務','Focused support':'針對性支持','Ask About Consulting':'諮詢一對一服務','Consulting may include':'諮詢內容可包括','Ongoing partnership':'持續陪伴','Ask About Mentorship':'諮詢長期陪伴','Mentorship may include':'長期陪伴可包括',
  'Workshops & seminars':'講座與工作坊','Featured workshop':'精選講座','You will learn how to':'您將學習如何','Request Workshop Information':'取得講座資訊','Popular topics':'熱門主題','College Planning':'大學規劃','Student Growth':'學生成長','Family Communication':'家庭溝通','Request a Private Workshop':'預約團體專場講座',
  'Start a conversation':'開始溝通','Contact details':'聯絡方式','Email is the fastest way to begin.':'透過電子郵件聯絡我們，是最快的開始方式。','Location':'地點','Meeting options':'諮詢方式','In person and virtual':'線下及線上','Tell us how we can help.':'請告訴我們如何幫助您。','Name':'姓名','Phone':'電話','Student grade':'學生年級','What are you interested in?':'您對哪項服務感興趣？','How can we help?':'請簡要說明您的需要','Prepare Email':'產生郵件','Select one':'請選擇','Middle school':'國中','9th grade':'九年級','10th grade':'十年級','11th grade':'十一年級','12th grade':'十二年級','College student':'大學生','Parent-only consultation':'僅家長諮詢','Discovery call':'初步諮詢','One-on-one consulting':'一對一諮詢','Long-term mentorship':'長期成長陪伴','Workshop or seminar':'講座或工作坊','General question':'一般問題'
});

Object.assign(translations['zh-CN'], {
  'Personalized educational guidance for students and families in Dallas–Fort Worth and virtually.':'为达拉斯—沃思堡地区及线上家庭提供个性化教育指导。',
  'Personalized educational guidance for students and families.':'为学生和家庭提供个性化教育指导。','Our Story':'我们的故事','Educational consulting does not guarantee admission or scholarships.':'教育咨询不能保证录取结果或奖学金。',
  'Tree of Life began in the summer of 2015 with tutoring for students who needed extra academic support and exam preparation. As we worked closely with students and parents, families began asking for deeper guidance around high school planning, college applications, and communication at home.':'生命树始于2015年夏天，最初为需要额外学业支持和考试准备的学生提供辅导。随着我们与学生及家长深入合作，越来越多家庭希望在高中规划、大学申请和家庭沟通方面获得更系统的指导。',
  'What they needed was not more scattered information. They needed someone to help them understand their options, make thoughtful choices, and build a realistic plan.':'他们需要的不是更多零散信息，而是一位能够帮助他们理解各种选择、慎重做出决定并制定切实可行计划的同行者。',
  'After Beata completed advanced coursework in college counseling, the team hosted its first free seminar on high school planning. The room was full—and Tree of Life Education & Communication began to take root.':'Beata完成大学升学咨询的进阶课程后，团队举办了第一场免费高中规划讲座。现场座无虚席，生命树教育与沟通也由此正式扎根成长。',
  '“Every student we support adds a new branch to our Tree of Life.”':'“每一位得到我们支持的学生，都为生命树增添一根新的枝桠。”',
  'Today, Tree of Life supports students through course selection, interest and talent discovery, leadership and service planning, college research, essays, interviews, scholarships, and application strategy.':'如今，生命树在选课、兴趣与潜能探索、领导力与社区服务规划、大学调研、申请文书、面试、奖学金及申请策略等方面为学生提供支持。',
  'We also help families strengthen communication so that planning can become more constructive and less stressful. Our work is rooted in Christian values of service, wisdom, compassion, and faithful stewardship, with faith-informed guidance available to families who seek it.':'我们也帮助家庭改善沟通，让规划过程更具建设性并减轻压力。我们的工作扎根于服务、智慧、怜悯和忠诚托付等基督教价值观，并可为有需要的家庭提供融入信仰视角的指导。',
  'No two students are the same. Recommendations reflect strengths, goals, timing, and family priorities.':'每位学生都独一无二。我们的建议会综合考虑学生的优势、目标、时间安排和家庭重点。',
  'Conversations become roadmaps, decisions, timelines, and manageable next steps.':'我们把交流转化为清晰路线、关键决定、时间表和可以落实的下一步。',
  'Growth includes academics, character, leadership, service, communication, and self-understanding.':'成长不仅包括学业，也包括品格、领导力、服务精神、沟通能力和自我认识。',
  'Share what feels unclear and what decisions are approaching. We will help you find the right starting point.':'告诉我们哪些问题仍不清晰、哪些决定即将到来，我们会帮助您找到合适的起点。',
  'Four-year high school course planning':'高中四年课程规划','College research and balanced list development':'大学调研与平衡的选校名单','Application strategy, timelines, and essays':'申请策略、时间规划与文书','Résumé preparation and interview coaching':'简历准备与面试辅导','Scholarship and financial-aid planning guidance':'奖学金与助学金规划指导','Study habits, time management, and goal setting':'学习习惯、时间管理与目标设定','Interest, talent, and learning-style exploration':'兴趣、潜能与学习方式探索','Parent–teen communication':'家长与青少年沟通','Students':'学生','Parents':'家长','In person':'线下','Virtual':'线上',
  'Personalized academic and extracurricular roadmap':'个性化学业与课外活动路线图','Regular goal-setting and progress reviews':'定期设定目标并回顾进展','Leadership, service, and activity planning':'领导力、社区服务与活动规划','College research and application preparation':'大学调研与申请准备','Essay, résumé, and interview support':'文书、简历与面试支持','Deadline management and accountability':'截止日期管理与持续督促','Confidence-building and age-appropriate life decisions':'自信培养与适龄的人生决策','Multi-semester':'跨学期','Personal roadmap':'专属路线图','Accountability':'持续督促',
  'For students, parents, churches, schools, and community groups seeking practical, engaging instruction.':'适合希望获得实用且富有互动性指导的学生、家长、教会、学校和社区团体。','Explore Workshops':'了解讲座与工作坊','Popular areas':'热门领域','Four-year high school planning':'高中四年规划','College application strategy':'大学申请策略','Communicating with teenagers':'与青少年沟通','Student confidence and healthy habits':'学生自信与健康习惯','Parenting and family communication':'亲子教育与家庭沟通','Public events':'公开活动','Private groups':'团体专场','We will listen, identify the immediate priorities, and recommend an appropriate next step—without making the process more complicated than it needs to be.':'我们会认真倾听，找出当前最重要的事项，并建议合适的下一步，不让规划过程变得不必要地复杂。',
  'A practical session for students and parents who want to make purposeful course choices without losing sight of balance, interests, and long-term goals.':'这是一场面向学生与家长的实用讲座，帮助家庭有目标地选择课程，同时兼顾学习平衡、个人兴趣和长期方向。','Connect graduation requirements with future goals':'把毕业要求与未来目标联系起来','Think wisely about rigor, electives, and balance':'理性考虑课程难度、选修课与学习平衡','Use activities to explore interests and develop leadership':'通过活动探索兴趣并培养领导力','Identify the next decisions your family needs to make':'明确家庭接下来需要做出的决定','Schedule:':'时间安排：','Four-year course planning, application strategy, college selection, essays, interviews, scholarships, and financial-aid planning.':'高中四年课程规划、申请策略、大学选择、文书、面试、奖学金及助学金规划。','Confidence, time management, learning habits, interest discovery, leadership, service, and healthy decision-making.':'自信、时间管理、学习习惯、兴趣探索、领导力、服务精神和健康决策。','Positive parenting approaches, communicating with teenagers, managing conflict, and creating healthier planning conversations.':'积极的亲子教育方式、与青少年沟通、冲突管理，以及建立更健康的规划对话。','Scope of service:':'服务范围：','We welcome inquiries from parent groups, churches, schools, and community organizations.':'欢迎家长团体、教会、学校和社区组织联系我们。','Educational workshops are informational and not clinical care.':'教育讲座仅提供信息，不属于临床医疗或心理治疗服务。',
  'Please do not include sensitive medical, financial, school-record, or application-account information in your first message.':'请勿在首次联系时提供敏感的医疗、财务、学籍记录或申请账户信息。','(optional)':'（选填）','By continuing, you are choosing to send this information by email to Tree of Life Education & Communication.':'继续操作即表示您选择通过电子邮件将这些信息发送给生命树教育与沟通。'
});

Object.assign(translations['zh-TW'], {
  'Personalized educational guidance for students and families in Dallas–Fort Worth and virtually.':'為達拉斯—沃思堡地區及線上家庭提供個人化教育指導。',
  'Personalized educational guidance for students and families.':'為學生和家庭提供個人化教育指導。','Our Story':'我們的故事','Educational consulting does not guarantee admission or scholarships.':'教育諮詢無法保證錄取結果或獎學金。',
  'Tree of Life began in the summer of 2015 with tutoring for students who needed extra academic support and exam preparation. As we worked closely with students and parents, families began asking for deeper guidance around high school planning, college applications, and communication at home.':'生命樹始於2015年夏天，最初為需要額外學業支持和考試準備的學生提供輔導。隨著我們與學生及家長深入合作，越來越多家庭希望在高中規劃、大學申請和家庭溝通方面獲得更系統的指導。',
  'What they needed was not more scattered information. They needed someone to help them understand their options, make thoughtful choices, and build a realistic plan.':'他們需要的不是更多零散資訊，而是一位能夠幫助他們理解各種選擇、慎重做出決定並制定切實可行計畫的同行者。',
  'After Beata completed advanced coursework in college counseling, the team hosted its first free seminar on high school planning. The room was full—and Tree of Life Education & Communication began to take root.':'Beata完成大學升學諮詢的進階課程後，團隊舉辦了第一場免費高中規劃講座。現場座無虛席，生命樹教育與溝通也由此正式扎根成長。',
  '“Every student we support adds a new branch to our Tree of Life.”':'「每一位得到我們支持的學生，都為生命樹增添一根新的枝枒。」',
  'Today, Tree of Life supports students through course selection, interest and talent discovery, leadership and service planning, college research, essays, interviews, scholarships, and application strategy.':'如今，生命樹在選課、興趣與潛能探索、領導力與社區服務規劃、大學研究、申請文書、面試、獎學金及申請策略等方面為學生提供支持。',
  'We also help families strengthen communication so that planning can become more constructive and less stressful. Our work is rooted in Christian values of service, wisdom, compassion, and faithful stewardship, with faith-informed guidance available to families who seek it.':'我們也幫助家庭改善溝通，讓規劃過程更具建設性並減輕壓力。我們的工作扎根於服務、智慧、憐憫和忠誠託付等基督教價值觀，並可為有需要的家庭提供融入信仰視角的指導。',
  'No two students are the same. Recommendations reflect strengths, goals, timing, and family priorities.':'每位學生都獨一無二。我們的建議會綜合考量學生的優勢、目標、時間安排和家庭重點。','Conversations become roadmaps, decisions, timelines, and manageable next steps.':'我們把交流轉化為清晰路線、關鍵決定、時間表和可以落實的下一步。','Growth includes academics, character, leadership, service, communication, and self-understanding.':'成長不僅包括學業，也包括品格、領導力、服務精神、溝通能力和自我認識。','Share what feels unclear and what decisions are approaching. We will help you find the right starting point.':'告訴我們哪些問題仍不清晰、哪些決定即將到來，我們會幫助您找到合適的起點。',
  'Four-year high school course planning':'高中四年課程規劃','College research and balanced list development':'大學研究與平衡的選校名單','Application strategy, timelines, and essays':'申請策略、時間規劃與文書','Résumé preparation and interview coaching':'履歷準備與面試輔導','Scholarship and financial-aid planning guidance':'獎學金與助學金規劃指導','Study habits, time management, and goal setting':'學習習慣、時間管理與目標設定','Interest, talent, and learning-style exploration':'興趣、潛能與學習方式探索','Parent–teen communication':'家長與青少年溝通','Students':'學生','Parents':'家長','In person':'線下','Virtual':'線上',
  'Personalized academic and extracurricular roadmap':'個人化學業與課外活動路線圖','Regular goal-setting and progress reviews':'定期設定目標並檢視進展','Leadership, service, and activity planning':'領導力、社區服務與活動規劃','College research and application preparation':'大學研究與申請準備','Essay, résumé, and interview support':'文書、履歷與面試支持','Deadline management and accountability':'截止日期管理與持續督促','Confidence-building and age-appropriate life decisions':'自信培養與適齡的人生決策','Multi-semester':'跨學期','Personal roadmap':'專屬路線圖','Accountability':'持續督促',
  'For students, parents, churches, schools, and community groups seeking practical, engaging instruction.':'適合希望獲得實用且富有互動性指導的學生、家長、教會、學校和社區團體。','Explore Workshops':'瞭解講座與工作坊','Popular areas':'熱門領域','Four-year high school planning':'高中四年規劃','College application strategy':'大學申請策略','Communicating with teenagers':'與青少年溝通','Student confidence and healthy habits':'學生自信與健康習慣','Parenting and family communication':'親子教育與家庭溝通','Public events':'公開活動','Private groups':'團體專場','We will listen, identify the immediate priorities, and recommend an appropriate next step—without making the process more complicated than it needs to be.':'我們會認真傾聽，找出當前最重要的事項，並建議合適的下一步，不讓規劃過程變得不必要地複雜。',
  'A practical session for students and parents who want to make purposeful course choices without losing sight of balance, interests, and long-term goals.':'這是一場面向學生與家長的實用講座，幫助家庭有目標地選擇課程，同時兼顧學習平衡、個人興趣和長期方向。','Connect graduation requirements with future goals':'把畢業要求與未來目標連結起來','Think wisely about rigor, electives, and balance':'理性考量課程難度、選修課與學習平衡','Use activities to explore interests and develop leadership':'透過活動探索興趣並培養領導力','Identify the next decisions your family needs to make':'明確家庭接下來需要做出的決定','Schedule:':'時間安排：','Four-year course planning, application strategy, college selection, essays, interviews, scholarships, and financial-aid planning.':'高中四年課程規劃、申請策略、大學選擇、文書、面試、獎學金及助學金規劃。','Confidence, time management, learning habits, interest discovery, leadership, service, and healthy decision-making.':'自信、時間管理、學習習慣、興趣探索、領導力、服務精神和健康決策。','Positive parenting approaches, communicating with teenagers, managing conflict, and creating healthier planning conversations.':'積極的親子教育方式、與青少年溝通、衝突管理，以及建立更健康的規劃對話。','Scope of service:':'服務範圍：','We welcome inquiries from parent groups, churches, schools, and community organizations.':'歡迎家長團體、教會、學校和社區組織聯絡我們。','Educational workshops are informational and not clinical care.':'教育講座僅提供資訊，不屬於臨床醫療或心理治療服務。',
  'Please do not include sensitive medical, financial, school-record, or application-account information in your first message.':'請勿在首次聯絡時提供敏感的醫療、財務、學籍紀錄或申請帳戶資訊。','(optional)':'（選填）','By continuing, you are choosing to send this information by email to Tree of Life Education & Communication.':'繼續操作即表示您選擇透過電子郵件將這些資訊傳送給生命樹教育與溝通。'
});

const originalText = new WeakMap();
const originalAttributes = new WeakMap();
const normalizeText = value => value.replace(/\s+/g, ' ').trim();

function collectTranslatableNodes() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.parentElement?.closest('[data-no-i18n], script, style')) continue;
    if (normalizeText(node.nodeValue || '')) {
      originalText.set(node, node.nodeValue);
      nodes.push(node);
    }
  }
  document.querySelectorAll('[alt],[aria-label]').forEach(el => {
    originalAttributes.set(el, {alt: el.getAttribute('alt'), aria: el.getAttribute('aria-label')});
  });
  return nodes;
}

const translatableNodes = collectTranslatableNodes();
const originalTitle = document.title;

function applyLanguage(language) {
  const dictionary = translations[language] || {};
  translatableNodes.forEach(node => {
    const source = originalText.get(node) || '';
    const key = normalizeText(source);
    if (language === 'en') node.nodeValue = source;
    else if (dictionary[key]) node.nodeValue = source.replace(key, dictionary[key]);
    else node.nodeValue = source;
  });
  document.documentElement.lang = language === 'en' ? 'en-US' : language;
  document.title = language === 'en' ? originalTitle : (dictionary[originalTitle] || originalTitle);
  document.querySelectorAll('[data-language-select]').forEach(select => { select.value = language; });
  localStorage.setItem('tree-of-life-language', language);
}

document.querySelectorAll('[data-language-select]').forEach(select => {
  select.addEventListener('change', event => applyLanguage(event.target.value));
});

applyLanguage(localStorage.getItem('tree-of-life-language') || 'en');
