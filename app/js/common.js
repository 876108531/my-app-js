window.onload = function () {
    fetchData(getUrl()).then(res => JSON.parse(res)).then(res => {
        renderView(res.data)
    }).catch(err => { console.log(err) })
}

function renderView(data) {
    console.log(data)
    // 根据不同数据 操作dom 渲染出view 理解为mvc中的view
    const PATH = location.hash.slice(1) || location.pathname.slice(0,-5) || "/"
    const COLOR = {
        "/": "black",
        "/page1": "red",
        "/page2": "yellow",
    }
    
    const content = document.getElementById("content")
        , box = document.createElement("div")
        , titleEle = document.createElement("p")
        , titleTxt = document.createTextNode(data.title)
        , style = document.createAttribute("style");
    
    style.nodeValue = `color: ${COLOR[PATH]}`
    titleEle.setAttributeNode(style)
    titleEle.appendChild(titleTxt)
    box.appendChild(titleEle)

    content.innerHTML = ""

    if (PATH === "/page2") {
        const btn = document.createElement("input")
        btn.setAttribute("type", "button")
        btn.setAttribute("value", "点击")
        btn.onclick = e => {
            alert(data.value)
        }

        content.appendChild(btn)
    }

    content.appendChild(box)
}

function fetchData(url) {
    // 根据不同路由获取不同数据 理解为mvc中的model 数据模型
    // controller 可以 改变数据模型
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest
        xhr.open("GET", url, true);
        xhr.onload = () => resolve(xhr.responseText)
        xhr.onerror = () => reject(xhr.statusText)
        xhr.send();
    })
}

function getUrl() {
    const PATH = location.hash.slice(1) || location.pathname.slice(0,-5) || "/"
    console.log(PATH)
    const URL = {
        "/": "./mock/index.json",
        "/page1": "./mock/page1.json",
        "/page2": "./mock/page2.json",
    }

    return URL[PATH]
}