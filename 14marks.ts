let marks:number =80;
let grade:string;

if (marks >= 80) {
    grade = 'A';
} else if (marks >= 60) {
    grade = 'B';
} else {
    grade = 'C';
}

console.log(`Marks and grade: ${marks} and ${grade}`);
