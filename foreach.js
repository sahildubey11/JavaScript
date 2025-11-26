//use Object.entries() to print all key-value pairs as:
// title: JavaScript
// duration: 4 weeks

const course = {
    title : "JavaScript",
    duration: "4 weeks",
};

Object.entries(course).forEach(function (val){
    console.log(val[0] + ": " + val[1]);

});