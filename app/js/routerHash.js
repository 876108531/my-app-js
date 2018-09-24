/* Hash */
window.addEventListener('hashchange', function () {
    console.log("location.hash",location.hash);

    fetchData(getUrl()).then(res => JSON.parse(res)).then(res => {
        renderView(res.data)
    }).catch(err => { console.log(err) })
});

var home = document.getElementById("home")
var page1 = document.getElementById("page1")
var page2 = document.getElementById("page2")

home.addEventListener('click', function (e) {
    location.hash = "/"
})

page1.addEventListener('click', function (e) {
    location.hash = "/page1"
})

page2.addEventListener('click', function (e) {
    location.hash = "/page2"
})