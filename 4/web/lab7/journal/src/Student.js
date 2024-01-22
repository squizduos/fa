import { useState } from 'react';

function Student(props) {
    let student = props.student;
    return (
        <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">ФИО</th>
                    <th scope="col">Дата поступления</th>
                    <th scope="col">Дата отчисления</th>
                    <th scope="col">Специальность</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            {student.id}
                        </th>
                        <td>{student.name}</td>
                        <td>{student.entered}</td>
                        <td>{student.dropped}</td>
                        <td>{student.faculty}</td>
                    </tr>
                </tbody>
            </table>
    )
}

export default Student;