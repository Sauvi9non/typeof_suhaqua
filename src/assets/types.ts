import evian from "./img/evian.png";
import precisionist from "./img/precisionist.png";
import purifiedWater from "./img/purifiedWater.png";
import coughSyrup from "./img/coughSyrup.png";
import tonicWater from "./img/tonicWater.png";
import springWater from "./img/springWater.png"; 
import deepOceanWater from "./img/deepOceanWater.png";
import greenTea from "./img/greenTea.png";
import coconutWater from "./img/coconutWater.png";
import coffee from "./img/coffee.png";
import holyWater from "./img/holyWater.png";
import glassJar from "./img/glassjar.png";
import idolWater from "./img/idolWater.png";
import alcohol from "./img/alcohol.png";
import treeSap from "./img/treeSap.png";
import hotSpringWater from "./img/hotSpring.png";

export enum QuestionType {
    ei = "EI",
    ns = "NS",
    tf = "TF",
    pj = "PJ"
}

export enum AnswerType {
    e = "E",
    i = "I",
    n = "N",
    s = "S",
    t = "T",
    f = "F",
    p = "P",
    j = "J"
}

export type Question = {
    id : number;
    text: string;
    type: QuestionType;
    options: Answer[];
}

export type Answer = {
    text: string;
    type: AnswerType;
}

export enum MBTI {
    ENTJ = "프랑스 빙하수",
    ESTJ = "깐깐한 물",
    INTJ = "정제수",
    ISTJ = "물약",
    ENTP = "토닉 워터",
    ESTP = "약수",
    INTP = "해양심층수",
    ISTP = "녹차",
    ENFJ = "코코넛 워터",
    ESFJ = "커피",
    INFJ = "성수",
    ISFJ = "0몬트 보리차",
    ENFP = "아이돌물",
    ESFP = "소주",
    INFP = "고로쇠 수액",
    ISFP = "온천수"
}

