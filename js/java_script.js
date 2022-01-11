AddArticle();

function AddArticle(){
    // 呼叫主要的 article id=main
    let Main = document.getElementById("main");

    // 新增 article
    let art = document.createElement("article");

    // 新增 artilce 的屬性 setAttribute("id or class"，"自訂名稱") id
    art.setAttribute("id", "portfoliobox");

    // innerHTML 可寫入純文字，還可以寫入 html 的標籤
    art.innerHTML = "<hi>在 Por 元素的開頭</hi>";

    // 取得 html 標籤(元素)中添加的子元素
    Main.appendChild(art);

    // 1. 在被選取的元素開頭插入內容 prepend() 置入被選取元素之中

    // 2. 在被選取的元素結尾插入內容 append() 置入被選取元素之中

    // 3. 在被選取的元素之後插入內容 before() 置入被選取元素標籤之前
    
    // 4. 在被選取的元素之前插入內容 after() 置入被選取元素標籤之後

    let Con = document.getElementById("contactbox");

    Con.before(art);
}