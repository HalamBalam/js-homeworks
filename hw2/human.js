let human = {
    set fullName(value) {
        let arr = value.split(' ');
        this.firstName = arr[0];
        this.lastName = arr[1];
    },
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },
    set dateOfBirth(value) {
        let today = new Date();
        let ageInMs = today - value;
        let msPerDay = 24 * 60 * 60 * 1000;
        this.age = Math.floor(ageInMs / msPerDay / 365);
        this.dateOfBirthValue = value;
    },
    get dateOfBirth() {
        return this.dateOfBirthValue;
    }
}

human.fullName = 'Антон Сурганов';
human.dateOfBirth = new Date(1985, 8, 20);
console.log(human);