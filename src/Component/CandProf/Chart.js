import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import axiosInstance from "../../Baseurl";
function ChartCand() {

    
  const [categoryData, setCData] = useState([]);
  const [categoryLabel, setcLabel] = useState([
    "Total job",
    "Total employers",
    "Total Candidate",
  ]);
  const [jdata, setjbdata] = useState([]);
  const [empdata, setemp] = useState([]);
  const [canddata, setcand] = useState([]);
  useEffect(() => {
    axiosInstance
      .post(`/viewJobs`)
      .then((res) => {
        console.log(res, "viewtotaljob");
        if (res.data.data) {
          setjbdata(res.data.data);
          
        } else {
          setjbdata([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    axiosInstance
      .post(`/viewemployers`)
      .then((res) => {
        console.log(res, "viewemp");
        if (res.data.data != undefined) {
          setemp(res.data.data);
          
       
        } else {
          setemp([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    axiosInstance
      .post(`/viewCandidates`)
      .then((res) => {
        console.log(res, "viewcand");
        if (res.data.data != undefined) {
          setcand(res.data.data);

          
        } else {
          setcand([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
   
    setCData([jdata.length,empdata.length,canddata.length])
  }, [jdata])
  

  const chartData = {
    labels: categoryLabel,
    datasets: [
      {
        label: "All data ",
        data: categoryData,
        backgroundColor: ["red", "green", "yellow", "pink"],
      },
    ],
  };
  return (
    <div>
        <h3 style={{ textAlign:'center' }}>Charts</h3>
      <div style={{ height: "650px" ,backgroundColor:'white'}}>
     
        <Bar
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                // text: "All  details",
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default ChartCand;
