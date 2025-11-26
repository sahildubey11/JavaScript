let obj ={
    name : "Sahil",
    age : 21,
    isEnrolled: "Yes",
}

console.log(obj.isEnrolled)


const user = {
    "first-name": "Aman",
};
console.log(user['first-name']);




// destructure the city and lat
const locations={
    city: "Jalandhar",
    coordinates :{
        lat: 25.1,
        lng: 77.9,
    }
}
let {city}= locations;
let {lat}= locations.coordinates;

 console.log(lat,city);

// Destructure the key "first-name" as a variable called firstName.
const user1 ={
    "first-name": "Raman",
};

let {"first-name": firstName} = user1;
console.log(firstName);