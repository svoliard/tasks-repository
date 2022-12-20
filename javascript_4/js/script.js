function typesOfAngles(degree) {
    if ((degree > 0) && (degree < 90)) {
        degree = "Acute angle";
    }
    else if (degree === 90) {
        degree = "Right angle";
    }
    else if ((degree > 90) && (degree < 180)) {
        degree = "Obtuse angle";
    }
    else {
        degree = "Straight angle";
    }
    document.getElementById("geometry").innerHTML = degree;
}
typesOfAngles(5);