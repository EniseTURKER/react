import React from 'react';

// DO NOT CHANGE THIS FUNCTION, IT RETURNS TRUE OR FALSE ACCORDING TO GIVEN DATES
// joiningDate COMES FROM input-date, validityDate COMES FROM studentList,
function checkValidity(joiningDate, validityDate) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const [year, month, day] = joiningDate.split('-');
  const [yyyy, mm, dd] = validityDate.split('-');
  const maxValid = new Date(yyyy, mm - 1, dd);
  const selected = new Date(year, month - 1, day);
  return (maxValid >= selected) && (maxValid >= today);
}


function Search({ onOnclickHandler, setStudentName, setJoiningDate }) {
  return (
    <div className="my-50 layout-row align-items-end justify-content-end">
      <hr/>
      <label htmlFor="studentName"><i>Student Name:</i>
        <div>
          
          <input id="studentName" data-testid="studentName" type="text" className="mr-30 mt-10"
            onChange={(e) => setStudentName(e.target.value)} />
        </div>
      </label>
      <hr/>
      <label htmlFor="joiningDate"><i>Joining Date:</i>
        <div>
          <input id="joiningDate" data-testid="joiningDate" type="date" className="mr-30 mt-10"
            onChange={(e) => setJoiningDate(e.target.value)} />
        </div>
      </label><hr/>
      <button type="button" data-testid="addBtn" className="small mb-0"
        onClick={onOnclickHandler}>
       <i>Add</i> 
      </button> <hr/>
     
    </div>
  );
}



export default Search;
