// ****************************NavBar width increases with scrolling******************************
var nav=document.getElementById("topnav")
var navLogo=document.getElementById("logo")
window.onscroll=function(){
    scrollFunction()
};

function scrollFunction() {
   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        // nav.style.padding = "30px 10px";
        nav.style.width="100%"
        navLogo.style.fontSize = "30px";
      
   } else if(document.body.scrollTop < 80 || document.documentElement.scrollTop < 80) {
        // nav.style.padding = "10px 10px";
        nav.style.width="70%"
        navLogo.style.fontSize = "20px";
   }
}
// ****************************LeftCards******************************
var leftCard=``
for(var i=0;i<7;i++){
    leftCard+=`<div class="card" id="card">
                    <section class="author">
                        <img src="imgs/01.webp" alt="">
                        <span class="tag">PROGRAMMING</span>
                    </section>
                    <section class="content">
                        <h4>What is Language Translator and its Types? </h4>
                        <div class="line-1">
                            <span> <i class="fa-solid fa-user"></i> TEQUILA</span>
                            <span> <i class="fa-solid fa-clock"></i> OCTOBER 15, 2021</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="" class="btn1">READ MORE</a>
                    </section>
                </div>`
}
document.getElementById('cards').innerHTML=leftCard
// ****************************RightCards******************************
var rightCard=``
for(var i=0;i<7;i++){
    rightCard+=`<div class="card">
                    <section class="author">
                        <img src="imgs/01.webp" alt="">
                    </section>
                    <section class="content">
                        <a href="#">What is Language Translator and its Types? Differences between Compiler and
                                    Interpreter</a>
                        <div class="line-1">
                            <span> <i class="fa-solid fa-clock"></i> OCTOBER 15, 2021</span>
                        </div>
                    </section>
                </div>`
}
document.getElementById('right_card').innerHTML=rightCard

