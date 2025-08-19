// OBJECTS - {Key: value, key: value}
// decriptive
//  can tgake any data type
// object methods - fucntion declaration written by the dev inside of an object
const person = {
  name: "John Doe",
  age: 42,
  complexion: "Dark",
  isMarried: true,
  friends: ["Jane", "Peter", "Susan"],
  // object methods - fucntion declaration written by the dev inside of an object
  description: function () {
    return `My name is ${this.name}, and i am ${this.age} years old`;
  },
  maritalSummary: function () {
    return `${this.name} ${this.isMarried ? "is" : "is not"} married`;
  },
};
console.log(person.description());
console.log(person.maritalSummary());

// how to get properties from object, dot notation, bracket notation
// dot notation objrctName.propertyName

console.log(person.name);
console.log(person.friends);
console.log(person.friends[1]);

// bracket method
console.log(person["friends"]);
console.log(person["age"]);

// add new properties to an object
person.height = "6'1";
person.gender = "Male";

// bracket notation
person["hobby"] = "Swimming";

console.log(person);

// how to remove prperties 'delete' using Dot notation
delete person.complexion;

// how to remove prperties 'delete' using bracket notation
delete person["age"];

// nested objects
// id , personalInfo, contact info, accountInfo

const customer = {
  id: "Cust-1",
  personalInfo: {
    firstName: "Peter",
    lastName: "Pan",
    gender: "Male",
    dateOfBirth: "1990-06-12",
    nationality: "Nigerian",
  },

  contactInfo: {
    email: "peterpan@gmail.com",
    phone: "+2348012345678",
    address: {
      street: "12, Bode Thomas",
      city: "Lagos",
      postalcode: "100001",
    },
  },
  accountInfo: {
    cardType: "Visa",
    accontNumber: "012345678",
    accountType: "Savings",
  },

  greeting: function () {
    return `Hello ${this.personalInfo.firstName}, Welcome Back`;
  },

  getAddress: function () {
    return `${this.personalInfo.firstName} lives at ${this.contactInfo.address.street} street ${this.contactInfo.address.city}`;
  },
};
console.log(customer.personalInfo.dateOfBirth);
console.log(customer.contactInfo.address.street);
console.log(customer.getAddress());

// write a method called greeting- Hello Peter, Welcome back
console.log(customer.greeting());

// write a method getAddress-> Peter lives at 12, Bode Thomas Street, Lagos

// adding bank name to the account info
customer.accountInfo.bankName = "GTBank";

const customer2 = {
  id: "CUST-2025-0001",
  personalInfo: {
    firstName: "Ademola",
    lastName: "Adeyemi",
    gender: "Male",
    dateOfBirth: "1990-06-12",
    nationality: "Nigerian",
    maritalStatus: "Married",
    profileImage: "https://example.com/profiles/ademola.jpg",
  },
  contactInfo: {
    email: "ademola.adeyemi@example.com",
    phone: "+2348012345678",
    secondaryPhone: "+2348098765432",
    address: {
      street: "12 Bode Thomas Street",
      city: "Lagos",
      state: "Lagos State",
      country: "Nigeria",
      postalCode: "100001",
    },
  },
  accountInfo: {
    username: "ademola90",
    passwordHash: "************", // hashed in reality
    registeredAt: "2023-04-10T08:30:00Z",
    lastLogin: "2025-08-16T13:45:00Z",
    status: "active", // active | suspended | inactive
    roles: ["customer", "premium_member"],
    loyaltyPoints: 2450,
    tier: "Gold", // Bronze, Silver, Gold, Platinum
  },
  preferences: {
    language: "English",
    currency: "NGN",
    newsletterSubscribed: true,
    smsAlerts: false,
    preferredContactMethod: "email", // email | sms | phone
    interests: ["Tech", "Sports", "Travel", "Finance"],
  },
  paymentInfo: {
    defaultMethod: "Visa Card",
    cards: [
      {
        cardType: "Visa",
        last4Digits: "1234",
        expiry: "08/27",
        billingAddress: "12 Bode Thomas Street, Lagos",
      },
    ],
    bankAccounts: [
      {
        bankName: "GTBank",
        accountNumber: "0123456789",
        accountType: "Savings",
      },
    ],
  },
  orders: [
    {
      orderId: "ORD-2025-001",
      date: "2025-07-20T15:32:00Z",
      amount: 120000,
      status: "Delivered",
      items: [
        { name: "MacBook Air", quantity: 1, price: 95000 },
        { name: "Wireless Mouse", quantity: 1, price: 25000 },
      ],
    },
    {
      orderId: "ORD-2025-002",
      date: "2025-08-05T10:12:00Z",
      amount: 45000,
      status: "Shipped",
      items: [
        { name: "Noise Cancelling Headphones", quantity: 1, price: 45000 },
      ],
    },
  ],
  supportTickets: [
    {
      ticketId: "TKT-2025-101",
      subject: "Late Delivery",
      status: "resolved",
      createdAt: "2025-06-01T11:00:00Z",
      resolvedAt: "2025-06-03T16:00:00Z",
    },
  ],
  socialProfiles: {
    twitter: "https://twitter.com/ademola90",
    linkedin: "https://linkedin.com/in/ademola-adeyemi",
    facebook: "https://facebook.com/ademola.adeyemi",
  },
  meta: {
    createdBy: "system",
    updatedBy: "admin01",
    createdAt: "2023-04-10T08:30:00Z",
    updatedAt: "2025-08-10T09:20:00Z",
    tags: ["VIP", "EarlyAdopter", "HighSpender"],
  },
};
console.log(customer2.orders[1].items[0].price);
console.log(customer2.orders[0].items[1].name);

console.log(customer2.paymentInfo.bankAccounts[0].bankName);
console.log(customer2.socialProfiles.facebook);

const transfer = {
  type: "debit",
  amount: 2000,
  timestamps: {
    date: "",
    time: "",
  },
  status: "initiated",
  transactionId: "3636736367",
  recipient: {
    bankName: "Polaris",
    accountNumber: "7873783",
    name: "Ade Ola",
  },
  reInitiateTransfer: function () {
    if (this.status !== "completed") {
    }
  },
  checksAccount: function () {},
};

// object destructuring - it allows us to pick multiple properties from objects one at a time

const book = {
  title: "Purple Hibiscus",
  author: "Chimamanda Ngozi Adichie",
  yearPublished: 2003,
  theme: ["Family", "Religion", "Freedom"],
  setting: {
    country: "Nigeria",
    cities: ["Enugu", "Nsukka"] ,
    timePeriod: "Postcolonial Nigeria",
  },
};

// example

const { title, 
    yearPublished, 
    theme, 
    setting:{country}, 
} = book;
// *
console.log(title,yearPublished,theme, );
console.log(country);

