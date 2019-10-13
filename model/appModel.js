var sql = require('./../db');
var task = {

}
task.studentList = () => {
    return new Promise((resolve, reject) =>   {                                 
        sql.query('select * from  student_info', (err, res) => {

            if (err) {
                reject(err);
            }
            else {
                resolve(res);
            }

        });
    });

}
task.addStudent = (data) => {                                                  //get data(req.body) from  add_student() in app.Controller.js
    return new Promise((resolve, reject) => {
        sql.query('insert into student_info set ?', data, (err, res) => {

            if (err) {
                reject(err);
            }
            else {
                resolve('data inserted successfully');
            }

        });
    });

}

task.studentDetail = (id) => {                                                    //get id(req.params.id) from  student_detail() in app.Controller.js
    return new Promise((resolve, reject) => {
        sql.query('select * from  student_info where id=?', id, (err, res) => {
            if (err) {

                reject(err);
            }
            else {

                resolve(res);
            }

        });
    })
}

task.updateDetail = (id, data, result) => {                                     //get id(req.body.params) and data(req.body) from  update_detail() in app.Controller.js
    return new Promise((resolve, reject) => {
        sql.query('update student_info set name=? ,class=?, roll_no=? where id=?', [data.name, data.class, data.roll_no, id], (err, res) => {

            if (err) {
                reject(err);
            }
            else {

                resolve('data updated successfully');
            }

        });
    });

}

task.deleteStudent = (id) => {
    return new Promise((resolve, reject) => {
        sql.query('delete from student_info where id=?', id, (err, res) => {

            if (err) {

                reject(err);
            }
            else {

                resolve('data delete successfully');
            }

        });

    });
}


module.exports = task;