const book = {
    title: 'Horus Rising',
    author: 'Dan Abnett',
    pages: 688,
    currentPage: 1,
    read: function (numPages) {
        this.currentPage += numPages;
        console.log(`Reading ${numPages} pages`);
    },
    checkPage: function () {
        console.log(`current page is: ${this.currentPage}`);
    },
    checkPercentage: function () {
        console.log(`${(this.currentPage / this.pages) * 100}%`);
    },
    isRead: function () {
        return this.currentPage === this.pages;
    }
};
book.read(52);
book.checkPage();
book.checkPercentage();
book.isRead();
