const books = [
    {
        title: 'Horus Rising',
        author: 'Dan Abnett',
        alreadyRead: true
    },
    {
        title: 'False Gods',
        author: 'Graham McNeill',
        alreadyRead: true
    },
    {
        title: 'Galaxy in Flames',
        author: 'Ben Counter',
        alreadyRead: false
    },
    {
        title: 'The Flight of the Eisenstein',
        author: 'James Swallow',
        alreadyRead: true
    },
    {
        title: 'Descent of Angels',
        author: 'Mitchell Scanlon',
        alreadyRead: false
    },
];
for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const bookInfo = `'${book.title}' by ${book.author}`;

    if (book.alreadyRead) {
        console.log('You already read ' + bookInfo);
    } else {
        console.log('You still need to read ' + bookInfo);
    }
};