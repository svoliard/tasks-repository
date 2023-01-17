const rectangle {
    width: 0,
    height: 0,

    set widthSize(size) {
        if (size >= 0) {
            this.width = size;
        }
    },
        set heightSize(size) {
    if (size >= 0) {
        this.height = size;
    }
},
     get widthSize() {
    return this.width;
},
     get heightSize() {
    return this.height;
},
     get perimeter() {
    return (this.widthSize + this.heightSize) * 2;
},
     get area() {
    return this.widthSize * this.heightSize;
}
};
rectangle.height = 50;
rectangle.width = 40;
