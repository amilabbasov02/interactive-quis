let currentQuestionIndex = 0;
let scores = {
    pozitiv: 0,
    Yaradıcılıq: 0,
    səyahətçi: 0,
    Stil: 0,
    strateq: 0,
    startapçı: 0,
    Meloman: 0,
    serial: 0,
    Təşkilatçı: 0,
    əbədiyyət: 0
};

const questions = [
    {
        "question": "Hədiyyə alacağınız insan hansı istirahət növünə üstünlük verir?",
        "image": "./assets/img/Picture1.jpg",
        "options": [
            { "text": "Aktiv istirahəti sevir. Səyahət, gəzinti, idman fəaliyyətləri onun həyat tərzidir.", "type": "səyahətçi" },
            { "text": "Dostları və ailəsi ilə vaxt keçirməyə üstünlük verir, hətta hər gün yaxınları ilə ünsiyyət saxlamağa çalışır.", "type": "pozitiv" },
            { "text": "Evdə oturan insandır. Kitab oxumaq və seriala baxmaq onun üçün ideal istirahətdir.", "type": "serial" }
        ]
    },
    {
        "question": " Hədiyyə vermək istədiyiniz insan dizayn və moda sahəsindəki son trendləri izləyir?",
        "image": "./assets/img/Picture1.jpg",
        "options": [
            { "text": "Onun üçün stil və xarici görünüş çox önəmlidir, həmişə trendləri izləyir.", "type": "pozitiv" },
            { "text": "Stil və dizayn onun üçün ən vacib aspekt deyil, trendləri ara-sıra izləyir.", "type": "teknoloji" },
            { "text": "Dizayn onun üçün böyük əhəmiyyət daşımır, əsas odur ki, əşya rahat olsun.", "type": "stil" }
        ]
    },
    {
        "question": "Hədiyyə hazırladığınız insan neçə müddətdən bir səyahət edir?",
        "image": "./assets/img/Picture1.jpg",
        "options": [
            { "text": "Tez-tez edir, o, həmişə yoldadır", "type": "pozitiv" },
            { "text": "Bəzən, iş üçün və ya məzuniyyət zamanı.", "type": "profesyonel" },
            { "text": "Nadir zamanlarda, əsasən, ehtiyac olduqda səyahət edir.", "type": "sosyal" }
        ]
    },
    {
        "question": "Hədiyyə seçdiyiniz insanı musiqisevər adlandırmaq olar? O, musiqi dinləməyi sevir?",
        "image": "./assets/img/Picture1.jpg",
        "options": [
            { "text": "Şübhəsiz! O, daim musiqi dinləyir.", "type": "pozitiv" },
            { "text": "Ara-sıra musiqi dinləyir.", "type": "profesyonel" },
            { "text": "Maraqlı kitab oxumağa üstünlük verir.", "type": "sosyal" }
        ]
    },
    {
        "question": "Hədiyyə seçdiyiniz insan sağlamlığına nə qədər diqqət edir?",
        "image": "./assets/img/Picture1.jpg",
        "options": [
            { "text": "Bu, onun üçün çox vacibdir, özünə diqqət edir və idmanla məşğul olur.", "type": "pozitiv" },
            { "text": "Sağlamlığına diqqət yetirir, amma həmişə idman etmək üçün vaxt tapmır.", "type": "profesyonel" },
            { "text": " Ən yaxşı idman - divandan qalxmadan baxacağın idmandır.", "type": "sosyal" }
        ]
    },
    {
        "question": "Hədiyyə seçdiyiniz insanı yaradıcı şəxs adlandırmaq olar?",
        "image": "./assets/img/Picture1.jpg",
        "options": [
            { "text": "Bəli, o, sənətə maraq göstərir və sənətlə məşğul olur.", "type": "pozitiv" },
            { "text": "Yaradıcı fəaliyyətləri sevir, amma buna vaxt tapa bilmir.", "type": "profesyonel" },
            { "text": "Pizza yemək və mağazaları gəzməklə “incəsənəti” öyrənir.", "type": "sosyal" }
        ]
    },
    {
        "question": "Sizin fikrinizcə, hədiyyə seçdiyiniz insanı daha çox hansı hədiyyə sevindirər?",
        "image": "./assets/img/Picture1.jpg",
        "options": [
            { "text": "Texnologiya ilə bağlı cihazlar və qurğular", "type": "pozitiv" },
            { "text": "Ev üçün faydalı və praktik hədiyyələr", "type": "profesyonel" },
            { "text": "Əhval-ruhiyyəni yüksəldən qeyri-adi və ya yaradıcı bir şey", "type": "sosyal" }
        ]
    },
    {
        "question": "Hədiyyə seçdiyiniz insan fotoşəkil və video çəkməyi sevir?",
        "image": "./assets/img/Picture1.jpg",
        "options": [
            { "text": "Çəkir, montaj edir, paylaşır və yüzlərlə bəyənmə toplayır.", "type": "pozitiv" },
            { "text": "Yalnız həyatda mühüm hesab etdiyi anları çəkir.", "type": "profesyonel" },
            { "text": "Çox da sevmir.", "type": "sosyal" }
        ]
    },
    {
        "question": "Hədiyyə seçdiyiniz insanın məişət və işdə səliqə-sahmanını necə xarakterizə edərdiniz?",
        "image": "./assets/img/Picture1.jpg",
        "options": [
            { "text": "Həmişə nizam-intizamlıdır, hər şey öz yerində olur.", "type": "pozitiv" },
            { "text": "Nizamı qorumağa çalışır, amma məncə, bu, həmişə alınmır.", "type": "profesyonel" },
            { "text": "Səliqə və nizamla heç bir əlaqəsi yoxdur.", "type": "sosyal" }
        ]
    },
    {
        "question": "Sizin sürpriz hazırladığınız insan iş həyatında nə qədər məşğuldur?",
        "image": "./assets/img/Picture1.jpg",
        "options": [
            { "text": "Həmişə məşğuldur, sıx qrafiki var və işləri çoxdur.", "type": "pozitiv" },
            { "text": "Özünə kifayət qədər vaxt ayırır, amma işlərində də diqqətlidir və buna zaman sərf edir.", "type": "profesyonel" },
            { "text": "Vaxtını, əsasən, sakit keçirir, nadir hallarda çox məşğul olur.", "type": "sosyal" }
        ]
    }
];


