import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as s}from"./assets/vendor-BbbuE1sJ.js";const l=document.querySelector("form");l.addEventListener("submit",t=>{t.preventDefault();const i=parseInt(t.target.elements.delay.value),o=t.target.state.value;new Promise((e,r)=>{o==="fulfilled"?e(i):r(i)}).then(e=>{setTimeout(()=>{s.success({title:"Ok",message:`Fulfilled promise in ${e}ms`,position:"topRight",color:"#59a10d",titleColor:"#fff",titleSize:"16px",titleLineHeight:"150%",messageColor:"#fff",messageSize:"16px",messageLineHeight:"150%"})},e)}).catch(e=>{setTimeout(()=>{s.error({title:"Error",message:`Rejected promise in ${e}ms`,position:"topRight",color:"#ef4040",titleColor:"#fff",titleSize:"16px",titleLineHeight:"150%",messageColor:"#fff",messageSize:"16px",messageLineHeight:"150%"})},e)})});
//# sourceMappingURL=2-snackbar.js.map
