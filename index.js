import{a as p,S as m,i as l}from"./assets/vendor-DvfmeZXB.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();async function d(s){const o="https://pixabay.com/api/",t={key:"53337460-da8d4afc1a3151b07a1e25c69",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await p.get(o,{params:t})).data}const f=new m(".gallery a",{captionsData:"alt",captionDelay:250}),c=document.querySelector(".gallery"),u=document.querySelector(".loader");function y(s){const o=s.map(t=>`
    <li class="gallery-item">
      <a href="${t.largeImageURL}">
        <img
          src="${t.webformatURL}"
          alt="${t.tags}"
          loading="lazy"
        />
        <div class="image-info">
          <ul class="image-info-list">
            <li class="image-info-item">
              <p>Likes</p>
              <span>${t.likes}</span>
            </li>
            <li class="image-info-item">
              <p>Views</p>
              <span>${t.views}</span>
            </li>
            <li class="image-info-item">
              <p>Comments</p>
              <span>${t.comments}</span>
            </li>
            <li class="image-info-item">
              <p>Downloads</p>
              <span>${t.downloads}</span>
            </li>
          </ul>
        </div>
      </a>
    </li>
      `).join("");c.insertAdjacentHTML("beforeend",o),f.refresh()}function g(){c.innerHTML=""}function h(){u.classList.add("active")}function n(){u.classList.remove("active")}const L=document.querySelector(".form"),b=s=>{s.preventDefault();const o=s.target;g(),h();const t=o.elements["search-text"].value.trim();d(t).then(i=>{if(!i.total){n(),l.error({title:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}n(),y(i.hits)}).catch(i=>{n(),l.error({title:"An error occurred while fetching images. Please try again!",position:"topRight"}),console.error(i)})};L.addEventListener("submit",b);
//# sourceMappingURL=index.js.map
