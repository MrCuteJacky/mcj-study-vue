function displayCourseName1(name) {
    console.log(`course name=${name}`)
}

const displayCourseName2 = (name) => {
    console.log(`course name=${name}`)
}

const displayCourseName3 = name => {
    console.log(`course name=${name}`)
}

const displayCourseName4 = () => {
    console.log(`course name not decided yet.`)
}

const earning1 = (attendee) => {
    return attendee * 8000;
}

const earning2 = attendee => attendee * 8000

displayCourseName1("VUE1")
displayCourseName2("VUE2")
displayCourseName3("VUE3")
displayCourseName4()

console.log("earning1=", earning1(1));
console.log("earning2=", earning2(2));
