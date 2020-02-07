import React from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom'

import Home from './components/common/Home'
import Login from './components/user/Login'
import AdminHome from './components/common/AdminHome'
import PrincipalHome from './components/common/PrincipalHome'
import HodHome from './components/common/HodHome'
import FacultyHome from './components/common/FacultyHome'
import AccountantHome from './components/common/AccountantHome'
import StudentsListAdmin from './components/admin/StudentsListAdmin'
import FacultyListAdmin from './components/admin/FacultyListAdmin'
import HodListAdmin from './components/admin/HodListAdmin'
import FeesListAdmin from './components/admin/FeesListAdmin'
import AdminEmpSalary from './components/admin/AdminEmpSalary'
import StudentsListPr from './components/principal/StudentsListPr'
import FacultyListPr from './components/principal/FacultyListPr'
import HodListPr from './components/principal/HodListPr'
import FacultyListHod from './components/hod/FacultyListHod'
import StudentsListHod from './components/hod/StudentsListHod'
import MarksListHod from './components/hod/MarksListHod'
import AttendanceListHod from './components/hod/AttendanceHod'
import FacultyListAttendance from './components/faculty/FacultyListAttendance'
import FacultyListStudents from './components/faculty/FacultyListStudents'
import FacultyListLibrary from './components/faculty/FacultyListLibrary'
import FacultyListAssign from './components/faculty/FacultyListAssign'
import AssignNew from './components/faculty/AssignNew'
import AttendanceNew from './components/faculty/AttendanceNew'
import AccListStud from './components/accountant/AccListStud'
import AccListFaculty from './components/accountant/AccListFaculty'
import AccListInvoice from './components/accountant/AccListInvoice'
import AccListPayslip from './components/accountant/AccListPayslip'
import InvoiceNew from './components/accountant/InvoiceNew'
import PayslipNew from './components/accountant/PayslipNew'
 
function App() {

  

  return (
    <BrowserRouter>
       <Switch>
        <Route path="/" component={Home} exact={true} />
         <Route path="/admin/home" component={AdminHome} />
        <Route path="/principal/home" component={PrincipalHome} />
        <Route path="/hod/home" component={HodHome} />
        <Route path="/faculty/home" component={FacultyHome} />
        <Route path="/accountant/home" component={AccountantHome} />

        <Route path="/user/login" component={Login} />

        <Route path="/admin/students" component={StudentsListAdmin}  />
        <Route path="/admin/faculty" component={FacultyListAdmin} />
        <Route path="/admin/hod" component={HodListAdmin} />
        <Route path="/admin/fees" component={FeesListAdmin} />
        <Route path="/admin/salary" component={AdminEmpSalary}/>
        <Route path="/principal/students" component={StudentsListPr}/>
        <Route path="/principal/faculty" component={FacultyListPr}/>
        <Route path="/principal/hod" component={HodListPr}/>
        <Route path="/hod/students" component={StudentsListHod}/>
        <Route path="/hod/faculty" component={FacultyListHod}/>
        <Route path="/hod/marks" component={MarksListHod}/>
        <Route path="/hod/attendance" component={AttendanceListHod}/>
        <Route path="/faculty/attendance" component={FacultyListAttendance} exact={true}/>
        <Route path="/faculty/students" component={FacultyListStudents}/>
        <Route path="/faculty/library" component={FacultyListLibrary}/>
        <Route path="/faculty/assignments" component={FacultyListAssign} exact ={true}/>
        <Route path="/faculty/assignments/new" component={AssignNew}/>
        <Route path="/faculty/attendance/new" component={AttendanceNew}/>
        <Route path="/accountant/students" component={AccListStud}/>
        <Route path="/accountant/faculty" component={AccListFaculty}/>
        <Route path="/accountant/invoice" component={AccListInvoice} exact ={true}/>
        <Route path="/accountant/invoice/new" component={InvoiceNew}/>
        <Route path="/accountant/payslip" component={AccListPayslip} exact = {true}/>
       <Route path="/accountant/payslip/new" component={PayslipNew}/>
        
        


 
 
 


        {/* <Route path="/customers" component={CustomersList} exact={true} />
        <Route path="/customers/new" component={CustomerNew} />
        <Route path="/customers/show/:id" component={CustomerShow} />
        <Route path="/customers/:id" component={CustomerEdit} />
        <Route path="/departments" component={DepartmentList} exact={true} />
        <Route path="/departments/new" component={DepartmentNew} />
        <Route path="/departments/show/:id" component={DepartmentShow} />
        <Route path="/departments/:id" component={DepartmentEdit} />
        <Route path="/employees" component={EmployeeList} exact={true} />
        <Route path="/employees/new" component={EmployeeNew} />
        <Route path="/employees/show/:id" component={EmployeeShow} />
        <Route path="/employees/:id" component={EmployeeEdit} />
        <Route path="/tickets" component={TicketList} exact={true} />
        <Route path="/tickets/new" component={TicketNew} />
        <Route path="/tickets/show/:id" component={TicketShow} />
        <Route path="/tickets/:id" component={TicketEdit} />  */}
      </Switch>
    </BrowserRouter>
  );
}



export default App