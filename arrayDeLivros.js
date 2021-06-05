const booksByCategory = [
    {
        category: "Riquezas",
        books: [
            {
                title: "Os Segredos da Mente Milionaria",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilonia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki",
            },
        ],
    },
    {
        category: "Inteligencia Emocional",
        books: [
            {
                title: "Você é Insubstituivel",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do seculo",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 habitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",

            },

        ],
    },
];

//Contar o numero de categorias e o numero de livros de em cada categoria
const totalCategories = booksByCategory.length
console.log("O numero de categorias: " + totalCategories)

for (let category of booksByCategory){
    console.log('Total de livros: ', category.category)
    console.log(category.books.length)
}

//Contar o numero de autores
function countAuthors(){
    let authors = []

    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }
    console.log('Total de autores:', authors.length)
}

countAuthors();

//Buscar o autor Augusto Cury
function booksOfAugustoCury(){
    let books = []

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === 'Augusto Cury'){
                books.push(book.title)
            }
        }
    }
    console.log('Livros do autor:', books)
}

booksOfAugustoCury()

// Livro e autores
function booksOfAuthor(author){
    let books = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === author){
                books.push(book.title)
            }
        }
    }
    console.log(`'Livros do autor ${author}: ${books.join(", ")}`)
}

booksOfAuthor('George S. Clason')