function getSize() {
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;

    document.getElementById('size').innerHTML = `Width: ${width} <br/> Height: ${height}`;
}