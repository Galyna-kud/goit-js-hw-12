import{a as u,S as d,i as n}from"./assets/vendor-D8kWkXeg.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f="https://pixabay.com/api/",m="54692285-0e8498ada734ef5e15a7b52ba";function h(o){return u(f,{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),y=new d(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function g(o){return o.map(({webformatURL:t,largeImageURL:s,tags:i,likes:e,views:r,comments:a,downloads:p})=>`<li class="list-item">
            <a href="${s}">
                <img src="${t}" alt="${i}"  width="360"/>
            </a>

            <div class="wrapper">
                <h3 class="wrapper-text">Likers <span class="wrapper-span">${e}</span></h3>
                <h3 class="wrapper-text">Views <span class="wrapper-span">${r}</span></h3>
                <h3 class="wrapper-text">Comments <span class="wrapper-span">${a}</span></h3>
                <h3 class="wrapper-text">Downloads <span class="wrapper-span">${p}</span></h3>
            </div>
        </li>`).join("")}function w(o){c.innerHTML=g(o),y.refresh()}function L(){c.innerHTML=""}function S(){l.classList.remove("hidden")}function b(){l.classList.add("hidden")}const x=document.querySelector(".form"),$=document.querySelector(".input");x.addEventListener("submit",q);function q(o){o.preventDefault();const t=$.value;if(!t.trim()){n.error({title:"Error",message:"Sorry, you send empty filed",position:"topRight"});return}L(),S(),h(t).then(s=>{s.length===0?n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(w(s),o.target.reset())}).catch(s=>{n.error({title:"Error",message:`Sorry, error is ${s.message}`,position:"topRight"})}).finally(()=>{b()})}
//# sourceMappingURL=index.js.map
