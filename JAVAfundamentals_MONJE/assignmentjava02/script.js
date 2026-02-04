// Task 1: Create and Use an Object
const book = {
    title: "An Offer from a Gentleman",
    author: "Julia Quinn",
    pages: 483,
    isRead: false
};

console.log(book.title);
console.log(book.author);
console.log(book.pages);
console.log(book.isRead);

console.log(book["title"]);
console.log(book["author"]);
console.log(book["pages"]);
console.log(book["isRead"]);


book.isRead = true;
book.genre = "Fantasy and Romance";

console.log(book);


const movies = [
    {
        title: "Wicked: For Good",
        director: "Jon M. Chu",
        year: 2025
    },
    {
        title: "A Walk to Remember",
        director: "Adam Shankman",
        year: 2002
    },
    {
        title: "She's All That",
        director: "Robert Iscove",
        year: 1999
    }
];


console.log(movies[1].title);


movies.push({
    title: "Dune",
    director: "Denis Villeneuve",
    year: 2021
});


movies[0].year = 2023;


console.log(movies);


// Task 3

const student = {
    name: "Raphaella Louise P. Monjw",
    age: 22,
    subjects: ["Software Engineering and Design", "CpE Practice and Design 2", "On the Job Training"]
};


console.log(student.subjects[0]);


student.subjects.push("Computer Programming");

console.log(student);

// Task 4
const recipe = {
    name: "Chicken Adobo",
    ingredients: [
        {
            name: "Chicken",
            quantity: "1 kg"
        },
        {
            name: "Soy Sauce",
            quantity: "1/2 cup"
        },
        {
            name: "Vinegar",
            quantity: "1/3 cup"
        },
        {
            name: "Garlic",
            quantity: "6 cloves"
        },
        {
            name: "Bay Leaf",
            quantity: "2 pieces"
        }
    ],
    isVegetarian: false
};


recipe.ingredients.push({
    name: "Cheese",
    quantity: "1/2 cup"
});

console.log(recipe.ingredients[1].name);
console.log(recipe);
