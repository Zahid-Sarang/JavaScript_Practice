/* ------------------------- */
/*     utility function.     */
/* ------------------------- */

// Increment
// let id =1
class User {
    static id = 1
    static cache = {
        1:"some value",
    }
    constructor(name, age,income) {
        this.name = name;
        this.age = age;
        this.income = income
        this.id = User.id++;
    }

    static{
        console.log("initalized");
    }

    static hasInCache () {
   console.log(User.cache)
     
    }

    // static compareByAge(user1,user2){
    //     return user1.age - user2.age
    // }
    // static compareByIncome(user1,user2){
    //     return user1.income - user2.income
    // }
}

User.hasInCache();
// const user1 = new User("zahid", 28,9000);

// const user2 = new User("sarang", 19,600);
// const user3 = new User("Jhon", 38,900);
// console.log(user1,user2,user3)

// const users = [user1,user3,user2]
// // users.sort(User.compareByAge);
// users.sort(User.compareByIncome)
