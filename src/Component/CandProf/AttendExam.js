import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../Baseurl";

function AttendExam() {
  const Navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem(`candlogid`) == null) {
      Navigate("/home");
    }
  });

  const { id } = useParams();
  const [Exam, setmyexam] = useState([]);

  const [Answer, setAns] = useState({
    mid: "",
    cid: localStorage.getItem(`candlogid`),
    examid: id,
    ans1: "",
    ans2: "",
    ans3: "",
    ans4: "",
    ans5: "",
    ans6: "",
    ans7: "",
    ans8: "",
    ans9: "",
    ans10: "",
  });

  useEffect(() => {
    axiosInstance
      .post(`/ViewExamById/${id}`)
      .then((res) => {
        console.log(res, " Single exams");
        if (res.data.data != undefined) {
          setmyexam(res.data.data);
          setAns({ ...Answer, mid: res.data.data.mid });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const changefn = (e) => {
    setAns({ ...Answer, [e.target.name]: e.target.value });
  };

  const submitt = (e) => {
    e.preventDefault();
    console.log(Answer);
    axiosInstance
      .post(`/addAnswers/${id}`, Answer)
      .then((res) => {
        console.log(res, " Added exam answers");
        if (res.status==200) {

          alert("added successfully")
          Navigate("/MyExams")
        } else {
         alert("failed") 
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div style={{ minHeight: "300px", margin: "50px" }}>
      <div class="container">
        <form onSubmit={submitt}>
          <div className="container">
            <div className="row">
              <div className="col-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Exam Title "
                  value={Exam.title}
                  disabled
                  name="title"
                />
              </div>
              <div className="col-8">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Exam Description"
                  value={Exam.description}
                  disabled
                  name="description"
                />
              </div>
            </div>

            <hr />

            <div className="row">
              <div className="col-3">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Question 1"
                    value={Exam.qn1}
                    disabled
                    name="qn1"
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Option 1"
                    value={Exam.opA1}
                    disabled
                    name="opA1"
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Option 2"
                    value={Exam.opB1}
                    disabled
                    name="opB1"
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Option 3"
                    value={Exam.opC1}
                    disabled
                    name="opC1"
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Option 4"
                    value={Exam.opD1}
                    disabled
                    name="opD1"
                  />
                </div>
              </div>
              <div className="col-3">
                <select
                  required
                  class="form-select"
                  name="ans1"
                  onChange={changefn}
                >
                  <option value="">Select the correct answer</option>
                  <option>{Exam.opA1}</option>
                  <option>{Exam.opB1}</option>
                  <option>{Exam.opC1}</option>
                  <option>{Exam.opD1}</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-3">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.qn2}
                    disabled
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.opA2}
                    disabled
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.opB2}
                    disabled
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.opC2}
                    disabled
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.opD2}
                    disabled
                  />
                </div>
              </div>
              <div className="col-3">
                <select
                  required
                  class="form-select"
                  name="ans2"
                  onChange={changefn}
                >
                  <option value="">Select the correct answer</option>
                  <option>{Exam.opA2}</option>
                  <option>{Exam.opB2}</option>
                  <option>{Exam.opC2}</option>
                  <option>{Exam.opD2}</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-3">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.qn3}
                    disabled
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.opA3}
                    disabled
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.opB3}
                    disabled
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.opC3}
                    disabled
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.opD3}
                    disabled
                  />
                </div>
              </div>
              <div className="col-3">
                <select
                  required
                  class="form-select"
                  name="ans3"
                  onChange={changefn}
                >
                  <option value="">Select the correct answer</option>
                  <option>{Exam.opA3}</option>
                  <option>{Exam.opB3}</option>
                  <option>{Exam.opC3}</option>
                  <option>{Exam.opD3}</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-3">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.qn4}
                    disabled
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.opA4}
                    disabled
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.opB4}
                    disabled
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.opC4}
                    disabled
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.opD4}
                    disabled
                  />
                </div>
              </div>
              <div className="col-3">
                <select
                  required
                  class="form-select"
                  name="ans4"
                  onChange={changefn}
                >
                  <option value="">Select the correct answer</option>
                  <option>{Exam.opA4}</option>
                  <option>{Exam.opB4}</option>
                  <option>{Exam.opC4}</option>
                  <option>{Exam.opD4}</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-3">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.qn5}
                    disabled
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.opA5}
                    disabled
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.opB5}
                    disabled
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.opC5}
                    disabled
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.opD5}
                    disabled
                  />
                </div>
              </div>
              <div className="col-3">
                <select
                  required
                  class="form-select"
                  name="ans5"
                  onChange={changefn}
                >
                  <option value="">Select the correct answer</option>
                  <option>{Exam.opA5}</option>
                  <option>{Exam.opB5}</option>
                  <option>{Exam.opC5}</option>
                  <option>{Exam.opD5}</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-3">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.qn6}
                    disabled
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.opA6}
                    disabled
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.opB6}
                    disabled
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.opC6}
                    disabled
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.opD6}
                    disabled
                  />
                </div>
              </div>
              <div className="col-3">
                <select
                  required
                  class="form-select"
                  name="ans6"
                  onChange={changefn}
                >
                  <option value="">Select the correct answer</option>
                  <option>{Exam.opA6}</option>
                  <option>{Exam.opB6}</option>
                  <option>{Exam.opC6}</option>
                  <option>{Exam.opD6}</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-3">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.qn7}
                    disabled
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.opA7}
                    disabled
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.opB7}
                    disabled
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.opC7}
                    disabled
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.opD7}
                    disabled
                  />
                </div>
              </div>
              <div className="col-3">
                <select
                  required
                  class="form-select"
                  name="ans7"
                  onChange={changefn}
                >
                  <option value="">Select the correct answer</option>
                  <option>{Exam.opA7}</option>
                  <option>{Exam.opB7}</option>
                  <option>{Exam.opC7}</option>
                  <option>{Exam.opD7}</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-3">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.qn8}
                    disabled
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.opA8}
                    disabled
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.opB8}
                    disabled
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.opC8}
                    disabled
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.opD8}
                    disabled
                  />
                </div>
              </div>
              <div className="col-3">
                <select
                  required
                  class="form-select"
                  name="ans8"
                  onChange={changefn}
                >
                  <option value="">Select the correct answer</option>
                  <option>{Exam.opA8}</option>
                  <option>{Exam.opB8}</option>
                  <option>{Exam.opC8}</option>
                  <option>{Exam.opD8}</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-3">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.qn9}
                    disabled
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.opA9}
                    disabled
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.opB9}
                    disabled
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.opC9}
                    disabled
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.opD9}
                    disabled
                  />
                </div>
              </div>
              <div className="col-3">
                <select
                  required
                  class="form-select"
                  name="ans9"
                  onChange={changefn}
                >
                  <option value="">Select the correct answer</option>
                  <option>{Exam.opA9}</option>
                  <option>{Exam.opB9}</option>
                  <option>{Exam.opC9}</option>
                  <option>{Exam.opD9}</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-3">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.qn10}
                    disabled
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.opA10}
                    disabled
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.opB10}
                    disabled
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.opC10}
                    disabled
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={Exam.opD10}
                    disabled
                  />
                </div>
              </div>
              <div className="col-3">
                <select
                  required
                  class="form-select"
                  name="ans10"
                  onChange={changefn}
                >
                  <option value="">Select the correct answer</option>
                  <option>{Exam.opA10}</option>
                  <option>{Exam.opB10}</option>
                  <option>{Exam.opC10}</option>
                  <option>{Exam.opD10}</option>
                </select>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12">
              <input
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AttendExam;
