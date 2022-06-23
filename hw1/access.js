function hasAccess(user) {
    if (user.age < 18 || user.age > 35) {
        return false;
    }
    if (user.isAdmin) {
        return true;
}
return user.paid && !user.blocked && !user.badUsername;
}

let user1 = {
    age: 18,
    paid: true,
    blocked: false,
    badUsername: false,
    isAdmin: false
}
console.log(hasAccess(user1)); // true

let user2 = {
    age: 16,
    paid: true,
    blocked: false,
    badUsername: false,
    isAdmin: false
}
console.log(hasAccess(user2)); // false

let user3 = {
    age: 22,
    paid: false,
    blocked: false,
    badUsername: false,
    isAdmin: true
}
console.log(hasAccess(user3)); // true