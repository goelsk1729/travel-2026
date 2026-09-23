(() => {
  const D = window.TRIP_DATA;
  const palette = {
    Coffee:'#e9b467', Matcha:'#7bd39d', Bakery:'#c0a3f5', Bar:'#ef8b80', Restaurant:'#7bb0ff', Activity:'#72d4cb', Dessert:'#f0a7cb', Logistics:'#b9c0c8'
  };
  const dayColors = {Thu:'#98a1ab',Fri:'#7bd39d',Sat:'#e9b467',Sun:'#c0a3f5',Mon:'#7bb0ff'};
  const categories = ['All','Coffee','Matcha','Bakery','Bar','Restaurant','Activity'];
  const days = ['All','Fri','Sat','Sun','Mon'];
  let activeDay = 'All'; let activeCategory = 'All'; let listFilter = 'All'; let activeItinerary = 'Fri';
  const markerMap = new Map(); let routeLayer = null; let routeNumberLayer = null;

  const $ = (id) => document.getElementById(id);
  const esc = (s='') => String(s).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

  function countdown(){
    $('countdown').textContent = 'October';
  }

  function mapIcon(place){
    const color = palette[place.category] || '#b9c0c8';
    const special = place.status === 'confirmed' ? 'marker-confirmed' : place.status === 'target' ? 'marker-target' : '';
    return L.divIcon({ className:'', iconSize:[32,32], iconAnchor:[16,28], html:`<div class="custom-marker ${special}" style="background:${color}"><span></span></div>` });
  }

  const map = L.map('map', { zoomControl:true, scrollWheelZoom:true }).setView([41.9147,-87.6682], 12);
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom:20, attribution:'&copy; OpenStreetMap &copy; CARTO'
  }).addTo(map);

  D.places.forEach(place => {
    if (!place.lat) return;
    const marker = L.marker([place.lat,place.lng], {icon:mapIcon(place), riseOnHover:true}).addTo(map);
    marker.on('click', () => openDrawer(place));
    markerMap.set(place.id, marker);
  });

  function openDrawer(place){
    $('mapDrawer').innerHTML = `
      <span class="drawer-kicker">${esc(place.category)} · ${esc(place.neighborhood)}</span>
      <h3>${esc(place.name)}</h3>
      <div class="drawer-meta"><span class="mini-pill">${esc(place.source)}</span><span class="mini-pill">${esc(place.status)}</span>${place.days?.length?`<span class="mini-pill">${esc(place.days.join(' · '))}</span>`:''}</div>
      <p>${esc(place.note)}</p>
      <div class="drawer-actions"><a href="${place.url}" target="_blank" rel="noreferrer">Google Maps ↗</a><button data-focus="${place.id}">Center map</button></div>`;
    $('mapDrawer').querySelector('button').addEventListener('click',()=>map.flyTo([place.lat,place.lng],15,{duration:.7}));
  }

  function renderMapFilters(){
    $('dayFilters').innerHTML = days.map(d=>`<button class="filter-btn ${activeDay===d?'active':''}" data-day="${d}">${d}</button>`).join('');
    $('categoryFilters').innerHTML = categories.map(c=>`<button class="filter-btn category ${activeCategory===c?'active':''}" data-cat="${c}">${c}</button>`).join('');
    $('dayFilters').querySelectorAll('button').forEach(b=>b.onclick=()=>{activeDay=b.dataset.day;renderMapFilters();applyMapFilter();drawRoute();});
    $('categoryFilters').querySelectorAll('button').forEach(b=>b.onclick=()=>{activeCategory=b.dataset.cat;renderMapFilters();applyMapFilter();});
  }

  function applyMapFilter(){
    D.places.forEach(p=>{
      const marker=markerMap.get(p.id); if(!marker) return;
      const dayOK = activeDay==='All' || p.days?.includes(activeDay);
      const catOK = activeCategory==='All' || p.category===activeCategory;
      const el = marker.getElement(); if(el) el.style.opacity = (dayOK && catOK) ? '1' : '.16';
    });
  }

  function drawRoute(){
    if(routeLayer){map.removeLayer(routeLayer);routeLayer=null}
    if(routeNumberLayer){map.removeLayer(routeNumberLayer);routeNumberLayer=null}
    if(activeDay==='All' || !D.itineraries[activeDay]) return;
    const ids = D.itineraries[activeDay].route || [];
    const coords = ids.map(id=>D.places.find(p=>p.id===id)).filter(p=>p && Number.isFinite(p.lat) && Number.isFinite(p.lng)).map(p=>[p.lat,p.lng]);
    if(coords.length<2) return;
    routeLayer=L.polyline(coords,{color:dayColors[activeDay],weight:3,opacity:.72,dashArray:'7 9'}).addTo(map);
    routeNumberLayer=L.layerGroup().addTo(map);
    const seen=new Set(); let n=1;
    ids.forEach(id=>{ if(seen.has(id))return; seen.add(id); const p=D.places.find(x=>x.id===id); if(!p || !Number.isFinite(p.lat) || !Number.isFinite(p.lng))return;
      L.marker([p.lat,p.lng],{interactive:false,icon:L.divIcon({className:'',iconSize:[26,18],iconAnchor:[13,34],html:`<span class="route-label">${n++}</span>`})}).addTo(routeNumberLayer);
    });
    map.fitBounds(L.latLngBounds(coords).pad(.18),{animate:true,duration:.6});
  }

  function renderItineraryTabs(){
    $('itineraryTabs').innerHTML = Object.entries(D.itineraries).map(([day,v])=>`<button class="day-tab ${day===activeItinerary?'active':''}" data-itin="${day}">${day} · ${v.date}</button>`).join('');
    $('itineraryTabs').querySelectorAll('button').forEach(b=>b.onclick=()=>{activeItinerary=b.dataset.itin;renderItineraryTabs();renderItinerary();activeDay=activeItinerary;renderMapFilters();applyMapFilter();drawRoute();});
  }

  function renderItinerary(){
    const day=D.itineraries[activeItinerary];
    const rows=day.items.map(item=>{
      const place = item.place ? D.places.find(p=>p.id===item.place) : null;
      return `<div class="timeline-row ${esc(item.type)}"><div class="timeline-time">${esc(item.time)}</div><div class="timeline-node"><i></i></div><div class="timeline-copy"><strong>${esc(item.title)}</strong><p>${esc(item.detail)}</p>${place && place.url?`<a class="place-link" href="${place.url}" target="_blank" rel="noreferrer">${esc(place.neighborhood)} · maps ↗</a>`:place?`<span class="place-link">${esc(place.neighborhood)}</span>`:''}</div></div>`;
    }).join('');
    $('itineraryPanel').innerHTML=`<article class="itinerary-card"><aside class="day-summary"><div class="date">${activeItinerary}<small>${day.date} · 2026</small></div><h3>${esc(day.title)}</h3><p>${esc(day.theme)}</p><button class="button ghost" id="showDayMap">Show this day on map</button></aside><div class="timeline">${rows}</div></article>`;
    $('showDayMap').onclick=()=>{activeDay=activeItinerary;renderMapFilters();applyMapFilter();drawRoute();document.querySelector('#map-section').scrollIntoView({behavior:'smooth'});};
  }

  function renderListFilters(){
    const fs=['All','Shortlist','Planned','Coffee','Matcha','Bakery','Bar','Restaurant'];
    $('listFilters').innerHTML=fs.map(f=>`<button class="list-filter ${f===listFilter?'active':''}" data-filter="${f}">${f}</button>`).join('');
    $('listFilters').querySelectorAll('button').forEach(b=>b.onclick=()=>{listFilter=b.dataset.filter;renderListFilters();renderPlaces();});
  }

  function statusLabel(s){return ({confirmed:'Confirmed',target:'Target',planned:'Planned',optional:'Optional',alternate:'Backup',saved:'Saved',base:'Home base'}[s]||s)}
  function renderPlaces(){
    const q=$('searchInput').value.trim().toLowerCase();
    const list=D.places.filter(p=>p.id!=='home').filter(p=>{
      let filterOK=listFilter==='All' || (listFilter==='Shortlist'&&p.source==='Shortlist') || (listFilter==='Planned'&&['planned','confirmed','target','optional','alternate'].includes(p.status)) || p.category===listFilter;
      let queryOK=!q || [p.name,p.neighborhood,p.category,p.note,p.source].join(' ').toLowerCase().includes(q);
      return filterOK&&queryOK;
    });
    $('placeGrid').innerHTML=list.map(p=>`<article class="place-card"><div class="place-accent" style="background:${palette[p.category]||'#aaa'}"></div><div class="place-top"><span class="category-tag">${esc(p.category)}</span><span class="source-tag">${esc(p.source)}</span></div><h3>${esc(p.name)}</h3><div class="location">${esc(p.neighborhood)}</div><p>${esc(p.note)}</p><div class="place-footer"><a href="${p.url}" target="_blank" rel="noreferrer">Open in Maps ↗</a><span class="status-text ${p.status}">${statusLabel(p.status)}</span></div></article>`).join('');
  }

  function renderDecisions(){
    $('decisionGrid').innerHTML=D.decisions.map((d,i)=>`<article class="decision-card"><span class="decision-num">0${i+1}</span><h3>${esc(d.title)}</h3><p>${esc(d.text)}</p></article>`).join('');
  }

  $('searchInput').addEventListener('input',renderPlaces);
  $('themeButton').onclick=()=>document.body.classList.toggle('light');
  countdown(); renderMapFilters(); renderItineraryTabs(); renderItinerary(); renderListFilters(); renderPlaces(); renderDecisions(); applyMapFilter();
  setTimeout(()=>map.invalidateSize(),250);
})();
