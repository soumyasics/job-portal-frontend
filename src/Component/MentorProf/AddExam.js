import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../Baseurl";

function AddExam() {

  const Navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem(`mentlogid`)==null){
      Navigate('/home')
    }
  })



  const id = localStorage.getItem("mentlogid");

  const [Exam, setExam] = useState({
    title: "",
    description: "",
    qn1: "",
    qn2: "",
    qn3: "",
    qn4: "",
    qn5: "",
    qn6: "",
    qn7: "",
    qn8: "",
    qn9: "",
    qn10: "",

    opA1: "",
    opA2: "",
    opA3: "",
    opA4: "",
    opA5: "",
    opA6: "",
    opA7: "",
    opA8: "",
    opA9: "",
    opA10: "",

    opB1: "",
    opB2: "",
    opB3: "",
    opB4: "",
    opB5: "",
    opB6: "",
    opB7: "",
    opB8: "",
    opB9: "",
    opB10: "",

    opC1: "",
    opC2: "",
    opC3: "",
    opC4: "",
    opC5: "",
    opC6: "",
    opC7: "",
    opC8: "",
    opC9: "",
    opC10: "",

    opC1: "",
    opC2: "",
    opC3: "",
    opC4: "",
    opC5: "",
    opC6: "",
    opC7: "",
    opC8: "",
    opC9: "",
    opC10: "",

    opD1: "",
    opD2: "",
    opD3: "",
    opD4: "",
    opD5: "",
    opD6: "",
    opD7: "",
    opD8: "",
    opD9: "",
    opD10: "",

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


  const changefn = (a) => {
    setExam({ ...Exam, [a.target.name]: a.target.value });
  };

  const submitt = (b) => {
    b.preventDefault();
    console.log(Exam);
    axiosInstance
      .post(`/addExam/${localStorage.getItem(`mentlogid`)}`, Exam)
      .then((result) => {
        console.log(result);
        if(result.data.status==200){
          Navigate("/ViewExam")
          alert("Added new Exam")
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div style={{minHeight:"300px", margin:"50px"}}>
      <div class="container">
        <form  onSubmit={submitt}>
         <div className="container">
          <div className="row">
            <div className="col-4">
              <input type="text" class="form-control" placeholder="Exam Title " name="title" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
            </div>
            <div className="col-8">
              <input type="text" class="form-control" placeholder="Exam Description " name="description" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
            </div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-3">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Question 1" name="qn1" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 1" name="opA1" onChange={changefn}style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 2" name="opB1" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 3" name="opC1" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 4" name="opD1" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
            <select required class="form-select" name="ans1" onChange={changefn}>
              <option value=''>Open the correct answer</option>
              <option value={Exam.opA1}>{Exam.opA1}</option>
              <option value={Exam.opB1}>{Exam.opB1}</option>
              <option value={Exam.opC1}>{Exam.opC1}</option>
              <option value={Exam.opD1}>{Exam.opD1}</option>
            </select>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Question 2" name="qn2" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 1" name="opA2" onChange={changefn}style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 2" name="opB2" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 3" name="opC2" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 4" name="opD2" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
            <select required class="form-select" name="ans2" onChange={changefn}>
              <option value=''>Open the correct answer</option>
              <option value={Exam.opA2}>{Exam.opA2}</option>
              <option value={Exam.opB2}>{Exam.opB2}</option>
              <option value={Exam.opC2}>{Exam.opC2}</option>
              <option value={Exam.opD2}>{Exam.opD2}</option>
            </select>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Question 3" name="qn3" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 1" name="opA3" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 2" name="opB3" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 3" name="opC3" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 4" name="opD3" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
            <select required class="form-select" name="ans3" onChange={changefn}>
              <option value=''>Open the correct answer</option>
              <option value={Exam.opA3}>{Exam.opA3}</option>
              <option value={Exam.opB3}>{Exam.opB3}</option>
              <option value={Exam.opC3}>{Exam.opC3}</option>
              <option value={Exam.opD3}>{Exam.opD3}</option>
            </select>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Question 4" name="qn4" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 1" name="opA4" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 2" name="opB4" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 3" name="opC4" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 4" name="opD4" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
            <select required class="form-select" name="ans4" onChange={changefn}>
              <option value=''>Open the correct answer</option>
              <option value={Exam.opA4}>{Exam.opA4}</option>
              <option value={Exam.opB4}>{Exam.opB4}</option>
              <option value={Exam.opC4}>{Exam.opC4}</option>
              <option value={Exam.opD4}>{Exam.opD4}</option>
            </select>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Question 5" name="qn5" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 1" name="opA5" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 2" name="opB5" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 3" name="opC5" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 4" name="opD5" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
            <select required class="form-select" name="ans5" onChange={changefn}>
              <option value=''>Open the correct answer</option>
              <option value={Exam.opA5}>{Exam.opA5}</option>
              <option value={Exam.opB5}>{Exam.opB5}</option>
              <option value={Exam.opC5}>{Exam.opC5}</option>
              <option value={Exam.opD5}>{Exam.opD5}</option>
            </select>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Question 6" name="qn6" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 1" name="opA6" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 2" name="opB6" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 3" name="opC6" onChange={changefn}style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 4" name="opD6" onChange={changefn}style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
            <select required class="form-select" name="ans6" onChange={changefn}>
              <option value=''>Open the correct answer</option>
              <option value={Exam.opA6}>{Exam.opA6}</option>
              <option value={Exam.opB6}>{Exam.opB6}</option>
              <option value={Exam.opC6}>{Exam.opC6}</option>
              <option value={Exam.opD6}>{Exam.opD6}</option>
            </select>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Question 7" name="qn7" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 1" name="opA7" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 2" name="opB7" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 3" name="opC7" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 4" name="opD7" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
            <select required class="form-select" name="ans7" onChange={changefn}>
              <option value=''>Open the correct answer</option>
              <option value={Exam.opA7}>{Exam.opA7}</option>
              <option value={Exam.opB7}>{Exam.opB7}</option>
              <option value={Exam.opC7}>{Exam.opC7}</option>
              <option value={Exam.opD7}>{Exam.opD7}</option>
            </select>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Question 8" name="qn8" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 1" name="opA8" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 2" name="opB8" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 3" name="opC8" onChange={changefn}style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 4" name="opD8" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
            <select required class="form-select" name="ans8" onChange={changefn}>
              <option value=''>Open the correct answer</option>
              <option value={Exam.opA8}>{Exam.opA8}</option>
              <option value={Exam.opB8}>{Exam.opB8}</option>
              <option value={Exam.opC8}>{Exam.opC8}</option>
              <option value={Exam.opD8}>{Exam.opD8}</option>
            </select>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Question 9" name="qn9" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 1" name="opA9" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 2" name="opB9" onChange={changefn}  style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 3" name="opC9" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 4" name="opD9" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
            <select required class="form-select" name="ans9" onChange={changefn}>
              <option value=''>Open the correct answer</option>
              <option value={Exam.opA9}>{Exam.opA9}</option>
              <option value={Exam.opB9}>{Exam.opB9}</option>
              <option value={Exam.opC9}>{Exam.opC9}</option>
              <option value={Exam.opD9}>{Exam.opD9}</option>
            </select>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Question 10" name="qn10" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 1" name="opA10" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 2" name="opB10" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 3" name="opC10" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Option 4" name="opD10" onChange={changefn} style={{borderRadius:'1rem',height:'3rem'}}/>
              </div>
            </div>
            <div className="col">
            <select required class="form-select" name="ans10" onChange={changefn}>
              <option value=''>Open the correct answer</option>
              <option value={Exam.opA10}>{Exam.opA10}</option>
              <option value={Exam.opB10}>{Exam.opB10}</option>
              <option value={Exam.opC10}>{Exam.opC10}</option>
              <option value={Exam.opD10}>{Exam.opD10}</option>
            </select>
            </div>
          </div>
         </div>
        <hr/>
        <div className="row">
          <div className="col-12">
          <input type="submit" className="btn btn-primary" style={{width:"100%"}}/>
          </div>
        </div>
        
        </form>
      </div>
    </div>
  );
}

export default AddExam;
