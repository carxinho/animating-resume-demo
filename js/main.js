var result = `/* 
 * 面试官你好，我是XXX
 * 只用文字作做我介绍太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
 */

*{
    transition:all 1s;
}

html{
    background: rgb(222,222,222);
    font-size: 16px;
}

#code{
    border: 1px solid grey;
    padding:16px;
    position: fixed;
    left: 0;
    width: 50%;
    height: 100%;
}
#paper{
    position: fixed;
    right: 0;
    width: 50%;
    height: 100%;
    background: rgb(222,222,222);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
}
.content{
    background:white;
    width: 100%;
    height: 100%;
}
/*接下来我来加点代码高亮*/
.token.selector{
    color:#690;
}.token.property{
    color:#905;
}
.token.function{
    color: #DD4A68;
}

/*接下来我需要一张白纸*/
`

function writeCode(prefix, code, fn) {
    let domCode = document.querySelector('#code')
    domCode.innerHTML = prefix || ''
    let n = 0
    let id = setInterval(() => {
        n += 1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)
        styleTag.innerHTML = prefix + code.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight
        if (n >= code.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 0)
}
var result2 = `*接下来我们把markdown变成html吧*/`
var md = `# 自我介绍
我叫 XXX
199X 年 X 月出生
XXX 学校毕业
自学前端半年
希望应聘前端开发岗位
# 技能介绍
熟悉 JavaScript CSS
# 项目介绍
1. XXX 轮播
2. XXX 简历
3. XXX 画板
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
`

writeCode('', result, () => {
    createPaper()
    writeCode(result, result2, ()=>{
        writeMarkdown(md)
    })
})

function createPaper() {
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
}

function writeMarkdown(markdown, fn) {
    let paperDom = document.querySelector('#paper >.content')
    let n = 0
    let id = setInterval(() => {
        n += 1
        paperDom.innerHTML = markdown.substring(0, n)
        paperDom.scrollTop = paperDom.scrollHeight
        if (n >= markdown.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 0)
}