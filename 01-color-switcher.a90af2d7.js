const t=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]"),e=document.querySelector("body");let n=null;function c(){e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}console.log(e),console.log(t),console.log(o),t.addEventListener("click",(function(){if(t.classList.contains("isActive"))return void console.log('Не тикай більше "Start"! Вже працює!');t.classList.add("isActive"),n=setInterval((()=>{c()}),1e3)})),o.addEventListener("click",(function(){t.classList.remove("isActive"),clearInterval(n),console.log('Норм колір, хай буде!)...Ну, якщо не подобається, тисни знову "Start"!')}));
//# sourceMappingURL=01-color-switcher.a90af2d7.js.map