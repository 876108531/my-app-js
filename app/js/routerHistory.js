/* history API */
window.addEventListener('popstate', function (e) {
    // 浏览器动作触发
    console.log("history.state",history.state);
    fetchData(getUrl()).then(res => JSON.parse(res)).then(res => {
        renderView(res.data)
    }).catch(err => { console.log(err) })
});

var home = document.getElementById("home")
var page1 = document.getElementById("page1")
var page2 = document.getElementById("page2")

home.addEventListener('click', function (e) {

    var stateObj = { path: "index" };
    /* 
    * pushstate(state object, title, url)
    * state object: 可以通过history.state获取到的对象值，可以理解为带参
    * title: 短标题，暂时无用
    * url: 要跳转的路由
    */
    history.pushState(stateObj, "index", "/")

    fetchData(getUrl()).then(res => JSON.parse(res)).then(res => {
        renderView(res.data)
    }).catch(err => { console.log(err) })
})

page1.addEventListener('click', function (e) {

    var stateObj = { path: "page1" };
    history.pushState(stateObj, "page1", "/page1.html")

    fetchData(getUrl()).then(res => JSON.parse(res)).then(res => {
        renderView(res.data)
    }).catch(err => { console.log(err) })
})

page2.addEventListener('click', function (e) {

    var stateObj = { path: "page2" };
    
    // replaceState 与 pushState 用法相同 效果不同
    if (history.state.path === "page1") {
        history.replaceState(stateObj, "page2", "/page2.html")
    } else {
        history.pushState(stateObj, "page2", "/page2.html")
    }

    fetchData(getUrl()).then(res => JSON.parse(res)).then(res => {
        renderView(res.data)
    }).catch(err => { console.log(err) })
})