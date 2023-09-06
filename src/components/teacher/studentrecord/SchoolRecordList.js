import { useEffect, useState } from "react";
import { SchoolRecordListDiv } from "../../../styles/teacher/studentrecord/StudentRecordStyle";
import {
  getAllStudentCount,
  getStudentCount,
} from "../../../api/teacher/teacherHomeAxios";
import { useDispatch, useSelector } from "react-redux";
import { client } from "../../../api/login/client";
import { finishLoading, startLoading } from "../../../reducers/loadingSlice";
import Loading from "../../Loading";

const SchoolRecordList = ({
  studentSchoolRecordList,
  setSchoolResultIdList,
  schoolResultIdList,
}) => {
  const { loading } = useSelector(state => state.loading);
  const dispatch = useDispatch();
  const today = new Date();
  const todayYear = today.getFullYear().toString();
  let resultIdArray = schoolResultIdList;
  const [allStudentCount, setAllStudentCount] = useState(null);
  const [studentCount, setStudentCount] = useState(null);

  // 전체 선택
  const handleAllCheck = e => {
    const allCheckBox = document.querySelectorAll(".school-checkbox");
    resultIdArray = [];
    if (e.target.checked === true) {
      allCheckBox.forEach(item => {
        item.checked = true;
        resultIdArray.push(parseInt(item.classList[1].slice(8)));
      });
    } else {
      allCheckBox.forEach(item => {
        item.checked = false;
      });
      resultIdArray = [];
    }
    setSchoolResultIdList(resultIdArray);
  };

  // 개별 선택
  const handleCheckBox = e => {
    const clickList = e.currentTarget;
    const resultId = parseInt(clickList.classList[1].slice(8));
    if (e.target.checked === true) {
      resultIdArray.push(resultId);
    } else {
      resultIdArray = resultIdArray.filter(item => item !== resultId);
    }
    setSchoolResultIdList(resultIdArray);
  };

  // 학급 정원, 전교생 수 불러오기
  useEffect(() => {
    getAllStudentCount(setAllStudentCount);
    getStudentCount(setStudentCount);
  }, []);

  // 학생 선택 변경 시
  useEffect(() => {
    document.querySelector(".school-all-checkbox-btn").checked = false;
    document
      .querySelectorAll(".school-checkbox")
      .forEach(item => (item.checked = false));
    setSchoolResultIdList([]);
  }, [studentSchoolRecordList]);

  return (
    <SchoolRecordListDiv>
      <ul className="category">
        <li className="category-th">
          <input
            type="checkbox"
            name="schoop-all-checkbox"
            onClick={e => handleAllCheck(e)}
            className="school-all-checkbox-btn"
          />
        </li>
        <li className="category-th">연도</li>
        <li className="category-th">학기</li>
        <li className="category-th">시험 구분</li>
        <li className="category-th">과목 계열</li>
        <li className="category-th">과목명</li>
        <li className="category-th">점수</li>
        <li className="category-th">등급</li>
        <li className="category-th">반석차</li>
        <li className="category-th">전교석차</li>
      </ul>
      <ul className="record-data">
        {/* {loading ? <Loading /> : null} */}
        {studentSchoolRecordList?.length > 0 ? (
          studentSchoolRecordList.map(item => (
            <li className="data-table" key={item.resultId}>
              <ul>
                <li>
                  {item.year === todayYear ? (
                    <input
                      type="checkbox"
                      name={item.resultId}
                      defaultChecked={false}
                      className={`school-checkbox resultId${item.resultId} year${item.year}`}
                      onClick={e => handleCheckBox(e)}
                    />
                  ) : (
                    ""
                  )}
                </li>
                <li>{item.year}</li>
                <li>{item.semester}</li>
                <li>{item.midFinal === 1 ? "중간" : "기말"}</li>
                <li>{item.cateName}</li>
                <li>{item.nm}</li>
                <li>{item.score}</li>
                <li>{item.rating}</li>
                <li>
                  {item.classRank}/{studentCount}
                </li>
                <li>
                  {item.wholeRank}/{allStudentCount}
                </li>
              </ul>
            </li>
          ))
        ) : (
          <p className="err-message">내신 성적 데이터가 없습니다.</p>
        )}
      </ul>
    </SchoolRecordListDiv>
  );
};

export default SchoolRecordList;
