const Human = function(name, lastName, phoneNumber, location) {
    this.name = name;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.location = location;
    this.eat = function() {};
    this.sleep = function() {};
    this.callFriend = function() {};
}

const Employee = function(position, department, baseSalary, salaryCurrency, startDate) {
    this.position = position;
    this.department = department;
    this.baseSalary = baseSalary;
    this.salaryCurrency = salaryCurrency;
    this.startDate = startDate;
}

Employee.prototype = new Human();

const CurrentEmployee = function() {
    this.writeReport = function () {};
    this.organizeMeeting = function() {};
    this.retire = function() {};
    this.startVacation = function() {};
}

CurrentEmployee.prototype = new Employee();

const ExEmployee = function(endDate) {
    this.endDate = endDate;
}

ExEmployee.prototype = new Employee();