document.getElementById('start-button').addEventListener('click', startQuiz);

function startQuiz() {
    gsap.to('#intro-screen', { opacity: 0, duration: 1, onComplete: () => {
        document.getElementById('intro-screen').classList.add('hidden');
        document.getElementById('intro-image-container').classList.add('hidden');
        document.getElementById('progress').classList.remove('hidden');
        document.getElementById('quiz-content').classList.remove('hidden');
        generateDots();
        loadQuestion();
    }});
}

function generateDots() {
    const dotsContainer = document.getElementById('dots');
    dotsContainer.innerHTML = '';
    questions.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
    });
}

function loadQuestion() {
    const questionContainer = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    const dots = document.querySelectorAll('.dot');
    const questionNumber = document.getElementById('question-number');
    const questionImage = document.getElementById('image');
    const questionImageContainer = document.getElementById('question-image');

    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionContainer.textContent = currentQuestion.question;
        questionImageContainer.classList.remove('hidden');
        questionImage.src = currentQuestion.image;

        optionsContainer.innerHTML = '';
        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option.text;
            button.classList.add('option-button');
            button.onclick = () => selectOption(option.type);
            optionsContainer.appendChild(button);
        });

        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentQuestionIndex].classList.add('active');
        questionNumber.textContent = `${currentQuestionIndex + 1}/${questions.length}`;

        gsap.fromTo(questionContainer, { opacity: 0 }, { opacity: 1, duration: 1 });
        gsap.fromTo(optionsContainer, { opacity: 0 }, { opacity: 1, duration: 1, delay: 0.3 });
        
    } else {
        showResult();
    }
}

function selectOption(type) {
    scores[type]++;
    currentQuestionIndex++;
    loadQuestion();
}

