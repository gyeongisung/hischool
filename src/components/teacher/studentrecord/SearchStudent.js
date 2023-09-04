import React, { useEffect } from "react";
import { StudentListDiv } from "../../../styles/teacher/studentrecord/StudentRecordStyle";

const SearchStudent = ({
  selectId,
  studentListData,
  setSelectedId,
  handleStudentRecordData,
}) => {
  const category = ["이름", "생년월일"];

  // 학생 선택
  const handleStudentList = e => {
    const allStudentList = document.querySelectorAll(".student-detail-list");
    allStudentList.forEach(item => item.classList.remove("active"));
    const clickList = e.currentTarget;
    clickList.classList.add("active");
    const studentId = parseInt(clickList.classList[0].slice(10));
    setSelectedId(studentId);
    handleStudentRecordData(studentId);
  };

  // 성적 수정 후, 기존에 선택된 학생의 데이터 출력
  useEffect(() => {
    const allStudentList = document.querySelectorAll(".student-detail-list");
    if (selectId && allStudentList.length > 0) {
      allStudentList.forEach(item => item.classList.remove("active"));
      const selectStudent = Array.from(allStudentList).filter(item => {
        return parseInt(item.classList[0].slice(10)) === selectId;
      });
      selectStudent[0].classList.add("active");
    }
  }, [studentListData]);

  return (
    <div className="student-list-wrap">
      <form action="">
        <input
          type="text"
          id="student-name"
          placeholder="학생 이름을 입력하세요."
        />
        <button>검색</button>
      </form>
      <div className="student-list">
        <StudentListDiv>
          <ul className="category">
            {category.map(item => (
              <li className="category-th" key={item}>
                {item}
              </li>
            ))}
          </ul>
          <ul className="list-wrap">
            {studentListData?.map((item, index) => (
              <li
                className={
                  selectId
                    ? `studentNum${item.userId} student-detail-list`
                    : index === 0
                    ? `studentNum${item.userId} student-detail-list active`
                    : `studentNum${item.userId} student-detail-list`
                }
                onClick={e => handleStudentList(e)}
                key={item.userId}
              >
                <ul>
                  <li>{item.snm}</li>
                  <li>{item.birth}</li>
                </ul>
              </li>
            ))}
          </ul>
        </StudentListDiv>
      </div>
    </div>
  );
};

export default SearchStudent;
