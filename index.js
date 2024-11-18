import{i,S as m}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f="47115642-a97741713bebc955e7d8d0e17",p="https://pixabay.com/api/",y=async t=>{const o=`${p}?key=${f}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`,s=await fetch(o);if(!s.ok)throw new Error("Failed to fetch images");return(await s.json()).hits},g=t=>{const o=document.querySelector(".gallery"),s=t.map(({webformatURL:a,largeImageURL:e,tags:r,likes:n,views:l,comments:d,downloads:u})=>`
        <div class="gallery__item">
          <a href="${e}">
            <img src="${a}" alt="${r}" loading="lazy" />
          </a>
          <div class="photo-info">
            <p><b>Likes:</b> ${n}</p>
            <p><b>Views:</b> ${l}</p>
            <p><b>Comments:</b> ${d}</p>
            <p><b>Downloads:</b> ${u}</p>
          </div>
        </div>
      `).join("");o.innerHTML=s},h=()=>{const t=document.querySelector(".gallery");t.innerHTML=""},b=()=>{document.querySelector(".loader").classList.remove("hidden")},c=()=>{document.querySelector(".loader").classList.add("hidden")};document.querySelector(".search-form").addEventListener("submit",async t=>{t.preventDefault();const o=document.querySelector('input[name="query"]').value.trim();if(o===""){i.error({title:"Error",message:"Please enter a search term."}),c();return}h(),b();try{const s=await y(o);s.length===0?i.error({title:"Error",message:"Sorry, no images found for your search."}):(g(s),new m(".gallery a").refresh())}catch{i.error({title:"Error",message:"Something went wrong. Please try again."})}finally{c()}});
//# sourceMappingURL=index.js.map
