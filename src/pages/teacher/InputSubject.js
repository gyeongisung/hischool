import React from "react";
import {
  InputSubJectWrap,
  SJButton,
  SJHeader,
  SJTitle,
} from "../../styles/teacher/InputSubectStyle";
import TSubjectPlus from "../../components/teacher/TSubjectPlus";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import {
  getALLMainSubData,
  getALLSubData,
  postALLData,
} from "../../api/teacher/inputSubjectAxios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { ISRButtonWrapper } from "../../styles/teacher/InputSchoolRecordStyle";

const InputSubject = () => {
  const [studentsData, setStudentsData] = useState([]);
  const [lastSavedData, setLastSavedData] = useState([]);
  const [subjectData, setSubjectData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const interimData = [{}];
    setStudentsData(interimData);
    setLastSavedData(interimData);
  }, []);
  // 새로운 데이터를 전달하는 함수
  const updateLastSavedData = (_id, newData) => {
    const updateData = lastSavedData.map((item, idx) => {
      if (idx === _id) {
        item = newData;
      }
      return item;
    });
    setLastSavedData(updateData);
  };
  const handleSaveButtonClick = () => {
    if (lastSavedData) {
      const dataToSend = lastSavedData.map(item => ({
        subjectid: parseInt(item.subjectid) || 0,
      }));
      postALLData(dataToSend);
      console.log(dataToSend);
    }
  };
  const handleAddButtonClick = () => {
    const newStudent = {
      subSubject: null,
      subject: null,
    };
    setStudentsData(data => [...data, newStudent]);
    setLastSavedData(data => [...data, newStudent]);
  };
  useEffect(() => {
    async function fetchData() {
      try {
        // 주요과목 데이터 가져오기
        const mainSubData = await getALLMainSubData();
        // 하위과목 데이터 가져오기
        const newSubjectData = await Promise.all(
          mainSubData.map(async mainSubject => {
            const subData = await getALLSubData(mainSubject.categoryid);
            return {
              mainsubject: mainSubject.nm,
              data: subData.map(subSubject => ({
                subsubject: subSubject.nm,
                subjectid: subSubject.subjectid,
              })),
            };
          }),
        );

        // subjectData 상태 업데이트
        setSubjectData(newSubjectData);
      } catch (err) {
        console.log(err);
        setSubjectData([]);
      }
    }

    fetchData();
  }, []);
  return (
    <InputSubJectWrap>
      <SJHeader>
        <h3>과목 정보 입력</h3>
        <SJButton>
          <button onClick={handleSaveButtonClick}>저장</button>
          <button onClick={() => navigate(-1)}>취소</button>
        </SJButton>
      </SJHeader>
      <SJTitle>
        <p>과목계열</p>
        <p>세부과목</p>
      </SJTitle>
      <div>
        {studentsData.map((item, index) => (
          <TSubjectPlus
            key={index}
            id={index}
            subjectData={subjectData}
            studentsData={studentsData[index]}
            setStudentsData={setStudentsData}
            updateLastSavedData={updateLastSavedData}
          />
        ))}
      </div>
      <ISRButtonWrapper>
        <button onClick={handleAddButtonClick}>
          항목 추가
          <FontAwesomeIcon icon={faPlusCircle} className="icon" />
        </button>
      </ISRButtonWrapper>
    </InputSubJectWrap>
  );
};

export default InputSubject;
