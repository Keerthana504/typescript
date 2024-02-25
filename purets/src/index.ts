console.log("typescript is here");

class User {
  email: string;
  name: string;
  private readonly city: string = "Hyderabad";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const keerthana = new User("kk@k.com", "keer");
