const quotes = [
  {
    quote:
      "세상에서 가장 현명한 사람은 모든 사람으로부터 배우는 사람이다 가장 사랑받는 사람은 칭찬하는 사람이다 가장 강한 사람은 감정을 조절할 줄 아는 사람이다",
    author: "탈무드",
  },
  {
    quote:
      "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다",
    author: "단테",
  },
  {
    quote: "허물이 있다면, 버리기를 두려워 말라",
    author: "공자",
  },
  {
    quote: "늘 행복하고 지혜로운 사람이 되려면 자주 변해야 한다",
    author: "공자",
  },
  {
    quote: "나이가 성숙을 보장하지는 않는다",
    author: "라와나 블랙웰",
  },
  {
    quote: "인생에서 많은 패배에 직면하겠지만 결코 패배하지 말라",
    author: "마야 안젤루",
  },
  {
    quote:
      "인생에서 가장 큰 영광은 넘어지지 않는 것에 있는 것이 아니라 매번 일어선다는 데 있다",
    author: "넬슨 만델라",
  },
  {
    quote: "생활은 과감한 모험이거나 아니면 아무것도 아니다",
    author: "헬렌켈러",
  },
  {
    quote: "자연과 조화롭게 살아가는 것이 삶의 목적이다",
    author: "제노",
  },
  {
    quote: "이또한 지나가리라",
    author: "에트 혹 트란시비트",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const quotesResult = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = quotesResult.quote;
author.innerText = quotesResult.author;
