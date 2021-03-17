import React from 'react';
import HOC from './hoc';
import Student from './Component/Student';
import Teacher from './Component/Teacher';

const dataStudent = [
    {id: 1,name: 'Van Teo', phone: '05645645465',age: 20 , email: 'tiennv@gmail.com'},
    {id: 2,name: 'Van Ty', phone: '05645645465',age: 20 , email: 'tiennv@gmail.com'},
];
const dataTeacher = [
    {id: 1,name: 'Van Hoa', phone: '05645645465',age: 99 , email: 'tiennv@gmail.com'},
    {id: 2,name: 'Van Toan', phone: '05645645465',age: 999 , email: 'tiennv@gmail.com'},
];

const NewStudent = HOC(Student, dataStudent);
const NewTeacher = HOC(Teacher, dataTeacher);

class AppHoc extends React.Component{
    render(){
        return(
            <>
                <NewStudent/>
                <NewTeacher/>
            </>
        )
    }
}
export default AppHoc;