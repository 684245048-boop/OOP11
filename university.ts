class University {
    students: Student[];
    teachers: Teacher[];

    constructor(students: Student[], teachers: Teacher[]) {
        this.students = students;
        this.teachers = teachers;
    }

    showUniversityInfo(): void {
        console.log("University Information:");
        
        console.log("Teachers");
        this.teachers.forEach((t) => {
            console.log(t.getTeacherInfo());
        });

        console.log("Students");
        this.students.forEach((s) => {
            console.log(s.getStudentInfo());
        });
    }
}

class Student {
    constructor(private id: string, private name: string, private faculty: string) {}
    getStudentInfo(): string {
        return `นักศึกษารหัส ${this.id} ชื่อ ${this.name} คณะ ${this.faculty}`;
    }
}

class Teacher {
    constructor(private name: string, private major: string) {}
    getTeacherInfo(): string {
        return `อาจารย์ ${this.name} สาขา ${this.major}`;
    }
    teach(student: Student): void {
        console.log(`${this.getTeacherInfo()} กำลังสอน ${student.getStudentInfo()}`);
    }
}

const student1 = new Student("6745001", "อำนาจ", "Science");
const student2 = new Student("6745002", "นำผล", "Science");
const student3 = new Student("6745003", "วันเพ็ญ", "Education");

const teacher1 = new Teacher("Dr. สมชาย", "วิทยาการคอมพิวเตอร์");
const teacher2 = new Teacher("Dr. สมหญิง", "ปฐมวัย");

const myUniversity = new University([student1, student2, student3], [teacher1, teacher2]);

myUniversity.showUniversityInfo();

console.log("--------------------------");
teacher1.teach(student1);
teacher1.teach(student2);
teacher1.teach(student3);