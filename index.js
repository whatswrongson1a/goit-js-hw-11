import{i as c,S as y}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const g="47115642-a97741713bebc955e7d8d0e17",p="https://pixabay.com/api/",h=async o=>{const s=`${p}?key=${g}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`,t=await fetch(s);if(!t.ok)throw new Error("Failed to fetch images");return(await t.json()).hits},b=o=>{const s=document.querySelector(".gallery"),t=o.map(({webformatURL:n,largeImageURL:e,tags:r,likes:i,views:u,comments:m,downloads:f})=>`
        <div class="gallery__item">
          <a href="${e}">
            <img src="${n}" alt="${r}" loading="lazy" />
          </a>
          <div class="photo-info">
            <p><b>Likes:</b> ${i}</p>
            <p><b>Views:</b> ${u}</p>
            <p><b>Comments:</b> ${m}</p>
            <p><b>Downloads:</b> ${f}</p>
          </div>
        </div>
      `).join("");s.innerHTML=t},L=()=>{const o=document.querySelector(".gallery");o.innerHTML=""},w=()=>{document.querySelector(".loader").classList.remove("hidden")},S=()=>{document.querySelector(".loader").classList.add("hidden")},a=document.querySelector(".search-form"),l=a.querySelector('input[name="query"]'),q=document.querySelector(".gallery");if(!a||!l||!q)throw console.error("Required DOM elements are missing. Check your HTML structure."),new Error("Initialization failed. Missing DOM elements.");const d=async o=>{o.preventDefault();const s=l.value.trim();if(s===""){c.error({title:"Error",message:"Please enter a search term."});return}L(),w();try{const t=await h(s);t.length===0?c.error({title:"Error",message:"Sorry, no images found for your search."}):(b(t),new y(".gallery a").refresh())}catch(t){c.error({title:"Error",message:"Something went wrong. Please try again."}),console.error("Error during image fetching:",t)}finally{S()}};a.removeEventListener("submit",d);a.addEventListener("submit",d);
//# sourceMappingURL=index.js.map
