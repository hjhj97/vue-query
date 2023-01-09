const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.get("/", (request, response) => {
  response.send("Hello");
});

app.get("/getTest", (request, response) => {
  const json = {
    success: true,
    data: "hello",
  };
  response.send(json);
});

app.get("/getEventList", (request, response) => {
  console.log("getEventeList" + request);
  const json = {
    success: true,
    list: [
      {
        event_id: 1,
        title: "ㅇㅇㅇ 가맹점 이벤트",
        content: "최대 6000원 캐시백",
      },
      {
        event_id: 2,
        title: "소비it 친구초대 이벤트",
        content: "친구도 나도 5천원 받자!",
      },
    ],
  };
  response.send(json);
});
app.get("/getEventDetail", (request, response) => {
  const json = {
    success: true,
    list: {
      event_id: 1,
      title: "ㅇㅇㅇ 가맹점 이벤트",
      content: "최대 6000원 캐시백",
      event_start_dt: "2022-10-19",
      event_end_dt: "2022-10-22",
    },
  };
  response.send(json);
});

app.get("/getNoticeList", (request, response) => {
  console.log("getNoticeList" + request);
  const json = {
    success: true,
    list: [
      {
        notice_id: 1,
        title: "소비 it 오픈 공지",
        content: "안녕하세요 소비it 팀입니다.",
        reg_dt: "2022-10-20",
      },
    ],
  };
  response.send(json);
});

app.listen(3000, () => console.log("listening port 3000"));
