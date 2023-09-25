class Student {
    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses: string[];

    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        private courses: string[]
    ) {}

    enroll(courseName: string) {
        this.courses.push(courseName);
    }

    listCourses() {
        return this.courses.slice();
    }
}

const student = new Student('Max', 'Schwarz', 32, ['Angular']);
student.enroll('React');
// student.listCourses() => Angular, React

// student.courses => Angular, React

interface Human {
    firstName: string;
    age: number;

    greet: () => void;
}

let max: Human;

max = {
    firstName: 'Max',
    age: 32,
    
    greet() {
        console.log('Hello!');
    },
};

class Instructor implements Human {
    firstName: string;
    age: number;

    greet() {
        console.log('Hello!!!!');
    }
}