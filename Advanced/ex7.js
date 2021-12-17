
//Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.

var student1Courses = ['Math', 'English', 'Programming'];
var student2Courses = ['Geography', 'Spanish', 'Programming'];

for (const courseI of student1Courses) {
    for (const courseJ of student2Courses) {
        if (courseI.toLowerCase() === courseJ.toLowerCase()) {
            console.log(courseI);
        }
    }
};