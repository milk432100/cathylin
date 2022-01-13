// AddArticle();
AddArticle();
function AddArticles() {
    // 陣列 id
    let ArtId = ['portfoliobox','aboutbox','projectbox'];

    // 主要的 article id=main
    let Main = document.getElementById("main");

    // 產出 3 個標籤
    for ( let i = 0; i < ArtId.length; i++) {
        // 要新增的標籤 article
        let art = document.createElement("article");

        // 新增 article 的 id
        art.setAttribute("id", ArtId[i]); 

        // 在框架內新增子元素 main > article
        Main.appendChild(art);

        // 標籤要在 #contactbox 之上
        let Con = document.getElementById("contactbox");
        Con.before(art);
    }
};

// JQuery 語法
// 行動裝置選單按鈕，開啟與關閉
// 1.隱藏 MobileNav 區塊
$('#mobilenav').hide();

// 2. 點擊按鈕 Menu 開啟 mobilenav 區塊
$('#menu').click( function() {
 $('#mobilenav').show();
});

// 3. 點擊 close 關閉 mobilenav 區塊
$('.close').click( function() {
    $('#mobilenav').hide();
   });

function AddArticle(){
    // 呼叫主要的 article id=main
    let Main = document.getElementById("main");

    // 新增 article
    let art = document.createElement("article");

    // 新增 artilce 的屬性 setAttribute("id or class"，"自訂名稱") id
    art.setAttribute("id", "portfoliobox");

    // innerHTML 可寫入純文字，還可以寫入 html 的標籤
    // art.innerHTML = "<h1>在 Por 元素的開頭</h1>";

    // 在 article 新增 h1
    let h1 = document.createElement('h1');

    h1.textContent = "作品分享";

    art.appendChild(h1);

    // 取得 html 標籤(元素)中添加的子元素
    Main.appendChild(art);

    // 1. 在被選取的元素開頭插入內容 prepend() 置入被選取元素之中

    // 2. 在被選取的元素結尾插入內容 append() 置入被選取元素之中

    // 3. 在被選取的元素之後插入內容 before() 置入被選取元素標籤之前
    
    // 4. 在被選取的元素之前插入內容 after() 置入被選取元素標籤之後

    let Con = document.getElementById("contactbox");

    Con.before(art);
};