function showResult() {
    gsap.to('#quiz-content', { opacity: 0, duration: 1, onComplete: () => {
        document.getElementById('quiz-content').classList.add('hidden');
        document.getElementById('progress').classList.add('hidden');
        document.getElementById('result').classList.remove('hidden');

        gsap.fromTo('#result', { opacity: 0 }, { opacity: 1, duration: 1 });
        gsap.fromTo('#result-title', { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
        gsap.fromTo('#result-description', { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
    }});

    const questionImage = document.getElementById('question-image');
    if (questionImage) {
        questionImage.classList.add('hidden'); 
    }

    const highestScoreType = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

    const resultTextMap = {
        pozitiv : {
            title: "Həmişə pozitiv əhval-ruhiyyə yaradan, hər kəsə yaxşı enerji ötürən biri üçün:",
            description: "Belə həyatsevər bir insan üçün sadəcə bir hədiyyə deyil, aktiv olmağa kömək edəcək və həyatı daha da parlaq anlarla dolduracaq bir sürpriz lazımdır."
        },
        Yaradıcılıq: {
            title: "Yaradıcılıqla məşğul olan şəxs - bəzən yaradır, bəzən də qeyri-adi işlər görür.",
            description: "Zərif bir xarakterə malik insandır, sənət və ya dizayn vasitəsilə özünü yaradıcı şəkildə ifadə etməyi sevir. Sizin hədiyyələriniz onun maraqlarını dəstəkləməli və ilham bəxş etməlidir."
        },
        səyahətçi: {
            title: " Xəritəsi olan, lakin dəqiq  istiqaməti olmayan dəbli səyahətçi",
            description: "Bir yerdə çox qalmağı sevməyən insan üçün ən yaxşı hədiyyə onunla yoldaşlıq edəcək və uzaqda olarkən hədiyyə edən şəxsi xatırladacaq əşyalardır."
        },
        Stil: {
            title: "Stilin ustadı, rahatlıq düşkünü",
            description: "Sizin yaxınınız həm stili, həm də rahatlığı yüksək qiymətləndirirsə, onun üçün funksional və eleqant görünüşlü hədiyyə mükəmməl seçim olacaq."
        },
        strateq: {
            title: "Deadline-lar şahı, yorulmayan strateq",
            description: "Bu insan daim aktivdir, onun işi yüksək diqqət tələb edir. Belə yüksək funksionallığa malik insan üçün işi təşkil etməyə və məhsuldarlığı artırmağa kömək edəcək hədiyyələr uyğundur."
        },
        startapçı : {
            title: "Texnologiya həvəskarı, startapçı və yaraşıqlı insan",
            description: "Həmişə yeniliklər axtarışında olan və qabaqcıl texnologiyaları yüksək qiymətləndirən bir şəxsdir. Belə bir insana texnoloji inkişafın nümunəsi olan hədiyyələr uyğun gəlir."
        },
        Meloman: {
            title: "Meloman-maqnat: milyon dollarlıq playlist sahibi",
            description: "Musiqi dinləməyi və ya öz musiqisini yaratmağı sevən biri üçün ideal hədiyyə səs keyfiyyətini ən yüksək səviyyədə təqdim edən əşyalar olacaq."
        },
        serial: {
            title: "Divan mütəxəssisi və serial izləmə üzrə professor",
            description: "Sizin yaxınınız rahat bir mühit yaratmağı bacarır və komfortu yüksək qiymətləndirir. Belə bir insan üçün ən yaxşı hədiyyə ailəsi ilə birlikdə vaxt keçirmək və istirahət etmək üçün imkan yaradan əşyalar olacaq."
        },
        Təşkilatçı: {
            title: "Təşkilatçılıq və nizam-intizam naziri",
            description: "Bu insan həyatda nizamı və təşkilatçılığı yüksək qiymətləndirir. Ona təmizlik və səliqəni qorumağa kömək edəcək hədiyyələr uyğun gəlir."
        },
        əbədiyyət: {
            title: "Dünyaya doymuş, əbədiyyət axtarışında olan biri",
            description: "Belə bir insan sakit vaxt keçirməyi sevir və onun üçün sakitlik, rahatlıq dəyərlidir. Ona alınacaq hədiyyənin faydalı və rasional olması emosional coşğu yaratmaqdan daha vacibdir."
        }
    };

    const resultText = resultTextMap[highestScoreType];
    document.getElementById('result-title').textContent = resultText.title;  
    document.getElementById('result-description').textContent = resultText.description; 

    const resultImage = document.getElementById('result-image');
    resultImage.src = `./assets/img/${highestScoreType}.png`;
    document.getElementById('result-image-container').classList.remove('hidden');

    showRecommendedProducts(highestScoreType);
}



function showRecommendedProducts(type) {
    const productContainer = document.getElementById('recommended-products');
    productContainer.classList.remove('hidden');
    productContainer.innerHTML = ''; 

    const productSuggestions = {
        pozitiv : [
            { text: 'Aktivliyi və sağlamlığı dəstəkləmək üçün fitnes və ya idman zalına abunəlik.', link: '#album' },
            { text: 'Ekstremal idmanla məşğul olmaq üçün hədiyyə sertifikatı – paraşütlə tullanma, dırmanma divarı, hava şarı ilə uçuş və ya digər aktiv əyləncələr.', link: '#cards' },
            { text: ' 4-cü nəsil AirPods – əla səs izolyasiya funksiyası olan qulaqlıqlar. Aktiv həyat tərzi keçirən və keyfiyyətli səsi dəyərləndirənlər üçün uyğun seçimdir. iSpace mağazasında 25 dekabra qədər xüsusi qiymətlərlə təklif olunur.', link: '#vacation' }
        ],
        Yaradıcılıq: [
            { text: 'Rəsm və yaradıcılıqla maraqlananlar üçün yaradıcılıq ləvazimatları dəsti.', link: '#books' },
            { text: 'Teatr və ya muzey biletləri', link: '#coaching' },
            { text: 'iPad 10 rəsm çəkmək, dizayn etmək və qrafika ilə işləmək üçün universal bir cihazdır. Yüngül çəkilidir, güclüdür və möhtəşəm ekranı var. Kontakt Home-da  5 yanvar tarixinə qədər 10-cu nəsil iPad xüsusi qiymətlərlə təklif olunur.', link: '#decor' }
        ],
        səyahətçi: [
            { text: 'AirTag - çamadan, çanta və ya açar kimi əşyalara nəzarət etməyə kömək edir. Apple şirkətinin Azərbaycandakı Rəsmi Satış Tərəfdaşı Baku Electronics-də AirTag-i əldə etmək mümkündür.', link: '#tickets' },
            { text: 'Yeni macəralar axtaran şəxsə səyahət haqqında kitab', link: '#gifts' },
            { text: 'Səyahət çantası - uzun səyahətlər üçün geniş və rahatdır.', link: '#outdoor' }
        ],
        Stil: [
            { text: 'Magic Mouse - bu zərif və rahat əşya, şübhəsiz ki, işdə ideal köməkçidir. Apple aksesuarlarını Azərbaycandakı premium tərəfdaşı iSpace-dən əldə edə bilərsiniz.', link: '#climbing' },
            { text: 'Notbuk üçün altlıq - rahat işləməyə kömək edən və qaməti yaxşılaşdıracaq.', link: '#adventure' },
            { text: 'Orijinal Apple telefon qoruyucu örtük - telefonu qoruyacaq və istənilən stilə uyğun bir aksesuar olacaq.  Kontakt Home mağazasında Apple telefon örtüklərinin geniş seçimi mövcuddur.', link: '#maps' }
        ],
        strateq: [
            { text: 'İnkişaf etmək və məhsuldarlığını artırmaq istəyənlər üçün şəxsi inkişaf və ya idaəretmə haqqında kitab', link: '#dinner' },
            { text: 'MacBook Air — kompakt və güclü notbukdur, iş və təhsil üçün əlverişlidir. Çəkisi yüngüldür, sürətli və uzun batareya ömrünə malikdir. MacBook Air M2 modelini 5 yanvara qədər iSpace-də 600 AZN qənaətlə əldə edə bilərsiniz.', link: '#couples-vacation' },
            { text: 'Apple Watch 10 — zərif dizaynı və bir çox yeni funksiyaları ilə vaxtın dəyərini bilən və aktiv həyat tərzi keçirənlər üçün uyğundur. Bu model haqqında xüsusi təklifləri  irshad-dan əldə edə bilərsiniz.', link: '#romantic-books' }
        ],
        startapçı: [
            { text: 'IT sahəsində peşə kursu ', link: '#education' },
            { text: 'iPhone 16 PRO — ən müasir modeldir, kameranın təsiredici imkanları və məhsuldarlığı ilə seçilir. Bu modeli Kontakt Home-da 6 yanvara qədər 12 aylıq faizsiz, hissə-hissə ödənişlə əldə etmək mümkündür.', link: '#journals' },
            { text: 'Stiv Jobs-un “Bioqrafiya” kitabı — uğurlu brendin yaradıcısı olmaqla yanaşı, dünyaya yeni ideyalar və innovasiyalar bəxş etmiş insanın ilhamverici həyat hekayəsi. Onun texnologiyaların inkişafına verdiyi töhfəni qiymətləndirməmək mümkün deyil.', link: '#seminars' }
        ],
        Meloman: [
            { text: 'Musiqi kurslarına abunəlik — musiqi bacarıqlarını inkişaf etdirmək istəyənlər üçün.', link: '#gadgets' },
            { text: '4-cü  nəsil AirPods - musiqisevərlər və aktiv insanlar üçün səs-küyün qarşısını alan ideal qulaqlıqlardır. Bu qulaqlıqları irshad-dan 25 dekabra qədər xüsusi qiymətlə əldə edə bilərsiniz', link: '#vr' },
            { text: 'Apple Music-ə illik abunəlik — geniş musiqi və podkast kitabxanasına çıxış.', link: '#smart-home' }
        ],
        serial: [
            { text: 'Aromaterapiya dəsti — rahatlıq və komfort atmosferi yaradacaq.', link: '#fashion-magazines' },
            { text: 'Maraqlı dizaynlı plaid və ya yastıqlar - evdəki rahat axşamlar üçün mükəmməl seçimdir.', link: '#custom-clothes' },
            { text: 'iPad 10 — ev şəraitində video izləməyi sevənlər və ya rahat divandan qalxmadan müxtəlif işləri həll edənlər üçün əla hədiyyə. Bu iPad modelini Baku Electronics-dən  5 yanvara qədər xüsusi qiymətlə əldə edə bilərsiniz.', link: '#accessories' }
        ],
        Təşkilatçı: [
            { text: 'Ayaqqabı baxımı dəsti - xarici görünüşünə diqqət edən və əşyalarının hər zaman ideal vəziyyətdə olmasını istəyənlər üçün.', link: '#gadgets' },
            { text: 'Fərdə özəl dizayn edilmiş telefon qabı - cihazınızı qoruyacaq və eyni zamanda zərif aksesuar olacaq. iSpace-də orijinal Apple qablarını xüsusi şərtlərlə əldə edə bilərsiniz.', link: '#vr' },
            { text: 'Özünü təşkil etmə və ya vaxtın idarə edilməsi haqqında kitab - effektivliyini artırmaq istəyən insanlar üçün əla seçimdir.', link: '#smart-home' }
        ],
        əbədiyyət: [
            { text: 'iPhone 13 — əla funksionallığa malik sərfəli model. Bu modeli Kontakt Home-da 300 AZN-ə qədər qənaətlə əldə etmək mümkündür.', link: '#gadgets' },
            { text: 'Sevdiyi filmlər və musiqilər ilə rahat vaxt keçirməsi üçün video platforması və ya Apple Music-də illik abunəlik', link: '#vr' },
            { text: 'Həyatda harmoniya və sakitlik axtaranlar üçün yoqa və ya meditasiya kursu', link: '#smart-home' }
        ],
    };

    const recommendedItems = productSuggestions[type];
    recommendedItems.forEach(item => {
        const productItem = document.createElement('a');
        productItem.classList.add('recommended-item', 'green');
        productItem.textContent = item.text;
        productItem.href = item.link;
        productItem.target = "_blank"; 
        productContainer.appendChild(productItem);
    });
}



