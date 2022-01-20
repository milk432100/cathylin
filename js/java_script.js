// 迴圈 寫入html 畫面
AddArticle();
TopBtn();
BannerChange();

function AddArticle() {
    // 陣列 id
    let ArtId = ['portfoliobox','aboutbox','projectbox'];
    let ArtH1 = ['portfoliotitle','abouttitle','projecttitle'];
    let ArtH1Con = ['作品分享','關於峯瑩','專案項目'];
    let ArtDiv = ['PorCon','AboCon','ProCon'];

    // 主要的 article id=main
    let Main = document.getElementById("main");

    // 產出 3 個標籤
    for ( let i = 0; i < ArtId.length; i++) {
        // 要新增的標籤 article
        let art = document.createElement("article");
        let h1 = document.createElement("h1");
        let div = document.createElement("div");

        // 新增 article 的 id
        art.setAttribute("id", ArtId[i]); 
        h1.setAttribute("id",ArtH1[i]);
        div.setAttribute("class", ArtDiv[i]);

        // 在框架內新增子元素 main > article
        Main.appendChild(art);
        art.appendChild(h1);
        art.appendChild(div);

        // 標籤要在 #contactbox 之上
        let Con = document.getElementById("contactbox");
        Con.before(art);

        // 置入文字
        h1.innerHTML = ArtH1Con[i];
    }

    // 將網頁資料，用載入的方式置入框架中
    $('.PorCon').load('../webs/graphic.html');
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


// 控制 Top 按鈕
function TopBtn() {
    // 宣告變數 指向 Top 之下 a 標籤
    let Top = $('#Top');
    let Topa = $('#Top > a');
    // 隱藏按鈕
    Top.hide();

    // 設應按鈕行為
    Topa.click( function() {
        //　執行的動畫：當點擊按鈕時，畫面捲動到同頁最上方，加上滑動的秒數。
        $('html, body').animate({scrollTop:0}, 0.333);
    });

    // 畫面高度 大於 300px ，按鈕會出現；低於300px 按鈕會隱藏
    $(window).scroll(function () {
        if ( $(this).scrollTop() > 300 ) {
            // 淡入
            Top.fadeIn(222);
        } else {
            // 先停止之前的動畫再淡出
            Top.stop().fadeOut(222);
        }
    });
}

// 控制 Banner 
function BannerChange() {
    // 宣告按鈕變數
    let P01 = document.getElementById('P01');
    let P02 = document.getElementById('P02');
    let P03 = document.getElementById('P03');
    let P04 = document.getElementById('P04');
    let P05 = document.getElementById('P05');
    let Images = document.getElementById('Images');

    // 按鈕執行的動作 
    $(P01).click(function(){
        $(Images).css({
            transform: 'translatex(0vw)',
            transition: 'transform 1.5s'
        })
    });

    $(P02).click(function(){
        $(Images).css({
            transform: 'translatex(-100vw)',
            transition: 'transform 1.5s'
        })
    });
   
    $(P03).click(function(){
        $(Images).css({
            transform: 'translatex(-200vw)',
            transition: 'transform 1.5s'
        })
    });
   
    $(P04).click(function(){
        $(Images).css({
            transform: 'translatex(-300vw)',
            transition: 'transform 1.5s'
        })
    });
  
    $(P05).click(function(){
        $(Images).css({
            transform: 'translatex(-400vw)',
            transition: 'transform 1.5s'
        })
    });

}