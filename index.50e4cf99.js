function e(e){return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}&api_key=live_pGPrne0Ane1qu8wcg857Gepyajam00g26yvCnluyqk7Z5N4ciKPMirdR9r1h2EY2`).then((e=>e.json())).then((e=>e)).catch((e=>{throw e}))}const t=document.querySelector(".breed-select"),n=document.querySelector(".loader"),c=document.querySelector(".error"),o=document.querySelector(".cat-info");function r(){n.style.display="block"}function a(){n.style.display="none"}function d(){c.style.display="block"}t.addEventListener("change",(()=>{const n=t.value;o.innerHTML="",o.style.display="none",r(),e(n).then((e=>{const t=e[0],n=t.url,c=t.breeds[0].name,r=t.breeds[0].description,d=t.breeds[0].temperament;a(),function(e,t,n,c){const r=document.createElement("img");r.src=e,o.appendChild(r);const a=document.createElement("h2");a.textContent=t,o.appendChild(a);const d=document.createElement("p");d.textContent=n,o.appendChild(d);const l=document.createElement("p");l.textContent=c,o.appendChild(l),o.style.display="block"}(n,c,r,d)})).catch((e=>{a(),d(),console.error(e)}))})),r(),fetch("https://api.thecatapi.com/v1/breeds").then((e=>e.json())).then((e=>e)).catch((e=>{throw e})).then((e=>{a(),function(e){e.forEach((e=>{const n=document.createElement("option");n.value=e.id,n.textContent=e.name,t.appendChild(n)}))}(e)})).catch((e=>{a(),d(),console.error(e)}));
//# sourceMappingURL=index.50e4cf99.js.map