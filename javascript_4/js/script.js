function typesOfAngles(degree) {
    if ((degree > 0) && (degree < 90)) {
        return "Acute angle";
    }
    else if (degree === 90) {
        return "Right angle";
    }
    else if ((degree > 90) && (degree < 180)) {
        return "Obtuse angle";
    }
    else {
        return "Straight angle";
    }
    document.getElementById("geometry").innerHTML = degree;
}
document.write(typesOfAngles(90));