import React, { useEffect } from "react";
import axios from "axios";
// 아래 url 참고하여 작성
//https://api.ncloud-docs.com/docs/ai-naver-searchtrend-search
function Middle() {
  useEffect(() => {
    const fetchData = async () => {
      const client_id = "kwi3dtl0bj";
      const client_secret = "SZ8vBWbJckgo1SWLrC20BheesKEHNQlLLouq9m8i";

      const api_url = "https://naveropenapi.apigw.ntruss.com/datalab/v1/search";
      const request_body = {
        startDate: "2017-01-01",
        endDate: "2017-04-30",
        timeUnit: "month",
        keywordGroups: [
          {
            groupName: "한글",
            keywords: ["한글", "korean"],
          },
          {
            groupName: "영어",
            keywords: ["영어", "english"],
          },
        ],
        device: "pc",
        ages: ["1", "2"],
        gender: "f",
      };

      try {
        const response = await axios.post(api_url, request_body, {
          headers: {
            "X-NCP-APIGW-API-KEY-ID": client_id,
            "X-NCP-APIGW-API-KEY": client_secret,
            "Content-Type": "application/json",
          },
        });
        console.log(response.status);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <h1>페이지1입니다. </h1>
    </>
  );
}
export default Middle;
