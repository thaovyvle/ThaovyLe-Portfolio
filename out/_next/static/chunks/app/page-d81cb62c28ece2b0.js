(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8791:function(e,t,i){Promise.resolve().then(i.bind(i,3422)),Promise.resolve().then(i.bind(i,4296)),Promise.resolve().then(i.bind(i,6887)),Promise.resolve().then(i.bind(i,8175)),Promise.resolve().then(i.bind(i,9338)),Promise.resolve().then(i.bind(i,6492)),Promise.resolve().then(i.bind(i,1153))},7719:function(e,t,i){"use strict";i.d(t,{Z:function(){return c}});var r=i(7437),a=i(2265),s=i(5802),n=i.n(s),o=i(2815);function l(e){let{children:t}=e,i=(0,a.useRef)(null);return(0,a.useEffect)(()=>{console.log(t);let e=o.ZP.quickTo(i.current,"x",{duration:1,ease:"elastic.out(1, 0.3)"}),r=o.ZP.quickTo(i.current,"y",{duration:1,ease:"elastic.out(1, 0.3)"});i.current.addEventListener("mousemove",t=>{let{clientX:a,clientY:s}=t,{height:n,width:o,left:l,top:c}=i.current.getBoundingClientRect();e(.35*(a-(l+o/2))),r(.35*(s-(c+n/2)))}),i.current.addEventListener("mouseleave",t=>{e(0),r(0)})},[]),a.cloneElement(t,{ref:i})}function c(e){let{children:t,backgroundColor:i="#FDD7EE",...s}=e,c=(0,a.useRef)(null),d=(0,a.useRef)(null),m=null;(0,a.useEffect)(()=>{d.current=o.ZP.timeline({paused:!0}),d.current.to(c.current,{top:"-25%",width:"150%",duration:.4,ease:"power3.in"},"enter").to(c.current,{top:"-150%",width:"125%",duration:.25},"exit")},[]);let p=()=>{m&&clearTimeout(m),d.current.tweenFromTo("enter","exit")},h=()=>{m=setTimeout(()=>{d.current.play()},300)};return(0,r.jsx)(l,{children:(0,r.jsxs)("div",{className:n().roundedButton,style:{overflow:"hidden"},onMouseEnter:()=>{p()},onMouseLeave:()=>{h()},...s,children:[t,(0,r.jsx)("div",{ref:c,style:{backgroundColor:i},className:n().circle})]})})}},9338:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return m}});var r=i(7437),a=i(4560),s=i.n(a),n=i(8868),o=i(2797),l=i(2265);let c={initial:{y:"100%"},open:e=>({y:"0%",transition:{duration:.8,delay:.03*e}}),closed:{y:"100%",transition:{duration:.8}}},d={initial:{opacity:0},open:{opacity:1,transition:{duration:.8}},closed:{opacity:0,transition:{duration:.8}}};function m(){let e=(0,l.useRef)(null),t=(0,n.Y)(e);return(0,r.jsx)("section",{id:"about",children:(0,r.jsx)("div",{ref:e,className:s().description,children:(0,r.jsxs)("div",{className:s().body,children:[(0,r.jsx)("h1",{children:"A B O U T"}),(0,r.jsxs)("div",{className:s().textRow,children:[(0,r.jsx)("p",{className:s().phrase,children:"During my time at UCF, I worked in customer service as a Beverage Cart Attendant at Hawks Landing Golf Club and had a great experience working at Destination Brides as their Web Development Intern this past Summer. Throughout these roles, I have been able to gain leadership skills, satisfy customer needs, time management, team collaboration, and attention to detail.".split(" ").map((e,i)=>(0,r.jsx)("span",{className:s().mask,children:(0,r.jsx)(o.E.span,{variants:c,custom:i,animate:t?"open":"closed",children:e},i)},i))}),(0,r.jsx)(o.E.p,{variants:d,animate:t?"open":"closed",children:"Eager to gain more work experience in Development and actively looking for new opportunities."})]})]})})})}i(7719)},1153:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return b}});var r=i(7437),a=i(7250),s=i.n(a),n=i(6691),o=i.n(n),l=i(7719),c={src:"/ThaovyLePortfolio/_next/static/media/github-icon.fd8f7f1e.svg",height:48,width:48,blurWidth:0,blurHeight:0},d={src:"/ThaovyLePortfolio/_next/static/media/linkedin-icon.23a051cc.svg",height:48,width:48,blurWidth:0,blurHeight:0},m={src:"/ThaovyLePortfolio/_next/static/media/gmail-icon.4fc08bfe.svg",height:48,width:48,blurWidth:0,blurHeight:0},p={src:"/ThaovyLePortfolio/_next/static/media/facebook-icon.12acdce1.svg",height:48,width:48,blurWidth:0,blurHeight:0},h=i(1396),g=i.n(h),u=i(2265),v=i(6522),x=i(9291),f=i(2797);function b(){let e=(0,u.useRef)(null),{scrollYProgress:t}=(0,v.v)({target:e,offset:["start end","end end"]});(0,x.H)(t,[0,1],[0,100]);let i=(0,x.H)(t,[0,1],[-500,0]);return(0,x.H)(t,[0,1],[120,90]),(0,r.jsx)("section",{id:"contact",children:(0,r.jsx)(f.E.div,{style:{y:i},ref:e,className:s().contact,children:(0,r.jsxs)("div",{className:s().body,children:[(0,r.jsxs)("div",{className:s().title,children:[(0,r.jsxs)("span",{children:[(0,r.jsx)("div",{className:s().imageContainer,children:(0,r.jsx)(o(),{fill:!0,alt:"image",src:"/images/me.png"})}),(0,r.jsx)("h2",{children:"Let's Connect"})]}),(0,r.jsxs)("div",{className:"socials flex flex-row gap-5 mx-auto my-auto w-fit",children:[(0,r.jsx)(g(),{href:"https://github.com/thaovyvle",rel:"noopener noreferrer",target:"_blank",children:(0,r.jsx)(o(),{src:c,alt:"Github Icon"})}),(0,r.jsx)(g(),{href:"https://mailto:thaovyvivian@gmail.com",rel:"noopener noreferrer",target:"_blank",children:(0,r.jsx)(o(),{src:m,alt:"Gmail Icon"})}),(0,r.jsx)(g(),{href:"https://www.facebook.com/thaovy.le.9085",rel:"noopener noreferrer",target:"_blank",children:(0,r.jsx)(o(),{src:p,alt:"Facebook Icon"})}),(0,r.jsx)(g(),{href:"https://www.linkedin.com/in/thaovyvivanle/",rel:"noopener noreferrer",target:"_blank",children:(0,r.jsx)(o(),{src:d,alt:"Linkedin Icon"})})]})]}),(0,r.jsxs)("div",{className:s().nav,children:[(0,r.jsx)(l.Z,{children:(0,r.jsx)("p",{children:"thaovyvivian@gmail.com"})}),(0,r.jsx)(l.Z,{children:(0,r.jsx)("p",{children:"(603)-682-2406"})})]}),(0,r.jsxs)("div",{className:s().info,children:[(0,r.jsx)("div",{children:(0,r.jsx)("span",{children:(0,r.jsx)("p",{children:"THAOVY LE"})})}),(0,r.jsx)("div",{children:(0,r.jsx)("span",{children:(0,r.jsx)("p",{children:"2024 \xa9 Edition"})})})]})]})})})}},6887:function(e,t,i){"use strict";i.r(t);var r=i(7437);i(2265);var a=i(6691),s=i.n(a),n=i(2400),o=i(2797),l=i(1396),c=i.n(l);t.default=()=>(0,r.jsx)("section",{className:"lg:py-20",children:(0,r.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-12",children:[(0,r.jsxs)(o.E.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.5},className:"col-span-8 place-self-center text-center sm:text-left justify-self-start",children:[(0,r.jsxs)("h1",{className:"text-[#222442] mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold",children:[(0,r.jsxs)("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600",children:["Hello, I'm"," "]}),(0,r.jsx)("br",{}),(0,r.jsx)(n.e,{sequence:["Thaovy Le",1e3,"Web Developer",1e3,"App Developer",1e3,"UI/UX Designer",1e3],wrapper:"span",speed:50,repeat:1/0})]}),(0,r.jsx)("p",{className:"text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl md:text-lg flex flex-wrap",children:"Fourth year student at University of Central Florida, studying Web Design & Computer Science"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(c(),{href:"/#contact",className:"tracking-[0.1em] px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white",children:"CONTACT"}),(0,r.jsx)(c(),{href:"https://drive.google.com/file/d/1itM3a9lPaVqHEErVJ8vDfgW5W4E3T9T6/view?usp=sharing",rel:"noopener noreferrer",target:"_blank",className:"px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3",children:(0,r.jsx)("span",{className:" tracking-[0.1em] block bg-[#222442] hover:bg-slate-800 rounded-full px-5 py-2",children:"VIEW RESUME"})})]})]}),(0,r.jsx)(o.E.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.5},className:"col-span-4 place-self-center mt-4 lg:mt-0 ml-4 lg:ml-10",children:(0,r.jsx)("div",{className:"rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 sm:pt-10 w-[200px] h-[200px] px-5 md:w-[275px] md:h-[275px] lg:w-[375px] lg:h-[375px] relative",children:(0,r.jsx)(s(),{src:"/images/me.png",alt:"image of Thaovy Le",className:"absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2",width:400,height:400})})})]})})},4296:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return p}});var r=i(7437),a=i(1396),s=i.n(a),n=i(2265),o=e=>{let{href:t,title:i}=e;return(0,r.jsx)(s(),{href:t,className:"block py-2 pl-3 pr-4 text-[#807e7e] sm:text-l tracking-[0.18em] rounded md:p-0 hover:text-[#ff3888]",children:i})},l=i(2364),c=i(4027),d=e=>{let{links:t}=e;return(0,r.jsx)("ul",{className:"flex flex-col py-4 items-center",children:t.map((e,t)=>(0,r.jsx)("li",{children:(0,r.jsx)(o,{href:e.path,title:e.title})},t))})};let m=[{title:"ABOUT",path:"#about"},{title:"PROJECTS",path:"#projects"},{title:"CONTACT",path:"#contact"}];var p=()=>{let[e,t]=(0,n.useState)(!1),i=e=>{let t=document.getElementById(e);if(t){let e=t.offsetTop-100;window.scrollTo({top:e,behavior:"smooth"})}};return(0,r.jsxs)("nav",{className:"fixed mx-auto border-b border-t-0 border-[#adadad] top-0 left-0 right-0 z-10 bg-[white] bg-opacity-100",children:[(0,r.jsxs)("div",{className:"flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2",children:[(0,r.jsx)(s(),{href:"/",className:"text-2xl md:text-3xl font-semibold bg-gradient-to-r from-primary-400 to-secondary-600 text-transparent bg-clip-text",children:"THAOVY LE"}),(0,r.jsx)("div",{className:"mobile-menu block md:hidden",children:e?(0,r.jsx)("button",{onClick:()=>t(!1),className:"flex items-center px-3 py-2 border rounded border-[black] text-[black] hover:text-[#ff3888] hover:border-[#ff3888]",children:(0,r.jsx)(c.Z,{className:"h-5 w-5"})}):(0,r.jsx)("button",{onClick:()=>t(!0),className:"flex items-center px-3 py-2 border rounded border-[black] text-[black] hover:text-[#ff3888] hover:border-[#ff3888]",children:(0,r.jsx)(l.Z,{className:"h-5 w-5"})})}),(0,r.jsx)("div",{className:"menu hidden md:block md:w-auto",id:"navbar",children:(0,r.jsx)("ul",{className:"flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 text-black",children:m.map((e,t)=>(0,r.jsx)("li",{children:(0,r.jsx)("button",{className:"block py-2 pl-3 pr-4 text-[#807e7e] sm:text-l tracking-[0.18em] rounded md:p-0 hover:text-[#ff3888]",onClick:()=>i(e.path.slice(1)),children:e.title})},t))})})]}),e?(0,r.jsx)(d,{links:m}):null]})}},8175:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return h}});var r=i(7437),a=i(2265),s=i(988),n=i.n(s),o=i(6691),l=i.n(o),c=i(723),d=i(6522),m=i(9291),p=i(2797);function h(){let e=(0,a.useRef)(null),[t,i]=(0,a.useState)({width:0,height:0}),{scrollYProgress:s}=(0,d.v)({target:e,offset:["start end","end start"]}),{height:o}=t,l=(0,m.H)(s,[0,1],[0,2*o]),p=(0,m.H)(s,[0,1],[0,3.3*o]),h=(0,m.H)(s,[0,1],[0,1.25*o]),u=(0,m.H)(s,[0,1],[0,3*o]);return(0,a.useEffect)(()=>{let e=new c.Z,t=i=>{e.raf(i),requestAnimationFrame(t)},r=()=>{i({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",r),requestAnimationFrame(t),r(),()=>{window.removeEventListener("resize",r)}},[]),(0,r.jsxs)("main",{className:n().main,children:[(0,r.jsx)("div",{className:n().spacer}),(0,r.jsxs)("div",{ref:e,className:n().gallery,children:[(0,r.jsx)(g,{images:["1.png","2.png","3.png"],y:l}),(0,r.jsx)(g,{images:["4.png","5.png","6.png"],y:p}),(0,r.jsx)(g,{images:["7.png","8.png","9.png"],y:h}),(0,r.jsx)(g,{images:["10.png","11.png","12.png"],y:u})]}),(0,r.jsx)("div",{className:n().spacer})]})}let g=e=>{let{images:t,y:i}=e;return(0,r.jsx)(p.E.div,{className:n().column,style:{y:i},children:t.map((e,t)=>(0,r.jsx)("div",{className:n().imageContainer,children:(0,r.jsx)(l(),{src:"/images/".concat(e),alt:"image",fill:!0})},t))})}},3422:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return u}});var r=i(7437),a=i(2265),s=i(7287),n=i(9367),o=i(1396),l=i.n(o),c=e=>{let{imgUrl:t,title:i,description:o,gitUrl:c,previewUrl:d}=e,[m,p]=(0,a.useState)(!1);return(0,r.jsxs)("div",{className:"rounded-b-xl rounded-t-xl",style:{boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.5)"},children:[(0,r.jsx)("div",{className:"h-80 md:h-52 rounded-t-xl relative group",style:{background:"url(".concat(t,")"),backgroundSize:"cover"},children:(0,r.jsxs)("div",{className:"overlay items-center rounded-t-xl justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ",children:[(0,r.jsx)(l(),{href:c,rel:"noopener noreferrer",target:"_blank",className:"h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link",children:(0,r.jsx)(s.Z,{className:"h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white"})}),(0,r.jsx)(l(),{href:d,rel:"noopener noreferrer",target:"_blank",className:"h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link",children:(0,r.jsx)(n.Z,{className:"h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white"})})]})}),m&&(0,r.jsx)("div",{className:"h-1px bg-[#ADB7BE]"}),(0,r.jsxs)("div",{onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),className:"border-grey border-left border-right rounded-b-xl pt-3 bg-white p-4",children:[(0,r.jsx)("h5",{className:"text-[#222442] text-xl font-semibold mb-2",children:i}),(0,r.jsx)("p",{className:"text-[#222442]",children:o})]})]})},d=e=>{let{name:t,onClick:i,isSelected:a}=e;return(0,r.jsx)("button",{className:"".concat(a?"text-[#ff3888] border-500 border-[#ff3888]":"text-[#807e7e] border-[#807e7e] hover:border-[#C183F9]"," rounded-full border-2 px-6 py-3 text-xl cursor-pointer"),onClick:()=>i(t),children:t})},m=i(8868),p=i(2797),h=i(1527);let g=[{id:1,title:"Quiz App",description:"React Native application. To view the app, you can log in with these credentials: username-test, password-Test1@",image:"/images/projects/1.png",tag:["ALL","MOBILE"],gitUrl:"https://github.com/thaovyvle/quizApp",previewUrl:"https://thaovyvle.github.io/quizApp/"},{id:2,title:"Layers of Love",description:"Responsive single-page website that demonstrates a form of creativity. Developed with HTML, CSS, and JavaScript",image:"/images/projects/2.png",tag:["ALL","WEB"],gitUrl:"https://github.com/thaovyvle/layersOfLove",previewUrl:"https://thaovyvle.github.io/layersOfLove/"},{id:3,title:"Journey Through UCF",description:"Responsive single-page website that describes my journey at UCF. Developed with HTML, SASS, and JavaScript",image:"/images/projects/3.png",tag:["ALL","WEB"],gitUrl:"https://github.com/thaovyvle/journeyThroughUCF",previewUrl:"https://thaovyvle.github.io/journeyThroughUCF/"},{id:4,title:"Art Deco",description:"Single-page website that describes the Art Deco movement. Developed with HTML and CSS",image:"/images/projects/4.png",tag:["ALL","WEB"],gitUrl:"https://github.com/thaovyvle/artDeco",previewUrl:"https://thaovyvle.github.io/artDeco/"},{id:5,title:"Exercise App",description:"React application that is a simple exercise tracker. Contains menu with a repetition and duration types",image:"/images/projects/5.png",tag:["ALL","MOBILE"],gitUrl:"https://github.com/thaovyvle/exerciseApp",previewUrl:"https://thaovyvle.github.io/exerciseApp/"},{id:6,title:"Survey",description:"A survey form that offers up hints, uses a variety of input types, and performs validation before delivering the results",image:"/images/projects/6.png",tag:["ALL","WEB"],gitUrl:"https://github.com/thaovyvle/survey",previewUrl:"https://thaovyvle.github.io/survey/"},{id:7,title:"Yahoo Redesign - Web Prototype",description:"A website redesign for usability and accessibility: light mode switch & accesibility button. Designed with Adobe XD",image:"/images/projects/7.png",tag:["ALL","DESIGN"],gitUrl:"https://drive.google.com/file/d/15j9YRFQ0UOfZAE3BxYZyHtANqSHeVCmz/view?usp=sharing",previewUrl:"https://xd.adobe.com/view/bf5744d5-1229-43bc-aa70-60a0afd028a6-ea04/?fullscreen"},{id:8,title:"TravelME - App Prototype",description:"A UX/UI project that includes developing a high fidelity prototype with Adobe XD, and a full report of the design process",image:"/images/projects/8.png",tag:["ALL","DESIGN"],gitUrl:"https://drive.google.com/file/d/1ia_PLP76KhandgUTTv4h6URINKOTrKpD/view?usp=sharing",previewUrl:"https://xd.adobe.com/view/1baf8575-04b5-4169-9878-bc04b0a13b80-4efc/screen/fa639dbe-0750-43e7-9945-e0df9318aa43"},{id:9,title:"Bakery Database - MongoDB",description:"A bakery database comprising entities of the store, baker, and dessert. Postman is used to show the queries and operations",image:"/images/projects/11.png",tag:["ALL","DATABASE"],gitUrl:"https://github.com/thaovyvle/BakeryDB/",previewUrl:"https://www.canva.com/design/DAF9dWHguW4/g9ro-AWFHKpn6w9Ks8W9pg/edit?utm_content=DAF9dWHguW4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"},{id:10,title:"Crumbl Redesign - App Design",description:"Tasked with creating an alternative design for the Crumbl app with at least three states and controls. Designed with Adobe XD",image:"/images/projects/9.png",tag:["ALL","DESIGN"],gitUrl:"https://drive.google.com/file/d/1y31Pf2uFB-qZwnD9HEFiUp7sWK3pC5HM/view?usp=sharing",previewUrl:"https://xd.adobe.com/view/85cb937a-85eb-4f33-b1ca-2ed932ee7ef5-d098/"},{id:11,title:"Blog Database - MySQL",description:"Created a blog database with MySQL. Postman is used to demonstrate the queries and operations",image:"/images/projects/10.png",tag:["ALL","DATABASE"],gitUrl:"https://github.com/thaovyvle/Blog-Database/",previewUrl:"https://www.canva.com/design/DAF9dCSKkvQ/r-ERvXTcO8pXnf8DB8SxvA/edit?utm_content=DAF9dCSKkvQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"},{id:12,title:"Chessland Attacks - C",description:"Recreated a chessboard, considering the positions of rooks. Determines how many and which rooks can attack each piece",image:"/images/projects/12.png",tag:["ALL","C.S"],gitUrl:"https://github.com/thaovyvle/Chessland-Attacks/blob/main/README.md",previewUrl:"https://github.com/thaovyvle/Chessland-Attacks/blob/main/main.c"},{id:13,title:"Coin Organization - C",description:"The program sorts the list of individuals based on the money they each have and the ratio of currency",image:"/images/projects/13.png",tag:["ALL","C.S"],gitUrl:"https://github.com/thaovyvle/Coin-Organization/blob/main/README.md",previewUrl:"https://github.com/thaovyvle/Coin-Organization/blob/main/main.c"},{id:14,title:"Arcade Management - C",description:"Given a list of people entering and leaving the arcade, determine the most valuable player",image:"/images/projects/14.png",tag:["ALL","C.S"],gitUrl:"https://github.com/thaovyvle/Arcade-Management/blob/main/README.md",previewUrl:"https://github.com/thaovyvle/Arcade-Management/blob/main/main.c"},{id:15,title:"Sudoku Solver - Java",description:"Given a sudoku unsolved grid, output the solved puzzle. Uses backtracking function to solve",image:"/images/projects/15.png",tag:["ALL","C.S"],gitUrl:"https://github.com/thaovyvle/Sudoku-Solver/blob/main/README.md",previewUrl:"https://github.com/thaovyvle/Sudoku-Solver/blob/main/sudokuSolver.java"},{id:16,title:"Hexagram - Java",description:"Determine the amount of ways to place numbers on the vertices of a hexagram such that the sum each line is the same",image:"/images/projects/16.png",tag:["ALL","C.S"],gitUrl:"https://github.com/thaovyvle/Hexagram/blob/main/README.md",previewUrl:"https://github.com/thaovyvle/Hexagram/blob/main/hexagram.java"}];var u=()=>{let[e,t]=(0,a.useState)("ALL"),i=(0,a.useRef)(null),s=(0,m.Y)(i,{once:!0});(0,h.useMediaQuery)({minWidth:820});let n=e=>{t(e)},o=g.filter(t=>t.tag.includes(e)),l={initial:{y:50,opacity:0},animate:{y:0,opacity:1}};return(0,r.jsxs)("section",{id:"projects",children:[(0,r.jsx)("h2",{className:"text-center text-5xl font-semibold tracking-[0.2em] mb-8 md:mb-12 mt-[2.5em] bg-gradient-to-r from-primary-400 to-secondary-600 text-transparent bg-clip-text",children:"PROJECTS"}),(0,r.jsx)("div",{className:"flex flex-wrap justify-center items-center gap-5 py-5 mb-10",children:(0,r.jsxs)("div",{className:"flex flex-wrap justify-center md:flex-row gap-5",children:[(0,r.jsx)(d,{onClick:n,name:"ALL",isSelected:"ALL"===e}),(0,r.jsx)(d,{onClick:n,name:"WEB",isSelected:"WEB"===e}),(0,r.jsx)(d,{onClick:n,name:"MOBILE",isSelected:"MOBILE"===e}),(0,r.jsx)(d,{onClick:n,name:"DESIGN",isSelected:"DESIGN"===e}),(0,r.jsx)(d,{onClick:n,name:"DATABASE",isSelected:"DATABASE"===e}),(0,r.jsx)(d,{onClick:n,name:"C.S",isSelected:"C.S"===e})]})}),(0,r.jsx)("ul",{ref:i,className:"grid gap-12 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-12",children:o.map((e,t)=>(0,r.jsx)(p.E.li,{variants:l,initial:"initial",animate:s?"animate":"initial",transition:{duration:.3,delay:.2*t},children:(0,r.jsx)(c,{title:e.title,description:e.description,imgUrl:e.image,gitUrl:e.gitUrl,previewUrl:e.previewUrl},e.id)},t))})]})}},6492:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return g}});var r=i(7437),a=i(2265),s=i(6522),n=i(9291),o=i(2797),l=i(6807),c=i.n(l),d=i(6691),m=i.n(d);let p=[{color:"#e3e5e7",src:"layersPages.png"},{color:"#e3e3e3",src:"journeyPages.png"},{color:"#d6d7dc",src:"layersOfLove.png"},{color:"#21242b",src:"quizApp.png"}],h=[{color:"#d4e3ec",src:"artPages.png"},{color:"#e1dad6",src:"layersMobile.png"},{color:"#e5e0e1",src:"journey.png"},{color:"#d7d4cf",src:"art.png"}];function g(){let e=(0,a.useRef)(null),{scrollYProgress:t}=(0,s.v)({target:e,offset:["start end","end start"]}),i=(0,n.H)(t,[0,1],[0,150]),l=(0,n.H)(t,[0,1],[0,-150]),d=(0,n.H)(t,[0,.9],[50,0]);return(0,r.jsxs)("div",{ref:e,className:c().slidingImages,children:[(0,r.jsx)(o.E.div,{style:{x:i},className:c().slider,children:p.map((e,t)=>(0,r.jsx)("div",{className:c().project,style:{backgroundColor:e.color},children:(0,r.jsx)("div",{className:c().imageContainer,children:(0,r.jsx)(m(),{fill:!0,alt:"image",src:"/images/".concat(e.src)})})},t))}),(0,r.jsx)(o.E.div,{style:{x:l},className:c().slider,children:h.map((e,t)=>(0,r.jsx)("div",{className:c().project,style:{backgroundColor:e.color},children:(0,r.jsx)("div",{className:c().imageContainer,children:(0,r.jsx)(m(),{fill:!0,alt:"image",src:"/images/".concat(e.src)})},t)},t))}),(0,r.jsx)(o.E.div,{style:{height:d},className:c().circleContainer,children:(0,r.jsx)("div",{className:c().circle})})]})}},5802:function(e){e.exports={roundedButton:"style_roundedButton__qndou",circle:"style_circle__HnLq6"}},4560:function(e){e.exports={description:"style_description__SeG20",body:"style_body__pBLoW",phrase:"style_phrase__55Jso",mask:"style_mask__z804B",button:"style_button__V1lfA",moreWork:"style_moreWork__94Aci",textRow:"style_textRow__Fma9U"}},7250:function(e){e.exports={contact:"style_contact__INHYd",body:"style_body__MB8me",title:"style_title__p6aJA",imageContainer:"style_imageContainer__yp6Ki",buttonContainer:"style_buttonContainer__KP57n",button:"style_button__oQvgI",nav:"style_nav__iGPwS",info:"style_info__MfN2e"}},6807:function(e){e.exports={slidingImages:"style_slidingImages__DQjEO",slider:"style_slider__Or37o",project:"style_project__f9cNC",imageContainer:"style_imageContainer__19Kf6",circleContainer:"style_circleContainer__iFKGe",circle:"style_circle__NmXqX"}},988:function(e){e.exports={gallery:"page_gallery__ZSP99",column:"page_column__PH4DW",imageContainer:"page_imageContainer__TyJBj",spacer:"page_spacer__g5oMc"}}},function(e){e.O(0,[922,793,971,596,744],function(){return e(e.s=8791)}),_N_E=e.O()}]);