//string
let greetings: string = "Hello";

console.log(greetings);

//number

let userId: number = 447815;

//boolean

let isLoggedIn: boolean = false;

//function

let hero: string;

function getHero() {
  return "SuperMan";
}

hero = getHero();

// function 1

function addTwo(num: number): number {
  // allows to returm only numbers
  return num + 2;
}

addTwo(4);

// function 2

function singUpUser(name: string, email: string, isPaid: boolean) {}

singUpUser("Keerthana", "keerthana5.y@gmail.com", false);

const loginUser = (name: string, email: string, isPaid: boolean = false) => {};

loginUser("Keerthana", "abc@abc.com");

// function 3

function getValue(myVal: number): boolean {
  if (myVal > 0) {
    return true;
  }
  return false;
}

// functio 4

const getHello = (s: String): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];

heros.map((hero) => {
  return `hero is ${hero}`;
});

//objects

const User = {
  name: "Keerthana",
  email: "keerthana5.y@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

//createUser({ name: "Karthik", isPaid: false });

// pass an extra object value by declaring a new object
let user2 = { name: "Karthik", isPaid: false, email: "abac@abc.com" };

createUser(user2);

// function 5

function createCourse(): { name: string; price: number } {
  return { name: "abc", price: 999 };
}

// function 6

//type alias
type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser1(user: User): User {
  return { name: "", email: "", isActive: false };
}

type User4 = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  cardDetails?: number;
};

type cardNumber = {
  cardnum: string;
};

type cardDate = {
  carddate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

let myUser: User4 = {
  _id: "12344",
  name: "k",
  email: "k@kk.com",
  isActive: false,
};

myUser.email = "k@k.com";

function createUser4(u: User) {}

// arrays

const superHeros: string[] = [];

const heroPower: Array<number> = [];

type User5 = {
  name: string;
  isActive: boolean;
};

const allUsers: User5[] = [];

superHeros.push("spiderman");
superHeros.push("batman");
superHeros.push("blackwidow");

allUsers.push({ name: "karthil", isActive: false });

// union

let score: number | string;

score = 444;
score: "Keer";

type User6 = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let keerthana: User6 | Admin = {
  name: "Keerthana",
  id: 504,
};

keerthana = {
  username: "ka",
  id: 334,
};

function getDbId(id: number | string) {
  //making some API calls
  console.log(`DB id is ${id}`);
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

//array

const data: number[] = [1, 2, 3, 4];

const data2: string[] = ["1", "2", "3", "4"];

const data3: (string | number)[] = ["1", "2", "3", "4"];

getDbId(3);
getDbId("ka");

let pi: 3.14 = 3.14;

const user: string[] = ["hc"];

//enums

const enum SeatChoice {
  AISLE = 10,
  MIDDLE,
  WINDOW,
  FOURTH,
}

const kaSeat = SeatChoice.AISLE;

// interfaces

interface User7 {
  email: string;
  userId: number;
  startTrail: () => string;
  getCoupon(couponname: string): number;
}

const keerthanaA: User7 = {
  email: "k@k.com",
  userId: 4,
  startTrail: () => {
    return "hey";
  },
  getCoupon: (name: "keer") => {
    return 504;
  },
};
