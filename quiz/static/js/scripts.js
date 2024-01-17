const startBtn = document.getElementById('start');
const daleeBtn = document.getElementById('dalee');
const restartBtn = document.getElementById('restart');
const questText = document.getElementById('quest');
const questAnswer = document.getElementById('answers');

restartBtn.hidden = true;
daleeBtn.hidden = true;

let cur = 0;
var score = new Map();
score.set("IFST", 0);
score.set("IVHT", 0);
score.set("PINF", 0);
score.set("PINJ", 0);
score.set("DIZN", 0);
score.set("TLVD", 0);
score.set("PKLM", 0);

let res = [
    {
        idR: "IFST",
        zaglovok: "Информационные системы и технологии(ИФСТ)",
        info: "Уникальное сочетание знаний в области компьютерных технологий, программирования, операционных систем"
            + " мультмедиа- технологий позволяет выпускникам стать самыми востребованными специалистами на рынке труда не"
            + " только в России, но и за рубежом.Уже в ходе обучения студенты могут попробовать себя в коммерческих проектах по реализации"
            +" программных систем и компьютерной графики в рамках молодежного бизнес - предприятия, действующего в международном образовательном центре СГТУ."
            +" Студенты кафедры участвуют в различных международных проектах и имеют возможность проходить международные стажировки."
    },
    {
        idR: "IVHT",
        zaglovok: "Информатика и вычислительная техника(ИВЧТ)",
        info: "Студенты изучают современные компьютерные технологии, языки программирования, Интернет-технологии,"
            + " разработку приложений баз данных, распределенных решений.Особое внимание уделяется аппаратному обеспечению"
            + " компьютерных систем, администрированию операционных систем, компьютерных сетей.В программе обучения технологии"
            +" НР и сетевые технологии Cisco."
    },
    {
        idR: "PINF",
        zaglovok: "Прикладная информатика (ПИНФ)",
        info: "Цифровые технологии стремительно развиваются. На сегодняшний день представить себе современный бизнес"
        +" без информационных систем невозможно.Цифровая экономика проникает во все сферы нашей жизни.Чтобы разрабатывать"
        +" современные программные системы, нужно владеть всем спектром компьютерных технологий: программированием, базами"
        +" данных, мобильными и облачными вычислениями, Интернет- технологиями, что сегодня и дает образование по направлению «Прикладная информатика»."
    },
    {
        idR: "PINJ",
        zaglovok: "Прикладная инженерия (ПИНЖ)",
        info: "«Программная инженерия» является одним из новых направлений подготовки IT-специалистов в России."
        +" Программная инженерия - это наука о том, как создавать большие надежные программные системы для реального бизнеса."
        + " Представьте себе строительство многоэтажного дома, в этой работе участвуют люди различных профессий: архитекторы,"
        + " каменщики, электрики и т.д.Так и при создании программных продуктов трудятся целые команды профессионалов, которыми надо управлять."
        +" Изучив программную инженерию, Вы не только станете архитектором программных систем, высококлассным программистом, но и научитесь управлять проектами и командами в сфере информационных технологий."
    },
    {
        zaglovok: "Дизайн (ДИЗН)",
        info: "Графический дизайн является сегодня одним из самых перспективных и актуальных творческих направлений"
            + " профессиональной деятельности.Графический дизайн присутствует в любых областях человеческой деятельности: кино"
            + " и телевидение, анимация и Интернет, полиграфия, реклама, оформление ландшафта и интерьера и др."
    },
    {
        idR: "TLVD",
        zaglovok: "Телевидение (ТЛВД)",
        info: "Современное телевидение - уникальный вид деятельности, соединяющий в себе развлекательные, познавательные,"
            + " информационно- коммуникативные функции, это мир технологических инноваций и непрерывных творческих поисков."
            + " Особым спросом пользуются универсальные сотрудники, способные разрабатывать творческую основу видеоматериалов,"
            +" владеющие техническими средствами видеосъемки и компьютерной обработки видеоматериалов."
    },
    {
        idR: "PKLM",
        zaglovok: "Реклама и связи с общественностью (РКЛМ)",
        info: "Специалист по рекламе и связям с общественностью - востребованная на рынке труда профессия. Современный"
            + " рекламист должен обладать всем спектром знаний в области маркетинга и менеджмента, паблик рилейшнз, психологии"
            + " и философии рекламы, социальных аспектов рекламной деятельности, методами оценки эффективности рекламной"
            + " кампании, владеть основами копирайтинга, разработки фирменного стиля, а также быть специалистом по информационным"
            + " технологиям в разных направлениях."
    }
    ]

let quest1 = [
    {
        question: "Какой вид обучения тебя интересует? ",
        answer: [
            { option: "Очная", key: ["IFST","IVHT", "PINF", "PINJ"] },
            { option: "Заочная", key: ["IVHT","IFST"]}
        ]
    },
    {
        question: "Какие языки программирования, ты бы хотел изучать? ",
        answer: [
            { option: "С#/C++, Java ", key: ["IVHT", "PINJ"] },
            { option: "С#, Java", key: ["IFST", "PINF"] }
        ]
    },
    {
        question: "Что тебе больше интересно? ",
        answer: [
            { option: "Управление IT-услугами и программными проектами ", key: ["PINJ"] },
            { option: "Анализ и тестирование программного обеспечения ", key: ["PINF"] },
            { option: "Работа с аппаратным обеспечением", key: ["IVHT"] },
            { option: "Разработка приложений и компьютерных игр, работа с базами данных, интернет-технологиями", key: ["IFST"] }
        ]
    },
    {
        question: "Любишь играть в игры?",
        answer: [
            { option: "Да", key: ["IFST"] },
            { option: "Нет", key: ["IVHT", "PINF", "PINJ"] }
        ]
    },
    {
        question: "На чем бы ты хотел бы сделать упор?",
        answer: [
            { option: "Математика", key: ["IVHT"] },
            { option: "Программирование", key: ["PINF", "PINJ"] },
            { option: "Мультимедия-технологии", key: ["IFST"] }
        ]
    },
    {
        question: "Разработка чего тебе интересна?",
        answer: [
            { option: "Бизнес-приложений", key: ["PINF", "PINJ"] },
            { option: "Мобильных-приложей", key: ["PINF", "IFST"] },
            { option: "Операционных систем", key: ["IVHT"] }
        ]
    },
]