export const questions: Question[] = [
    {
        "id" : 1,
        "text" : "수하 침대 밑에는 어쩌다가 오게 되었니?",
        "type" : QuestionType.ns,
        "options" : [
            {
                "text" : "수하가 쿠팡에서 시켰어",
                "type" : AnswerType.s
            },
            {
                "text" : "밖에서 몰래 사사삭 들어왔어",
                "type" : AnswerType.n
            }
        ]
    },
    {
        "id" : 2,
        "text" : "평소에는 뭐하고 있어?",
        "type" : QuestionType.ei,
        "options" : [
            {
                "text" : "누워있어",
                "type" : AnswerType.i
            },
            {
                "text" : "수하 관찰",
                "type" : AnswerType.i
            },
            {
                "text" : "다른 수하쿠아들이랑 이야기 해",
                "type" : AnswerType.e
            },
            {
                "text" : "굴러다니는 게 내 일이야",
                "type" : AnswerType.e
            }
        ]
    },
    {
        "id" : 3,
        "text" : "방송 대기방이 생겼다! 그 때의 너는?",
        "type" : QuestionType.pj,
        "options" : [
            {
                "text" : "미리 들어가서 대기하고 있는다!",
                "type" : AnswerType.j
            },
            {
                "text" : "대강 방송 시간 맞춰서 들어간다",
                "type" : AnswerType.p
            },
        ]
    },
    {
        "id" : 4,
        "text" : "수하가 방송하고 있을 때의 너는?",
        "type" : QuestionType.ei,
        "options" : [
            {
                "text" : "옆에서 같이 재잘재잘 떠들어",
                "type" : AnswerType.e
            },
            {
                "text" : "수줍게 바라만 보고 있어",
                "type" : AnswerType.i
            },
            {
                "text" : "미안...나 사실 옆에서 딴 짓 많이 해...",
                "type" : AnswerType.e
            },
            {
                "text" : "다른 수하쿠아들 반응 따라하는 것 같아",
                "type" : AnswerType.i
            }
        ]
    },
    {
        "id" : 5,
        "text" : "어디선가 민소리가 들려온다",
        "type" : QuestionType.tf,
        "options" : [
            {
                "text" : "민소리에 한 술 더 뜬다",
                "type" : AnswerType.f
            },
            {
                "text" : "수하하하",
                "type" : AnswerType.t
            }
        ]
    },
    {
        "id" : 6,
        "text" : "수하가 스토리라인이 있는 게임을 할 때 나는?",
        "type" : QuestionType.ns,
        "options" : [
            {
                "text" : "수하가 어떻게 하는 지 반응을 본다",
                "type" : AnswerType.s
            },
            {
                "text" : "나름대로 이야기의 결말과 단서 등을 같이 추측해본다",
                "type" : AnswerType.n
            }
        ]
    },
    {
        "id" : 7,
        "text" : "오랜만에 대사요청 데이가 돌아왔다! 내가 당첨된다면 수하한테 부탁하고픈 대사는...",
        "type" : QuestionType.tf,
        "options" : [
            {
                "text" : "멋지고 근엄하고 애절하고 아무튼 멋진 대사!",
                "type" : AnswerType.f
            },
            {
                "text" : "나는 어둠의 개그단입니다. 이 때를 기다려왔습니다.",
                "type" : AnswerType.t
            }
        ]
    },
    {
        "id" : 8,
        "text" : "수하가 집을 오래 비우게 되었다",
        "type" : QuestionType.tf,
        "options" : [
            {
                "text" : "잘 다녀와~(이제 이 집은 제껍니다.)",
                "type" : AnswerType.t
            },
            {
                "text" : "잘...다녀와...(여행가방 안에 몰래 들어간다.)",
                "type" : AnswerType.f
            }
        ]
    },
    {
        "id" : 9,
        "text" : "넘어졌는데 뚜껑이 덜 닫혀서 바닥에 물을 쏟아버렸다!",
        "type" : QuestionType.pj,
        "options" : [
            {
                "text" : "주변에 빈 컵을 두고, 집에 돌아온 수하가 컵을 차도록 유도, 수하가 쏟은 것처럼 현장을 조작한다.",
                "type" : AnswerType.j
            },
            {
                "text" : "물이니까 수하가 오기 전에 증발하겠지...? 그대로 둔다",
                "type" : AnswerType.p
            },
            {
                "text" : "내, 내가 한 거 아냐... 발뺌한다",
                "type" : AnswerType.p
            },
            {
                "text" : "침대 밑의 주황 양말로 물기를 닦은 다음에 아무일 없던 척 한다.",
                "type" : AnswerType.j
            }
        ]
    },
    {
        "id" : 10,
        "text" : "침대 밑에서 행운의 주황 양말을 발견하면 뭐할거야?",
        "type" : QuestionType.ns,
        "options" : [
            {
                "text" : "진짜 행운을 가져다 주는지 궁금하니까 가챠 돌려볼래",
                "type" : AnswerType.s
            },
            {
                "text" : "이게 그 행운의 주황 양말...! 온갖 행복한 상상에 빠진다.",
                "type" : AnswerType.n
            }
        ]
    },
    {
        "id" : 11,
        "text" : "침대 밑에 있다보니 다른 라이버와의 합방 소식을 엿듣게 되었다. 그렇다는 건 수하쿠아들이랑 비슷하지만 다른 존재들과 만나게 된다는 뜻이겠지?",
        "type" : QuestionType.ei,
        "options" : [
            {
                "text" : "어떤 분들일까? 새로운 만남은 언제나 설레!",
                "type" : AnswerType.e
            },
            {
                "text" : "너무 긴장돼...! 말 걸면 뭐라고 답해야 하지...?",
                "type" : AnswerType.i
            }
        ]
    },
    {
        "id" : 12,
        "text" : "이제 슬슬 연말이다. 연말 계획은?",
        "type" : QuestionType.pj,
        "options" : [
            {
                "text" : "끝내주게 숨쉬기",
                "type" : AnswerType.p
            },
            {
                "text" : "29일에 누구 봤다가 30일에 누구 보고 31일에 보신각 갔다가 바로 동해선 타고 해돋이 보러...",
                "type" : AnswerType.j
            }
        ]
    },    
]

const resultImgs = [
    evian,    precisionist,    purifiedWater,    coughSyrup,
    tonicWater,    springWater,    deepOceanWater,    greenTea,
    coconutWater,    coffee,    holyWater,    glassJar,
    idolWater,    alcohol,    treeSap,    hotSpringWater
];

export const results = [
    {
        resultImg: resultImgs[0],
        explanation: "와랄랄라",
    }
]