function hasAccessTern(user) {
    return (user.age < 18 || user.age > 35) ? false :
        (user.isAdmin ) ? true : user.paid && !user.blocked && !user.badUsername;
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