let quest2 = [
    {
        question: "Какой вид обучения тебя интересует? ",
        answer: [
            { option: "Очная", key: ["DIZN","TLVD", "PKLM"] },
            { option: "Очно-заочная", key: ["DIZN"] }
        ]
    },
    {
        question: "Какие предметы ты сдаешь на ЕГЭ? ",
        answer: [
            { option: "Литература, Русский язык, История или Обществознание", key: ["DIZN","TLVD"] },
            { option: "Обществознание, Русский язык, История или Информатика", key: ["PKLM"] }
        ]
    },
    {
        question: "Хочешь продолжить обучение в магистратуре?",
        answer: [
            { option: "Да", key: ["PKLM"] },
            { option: "Нет", key: ["TLVD", "DIZN"] }
        ]
    },
    {
        question: "Умеешь пользоваться графическими редакторами?",
        answer: [
            { option: "Да", key: ["PKLM"] },
            { option: "Нет", key: ["TLVD", "DIZN"] }
        ]
    },
    {
        question: "Чему ты хотел бы научиться?",
        answer: [
            { option: "Графическому и видео монтажу", key: ["TLVD"] },
            { option: "Создавать дизайны", key: ["DIZN"] },
            { option: "Я хотел бы уметь все", key: ["PKLM"] }
        ]
    },
    {
        question: "Работа с компьютером или с людьми?",
        answer: [
            { option: "Компьютер", key: ["TLVD", "DIZN"] },
            { option: "Людишки", key: ["TLVD", "PKLM"] }
        ]
    },
]

let test = null;

startBtn.addEventListener('click', nachalo);
daleeBtn.addEventListener('click', next);
restartBtn.addEventListener('click', restart);

function nachalo() {
    var rad = document.getElementsByName('quiz');
    for (i = 0; i < rad.length; i++) {
        test = quest1;
        if (rad[i].checked) {
            if (rad[i].value == "1") {
                test = quest1;
                start(quest1);
            }
            else{
                test = quest2;
                start(quest2);
            }
        }
    }
    startBtn.hidden = true;
    daleeBtn.hidden = false;
    restartBtn.hidden = false;
}

function start(quest) {
    cur = 0;
    questText.innerHTML = quest[cur].question;
    for (let i = 0; i < quest[cur].answer.length; i++) {
        if (i == 0) {
            questAnswer.innerHTML = `
                <label>
                    <input type="radio" name="test" value=${quest[cur].answer[i].key} />
                    ${quest[cur].answer[i].option}
                </label>
            `;
        }
        else {
            questAnswer.innerHTML += `
                <label>
                    <input type="radio" name="test" value=${quest[cur].answer[i].key} />
                    ${quest[cur].answer[i].option}
                </label>
            `;
        }
    }
}

function check() {
    var radRes = document.getElementsByName('test');
    for (i = 0; i < radRes.length; i++) {
        if (radRes[i].checked) {
            return true;
        }
    }
    return false;
}

function next() {
    if (cur < test.length - 1 && check()==true) {
        cur++;
        point();
        questText.innerHTML = test[cur].question;
        for (let i = 0; i < test[cur].answer.length; i++) {
            if (i == 0) {
                questAnswer.innerHTML = `
                <label>
                    <input type="radio" name="test" value=${test[cur].answer[i].key} />
                    ${test[cur].answer[i].option}
                </label>
            `;
            }
            else {
                questAnswer.innerHTML += `
                <label>
                    <input type="radio" name="test" value=${test[cur].answer[i].key} />
                    ${test[cur].answer[i].option}
                </label>
            `;
            }
        }
    }
    else {
       point();
       result();
    }
}

function result() {
    daleeBtn.hidden = true;

    let itm;
    let k = 0;

    let naprav;
    let texts;

    for (let item of score) {
        console.log(item[0], item[1]);
        if (item[1] >= k) {
            k = item[1];
            itm = item[0];
        }
    }
    for (let i = 0; i < res.length;i++) {
        if (res[i].idR == itm) {
            console.log(res[i].zaglovok, res[i].info, res[i].idR, itm);
            questText.innerHTML = res[i].zaglovok;
            questAnswer.innerHTML = res[i].info;
            break;
        }
    }
}


function point() {
    var radRes = document.getElementsByName('test');
    let arr = null;
    for (let i = 0; i < radRes.length; i++) {
        if (radRes[i].checked) {
            arr = radRes[i].value.split(",");
        }
    }
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        for (x of score) {
            if (x[0] === arr[i]) {
                let i = x[1] + 1;
                score.set(x[0], i);
            }
        }
    }
}

function restart() {
    for (x of score) {
        score.set(x[0], 0);
    }
    document.getElementById('quest').innerHTML = "Что тебе больше нравится?";
    document.getElementById('answers').innerHTML = `
                <label>
                    <input type="radio" name="quiz" value="1" checked/>
                    IT
                </label>
                <label>
                    <input type="radio" name="quiz" value="2" />
                    Дизайн
                </label>
    `;
    test = null;
    startBtn.hidden = false;
    restartBtn.hidden = true;
    daleeBtn.hidden = true;
}