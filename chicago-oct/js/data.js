window.TRIP_DATA = {
  trip: {
    title: "Chicago Move Weekend",
    start: "2026-10-22",
    end: "2026-10-26",
    homeBase: { name: "Clark / Division home base", lat: 41.9034, lng: -87.6317, neighborhood: "Gold Coast / Near North" }
  },
  places: [
    {id:"home",name:"Clark / Division home base",category:"Logistics",neighborhood:"Gold Coast / Near North",lat:41.9034,lng:-87.6317,status:"base",source:"Itinerary",days:["Fri","Sat","Sun","Mon"],note:"Your brother's current apartment area. Packing blocks and most day plans start or finish here.",url:"https://www.google.com/maps/search/?api=1&query=Clark%2FDivision%20CTA%20Chicago"},
    {id:"mindys",name:"Mindy's Bakery",category:"Bakery",neighborhood:"Wicker Park",lat:41.9109,lng:-87.6793,status:"saved",source:"Shortlist",days:[],note:"Destination bakery and strong pastry-first morning candidate.",url:"https://www.google.com/maps/place/Mindy%E2%80%99s+Bakery/data=!4m2!3m1!1s0x880fd2c07db953b7:0xd5c218147b8b77cc"},
    {id:"omi",name:"OMI Cafe",category:"Matcha",neighborhood:"Lakeview East",lat:41.9389,lng:-87.6441,status:"saved",source:"Shortlist",days:[],note:"Matcha-forward Japanese-inspired cafe; especially useful on a North Side day.",url:"https://www.google.com/maps/place/OMI+Cafe/data=!4m2!3m1!1s0x880fd312326bf9ed:0x1462ad97516a9fdd"},
    {id:"mako",name:"Cafe Mako",category:"Matcha",neighborhood:"Lincoln Park",lat:41.9221,lng:-87.6424,status:"alternate",source:"Shortlist",days:["Sat"],note:"Saturday low-transit backup for a proper matcha stop.",url:"https://www.google.com/maps/place/Cafe+Mako/data=!4m2!3m1!1s0x880fd3a8d9056e97:0x90df645347934ddf"},
    {id:"guillotine",name:"Guillotine Bakery",category:"Bakery",neighborhood:"West Town",lat:41.8959,lng:-87.6691,status:"saved",source:"Shortlist",days:[],note:"French bakery candidate with laminated pastry and bread focus.",url:"https://www.google.com/maps/place/Guillotine+Bakery/data=!4m2!3m1!1s0x880e2d0000626c55:0xcc6da33948596437"},
    {id:"badbutter",name:"Bad Butter",category:"Bakery",neighborhood:"Bucktown",lat:41.9157,lng:-87.6681,status:"saved",source:"Shortlist",days:[],note:"Creative modern bakery that can pair naturally with a Bucktown/Logan Square day.",url:"https://www.google.com/maps/place/Bad+Butter/data=!4m2!3m1!1s0x880fd3000a337fc1:0x37652ea78aeed92"},
    {id:"loba",name:"Loba Pastry + Coffee",category:"Coffee",neighborhood:"North Center",lat:41.9471,lng:-87.6732,status:"planned",source:"Shortlist",days:["Sat"],note:"Saturday primary coffee + pastry candidate. Keep it light enough to still enjoy lunch.",url:"https://www.google.com/maps/place/Loba+Pastry+%2B+Coffee/data=!4m2!3m1!1s0x880fd25b6e05c57d:0x61f56101731da3be"},
    {id:"sugarmoon",name:"Sugar Moon",category:"Bakery",neighborhood:"Logan Square",lat:41.9288,lng:-87.7160,status:"saved",source:"Shortlist",days:[],note:"Tiny destination bakery; a better fit when the day is already on the west side.",url:"https://www.google.com/maps/place/Sugar+Moon/data=!4m2!3m1!1s0x880fcdcb5a37c38d:0x8a5a9e47cf19ab36"},
    {id:"magnifico",name:"Magnífico Coffee Roasters",category:"Coffee",neighborhood:"Avondale",lat:41.9370,lng:-87.7155,status:"saved",source:"Shortlist",days:[],note:"Colombian-owned specialty coffee roaster with a distinct identity from the other cafe saves.",url:"https://www.google.com/maps/place/Magn%C3%ADfico+Coffee+Roasters+%26+Coffee+Shop/data=!4m2!3m1!1s0x880fcdd7fe7b5703:0xd9a268df5ba16b44"},
    {id:"fourletter",name:"Four Letter Word Coffee",category:"Coffee",neighborhood:"Logan Square",lat:41.9321,lng:-87.7020,status:"saved",source:"Shortlist",days:[],note:"Tiny espresso-forward specialty shop; excellent neighborhood pairing with Logan Square plans.",url:"https://www.google.com/maps/place/Four+Letter+Word+Coffee/data=!4m2!3m1!1s0x880fcd72160f9f83:0x2aab093da61c3b42"},
    {id:"sawada",name:"Sawada Coffee",category:"Coffee",neighborhood:"West Loop",lat:41.8836,lng:-87.6484,status:"saved",source:"Shortlist",days:[],note:"Japanese-influenced creative coffee stop; useful if a West Loop cluster emerges.",url:"https://www.google.com/maps/place/Sawada+Coffee/data=!4m2!3m1!1s0x880e2cdada6e91e9:0x85e817197841a73e"},
    {id:"gathers",name:"Gathers Tea Bar",category:"Matcha",neighborhood:"Little Italy / UIC",lat:41.8697,lng:-87.6575,status:"saved",source:"Shortlist",days:[],note:"Tea-first option with matcha and boba; distinct from the coffee-heavy saves.",url:"https://www.google.com/maps/place/Gathers+Tea+Bar/data=!4m2!3m1!1s0x880e2d0ed54f114f:0x335de34b598edfb9"},
    {id:"matcha",name:"Match | A",category:"Matcha",neighborhood:"West Town",lat:41.8959,lng:-87.6750,status:"saved",source:"Shortlist",days:[],note:"Minimalist specialty matcha bar that fits naturally near a West Town/PIZZ'AMICI day.",url:"https://www.google.com/maps/place/Match+%7C+A/data=!4m2!3m1!1s0x880e2d41ed9fd69b:0xb9faa06dde20a680"},
    {id:"nine",name:"Nine Bar",category:"Bar",neighborhood:"Chinatown",lat:41.8521,lng:-87.6331,status:"saved",source:"Shortlist",days:[],note:"Hidden Chinatown cocktail bar with Asian flavors; geographically distinct from most of the current plan.",url:"https://www.google.com/maps/place/Nine+Bar/data=!4m2!3m1!1s0x880e2defd7b1fdcb:0xf0ea48678aa48c00"},
    {id:"bambi",name:"Bar Bambi",category:"Bar",neighborhood:"West Town",lat:41.8959,lng:-87.6689,status:"saved",source:"Shortlist",days:[],note:"Design-forward modern cocktail bar and a logical Sunday-night candidate if pizza lands nearby.",url:"https://www.google.com/maps/place/Bar+Bambi/data=!4m2!3m1!1s0x880e2df9e13e9c17:0x89da381a5dadeb40"},
    {id:"bestintentions",name:"Best Intentions",category:"Bar",neighborhood:"Logan Square",lat:41.9177,lng:-87.7090,status:"saved",source:"Shortlist",days:[],note:"Neighborhood bar energy with serious cocktails; strong low-pressure fallback.",url:"https://www.google.com/maps/place/Best+Intentions/data=!4m2!3m1!1s0x880fcd69d3dc7f39:0x610771cc06729385"},
    {id:"gus",name:"Gus' Sip & Dip",category:"Bar",neighborhood:"River North",lat:41.8905,lng:-87.6291,status:"saved",source:"Shortlist",days:[],note:"Approachable tavern-cocktail hybrid; convenient if a downtown slot opens.",url:"https://www.google.com/maps/place/Gus'+Sip+%26+Dip/data=!4m2!3m1!1s0x880e2cb18cddf669:0xa32616721769f96e"},
    {id:"threedots",name:"Three Dots and a Dash",category:"Bar",neighborhood:"River North",lat:41.8903,lng:-87.6316,status:"saved",source:"Shortlist",days:[],note:"Immersive tiki/rum experience; the most theatrical bar on the current shortlist.",url:"https://www.google.com/maps/place/Three+Dots+and+a+Dash/data=!4m2!3m1!1s0x880e2cb1800a7e89:0x36b7a9744aa00bf2"},
    {id:"cache",name:"Caché",category:"Bar",neighborhood:"Old Town",lat:41.9080,lng:-87.6345,status:"optional",source:"Shortlist",days:["Fri"],note:"Friday optional pre-Omakase drink. It disappears immediately if packing runs long.",url:"https://www.google.com/maps/place/Cach%C3%A9/data=!4m2!3m1!1s0x880fd33402aea075:0x13acc4c6c46f03fd"},
    {id:"alderman",name:"The Alderman",category:"Bar",neighborhood:"Pilsen",lat:41.8576,lng:-87.6560,status:"saved",source:"Shortlist",days:[],note:"Tiny intentional cocktail room; worth saving for a future Pilsen-centered evening if it does not fit this move weekend.",url:"https://www.google.com/maps/place/The+Alderman/data=!4m2!3m1!1s0x880e2d5814dd8b2d:0xa011a7e6eb69264a"},
    {id:"meadowlark",name:"The Meadowlark",category:"Bar",neighborhood:"Logan Square",lat:41.9214,lng:-87.6974,status:"planned",source:"Shortlist",days:["Sat"],note:"Saturday primary cocktail stop after Leavitt. Creative enough to feel like a destination without forcing another dinner reservation.",url:"https://www.google.com/maps/place/The+Meadowlark/data=!4m2!3m1!1s0x880fcd865023cd21:0x939a3e792c393f29"},
    {id:"kumiko",name:"Kumiko",category:"Bar",neighborhood:"West Loop",lat:41.8853,lng:-87.6433,status:"saved",source:"Shortlist",days:[],note:"Refined Japanese cocktail destination; best when it is the focus, not squeezed between packing obligations.",url:"https://www.google.com/maps/place/Kumiko/data=!4m2!3m1!1s0x880e2ccf57455555:0x5beb2291328dce22"},
    {id:"omakase",name:"Omakase on Me",category:"Restaurant",neighborhood:"Lakeview",lat:41.9534,lng:-87.6490,status:"confirmed",source:"Shortlist",days:["Fri"],note:"Confirmed Friday at 7:30 PM for 2. This is the hard anchor around which Friday evening is built.",url:"https://www.google.com/maps/place/Omakase+on+me/data=!4m2!3m1!1s0x880fd30eacf278bd:0xae96ef65b9668ff5"},
    {id:"pizzamici",name:"PIZZ'AMICI",category:"Restaurant",neighborhood:"West Town",lat:41.8909,lng:-87.6573,status:"target",source:"Shortlist",days:["Sun"],note:"Target Sunday around 7 PM for 3. Still unconfirmed; Sunday should remain flexible until this lands.",url:"https://www.google.com/maps/place/PIZZ'AMICI/data=!4m2!3m1!1s0x880e2d06bb6a7921:0x3b52cc404a3dd0f8"},

    {id:"bigshoulders",name:"Big Shoulders Coffee",category:"Coffee",neighborhood:"Gold Coast",lat:41.8980,lng:-87.6284,status:"planned",source:"Itinerary",days:["Fri"],note:"Convenience-first Friday coffee: good enough to enjoy, close enough not to steal packing time.",url:"https://www.google.com/maps/search/?api=1&query=Big%20Shoulders%20Coffee%20858%20N%20State%20St%20Chicago"},
    {id:"bluedoor",name:"Blue Door Kitchen & Garden",category:"Restaurant",neighborhood:"Gold Coast",lat:41.9032,lng:-87.6295,status:"planned",source:"Itinerary",days:["Fri"],note:"Friday lunch reset near home base so the afternoon can go straight back into packing.",url:"https://www.google.com/maps/search/?api=1&query=Blue%20Door%20Kitchen%20Garden%2052%20W%20Elm%20Chicago"},
    {id:"magic",name:"Chicago Magic Lounge",category:"Activity",neighborhood:"Andersonville",lat:41.9735,lng:-87.6682,status:"planned",source:"Itinerary",days:["Fri"],note:"Friday night Performance Bar only: no show ticket, just a late bar-and-close-up-magic finish.",url:"https://www.google.com/maps/search/?api=1&query=Chicago%20Magic%20Lounge%205050%20N%20Clark%20Chicago"},
    {id:"leavitt",name:"The Leavitt Street Inn & Tavern",category:"Restaurant",neighborhood:"Bucktown",lat:41.9249,lng:-87.6820,status:"planned",source:"Itinerary",days:["Sat"],note:"Saturday dinner anchor: smashburger tavern stop before cocktails.",url:"https://www.google.com/maps/search/?api=1&query=The%20Leavitt%20Street%20Inn%20Tavern%202345%20N%20Leavitt%20Chicago"},
    {id:"armitage",name:"Armitage Alehouse",category:"Dessert",neighborhood:"Lincoln Park",lat:41.9182,lng:-87.6530,status:"planned",source:"Itinerary",days:["Sat"],note:"Saturday dessert pickup on the way home. Sticky Date Cake is the target.",url:"https://www.google.com/maps/search/?api=1&query=Armitage%20Alehouse%201000%20W%20Armitage%20Chicago"},
    {id:"rendang",name:"Rendang Republic",category:"Restaurant",neighborhood:"Lakeview / Wrigleyville",lat:41.9431,lng:-87.6553,status:"planned",source:"Itinerary",days:["Sat"],note:"Saturday primary lunch pairing with Loba: casual, distinctive and not a generic expensive brunch.",url:"https://www.google.com/maps/search/?api=1&query=Rendang%20Republic%203355%20N%20Clark%20Chicago"},
    {id:"evettes",name:"Evette's Lincoln Park",category:"Restaurant",neighborhood:"Lincoln Park",lat:41.9183,lng:-87.6380,status:"alternate",source:"Itinerary",days:["Sat"],note:"Lower-transit Saturday lunch backup paired with Cafe Mako if Friday night runs late.",url:"https://www.google.com/maps/search/?api=1&query=Evette%27s%20Lincoln%20Park%20350%20W%20Armitage%20Chicago"}
  ],
  itineraries: {
    Thu: {date:"Oct 22",title:"Arrival night",theme:"Land late. Protect Friday energy.",route:[],items:[
      {time:"5:27 PM",title:"Fly SFO → ORD",detail:"Flight details kept private. Dinner or airport snack before/during travel.",type:"flight"},
      {time:"11:55 PM",title:"Arrive at O'Hare",detail:"Head to your brother's apartment near Clark / Division.",type:"flight"},
      {time:"~1:00 AM",title:"Sleep",detail:"No late-night plan. Friday is already a packing-heavy day.",type:"open"}
    ]},
    Fri: {date:"Oct 23",title:"Packing-heavy + Omakase + magic",theme:"Hyper-local daytime, then one proper Chicago night.",route:["home","bigshoulders","home","bluedoor","home","cache","omakase","magic"],items:[
      {time:"8:30 AM",title:"Coffee run — Big Shoulders",detail:"Optional convenience stop. Keep the morning packing-first.",type:"coffee",place:"bigshoulders"},
      {time:"9:00–12:30",title:"Packing block #1",detail:"Apartment near Clark / Division.",type:"packing",place:"home"},
      {time:"12:30 PM",title:"Lunch — Blue Door",detail:"Close enough to feel like a break without becoming an excursion.",type:"food",place:"bluedoor"},
      {time:"1:45–5:00",title:"Packing block #2",detail:"Try to knock out the most annoying prep today.",type:"packing",place:"home"},
      {time:"5:00–5:45",title:"Reset / shower / change",detail:"Switch from move mode to night-out mode.",type:"open",place:"home"},
      {time:"6:00 PM",title:"Optional drink — Caché",detail:"Exactly one drink if packing is on schedule. Skip freely if not.",type:"bar",place:"cache"},
      {time:"7:30 PM",title:"Omakase on Me",detail:"CONFIRMED for 2. Hard anchor; plan on roughly 90 minutes.",type:"confirmed-event",place:"omakase"},
      {time:"~10:15 PM",title:"Chicago Magic Lounge",detail:"Performance Bar only. First-come, capacity-limited late-night finish.",type:"activity",place:"magic"}
    ]},
    Sat: {date:"Oct 24",title:"Coffee day out + packing + west-side night",theme:"Explore in the morning, earn the night out with a real afternoon packing block.",route:["home","loba","rendang","home","leavitt","meadowlark","armitage","home"],items:[
      {time:"10:00 AM",title:"Loba Pastry + Coffee",detail:"PRIMARY: coffee + a couple pastries. Keep it light enough for lunch.",type:"coffee",place:"loba"},
      {time:"11:30 AM",title:"Rendang Republic",detail:"PRIMARY: distinctive casual Indonesian lunch instead of generic brunch.",type:"food",place:"rendang"},
      {time:"~1:00 PM",title:"Return home",detail:"Target being back near Clark / Division by 1:00–1:30.",type:"open",place:"home"},
      {time:"1:30–5:00",title:"Packing block #3",detail:"Another meaningful block before the Monday move.",type:"packing",place:"home"},
      {time:"6:00 PM",title:"Leavitt Street — burgers",detail:"L. St. Smash dinner anchor before cocktails.",type:"food",place:"leavitt"},
      {time:"7:45 PM",title:"The Meadowlark",detail:"Primary Saturday cocktail stop. One focused round / 60–90 minutes.",type:"bar",place:"meadowlark"},
      {time:"~9:15 PM",title:"Armitage Alehouse pickup",detail:"Sticky Date Cake target; head home soon because of the gelato.",type:"dessert",place:"armitage"},
      {time:"ALT AM",title:"Cafe Mako → Evette's",detail:"Lower-transit backup if Friday runs late or you want an easier morning.",type:"open",place:"mako"}
    ]},
    Sun: {date:"Oct 25",title:"Open day — pizza target",theme:"The biggest remaining planning opportunity, but packing still gets a buffer.",route:["home","pizzamici"],items:[
      {time:"Morning",title:"Coffee / matcha cluster — TBD",detail:"Pick from the remaining shortlist based on the neighborhood we choose.",type:"open"},
      {time:"Lunch",title:"Unique casual lunch — TBD",detail:"Something destination-worthy without turning the day into a tasting menu.",type:"open"},
      {time:"~2:30–5:00",title:"Packing buffer",detail:"Leave meaningful slack before Monday's move.",type:"packing",place:"home"},
      {time:"~7:00 PM",title:"PIZZ'AMICI",detail:"TARGET for 3. Still needs to be secured.",type:"food",place:"pizzamici"},
      {time:"After",title:"Optional nearby bar",detail:"Only choose after the dinner reservation is confirmed.",type:"open"}
    ]},
    Mon: {date:"Oct 26",title:"Move day + fly home",theme:"Logistics first. Food stays easy and nearby.",route:["home"],items:[
      {time:"Morning",title:"Coffee + final packing",detail:"Keep breakfast within a short radius of the old apartment.",type:"coffee",place:"home"},
      {time:"Daytime",title:"Movers / apartment move",detail:"Main event. Leave slack for delays and setup.",type:"packing"},
      {time:"Afternoon",title:"New-apartment setup",detail:"Unpack essentials; keep the itinerary otherwise empty.",type:"open"},
      {time:"~6:15 PM",title:"Leave for ORD — tentative",detail:"Adjust day-of based on move progress and traffic.",type:"flight"},
      {time:"9:31 PM",title:"Fly ORD → SFO",detail:"Flight details kept private. Arrives SFO 12:30 AM Tuesday.",type:"flight"}
    ]}
  },
  decisions: [
    {title:"Lock Sunday dinner",text:"Secure PIZZ'AMICI for 3 around 7 PM. Then build Sunday around West Town instead of guessing."},
    {title:"Choose Saturday morning mode",text:"Primary is Loba + Rendang. Backup is Cafe Mako + Evette's if you want lower transit."},
    {title:"Protect Friday packing",text:"Caché is optional. If packing slips, remove it before touching Omakase or Magic Lounge."},
    {title:"Define Sunday packing load",text:"How much must be finished before Monday determines whether Sunday can be adventurous."},
    {title:"Place the remaining cafe saves",text:"Assign only the ones that naturally fall into Sunday or Monday geography."},
    {title:"Confirm mover timing",text:"Once you know Monday's mover window, lock the airport departure buffer and final coffee stop."}
  ]
};
