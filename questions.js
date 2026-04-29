// Banque de 25 questions — Test Sécurité Gros Œuvre (FR / PT / AR)
// Source : test_securite_pictos.docx — QCM visuel simple
// Barème : 1 point par question. Seuil : 18/25.
// Questions éliminatoires conseillées : 1, 5, 9, 19, 25.
window.QUESTIONS = [
  {
    id: 1, type: "single", category: "EPI", icon: "helmet", picto: "pictos/image1.png", eliminating: true,
    fr: { question: "Que signifie ce pictogramme ?",
      options: ["Le casque est conseillé", "Le casque est obligatoire", "Le casque est interdit"] },
    pt: { question: "O que significa este pictograma ?",
      options: ["O capacete é aconselhado", "O capacete é obrigatório", "O capacete é proibido"] },
    ar: { question: "ماذا يعني هذا الرمز التحذيري؟",
      options: ["الخوذة مُستحسَنة", "الخوذة إلزامية", "الخوذة ممنوعة"] },
    correct: [1],
    explanation: {
      fr: "Ce pictogramme rond bleu signifie une obligation : le casque doit être porté en permanence dans la zone.",
      pt: "Este pictograma redondo azul significa uma obrigação: o capacete deve ser usado sempre na zona.",
      ar: "هذا الرمز الأزرق الدائري يعني إلزاماً: يجب ارتداء الخوذة دائماً في المنطقة."
    }
  },
  {
    id: 2, type: "multi", category: "EPI", icon: "helmet", picto: "pictos/image2.png",
    fr: { question: "Quels éléments sont des EPI ?",
      options: ["Casque", "Gants", "Garde-corps", "Chaussures de sécurité"] },
    pt: { question: "Quais elementos são EPI ?",
      options: ["Capacete", "Luvas", "Guarda-corpos", "Calçado de segurança"] },
    ar: { question: "أيّ العناصر التالية تُعدّ معدات حماية فردية ؟",
      options: ["الخوذة", "القفازات", "حاجز الحماية", "حذاء السلامة"] },
    correct: [0, 1, 3],
    explanation: {
      fr: "Les EPI sont portés par la personne (casque, gants, chaussures). Le garde-corps est une protection collective.",
      pt: "Os EPI são usados pela pessoa (capacete, luvas, calçado). O guarda-corpos é uma proteção coletiva.",
      ar: "معدات الحماية الفردية يرتديها الشخص (خوذة، قفازات، حذاء). حاجز الحماية هو حماية جماعية."
    }
  },
  {
    id: 3, type: "single", category: "Prévention", icon: "welcome", picto: "pictos/image3.png",
    fr: { question: "Avant de commencer à travailler sur un chantier, je dois :",
      options: ["Commencer tout de suite", "Écouter les consignes de sécurité", "Faire comme les autres"] },
    pt: { question: "Antes de começar a trabalhar numa obra, devo :",
      options: ["Começar imediatamente", "Ouvir as instruções de segurança", "Fazer como os outros"] },
    ar: { question: "قبل البدء بالعمل في الورشة، يجب عليّ :",
      options: ["البدء مباشرةً", "الاستماع إلى تعليمات السلامة", "أن أقلّد الآخرين"] },
    correct: [1],
    explanation: {
      fr: "L'accueil sécurité et les consignes sont obligatoires avant toute prise de poste.",
      pt: "O acolhimento de segurança e as instruções são obrigatórios antes de iniciar o trabalho.",
      ar: "الاستقبال الأمني وتعليمات السلامة إلزامية قبل بدء العمل."
    }
  },
  {
    id: 4, type: "multi", category: "Dangers", icon: "stop", picto: "pictos/image3.png",
    fr: { question: "Quels dangers existe-t-il sur un chantier ?",
      options: ["Chute", "Bruit", "Glissade", "Aucun danger"] },
    pt: { question: "Que perigos existem numa obra ?",
      options: ["Queda", "Ruído", "Escorregadela", "Nenhum perigo"] },
    ar: { question: "ما هي المخاطر الموجودة في الورشة ؟",
      options: ["السقوط", "الضجيج", "الانزلاق", "لا يوجد خطر"] },
    correct: [0, 1, 2],
    explanation: {
      fr: "Le chantier cumule plusieurs risques : chute, bruit, glissade, poussière, etc.",
      pt: "A obra acumula vários riscos: queda, ruído, escorregadela, poeira, etc.",
      ar: "تجتمع في الورشة عدة مخاطر: السقوط، الضجيج، الانزلاق، الغبار، إلخ."
    }
  },
  {
    id: 5, type: "single", category: "Prévention", icon: "user", picto: "pictos/image3.png", eliminating: true,
    fr: { question: "Je vois un danger sur le chantier. Que dois-je faire ?",
      options: ["Je ne dis rien", "Je préviens le responsable", "Je continue à travailler"] },
    pt: { question: "Vejo um perigo na obra. O que devo fazer ?",
      options: ["Não digo nada", "Aviso o responsável", "Continuo a trabalhar"] },
    ar: { question: "أرى خطراً في الورشة. ماذا أفعل ؟",
      options: ["لا أقول شيئاً", "أُبلغ المسؤول", "أواصل العمل"] },
    correct: [1],
    explanation: {
      fr: "Tout danger doit être signalé immédiatement au responsable pour être traité.",
      pt: "Qualquer perigo deve ser sinalizado imediatamente ao responsável para ser tratado.",
      ar: "يجب الإبلاغ عن أي خطر فوراً إلى المسؤول ليتم التعامل معه."
    }
  },
  {
    id: 6, type: "single", category: "EPI", icon: "helmet", picto: "pictos/image4.png",
    fr: { question: "Pourquoi porter des chaussures de sécurité ?",
      options: ["Pour aller plus vite", "Pour protéger les pieds", "Pour le confort"] },
    pt: { question: "Porque usar calçado de segurança ?",
      options: ["Para ir mais depressa", "Para proteger os pés", "Pelo conforto"] },
    ar: { question: "لماذا نرتدي حذاء السلامة ؟",
      options: ["للتحرّك بسرعة أكبر", "لحماية القدمين", "للراحة"] },
    correct: [1],
    explanation: {
      fr: "Les chaussures de sécurité protègent des chocs, des perforations et des écrasements.",
      pt: "O calçado de segurança protege contra choques, perfurações e esmagamentos.",
      ar: "حذاء السلامة يحمي من الصدمات والثقوب والسحق."
    }
  },
  {
    id: 7, type: "multi", category: "EPI", icon: "helmet", picto: "pictos/image2.png",
    fr: { question: "Quels EPI sont en général obligatoires sur chantier ?",
      options: ["Casque", "Gilet haute visibilité", "Tongs", "Chaussures de sécurité"] },
    pt: { question: "Que EPI são geralmente obrigatórios em obra ?",
      options: ["Capacete", "Colete de alta visibilidade", "Chinelos", "Calçado de segurança"] },
    ar: { question: "ما هي معدات الحماية الإلزامية عادةً في الورشة ؟",
      options: ["الخوذة", "سترة الوضوح العالي", "الشبشب", "حذاء السلامة"] },
    correct: [0, 1, 3],
    explanation: {
      fr: "Casque, gilet haute visibilité et chaussures de sécurité sont la base. Les tongs sont interdites.",
      pt: "Capacete, colete de alta visibilidade e calçado de segurança são a base. Os chinelos são proibidos.",
      ar: "الخوذة وسترة الوضوح وحذاء السلامة هي الأساس. الشبشب ممنوع."
    }
  },
  {
    id: 8, type: "single", category: "Chutes de hauteur", icon: "height", picto: "pictos/image5.png",
    fr: { question: "Une chute peut être grave à partir de :",
      options: ["50 cm", "5 mètres", "10 mètres"] },
    pt: { question: "Uma queda pode ser grave a partir de :",
      options: ["50 cm", "5 metros", "10 metros"] },
    ar: { question: "السقوط قد يكون خطيراً ابتداءً من :",
      options: ["50 سم", "5 أمتار", "10 أمتار"] },
    correct: [0],
    explanation: {
      fr: "Même une chute de faible hauteur peut causer des blessures graves (tête, dos).",
      pt: "Mesmo uma queda de pouca altura pode causar ferimentos graves (cabeça, costas).",
      ar: "حتى السقوط من ارتفاع منخفض قد يسبب إصابات خطيرة (الرأس، الظهر)."
    }
  },
  {
    id: 9, type: "multi", category: "Chutes de hauteur", icon: "harness", picto: "pictos/image5.png", eliminating: true,
    fr: { question: "Comment éviter une chute de hauteur ?",
      options: ["Installer un garde-corps", "Laisser le chantier en désordre", "Utiliser un harnais si nécessaire", "Ranger les outils"] },
    pt: { question: "Como evitar uma queda em altura ?",
      options: ["Instalar um guarda-corpos", "Deixar a obra desarrumada", "Usar um arnês se necessário", "Arrumar as ferramentas"] },
    ar: { question: "كيف نتجنب السقوط من علوّ ؟",
      options: ["تركيب حاجز حماية", "ترك الورشة في فوضى", "استعمال حزام الأمان عند الحاجة", "ترتيب الأدوات"] },
    correct: [0, 2, 3],
    explanation: {
      fr: "Garde-corps, harnais et rangement réduisent le risque de chute. Le désordre l'aggrave.",
      pt: "Guarda-corpos, arnês e arrumação reduzem o risco de queda. A desordem agrava-o.",
      ar: "حاجز الحماية، حزام الأمان، والترتيب تقلّل من خطر السقوط. الفوضى تزيده."
    }
  },
  {
    id: 10, type: "single", category: "Échafaudages", icon: "scaffold", picto: "pictos/image6.png",
    fr: { question: "Un échafaudage doit être :",
      options: ["Stable et vérifié", "Utilisé même abîmé", "Monté sans contrôle"] },
    pt: { question: "Um andaime deve ser :",
      options: ["Estável e verificado", "Utilizado mesmo danificado", "Montado sem controlo"] },
    ar: { question: "يجب أن تكون السقالة :",
      options: ["مستقرّة ومُتحقَّق منها", "مستعملة حتى لو كانت تالفة", "مُركَّبة دون مراقبة"] },
    correct: [0],
    explanation: {
      fr: "Tout échafaudage doit être stable, conforme et vérifié avant utilisation.",
      pt: "Qualquer andaime deve ser estável, conforme e verificado antes de ser usado.",
      ar: "يجب أن تكون كل سقالة مستقرّة ومطابقة ومتحقَّقاً منها قبل الاستعمال."
    }
  },
  {
    id: 11, type: "single", category: "EPI", icon: "helmet", picto: "pictos/image7.png",
    fr: { question: "Le gilet haute visibilité sert à :",
      options: ["Être vu par les autres", "Se protéger du froid", "Décorer"] },
    pt: { question: "O colete de alta visibilidade serve para :",
      options: ["Ser visto pelos outros", "Proteger do frio", "Decorar"] },
    ar: { question: "سترة الوضوح العالي تفيد في :",
      options: ["أن يراني الآخرون", "الحماية من البرد", "الزينة"] },
    correct: [0],
    explanation: {
      fr: "Le gilet haute visibilité permet d'être vu, surtout des engins et véhicules.",
      pt: "O colete de alta visibilidade permite ser visto, sobretudo pelas máquinas e veículos.",
      ar: "سترة الوضوح تسمح بأن يراك الآخرون، خاصةً الآليات والمركبات."
    }
  },
  {
    id: 12, type: "multi", category: "Machines", icon: "grinder", picto: "pictos/image8.png",
    fr: { question: "Quels sont les risques liés aux machines ?",
      options: ["Coupure", "Écrasement", "Coincement", "Aucun risque"] },
    pt: { question: "Quais são os riscos ligados às máquinas ?",
      options: ["Corte", "Esmagamento", "Aperto", "Nenhum risco"] },
    ar: { question: "ما هي المخاطر المرتبطة بالآلات ؟",
      options: ["الجرح", "السحق", "الانحشار", "لا يوجد خطر"] },
    correct: [0, 1, 2],
    explanation: {
      fr: "Les machines présentent toujours des risques : coupure, écrasement, coincement. Jamais « aucun risque ».",
      pt: "As máquinas apresentam sempre riscos: corte, esmagamento, aperto. Nunca « nenhum risco ».",
      ar: "الآلات تشكّل دائماً مخاطر: الجرح، السحق، الانحشار. لا يوجد أبداً «بدون خطر»."
    }
  },
  {
    id: 13, type: "single", category: "Outils", icon: "grinder", picto: "pictos/image8.png",
    fr: { question: "Avant d'utiliser un outil, je dois :",
      options: ["Vérifier son état", "L'utiliser directement", "Le lancer"] },
    pt: { question: "Antes de usar uma ferramenta, devo :",
      options: ["Verificar o seu estado", "Usá-la diretamente", "Atirá-la"] },
    ar: { question: "قبل استعمال الأداة، يجب عليّ :",
      options: ["التحقق من حالتها", "استعمالها مباشرةً", "رميها"] },
    correct: [0],
    explanation: {
      fr: "Toujours vérifier l'état d'un outil avant utilisation (lame, câble, protection).",
      pt: "Verificar sempre o estado de uma ferramenta antes de a usar (lâmina, cabo, proteção).",
      ar: "تحقّق دائماً من حالة الأداة قبل استعمالها (النصل، السلك، الحماية)."
    }
  },
  {
    id: 14, type: "multi", category: "Urgence", icon: "medical", picto: "pictos/image3.png",
    fr: { question: "En cas d'accident sur le chantier :",
      options: ["Je préviens", "J'aide si je suis formé", "Je pars", "Je sécurise la zone"] },
    pt: { question: "Em caso de acidente na obra :",
      options: ["Aviso", "Ajudo se tiver formação", "Vou-me embora", "Protejo a zona"] },
    ar: { question: "في حالة وقوع حادث في الورشة :",
      options: ["أُبلّغ", "أساعد إن كنت مُدرَّباً", "أنصرف", "أُؤمِّن المنطقة"] },
    correct: [0, 1, 3],
    explanation: {
      fr: "Prévenir, sécuriser la zone et aider si on est formé. Jamais fuir.",
      pt: "Avisar, proteger a zona e ajudar se tiver formação. Nunca fugir.",
      ar: "التبليغ، تأمين المنطقة، والمساعدة إن كنت مُدرَّباً. لا تفرّ أبداً."
    }
  },
  {
    id: 15, type: "single", category: "Rangement", icon: "broom", picto: "pictos/image3.png",
    fr: { question: "Un sol encombré peut provoquer :",
      options: ["Une chute", "Rien", "Plus de sécurité"] },
    pt: { question: "Um piso desarrumado pode provocar :",
      options: ["Uma queda", "Nada", "Mais segurança"] },
    ar: { question: "الأرضية المزدحمة يمكن أن تسبب :",
      options: ["السقوط", "لا شيء", "مزيداً من السلامة"] },
    correct: [0],
    explanation: {
      fr: "Un sol encombré est une cause fréquente de chutes de plain-pied.",
      pt: "Um piso desarrumado é uma causa frequente de quedas ao mesmo nível.",
      ar: "الأرضية المزدحمة سبب شائع للسقوط على نفس المستوى."
    }
  },
  {
    id: 16, type: "multi", category: "Protection collective", icon: "scaffold", picto: "pictos/image9.png",
    fr: { question: "Les protections collectives sont :",
      options: ["Garde-corps", "Filets", "Casque", "Barrières"] },
    pt: { question: "As proteções coletivas são :",
      options: ["Guarda-corpos", "Redes", "Capacete", "Barreiras"] },
    ar: { question: "وسائل الحماية الجماعية هي :",
      options: ["حاجز الحماية", "الشباك", "الخوذة", "الحواجز"] },
    correct: [0, 1, 3],
    explanation: {
      fr: "Les protections collectives protègent tout le monde. Le casque est un EPI (individuel).",
      pt: "As proteções coletivas protegem toda a gente. O capacete é um EPI (individual).",
      ar: "الحماية الجماعية تحمي الجميع. الخوذة حماية فردية."
    }
  },
  {
    id: 17, type: "single", category: "Bruit", icon: "noise", picto: "pictos/image10.png",
    fr: { question: "Le bruit sur chantier peut :",
      options: ["Abîmer l'audition", "Aider à travailler", "Ne rien faire"] },
    pt: { question: "O ruído na obra pode :",
      options: ["Danificar a audição", "Ajudar a trabalhar", "Não fazer nada"] },
    ar: { question: "الضجيج في الورشة يمكن أن :",
      options: ["يُتلف السمع", "يساعد على العمل", "لا يفعل شيئاً"] },
    correct: [0],
    explanation: {
      fr: "Le bruit prolongé endommage l'audition de façon irréversible.",
      pt: "O ruído prolongado danifica a audição de forma irreversível.",
      ar: "الضجيج المطوَّل يُتلف السمع بشكل لا رجعة فيه."
    }
  },
  {
    id: 18, type: "multi", category: "Bruit", icon: "noise", picto: "pictos/image10.png",
    fr: { question: "Quels équipements protègent du bruit ?",
      options: ["Bouchons d'oreilles", "Casque antibruit", "Casque de chantier", "Lunettes"] },
    pt: { question: "Que equipamentos protegem do ruído ?",
      options: ["Tampões auditivos", "Auscultadores antirruído", "Capacete de obra", "Óculos"] },
    ar: { question: "ما هي المعدات التي تحمي من الضجيج ؟",
      options: ["سدادات الأذن", "سماعات واقية من الضجيج", "خوذة الورشة", "النظارات"] },
    correct: [0, 1],
    explanation: {
      fr: "Bouchons d'oreilles et casque antibruit protègent l'audition. Le casque de chantier protège la tête.",
      pt: "Tampões auditivos e auscultadores antirruído protegem a audição. O capacete de obra protege a cabeça.",
      ar: "سدادات الأذن والسماعات الواقية تحمي السمع. خوذة الورشة تحمي الرأس."
    }
  },
  {
    id: 19, type: "single", category: "EPI", icon: "helmet", picto: "pictos/image2.png", eliminating: true,
    fr: { question: "Ne pas porter ses EPI peut provoquer :",
      options: ["Un accident", "Rien", "Une prime"] },
    pt: { question: "Não usar os EPI pode provocar :",
      options: ["Um acidente", "Nada", "Um prémio"] },
    ar: { question: "عدم ارتداء معدات الحماية يمكن أن يسبب :",
      options: ["حادثاً", "لا شيء", "علاوة"] },
    correct: [0],
    explanation: {
      fr: "Ne pas porter ses EPI expose à des blessures graves et à des sanctions.",
      pt: "Não usar os EPI expõe a ferimentos graves e a sanções.",
      ar: "عدم ارتداء معدات الحماية يعرّضك لإصابات خطيرة وعقوبات."
    }
  },
  {
    id: 20, type: "multi", category: "Manutention", icon: "lift", picto: "pictos/image11.png",
    fr: { question: "Avant de porter une charge lourde :",
      options: ["Je vérifie le poids", "Je plie les jambes", "Je porte seul même si c'est trop lourd", "Je demande de l'aide"] },
    pt: { question: "Antes de transportar uma carga pesada :",
      options: ["Verifico o peso", "Dobro as pernas", "Transporto sozinho mesmo se for pesado demais", "Peço ajuda"] },
    ar: { question: "قبل حمل شيء ثقيل :",
      options: ["أتحقّق من الوزن", "أثني ركبتيّ", "أحمل وحدي حتى لو كان ثقيلاً جداً", "أطلب المساعدة"] },
    correct: [0, 1, 3],
    explanation: {
      fr: "Vérifier le poids, plier les jambes et demander de l'aide évitent les blessures au dos.",
      pt: "Verificar o peso, dobrar as pernas e pedir ajuda evita lesões nas costas.",
      ar: "التحقق من الوزن، ثني الركبتين، وطلب المساعدة تحمي الظهر من الإصابات."
    }
  },
  {
    id: 21, type: "single", category: "Signalisation", icon: "stop", picto: "pictos/image9.png",
    fr: { question: "Une zone avec rubalise ou barrière signifie :",
      options: ["Zone dangereuse ou interdite", "Zone de repos", "Zone sans danger"] },
    pt: { question: "Uma zona com fita ou barreira significa :",
      options: ["Zona perigosa ou proibida", "Zona de repouso", "Zona sem perigo"] },
    ar: { question: "المنطقة المحاطة بشريط أو حاجز تعني :",
      options: ["منطقة خطرة أو ممنوعة", "منطقة للراحة", "منطقة بدون خطر"] },
    correct: [0],
    explanation: {
      fr: "Rubalise et barrières délimitent une zone à risque ou à accès interdit.",
      pt: "Fita e barreiras delimitam uma zona de risco ou de acesso proibido.",
      ar: "الشريط والحواجز تحدّد منطقة خطرة أو ممنوعة الدخول."
    }
  },
  {
    id: 22, type: "multi", category: "Comportement", icon: "school", picto: "pictos/image3.png",
    fr: { question: "Quels sont les bons comportements sur chantier ?",
      options: ["Respecter les consignes", "Être attentif", "Courir", "Ranger son poste"] },
    pt: { question: "Quais são os bons comportamentos na obra ?",
      options: ["Respeitar as instruções", "Estar atento", "Correr", "Arrumar o posto"] },
    ar: { question: "ما هي السلوكيات الجيدة في الورشة ؟",
      options: ["احترام التعليمات", "الانتباه", "الركض", "ترتيب مكان العمل"] },
    correct: [0, 1, 3],
    explanation: {
      fr: "Respect des consignes, attention et rangement. Courir augmente les risques de chute.",
      pt: "Respeito das instruções, atenção e arrumação. Correr aumenta o risco de queda.",
      ar: "احترام التعليمات، الانتباه، والترتيب. الركض يزيد خطر السقوط."
    }
  },
  {
    id: 23, type: "single", category: "Chutes de hauteur", icon: "harness", picto: "pictos/image12.png",
    fr: { question: "Le harnais sert à :",
      options: ["Éviter une chute", "Porter des outils", "Se reposer"] },
    pt: { question: "O arnês serve para :",
      options: ["Evitar uma queda", "Transportar ferramentas", "Descansar"] },
    ar: { question: "حزام الأمان يفيد في :",
      options: ["تجنّب السقوط", "حمل الأدوات", "الاستراحة"] },
    correct: [0],
    explanation: {
      fr: "Le harnais est un EPI contre les chutes de hauteur, relié à un point d'ancrage.",
      pt: "O arnês é um EPI contra quedas em altura, ligado a um ponto de ancoragem.",
      ar: "حزام الأمان هو معدّات حماية ضد السقوط من علوّ، مربوط بنقطة تثبيت."
    }
  },
  {
    id: 24, type: "multi", category: "Outils", icon: "grinder", picto: "pictos/image8.png",
    fr: { question: "Un outil cassé ou dangereux :",
      options: ["Je le signale", "Je continue à l'utiliser", "Je le mets de côté", "Je le répare seul sans autorisation"] },
    pt: { question: "Uma ferramenta partida ou perigosa :",
      options: ["Sinalizo-a", "Continuo a usá-la", "Ponho-a de lado", "Reparo-a sozinho sem autorização"] },
    ar: { question: "أداة مكسورة أو خطيرة :",
      options: ["أُبلّغ عنها", "أواصل استعمالها", "أضعها جانباً", "أُصلحها وحدي دون إذن"] },
    correct: [0, 2],
    explanation: {
      fr: "Un outil défectueux se signale et se met de côté. Ne jamais l'utiliser ou le réparer sans autorisation.",
      pt: "Uma ferramenta defeituosa sinaliza-se e põe-se de lado. Nunca a use nem repare sem autorização.",
      ar: "الأداة المعطوبة يُبلَّغ عنها وتوضع جانباً. لا تُستعمل ولا تُصلَح دون إذن."
    }
  },
  {
    id: 25, type: "single", category: "Culture sécurité", icon: "welcome", picto: "pictos/image3.png", eliminating: true,
    fr: { question: "La sécurité sur chantier, c'est :",
      options: ["L'affaire de tous", "L'affaire du chef uniquement", "Inutile"] },
    pt: { question: "A segurança na obra é :",
      options: ["Responsabilidade de todos", "Apenas do chefe", "Inútil"] },
    ar: { question: "السلامة في الورشة هي :",
      options: ["مسؤولية الجميع", "مسؤولية الرئيس فقط", "غير مفيدة"] },
    correct: [0],
    explanation: {
      fr: "La sécurité est l'affaire de chacun : chef, ouvriers, intérimaires. Chacun est responsable.",
      pt: "A segurança é responsabilidade de cada um: chefe, operários, temporários. Todos são responsáveis.",
      ar: "السلامة مسؤولية الجميع: الرئيس، العمال، المؤقتون. كلٌّ مسؤول."
    }
  }
];
