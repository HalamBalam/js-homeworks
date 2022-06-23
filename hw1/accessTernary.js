function hasAccessTern({ age, isAdmin, paid, blocked, badUsername }) {
    const isAgeOk = age >= 18 && age <= 35;
    return isAgeOk && (isAdmin || paid && !blocked && !badUsername) ? true : false;
}

let user1 = {
    age: 18,
    paid: true,
    blocked: false,
    badUsername: false,
    isAdmin: false
}
console.log(hasAccessTern(user1)); // true

let user2 = {
    age: 16,
    paid: true,
    blocked: false,
    badUsername: false,
    isAdmin: false
}
console.log(hasAccessTern(user2)); // false

let user3 = {
    age: 22,
    paid: false,
    blocked: false,
    badUsername: false,
    isAdmin: true
}
console.log(hasAccessTern(user3)); // true