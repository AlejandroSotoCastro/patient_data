
const book = {
    author: "J.K. Rowling",
    title: "Harry Potter and the Philosopher's Stone",
    publisher: "Bloomsbury Pub Ltd.",
    ISBN: 9780747532743,
  };
  
  // Destructure  author, title and assign to variables
  const { author, publisher,  title, ISBN } = book;


  console.log(book);
  console.log(publisher);