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

export const AnswerType = {
    e : 1,
    i : -1,
    n : 1,
    s: -1,
    t: 1,
    f: -1,
    p: 1,
    j: -1
}

export type Question = {
    id : number;
    text: string;
    type: QuestionType;
    options: Answer[];
}

export type Answer = {
    text: string;
    type: number;
}

export const questions: Question[] = [
    {
        "id" : 1,
        "text" : "수하 침대 밑에는 어쩌다가 오게 되었어?", //정체
        "type" : QuestionType.ns,
        "options" : [
            {
                "text" : "수하가 쿠팡에서 시켜서/배달 트럭 타고 왔어",
                "type" : AnswerType.s
            },
            {
                "text" : "밖에서 몰래 사사삭하고 왔어",
                "type" : AnswerType.n
            },
            {
                "text" : "버츄얼 세계의 신비로운 힘이/날 여기로 인도했지...",
                "type" : AnswerType.n
            },
            {
                "text" : "온 게 아니야./내가 여기 먼저 살고 있었어",
                "type" : AnswerType.s
            }
        ]
    },
    {
        "id" : 2,
        "text" : "지내는 건 주로 어디서 지내?",
        "type" : QuestionType.ei,
        "options" : [
            {
                "text" : "침대 밑에서 안 나가고 있는 편",
                "type" : AnswerType.i
            },
            {
                "text" : "수하 책상 위!",
                "type" : AnswerType.e
            },
            {
                "text" : "냉장고일까나...",
                "type" : AnswerType.i
            },
            {
                "text" : "맨날 굴러다녀서 글쎄?",
                "type" : AnswerType.e
            }
        ]
    },
    {
        "id" : 3,
        "text" : "평소에는 뭐하고 있어?",
        "type" : QuestionType.ei,
        "options" : [
            {
                "text" : "누워있어",
                "type" : AnswerType.i
            },
            {
                "text" : "수하 관찰!",
                "type" : AnswerType.i
            },
            {
                "text" : "다른 수하쿠아들이랑 이야기 해",
                "type" : AnswerType.e
            },
            {
                "text" : "수하 집 탐험!",
                "type" : AnswerType.e
            }
        ]
    },

    {
        "id" : 4,
        "text" : "수하가 방송하고 있을 때의 너는?",
        "type" : QuestionType.ei,
        "options" : [
            {
                "text" : "옆에서 같이 떠들어!",
                "type" : AnswerType.e
            },
            {
                "text" : "그냥 수하 방송하는 거 조용히 지켜봐",
                "type" : AnswerType.i
            },
            {
                "text" : "수하 바보털을 호시탐탐 노리는 중",
                "type" : AnswerType.e
            },
            {
                "text" : "미안.../나 사실 옆에서 딴 짓 많이 해...",
                "type" : AnswerType.i
            }
        ]
    },
    {
        "id" : 5,
        "text" : "어디선가 민소리가 들려온다.",
        "type" : QuestionType.tf,
        "options" : [
            {
                "text" : "민소리에 한 술 더 뜨는 편",
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
        "text" : "수하가 집을 오래 비우게 되어서/미안하다고 한다.",
        "type" : QuestionType.tf,
        "options" : [
            {
                "text" : "괜찮아 우리 걱정은 말구/조심히 잘 갔다와!",
                "type" : AnswerType.f
            },
            {
                "text" : "미안하면 올 때 고양ㅇ...가/아니라 메로나! ^^7",
                "type" : AnswerType.t
            },
        ]
    },
    {
        "id" : 7,
        "text" : "수하가 없는 집은...",
        "type" : QuestionType.tf,
        "options" : [
            {
                "text" : "우리 꺼다!!!!!!!!!!!!!>ㅁ<",
                "type" : AnswerType.t
            },
            {
                "text" : "쓸쓸해...8ㅅ8",
                "type" : AnswerType.f
            }
        ]
    },
    {
        "id" : 8,
        "text" : "수하가 돌아올 때까지 뭘 할까?",
        "type" : QuestionType.pj,
        "options" : [
            {
                "text" : "잘들어봐우리는물부족이일어나면큰일나니까오늘은지난방송아카이브를돌려보자일단내가임의로몇가지리스트를뽑아놨는데...",
                "type" : AnswerType.j
            },
            {
                "text" : "위의 의견에 따른다",
                "type" : AnswerType.p
            }
        ]
    },
    {
        "id" : 9,
        "text" : "오랜만에 지난 방송들을 돌려보니/과거의 발언이 하나 걸린다. 여러분들은! ~~~~~",
        "type" : QuestionType.ns,
        "options" : [
            {
                "text" : "그런데 우리만 불멸이면 뭐해/수하는 불멸이 아니잖아8ㅅ8",
                "type" : AnswerType.n
            },
            {
                "text" : "저 때 수하 정말 쩔었지...",
                "type" : AnswerType.s
            }
        ]
    },
    {
        "id" : 10,
        "text" : "수하에게 새해 선물로 행운의 주황 양말을 찾아주고 싶다./어디부터 둘러봐야 할까?",
        "type" : QuestionType.pj,
        "options" : [
            {
                "text" : "음...일단 가장 가까운/침대 밑부터 가볼까?",
                "type" : AnswerType.p
            },
            {
                "text" : "행운의 주황 양말도 양말!/좀 멀지만 옷장부터 가볼래!",
                "type" : AnswerType.j
            }
        ]
    },
    {
        "id" : 11,
        "text" : "주황 양말을 들고 돌아가다가 그만 넘어져서/물이 쏟아지고 말았다.",
        "type" : QuestionType.pj,
        "options" : [
            {
                "text" : "어쩔 수 없다./우선 주황 양말로 닦는다",
                "type" : AnswerType.p
            },
            {
                "text" : "왜 뚜껑이 덜 닫혀있었지?!/예상치 못한 상황에 당황한다.",
                "type" : AnswerType.j
            },
            {
                "text" : "물이니까 증발하겠지...!/외면한다",
                "type" : AnswerType.p
            },
            {
                "text" : "쏟아진 물을 다시 담는 법을 배워두길 잘했어.../노련하게 상황을 수습한다",
                "type" : AnswerType.j
            }
        ]
    },
    {
        "id" : 12,
        "text" : "곧 있으면 수하가 돌아올 시간!/문앞에 마중 나가있을 때 드는 생각은?",
        "type" : QuestionType.ns,
        "options" : [
            {
                "text" : "'수하 온닿ㅎㅎ/우리 기념품 사왔겠지?'",
                "type" : AnswerType.s
            },
            {
                "text" : "'...설마 수하 우리 못 보고/실수로 밟지는 않겠지?'",
                "type" : AnswerType.n
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

export const results = {
    "ENTJ" : {"name":"프랑스 빙하수", "image": resultImgs[0], "explanation": "온통 흑백인 광공하우스에서 탈출했다./빙하가 녹아 생긴 수하쿠아이기에 미네랄이 풍부하다"},
    "ESTJ" : {"name":"깐깐한 물", "image": resultImgs[1] , "explanation": "깐깐한 정수기에서 나온 깐깐한 물을 가진 수하쿠아."},
    "INTJ" : {"name":"정제수", "image": resultImgs[2] , "explanation" : "모든 미네랄과 불순물이 걸러진 순수한 수하쿠아./하지만 광기 100%도 순수라는 걸 잊지말자"},
    "ISTJ" : {"name":"물약", "image": resultImgs[3] , "explanation" : "잔병치레가 잦은 수하가 걱정되어 찾아온 수하쿠아./하지만 이 물약 수하쿠아가 딸기약일지 호박약일지는/아무도 모른다고 한다. (어쩌면 민트초코맛일지도)"},

    "ENTP" : {"name":"토닉 워터", "image": resultImgs[4] , "explanation" : "알코올이 함유된 수하쿠아랑 궁합이 좋다./사이다랑 비교가 되어 슬프다고 하는 듯./탄산이 들어있어서 마구 흔들면 마실 때./뚜껑이 날아갈 수 있으니 조심해야 한다"},
    "ESTP" : {"name":"약수", "image": resultImgs[5] , "explanation" : "약수터의 마스코트였던 수하쿠아./구수한 말투에 넉살이 좋다./몸에 좋은 각종 미네랄을 함유하고 있다"},
    "INTP" : {"name":"해양심층수", "image": resultImgs[6] , "explanation" : "기본적으로 바닷물이라 짠맛이 나지만./특별한 처리를 했기 때문에 식수로도 음용이 가능하다"},
    "ISTP" : {"name":"녹차", "image": resultImgs[7] , "explanation" : "찻잎이 우러난 수하쿠아./어떤 찻잎을 넣느냐에 따라 갈색이 되기도 한다"},

    "ENFJ" : {"name":"코코넛 워터", "image": resultImgs[8] , "explanation" : "머리에 코코넛을 쓰고 있는 수하쿠아./침대 밑에서 몰래 댄스파티를 벌이는 주범./내용물은 호불호가 갈리는 맛이지만 호불호 없이 귀엽다"},
    "ESFJ" : {"name":"볶은 커피콩을 우린 물", "image": resultImgs[9] , "explanation" : "카페인을 많이 함유하고 있는 수하쿠아./종류에 따라서는 우유나 설탕을 함유하기도 한다./너무 많이 마시면 밤에 잠이 안올수 있지만./이 수하쿠아는 그냥 커피가 아니기에 괜찮다고 한다"},
    "INFJ" : {"name":"성수", "image": resultImgs[10] , "explanation" : "본래는 그냥 평범한 소금물이었지만 축성을 받아 성수가 되었다./기본적으로 온화하다./하지만 이 수하쿠아는 실눈캐라는 걸 잊지 마시길"},
    "ISFJ" : {"name":"델몬트 보리차", "image": resultImgs[11] , "explanation" : "원래는 오렌지 주스를 담고 있었지만/지금은 각 한국 가정집에 보급되어/보리차를 담고 있는 수하쿠아./튼튼하고 넉넉한 용량만큼 유한 성격을 가지고 있다"},

    "ENFP" : {"name":"아이돌물", "image": resultImgs[12] , "explanation" : "기본 수하쿠아에 녹차 티백, 레몬즙과 설탕이 들어간 수하쿠아./붓기제거에 좋다고 해서 많은 KPOP 아이돌들이 즐겨 마신다고 한다"},
    "ESFP" : {"name":"소주", "image": resultImgs[13] , "explanation" : "아직 5살인 수하의 침대 밑에 어떻게 들어오게 되었는지/의문인 수하쿠아. 빨간 뚜껑이라 더 주의가 필요하다"},
    "INFP" : {"name":"고로쇠 수액", "image": resultImgs[14] , "explanation" : "몸에 좋은 고로쇠 수액을 담고 있는 수하쿠아./특히 뼈 건강에 좋다고 한다./자주 넘어지고 뭐 뿌수고 떨어뜨리는 수하가 걱정되어/스스로 찾아온 기특한 수하쿠아"},
    "ISFP" : {"name":"온천수", "image": resultImgs[15] , "explanation" : "물병 안에 계란을 넣으면 온센타마고가 된다./어느 온천수냐에 따라 효능과 효험이 다르다./식용은 안되니 주의가 필요하다"}
}

export type MBTI =
"ENTJ" | 
"ESTJ" | 
"INTJ" | 
"ISTJ" | 
"ENTP" | 
"ESTP" | 
"INTP" | 
"ISTP" | 
"ENFJ" | 
"ESFJ" | 
"INFJ" | 
"ISFJ" | 
"ENFP" | 
"ESFP" | 
"INFP" | 
"ISFP"
