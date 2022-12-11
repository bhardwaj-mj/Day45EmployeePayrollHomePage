window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" + 
                        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    let empPayrollData = createEmployeePayrollJSON()[1];                    
    const innerHtml = `${headerHtml}
     <tr>
      <td><img class="profile" alt="" src="../assets/profile-images/Ellipse -2.png"></td>
      <td>${empPayrollData._name}</td>
      <td>${empPayrollData._gender}</td>
      <td>${getDeptHtml(empPayrollData._department)}</div>
      <td>${empPayrollData._salary}</td>
      <td>${empPayrollData._gender}</td>
      <td>
         <img name="${empPayrollData._id}" onclick="remove(this)" alt="delete"src="../assets/icons/delete-black-18dp.svg">
         <img name="${empPayrollData._id}" alt="edit" onclick="update(this)"src="../assets/icons/create-black-18dp.svg">
      </td>    
</tr>
    `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList){
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}

const createEmployeePayrollJSON = () => {
    let empPayrollListLocal =[
        {
            _name: 'Narayan Mahadevan',
            _gender: 'male',
            _department: [
                'Engineering',
                'Finance'
            ],
            _salary:'500000',
            _startDate: '29 Oct 2019',
            _note:'',
            _id: new Date().getTime(),
            _profilePic: '../assets/profile-images/Ellipse -2.png'
        },
        {
            _name: 'Rashmika Mandanna',
            _gender: 'Female',
            _department: [
                'Finance'
            ],
            _salary:'5000000',
            _startDate: '29 Sept 2020',
            _note:'',
            _id: new Date().getTime(),
            _profilePic: '../assets/profile-images/Ellipse -1.png'
        }
    ];
    return empPayrollListLocal;
}