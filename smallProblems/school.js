/* eslint-disable max-lines-per-function */
function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    listCourses() {
      return this.courses;
    },

    addCourse(course) {
      this.courses.push(course);
    },

    addNote(courseCode, note) {
      const course = this.courses.filter(({code}) => code === courseCode)[0];

      if (course) {
        if (course.note) {
          course.note += `; ${note}`;
        } else {
          course.note = note;
        }
      }

    },

    viewNotes() {
      this.courses.forEach(course => {
        if (course.note) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    },

    updateNote(courseCode, note) {
      const course = this.courses.filter(({code}) => code === courseCode)[0];

      if (course) {
        course.note = note;
      }
    },
  };
}

const school = {
  students: [],
  addStudent(name, year) {
    const acceptableYears = ['1st', '2nd', '3rd', '4th', '5th'];

    if (acceptableYears.includes(year)) {
      let newStudent = createStudent(name, year)
      this.students.push(newStudent);
      return newStudent;
    } else {
      return "Invalid year.";
    }
  },
  enrollStudent(name, course) {
    const student = this.students.filter(student => student.name === name)[0];
    student.addCourse(course)
  },
  addGrade(name, courseCode, grade) {
    const student = this.students.filter(student => student.name === name)[0];
    const course = student.courses.filter(course => course.code === courseCode)[0];
    course.grade = grade;
  },
  getReportCard(name) {
    const courses = this.students.filter(student => student.name === name)[0].courses;
    
    courses.forEach(course => { 
      if (course.grade) {
        console.log(`${course.name}: ${course.grade}`)
      } else {
        console.log(`${course.name}: In progress`);
      }
    });
  },
  courseReport(courseName) {
    function getCourse(student, courseName) {
      return student.listCourses().filter(({name}) => name === courseName)[0];
    }

    const courseStudents = this.students.map(student => {
      const course = getCourse(student, courseName) || { grade: undefined };
      return { name: student.name, grade: course.grade };
    }).filter(({grade}) => grade);

    if (courseStudents.length > 0) {
      console.log(`=${courseName} Grades=`);

      const average = courseStudents.reduce((total, {name, grade}) => {
        console.log(`${name}: ${String(grade)}`);
        return total + grade;
      }, 0) / courseStudents.length;

      console.log('---');
      console.log(`Course Average: ${String(average)}`);
    }
  },
};
