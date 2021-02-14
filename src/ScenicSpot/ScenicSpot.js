import React, { useState, useEffect } from "react";
import "./ScenicSpot.scss";

function ScenicSpot(props) {
  const { allData, setAllData } = props;
  const [moreData, setMoreData] = useState([]);
  let skipCounts = 5;
  let displayAllData;
  let displayMoreData = [];

  displayAllData = allData.map((item, index) => {
    return (
      <div className="item_wrapper">
        <div>{item.Name}</div>
        <div>{item.Description}</div>
      </div>
    );
  });

  displayMoreData = moreData.map((item, index) => {
    return (
      <div className="item_wrapper">
        <div>{item.Name}</div>
        <div>{item.Description}</div>
      </div>
    );
  });

  // displayAllData.push(displayMoreData);

  function showData() {
    for (let i = 0; i < allData.length; i++) {
      console.log(allData[i].Name);
    }
  }

  function getInitialData() {
    let url =
      "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=5&$format=JSON";
    fetch(url, { method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log("result", result);
        setAllData(result);
      });
  }

  function getMoreData() {
    let url =
      "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=5&$skip=" +
      skipCounts +
      "&$format=JSON";

    fetch(url, { method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log("result", result);
        setMoreData(result);
      });

    skipCounts += 5;
  }

  function test() {
    window.addEventListener("scroll", function (e) {
      if (
        (window.innerHeight + window.scrollY) /
          document.documentElement.offsetHeight >=
        0.99
      ) {
        console.log("you're at the bottom of the page");

        // Show loading spinner and make fetch request to api
        getMoreData();
      }
    });
  }
  test();

  useEffect(() => {
    getInitialData();
    showData();
  }, []);

  useEffect(() => {
    showData();
  }, [allData]);

  return (
    <>
      <div>{displayAllData}</div>
      <div>{displayMoreData}</div>
    </>
  );
}

export default ScenicSpot;
