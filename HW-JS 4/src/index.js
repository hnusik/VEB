function createNewUser() {
    let firstName = prompt("Please enter your first name:");
    let lastName = prompt("Please enter your last name:");

    const newUser = {
        getLogin() {
            return (this.firstName[0] + this.lastName).toLowerCase();
        },
        get firstName() {
            return firstName;
        },
        get lastName() {
            return lastName;
        },
        setFirstName(newFirstName) {
            firstName = newFirstName;
        },
        setLastName(newLastName) {
            lastName = newLastName;
        }
    };

    return newUser;
}

const user = createNewUser();
console.log(user.getLogin());

user.setFirstName("John");
user.setLastName("Smith");
console.log(user.getLogin());
