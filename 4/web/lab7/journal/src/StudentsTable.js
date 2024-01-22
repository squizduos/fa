import { useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Student from './Student';

function StudentsTable(props) {
    const [students, setStudents] = useState(
        props.students
    );

    let handleSubmit = (event) => {
        event.preventDefault()
        setStudents([...students, {
            "id": event.target.id.value,
            "name": event.target.name.value,
            "entered": event.target.entered.value,
            "dropped": event.target.dropped.value,
            "faculty": event.target.faculty.value
        }]);
    }

    return (
        <Router>
            <div className="d-flex">
                <Routes>
                    {students.map(student => (
                        <Route exact path={"/Student/" + student.id} element={<Student student={student} />} />
                    ))}
                </Routes>
            <form onSubmit={handleSubmit}>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col">#</th>
                    <th scope="col">ФИО</th>
                    <th scope="col">Дата поступления</th>
                    <th scope="col">Дата отчисления</th>
                    <th scope="col">Специальность</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr>
                            <td>
                                <button onClick={() => {
                                    setStudents(
                                        students.filter(a =>
                                        a.id !== student.id
                                    ));
                                }}>
                                Удалить
                                </button>    
                            </td>
                            <td>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id={student.id} />
                                </div>
                            </td>
                            <th scope="row">
                                <Link to={"/Student/" + student.id}>{student.id}</Link>
                            </th>
                            <td>{student.name}</td>
                            <td>{student.entered}</td>
                            <td>{student.dropped}</td>
                            <td>{student.faculty}</td>
                        </tr>
                    ))}
                            <tr>
                                <td>
                                    <input type="submit" value="Добавить" />
                                </td>
                                <td>a</td>
                                <td>
                                    <input type="text" class="form-control" placeholder="id" aria-label="id" name="id" />
                                </td>
                                <td>
                                    <input type="text" class="form-control" placeholder="имя" aria-label="имя" name="name" />

                                </td>
                                <td>
                                    <input type="text" class="form-control" placeholder="зачислен" aria-label="зачислен" name="entered" />
                                </td>
                                <td>
                                    <input type="text" class="form-control" placeholder="отчислен" aria-label="отчислен" name="dropped" />
                                </td>
                                <td>
                                    <input type="text" class="form-control" placeholder="факультет" aria-label="факультет" name="faculty" />
                                </td>
                            </tr>

                    
                </tbody>
            </table>
            </form>
        </div>
        </Router>
    );
}

export default StudentsTable;