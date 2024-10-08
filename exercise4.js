//Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

let sameCourses = student1Courses.filter(course => student2Courses.includes(course)); {
    if (sameCourses.length > 0) {
        console.log("Same Courses :", sameCourses);
    }
}
