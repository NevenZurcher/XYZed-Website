import{a as e}from"./rolldown-runtime-COnpUsM8.js";import{In as t,Pn as n,Sn as r,Yt as i,Zt as a,ct as o,en as s,jn as c,ln as l,sn as u,vt as d,xn as f}from"./vendor-DnKa5AJj.js";import{a as p}from"./vendor-react-C0JzMuUl.js";import{n as m,r as h,t as g}from"./vendor-framer-motion-bOUQGmLx.js";import{a as _,c as v,d as y,f as b,i as x,l as S,n as C,o as w,r as T,s as E,t as D,u as O}from"./vendor-three-DwuxdxZp.js";import{i as k,n as A,r as j,t as M}from"./vendor-gsap-CbS34eAa.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var N=e(p()),P=e(t()),F=h();function I(e){let{scene:t}=v(`/XyZed_LOGOv2.glb`),{nodes:a,materials:o}=b(P.useMemo(()=>S.clone(t),[t])),l=(0,P.useRef)(),u=(0,P.useRef)({x:0,y:0}),f=(0,P.useRef)(.05),[p,m]=(0,P.useState)(!1),[h,g]=(0,P.useState)(!1);P.useEffect(()=>{let e=()=>g(window.innerWidth<=768);return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let _=P.useMemo(()=>({MIDDLE:new n(a.MIDDLE.geometry),CAP_1:new n(a.CAP_1.geometry),"CAP-RS_Material1":new n(a[`CAP-RS_Material1`].geometry),RED:new n(a.RED.geometry),TUBE:new n(a.TUBE.geometry)}),[a]),x=e=>new r({uniforms:{mousePos:{value:new c(.5,.5)},spotlightRadius:{value:f.current},lineColor:{value:new d(e)}},vertexShader:`
        varying vec3 vPosition;
        varying vec4 vProjected;
        
        void main() {
          vPosition = position;
          vProjected = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          gl_Position = vProjected;
        }
      `,fragmentShader:`
        uniform vec2 mousePos;
        uniform float spotlightRadius;
        uniform vec3 lineColor;
        
        varying vec3 vPosition;
        varying vec4 vProjected;
        
        void main() {
          vec2 ndc = vProjected.xy / vProjected.w;
          vec2 screenPos = ndc * 0.5 + 0.5; // 0..1
          float dist = distance(screenPos, mousePos);
          float falloff = 2.0;
          float opacity = smoothstep(spotlightRadius * falloff, 0.0, dist);
          gl_FragColor = vec4(lineColor, opacity);
        }
      `,transparent:!0,depthWrite:!1,linewidth:1});new s({metalness:.8,roughness:.2,color:16777215,envMapIntensity:1,transparent:!0,opacity:1});let C=new s({metalness:.2,roughness:.4,color:16777215,envMapIntensity:.8,transparent:!0,opacity:1}),w=new s({metalness:.8,roughness:.2,color:13369344,envMapIntensity:1,transparent:!0,opacity:1}),T=new s({transparent:!0,opacity:.7,metalness:.2,roughness:.1,color:13369344,envMapIntensity:1});P.useEffect(()=>{let e=e=>{u.current={x:e.clientX/window.innerWidth,y:1-e.clientY/window.innerHeight}};return window.addEventListener(`mousemove`,e,{passive:!0}),()=>window.removeEventListener(`mousemove`,e)},[]);let E=P.useMemo(()=>x(16777215),[]),D=P.useMemo(()=>x(13369344),[]);y(e=>{if(h){let t=e.clock.elapsedTime;u.current.x=(Math.sin(t*1.5)+1)/2,u.current.y=.5+Math.cos(t*2)*.2,l.current&&(l.current.rotation.y=i.lerp(l.current.rotation.y,Math.sin(t*1.2)*.3,.05),l.current.rotation.x=i.lerp(l.current.rotation.x,Math.cos(t*.9)*.15,.05))}else l.current&&(l.current.rotation.y=i.lerp(l.current.rotation.y,e.pointer.x*Math.PI/6,.05),l.current.rotation.x=i.lerp(l.current.rotation.x,-(e.pointer.y*Math.PI)/12,.05));[E,D].forEach(e=>{e.uniforms&&(e.uniforms.mousePos.value.set(u.current.x,u.current.y),e.uniforms.spotlightRadius.value=h?.12:f.current)})});let O=()=>m(!0),k=()=>m(!1);return(0,F.jsx)(`group`,{ref:l,...e,dispose:null,children:(0,F.jsxs)(`group`,{scale:.01,children:[(0,F.jsxs)(`group`,{position:[-146.538,200.085,-18.291],rotation:[0,0,.705],children:[(0,F.jsx)(`mesh`,{geometry:a.CAP_1.geometry,material:C}),(0,F.jsx)(`lineSegments`,{geometry:_.CAP_1,material:E}),(0,F.jsx)(`mesh`,{geometry:a[`CAP-RS_Material1`].geometry,material:C}),(0,F.jsx)(`lineSegments`,{geometry:_[`CAP-RS_Material1`],material:E})]}),(0,F.jsx)(`mesh`,{geometry:a.MIDDLE.geometry,material:C,position:[-16.242,31.906,56.376],onPointerOver:O,onPointerOut:k}),(0,F.jsx)(`lineSegments`,{geometry:_.MIDDLE,material:E,position:[-16.242,31.906,56.376]}),(0,F.jsx)(`mesh`,{geometry:a.RED.geometry,material:w,position:[-15.677,31.543,-99.726]}),(0,F.jsx)(`lineSegments`,{geometry:_.RED,material:D,position:[-15.677,31.543,-99.726]}),(0,F.jsx)(`mesh`,{geometry:a.TUBE.geometry,material:T,position:[46.028,-31.782,-18.195],rotation:[0,0,.692]}),(0,F.jsx)(`lineSegments`,{geometry:_.TUBE,material:E,position:[46.028,-31.782,-18.195],rotation:[0,0,.692]})]})})}v.preload(`/XyZed_LOGOv2.glb`);function L(){let[e,t]=(0,P.useState)(window.innerWidth<=768),[n,r]=(0,P.useState)(!1),i=e?[0,-10,150]:[0,-40,200],a=e?35:50;return(0,P.useEffect)(()=>{let n=()=>t(window.innerWidth<=768);window.addEventListener(`resize`,n);let i=setTimeout(()=>r(!0),e?500:100);return()=>{window.removeEventListener(`resize`,n),clearTimeout(i)}},[e]),n?(0,F.jsxs)(O,{camera:{position:[0,0,1e3],fov:45},style:{width:`100%`,height:`100vh`,background:`transparent`},dpr:e?1:[1,2],gl:{powerPreference:`high-performance`,antialias:!0},children:[(0,F.jsx)(w,{preset:`city`}),(0,F.jsx)(P.Suspense,{fallback:null,children:(0,F.jsx)(I,{position:i,scale:a})})]}):null}var R=document.getElementById(`r3f-hero-canvas`);R&&(0,N.createRoot)(R).render((0,F.jsx)(L,{})),k.registerPlugin(j);function z(){(0,P.useEffect)(()=>{let e=document.querySelector(`.hero-section`),t=document.querySelector(`.hero-section .content-wrapper`),n=document.querySelector(`.tagline-container`),r=document.querySelector(`.tagline`);document.querySelector(`.video-background`);let i=document.querySelector(`.hero-blur-overlay`);if(!e||!t)return;let a=!1,o=()=>{if(!r)return;r.innerHTML=r.innerText.split(` `).map(e=>`<span style="display: inline-block; opacity: 0; transform: translateY(20px);">${e}</span>`).join(` `);let e=r.querySelectorAll(`span`);k.to(e,{opacity:1,y:0,duration:.6,stagger:.1,ease:`power2.out`})},s=()=>{let t=window.scrollY,r=Math.min(t/100,1)*8;if(e.style.filter=`blur(${r}px)`,i&&(i.style.opacity=Math.min(t/100,1)),n){let e=window.innerHeight*.5,r=window.innerHeight*.8;if(t>0&&t<e)n.style.opacity=`1`,n.style.pointerEvents=`auto`,a||(a=!0,o());else if(t>=e&&t<r){let i=(t-e)/(r-e);n.style.opacity=`${Math.max(0,1-i)}`,n.style.pointerEvents=`auto`,a=!1}else n.style.opacity=`0`,n.style.pointerEvents=`none`,a=!1}if(n){let e=t>0?t*.5:0;n.style.transform=`translate(-50%, calc(-50% - ${e}px))`}};return window.addEventListener(`scroll`,s,{passive:!0}),e&&(e.style.transition=`filter 0.5s ease`),t&&(t.style.transition=`opacity 0.1s ease`),n&&(n.style.transition=`opacity 0.3s ease`,n.style.opacity=`0`,n.style.pointerEvents=`none`),()=>{window.removeEventListener(`scroll`,s)}},[])}function ee(){(0,P.useEffect)(()=>{let e=document.querySelector(`.video-background`),t=document.querySelector(`.bg-video`);if(!t)return;e&&(e.style.perspective=`1000px`,e.style.overflow=`hidden`),t.style.transformOrigin=`center center`,t.style.transition=`transform 0.1s ease-out`;let n=e=>{if(window.innerWidth<1024)return;let{clientX:n,clientY:r}=e,{innerWidth:i,innerHeight:a}=window,o=n/i*2-1,s=r/a*2-1,c=o*6,l=s*6;t.style.transform=`
        translateX(${c}px) 
        translateY(${l}px)
      `.trim()},r=()=>{t.style.transition=`transform 0.6s ease-out`,t.style.transform=`translateX(0) translateY(0) rotateX(0deg) rotateY(0deg) scale(1)`,setTimeout(()=>{t.style.transition=`transform 0.1s ease-out`},600)};return document.addEventListener(`mousemove`,n,{passive:!0}),document.addEventListener(`mouseleave`,r),()=>{document.removeEventListener(`mousemove`,n),document.removeEventListener(`mouseleave`,r)}},[])}function te(){return z(),ee(),(0,F.jsx)(`h1`,{className:`hero-title`,children:`XY ed`})}var ne=document.getElementById(`hero-title-root`);ne&&(0,N.createRoot)(ne).render((0,F.jsx)(te,{}));var re=({texts:e=[`React`,`Bits`,`Is`,`Cool!`],staggerFrom:t=`last`,initial:n={y:`100%`,opacity:0},animate:r={y:0,opacity:1},exit:i={y:`-120%`,opacity:0},staggerDuration:a=.025,transition:o={type:`spring`,damping:30,stiffness:400},rotationInterval:s=2e3,loop:c=!0,auto:l=!0,splitBy:u=`characters`,font:d={},textColor:f=`#000000`,style:p={},duration:h=.5})=>{let[_,v]=(0,P.useState)(0),y=(0,P.useRef)(null),b=e=>{if(typeof Intl<`u`&&Intl.Segmenter){let t=new Intl.Segmenter(`en`,{granularity:`grapheme`});return Array.from(t.segment(e),e=>e.segment)}return Array.from(e)},x=(0,P.useMemo)(()=>{let t=e[_]||``;if(u===`characters`){let e=t.split(` `);return e.map((t,n)=>({characters:b(t),needsSpace:n!==e.length-1}))}return u===`words`?t.split(` `).map((e,t,n)=>({characters:[e],needsSpace:t!==n.length-1})):u===`lines`?t.split(`
`).map((e,t,n)=>({characters:[e],needsSpace:t!==n.length-1})):t.split(u).map((e,t,n)=>({characters:[e],needsSpace:t!==n.length-1}))},[e,_,u]),S=(0,P.useCallback)((e,n)=>{if(t===`first`)return e*a;if(t===`last`)return(n-1-e)*a;if(t===`center`){let t=Math.floor(n/2);return Math.abs(t-e)*a}if(t===`random`){let t=Math.floor(Math.random()*n);return Math.abs(t-e)*a}return Math.abs(Number(t)-e)*a},[t,a]),C=(0,P.useCallback)(e=>{(0,P.startTransition)(()=>v(e))},[]),w=(0,P.useCallback)(()=>{let t=_===e.length-1?c?0:_:_+1;t!==_&&C(t)},[_,e.length,c,C]);(0,P.useEffect)(()=>{if(l)return y.current=window.setInterval(w,s),()=>{y.current&&clearInterval(y.current)}},[w,s,l]);let T={display:`flex`,alignItems:`center`,justifyContent:`center`,color:f,overflow:`visible`,...d,...p};return(0,F.jsxs)(g.span,{style:T,"aria-label":e[_],children:[(0,F.jsx)(`span`,{style:{position:`absolute`,left:-9999,opacity:0},children:e[_]}),(0,F.jsx)(m,{mode:`wait`,initial:!1,children:(0,F.jsx)(g.span,{style:{display:`flex`,alignItems:`center`,flexWrap:`wrap`},"aria-hidden":`true`,children:x.map((e,t,a)=>{let o=a.slice(0,t).reduce((e,t)=>e+t.characters.length,0);return(0,F.jsxs)(`span`,{style:{display:`inline-flex`,overflow:`hidden`,paddingBottom:`0.1em`},children:[e.characters.map((e,t)=>(0,F.jsx)(g.span,{initial:n,animate:r,exit:i,transition:{ease:`easeInOut`,duration:h,delay:S(o+t,a.reduce((e,t)=>e+t.characters.length,0))},style:{display:`inline-block`},children:e},t)),e.needsSpace&&(0,F.jsx)(`span`,{style:{display:`inline-block`,width:4}})]},t)})},_)})]})},ie=[`At XYZed, we don't just make animations, we build worlds where science, stories, and imagination come to life.`,`At XYZed, we transform complex ideas into visuals that spark curiosity and stay with your audience.`,`At XYZed, your story doesn't just get told, it gets remembered!`],B=document.querySelector(`.services-tagline`);B&&(B.innerHTML=``,N.createRoot(B).render((0,F.jsx)(re,{texts:ie,splitBy:`words`,rotationInterval:6e3,staggerFrom:`first`,staggerDuration:.05,duration:.4,initial:{y:`100%`,opacity:0},animate:{y:0,opacity:1},exit:{y:`-100%`,opacity:0},transition:{type:`spring`,damping:30,stiffness:400},loop:!0,auto:!0,textColor:`inherit`,style:{width:`100%`,lineHeight:`1.6`,fontSize:`inherit`,justifyContent:`flex-end`}}))),k.registerPlugin(A);var ae=({question:e,answer:t,isOpen:n,onClick:r,index:i})=>(0,F.jsxs)(`div`,{className:`faq-item`,children:[(0,F.jsxs)(`button`,{className:`faq-question`,onClick:r,"aria-expanded":n,children:[(0,F.jsx)(`span`,{className:`faq-question-text`,children:e}),(0,F.jsx)(g.span,{className:`faq-toggle-icon`,animate:{rotate:n?180:0},transition:{duration:.3},children:`▼`})]}),(0,F.jsx)(m,{children:n&&(0,F.jsx)(g.div,{className:`faq-answer`,initial:{opacity:0,height:0},animate:{opacity:1,height:`auto`},exit:{opacity:0,height:0},transition:{duration:.3,ease:`easeInOut`},children:(0,F.jsx)(`div`,{className:`faq-answer-content`,children:t})})})]}),oe=({items:e})=>{let[t,n]=(0,P.useState)(null),r=(0,P.useRef)(null);(0,P.useEffect)(()=>{if(!r.current)return;let e=r.current.querySelectorAll(`.faq-item`);k.set(e,{opacity:0,y:30});let t=A.create({trigger:`#faq`,start:`top 30%`,onEnter:()=>{k.to(e,{opacity:1,y:0,duration:.6,stagger:.1,ease:`power2.out`,overwrite:!0})},onLeaveBack:()=>{k.to(e,{opacity:0,y:30,duration:.3,stagger:0,overwrite:!0})}});return()=>t.kill()},[]);let i=e=>{n(t===e?null:e)};return(0,F.jsx)(`div`,{className:`faq-accordion`,ref:r,children:e.map((e,n)=>(0,F.jsx)(ae,{index:n,question:e.question,answer:e.answer,isOpen:t===n,onClick:()=>i(n)},n))})},se=[{question:`How much does an animation cost?`,answer:(0,F.jsx)(F.Fragment,{children:`Animation pricing varies widely based on complexity, duration, resolution, and client needs. That said, we can work with you to tailor an animation that meets your goals while maintaining high-quality standards—within virtually any budget.`})},{question:`How long does it take to create a typical medical animation?`,answer:(0,F.jsxs)(F.Fragment,{children:[`Every project is unique and can take anywhere from a few days to up to four months. Once we determine the scope, we'll provide a phased approach. Our process is designed for clarity and collaboration, ensuring you're involved at every step. For more details, check out our`,` `,(0,F.jsx)(`a`,{href:`#process`,className:`faq-link`,children:`Process page`}),`.`]})},{question:`What is included in the animation scope?`,answer:(0,F.jsx)(F.Fragment,{children:`Our services can cover everything needed for a finished animation. We manage the entire process—from script, storyboards, and style frames to final delivery. Projects can be provided in any resolution and may include supplemental print materials or PowerPoint slides. We also handle all audio, including music, sound design, and professional narration. For a more immersive experience, we can expand into VR, AR, or 360-degree video.`})},{question:`How many revisions do I get?`,answer:(0,F.jsxs)(F.Fragment,{children:[`Typically, each project has three stages allotted for revisions, with one round included at each stage. This can be tailored to meet each client's specific needs.`,(0,F.jsxs)(`ul`,{className:`faq-sublist`,children:[(0,F.jsxs)(`li`,{children:[(0,F.jsx)(`strong`,{children:`Pre-production revisions`}),` - Storyboard, style sheet/model sheet`]}),(0,F.jsxs)(`li`,{children:[(0,F.jsx)(`strong`,{children:`Production revisions`}),` - 1st pass animation - 2nd pass animation`]})]})]})},{question:`What if I need to make changes after receiving the final animations pass?`,answer:(0,F.jsx)(F.Fragment,{children:`Some revisions may require a change order. For example, changes requested after final renders are delivered may involve additional animation, rendering, and compositing.`})},{question:`Do you provide project files upon request?`,answer:(0,F.jsx)(F.Fragment,{children:`Project files can be purchased. However, this must be determined at the start of the project to ensure no assets are used that aren't freely distributable.`})},{question:`Is less more?`,answer:`Most of the time!`}],ce=document.querySelector(`.faq .content-wrapper`);ce&&N.createRoot(ce).render((0,F.jsx)(oe,{items:se}));var le=`
varying vec2 v_texcoord;
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    v_texcoord = uv;
}
`,ue=`
varying vec2 v_texcoord;

uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_pixelRatio;

uniform vec2 u_shapeSize;
uniform float u_roundness;
uniform float u_borderSize;
uniform float u_circleSize;
uniform float u_circleEdge;

#ifndef PI
#define PI 3.1415926535897932384626433832795
#endif
#ifndef TWO_PI
#define TWO_PI 6.2831853071795864769252867665590
#endif

#ifndef VAR
#define VAR 0
#endif

#ifndef FNC_COORD
#define FNC_COORD
vec2 coord(in vec2 p) {
    p = p / u_resolution.xy;
    if (u_resolution.x > u_resolution.y) {
        p.x *= u_resolution.x / u_resolution.y;
        p.x += (u_resolution.y - u_resolution.x) / u_resolution.y / 2.0;
    } else {
        p.y *= u_resolution.y / u_resolution.x;
        p.y += (u_resolution.x - u_resolution.y) / u_resolution.x / 2.0;
    }
    p -= 0.5;
    p *= vec2(-1.0, 1.0);
    return p;
}
#endif

#define st0 coord(gl_FragCoord.xy)
#define mx coord(u_mouse * u_pixelRatio)

float sdRoundRect(vec2 p, vec2 b, float r) {
    vec2 d = abs(p - 0.5) * 4.2 - b + vec2(r);
    return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - r;
}
float sdCircle(in vec2 st, in vec2 center) {
    return length(st - center) * 2.0;
}
float sdPoly(in vec2 p, in float w, in int sides) {
    float a = atan(p.x, p.y) + PI;
    float r = TWO_PI / float(sides);
    float d = cos(floor(0.5 + a / r) * r - a) * length(max(abs(p) * 1.0, 0.0));
    return d * 2.0 - w;
}

float aastep(float threshold, float value) {
    float afwidth = length(vec2(dFdx(value), dFdy(value))) * 0.70710678118654757;
    return smoothstep(threshold - afwidth, threshold + afwidth, value);
}
float fill(in float x) { return 1.0 - aastep(0.0, x); }
float fill(float x, float size, float edge) {
    return 1.0 - smoothstep(size - edge, size + edge, x);
}
float stroke(in float d, in float t) { return (1.0 - aastep(t, abs(d))); }
float stroke(float x, float size, float w, float edge) {
    float d = smoothstep(size - edge, size + edge, x + w * 0.5) - smoothstep(size - edge, size + edge, x - w * 0.5);
    return clamp(d, 0.0, 1.0);
}

float strokeAA(float x, float size, float w, float edge) {
    float afwidth = length(vec2(dFdx(x), dFdy(x))) * 0.70710678;
    float d = smoothstep(size - edge - afwidth, size + edge + afwidth, x + w * 0.5)
            - smoothstep(size - edge - afwidth, size + edge + afwidth, x - w * 0.5);
    return clamp(d, 0.0, 1.0);
}

void main() {
    vec2 st = st0 + 0.5;
    vec2 posMouse = mx * vec2(1., -1.) + 0.5;

    vec2 size = u_shapeSize;
    float roundness = u_roundness;
    float borderSize = u_borderSize;
    float circleSize = u_circleSize;
    float circleEdge = u_circleEdge;

    float sdfCircle = fill(
        sdCircle(st, posMouse),
        circleSize,
        circleEdge
    );

    float sdf;
    if (VAR == 0) {
        sdf = sdRoundRect(st, size, roundness);
        sdf = strokeAA(sdf, 0.0, borderSize, sdfCircle) * 4.0;
    } else if (VAR == 1) {
        sdf = sdCircle(st, vec2(0.5));
        sdf = fill(sdf, 0.6, sdfCircle) * 1.2;
    } else if (VAR == 2) {
        sdf = sdCircle(st, vec2(0.5));
        sdf = strokeAA(sdf, 0.58, 0.02, sdfCircle) * 4.0;
    } else if (VAR == 3) {
        sdf = sdPoly(st - vec2(0.5, 0.45), 0.3, 3);
        sdf = fill(sdf, 0.05, sdfCircle) * 1.4;
    }

    vec3 color = vec3(1.0);
    float alpha = sdf;
    gl_FragColor = vec4(color.rgb, alpha);
}
`,de=({className:e=``,variation:t=0,pixelRatioProp:n=2,shapeSize:s=1.2,roundness:d=.4,borderSize:p=.05,circleSize:m=.3,circleEdge:h=.5})=>{let g=(0,P.useRef)(null);return(0,P.useEffect)(()=>{let e=g.current;if(!e)return;let _=!0,v,y=0,b=0,x=new c,S=new c,C=new c,w=new c;Array.isArray(s)?w.set(s[0],s[1]):w.set(s,s);let T=1,E=1,D=new f,O=new u;O.position.z=1;let k=new o({alpha:!0});if(k.setClearColor(0,0),!e)return;e.appendChild(k.domElement);let A=new l(1,1),j=new r({vertexShader:le,fragmentShader:ue,uniforms:{u_mouse:{value:S},u_resolution:{value:C},u_pixelRatio:{value:n},u_shapeSize:{value:w},u_roundness:{value:d},u_borderSize:{value:p},u_circleSize:{value:m},u_circleEdge:{value:h}},defines:{VAR:t},transparent:!0}),M=new a(A,j);D.add(M);let N=null,P=()=>{e&&(N=e.getBoundingClientRect())};P();let F=setInterval(P,500),I=t=>{!e||!N||x.set(t.clientX-N.left,t.clientY-N.top)};document.addEventListener(`mousemove`,I),document.addEventListener(`pointermove`,I);let L=()=>{if(!_)return;P(),T=e.clientWidth,E=e.clientHeight;let t=Math.min(window.devicePixelRatio,2);k.setSize(T,E),k.setPixelRatio(t),O.left=-T/2,O.right=T/2,O.top=E/2,O.bottom=-E/2,O.updateProjectionMatrix(),M.scale.set(T,E,1),C.set(T,E).multiplyScalar(t),j.uniforms.u_pixelRatio.value=t};L(),window.addEventListener(`resize`,L);let R=new ResizeObserver(()=>{_&&L()});R.observe(e);let z=()=>{if(!_)return;y=performance.now()*.001;let e=y-b;if(b=y,window.innerWidth<=768){let e=T/2,t=E/2,n=T/2*.85,r=E/2*.75,i=2.5;x.set(e+Math.cos(y*i)*n,t+Math.sin(y*i)*r)}S.x=i.damp(S.x,x.x,8,e),S.y=i.damp(S.y,x.y,8,e),k.render(D,O),v=requestAnimationFrame(z)};return z(),()=>{_=!1,clearInterval(F),cancelAnimationFrame(v),window.removeEventListener(`resize`,L),R.disconnect(),document.removeEventListener(`mousemove`,I),document.removeEventListener(`pointermove`,I),e.contains(k.domElement)&&e.removeChild(k.domElement),k.dispose(),k.forceContextLoss()}},[t,n,s,d,p,m,h]),(0,F.jsx)(`div`,{className:e,ref:g,style:{width:`100%`,height:`100%`}})},fe=(0,P.createContext)();function pe({children:e}){let[t,n]=(0,P.useState)(!1),[r,i]=(0,P.useState)(!1);return(0,F.jsx)(fe.Provider,{value:{isDemoActive:t,setIsDemoActive:n,isAnimating:r,setIsAnimating:i},children:e})}function me(){let e=(0,P.useContext)(fe);if(!e)throw Error(`useDemoVideo must be used within DemoVideoProvider`);return e}function he(){let{isDemoActive:e,setIsDemoActive:t,isAnimating:n,setIsAnimating:r}=me(),i=P.useRef(null),a=P.useRef(null);(0,P.useEffect)(()=>{i.current=document.querySelector(`.hero-section`)},[]);let o=()=>{t(!1),r(!1),i.current&&i.current.classList.remove(`demo-active`);let e=document.querySelector(`.demo-video`);e&&(e.classList.remove(`active`),e.pause(),e.currentTime=0),document.querySelector(`#r3f-hero-canvas`),document.querySelector(`#hero-title-root`),document.querySelector(`.hero-section .video-background`),document.querySelector(`.demo-button`)};return(0,P.useEffect)(()=>{let t=t=>{e&&(t.preventDefault(),o(),window.scrollTo({top:0,behavior:`smooth`}))},n=document.querySelectorAll(`a[href='#home']`);return n.forEach(e=>{e.addEventListener(`click`,t)}),()=>{n.forEach(e=>{e.removeEventListener(`click`,t)})}},[e]),(0,P.useEffect)(()=>{let e=e=>{e.preventDefault(),window.scrollTo({top:0,behavior:`smooth`}),setTimeout(()=>{a.current&&a.current.click()},100)},t=document.querySelectorAll(`a[href='#splineAction']`);return t.forEach(t=>{t.addEventListener(`click`,e)}),()=>{t.forEach(t=>{t.removeEventListener(`click`,e)})}},[]),(0,F.jsxs)(`button`,{ref:a,className:`demo-button-container`,onClick:async()=>{n||e||(r(!0),window.dispatchEvent(new CustomEvent(`startDemoAnimation`)),setTimeout(()=>{t(!0),r(!1),i.current&&i.current.classList.add(`demo-active`);let e=document.querySelector(`.demo-video`);e&&(e.classList.add(`active`),e.play().catch(()=>console.log(`Demo video autoplay blocked`)))},400))},disabled:n||e,"aria-label":`Play Demo`,children:[(0,F.jsx)(`div`,{className:`shape-blur-bg`,children:(0,F.jsx)(de,{variation:0,pixelRatioProp:window.devicePixelRatio||1,shapeSize:[2.5,.8],roundness:.8,borderSize:.08,circleSize:.3,circleEdge:1})}),(0,F.jsx)(`span`,{className:`demo-button-text`,children:`Play Demo`})]})}var ge=document.getElementById(`demo-button-root`);ge&&(0,N.createRoot)(ge).render((0,F.jsx)(pe,{children:(0,F.jsx)(he,{})})),(function(){let e=document.getElementById(`intro-overlay`),t=document.getElementById(`intro-video`);if(!e||!t)return;document.body.classList.add(`intro-active`);let n=t.play();n!==void 0&&n.catch(()=>s()),t.addEventListener(`ended`,()=>{s()},{once:!0}),t.addEventListener(`error`,()=>{s()},{once:!0});let i=!1;function s(){i||(i=!0,t.style.transition=`opacity 0.3s ease`,t.style.opacity=`0`,setTimeout(()=>{d()},200))}function d(){let t=document.createElement(`canvas`);t.style.cssText=`
      position: fixed; inset: 0; z-index: 100000;
      width: 100vw; height: 100vh;
      pointer-events: none;
    `,document.body.appendChild(t);let n=new o({canvas:t,alpha:!0,antialias:!1,powerPreference:`high-performance`});n.setSize(window.innerWidth,window.innerHeight),n.setPixelRatio(Math.min(window.devicePixelRatio,2));let i=new f,s=new u(-1,1,1,-1,0,1),d={uProgress:{value:0},uTime:{value:0},uResolution:{value:new c(window.innerWidth,window.innerHeight)}},p=new l(2,2),m=new r({vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,fragmentShader:`
      precision highp float;

      uniform float uProgress;
      uniform float uTime;
      uniform vec2 uResolution;
      varying vec2 vUv;

      //
      // 3D Simplex noise (compact version)
      //
      vec4 permute(vec4 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
      vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

      float snoise(vec3 v) {
        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

        vec3 i = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);

        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy);
        vec3 i2 = max(g.xyz, l.zxy);

        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy;
        vec3 x3 = x0 - D.yyy;

        i = mod(i, 289.0);
        vec4 p = permute(permute(permute(
                  i.z + vec4(0.0, i1.z, i2.z, 1.0))
                + i.y + vec4(0.0, i1.y, i2.y, 1.0))
                + i.x + vec4(0.0, i1.x, i2.x, 1.0));

        float n_ = 1.0/7.0;
        vec3 ns = n_ * D.wyz - D.xzx;

        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_);

        vec4 x = x_ * ns.x + ns.yyyy;
        vec4 y = y_ * ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);

        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);

        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));

        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

        vec3 p0 = vec3(a0.xy, h.x);
        vec3 p1 = vec3(a0.zw, h.y);
        vec3 p2 = vec3(a1.xy, h.z);
        vec3 p3 = vec3(a1.zw, h.w);

        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
        p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;

        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
      }

      void main() {
        vec2 uv = vUv;
        float aspect = uResolution.x / uResolution.y;
        vec2 centeredUv = (uv - 0.5) * vec2(aspect, 1.0);
        float dist = length(centeredUv);

        // Expanding ripple radius
        float maxRadius = length(vec2(aspect, 1.0)) * 0.5 + 0.3;
        float radius = uProgress * maxRadius;

        // --- Multi-layer noise distortion on the edge ---
        float noiseScale = 3.5;
        float noiseAmt = 0.12;

        float n1 = snoise(vec3(centeredUv * noiseScale, uTime * 0.8)) * noiseAmt;
        float n2 = snoise(vec3(centeredUv * noiseScale * 2.5, uTime * 1.2 + 100.0)) * noiseAmt * 0.4;
        float n3 = snoise(vec3(centeredUv * noiseScale * 6.0, uTime * 1.8 + 200.0)) * noiseAmt * 0.15;

        float totalNoise = n1 + n2 + n3;

        float edgeProximity = 1.0 - smoothstep(0.0, 0.4, abs(dist - radius));
        totalNoise *= edgeProximity;

        float distortedDist = dist + totalNoise;

        // === LAYER 1: Main black ripple (leading edge) ===
        float outerEdge = smoothstep(radius, radius + 0.15, distortedDist);
        float rimGlow = (1.0 - smoothstep(radius - 0.01, radius + 0.06, distortedDist))
                      * smoothstep(radius - 0.08, radius - 0.01, distortedDist);
        rimGlow *= 0.5 * (1.0 - smoothstep(0.0, 0.95, uProgress));

        // === LAYER 2: Red ripple (trailing behind) ===
        float redOffset = 0.18;
        float redRadius = max(radius - redOffset, 0.0);
        float redEdgeProximity = 1.0 - smoothstep(0.0, 0.4, abs(dist - redRadius));
        float redNoise = totalNoise * redEdgeProximity / max(edgeProximity, 0.001);
        float redDistorted = dist + redNoise * redEdgeProximity;
        float redBand = smoothstep(redRadius - 0.04, redRadius, redDistorted)
                      * (1.0 - smoothstep(redRadius, redRadius + 0.12, redDistorted));
        redBand *= (1.0 - smoothstep(0.0, 0.92, uProgress));

        // === LAYER 3: White ripple (trailing furthest behind) ===
        float whiteOffset = 0.35;
        float whiteRadius = max(radius - whiteOffset, 0.0);
        float whiteEdgeProximity = 1.0 - smoothstep(0.0, 0.4, abs(dist - whiteRadius));
        float whiteNoise = totalNoise * whiteEdgeProximity / max(edgeProximity, 0.001);
        float whiteDistorted = dist + whiteNoise * whiteEdgeProximity;
        float whiteBand = smoothstep(whiteRadius - 0.04, whiteRadius, whiteDistorted)
                        * (1.0 - smoothstep(whiteRadius, whiteRadius + 0.10, whiteDistorted));
        whiteBand *= (1.0 - smoothstep(0.0, 0.88, uProgress));

        // === Composite all layers ===
        vec3 color = vec3(0.0);
        float finalAlpha = outerEdge;

        // White trailing ring
        color = mix(color, vec3(1.0), whiteBand);
        finalAlpha = max(finalAlpha, whiteBand);

        // Red trailing ring
        color = mix(color, vec3(1.0, 0.0, 0.0), redBand);
        finalAlpha = max(finalAlpha, redBand);

        // White rim glow on leading black edge
        color = mix(color, vec3(1.0), rimGlow);
        finalAlpha = max(finalAlpha, rimGlow * 0.3);

        gl_FragColor = vec4(color, finalAlpha);
      }
    `,uniforms:d,transparent:!0,depthTest:!1,depthWrite:!1}),h=new a(p,m);i.add(h);let g=document.querySelector(`.hero-section`),_=document.querySelector(`#r3f-hero-canvas`),v=document.querySelector(`#hero-title-root`),y=document.querySelector(`#demo-button-root`);g&&(g.style.perspective=`800px`,g.style.perspectiveOrigin=`50% 50%`);let b=[_,v,y].filter(Boolean);k.set(b,{rotationX:25,rotationY:-15,rotationZ:3,scale:.6,opacity:0,z:-400,transformPerspective:800,transformOrigin:`50% 50%`,filter:`blur(8px) brightness(2)`});let x=performance.now(),S=!1;e.style.display=`none`;function C(r){let a=r-x,o=Math.min(a/1800,1),c=1-(1-o)**4;d.uProgress.value=c,d.uTime.value=a*.001,!S&&o>.06&&(S=!0,k.timeline().to(b,{rotationX:0,rotationY:0,rotationZ:0,scale:1,opacity:1,z:0,filter:`blur(0px) brightness(1)`,duration:1.4,stagger:.08,ease:`elastic.out(1, 0.6)`,onComplete:()=>{b.forEach(e=>{e.style.transform=``,e.style.filter=``,e.style.opacity=``}),g&&(g.style.perspective=``,g.style.perspectiveOrigin=``)}})),n.render(i,s),o<1?requestAnimationFrame(C):(n.dispose(),p.dispose(),m.dispose(),t.remove(),e.remove(),document.body.classList.remove(`intro-active`))}requestAnimationFrame(C),window.addEventListener(`resize`,()=>{n.setSize(window.innerWidth,window.innerHeight),d.uResolution.value.set(window.innerWidth,window.innerHeight)})}})();function _e(e){let{nodes:t,materials:a}=v(`/assets/CARD.glb`),o=(0,P.useRef)(),l=(0,P.useRef)({x:.5,y:.5}),u=(0,P.useRef)(.08),[f,p]=(0,P.useState)(!1);(0,P.useEffect)(()=>{let e=()=>p(window.innerWidth<=768);return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let m=e=>new r({uniforms:{mousePos:{value:new c(.5,.5)},spotlightRadius:{value:u.current},lineColor:{value:new d(e)}},vertexShader:`
        varying vec3 vPosition;
        varying vec4 vProjected;
        
        void main() {
          vPosition = position;
          vProjected = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          gl_Position = vProjected;
        }
      `,fragmentShader:`
        uniform vec2 mousePos;
        uniform float spotlightRadius;
        uniform vec3 lineColor;
        
        varying vec3 vPosition;
        varying vec4 vProjected;
        
        void main() {
          vec2 ndc = vProjected.xy / vProjected.w;
          vec2 screenPos = ndc * 0.5 + 0.5; // 0..1
          float dist = distance(screenPos, mousePos);
          float falloff = 2.0;
          float opacity = smoothstep(spotlightRadius * falloff, 0.0, dist);
          gl_FragColor = vec4(lineColor, opacity);
        }
      `,transparent:!0,depthWrite:!1,linewidth:1}),h=P.useMemo(()=>({CARD_1:new n(t.CARD_1.geometry),RED1:new n(t[`RED-RS_Material`].geometry),RED2:new n(t[`RED-RS_Material_1`].geometry),BLOOD:new n(t.BLOOD.geometry),MIDDLE:new n(t.MIDDLE.geometry),CAP:new n(t.CAP.geometry)}),[t]),g=P.useMemo(()=>m(16777215),[]),_=P.useMemo(()=>m(13369344),[]);y(e=>{let t=e.clock.elapsedTime;f?(l.current.x=(Math.sin(t*1.5)+1)/2,l.current.y=.5+Math.cos(t*2)*.2):(l.current.x=e.pointer.x*.5+.5,l.current.y=e.pointer.y*.5+.5),[g,_].forEach(e=>{e.uniforms&&(e.uniforms.mousePos.value.set(l.current.x,l.current.y),e.uniforms.spotlightRadius.value=f?.15:u.current)}),o.current&&(f?(o.current.rotation.y=i.lerp(o.current.rotation.y,Math.sin(t*.8)*.08,.05),o.current.rotation.x=i.lerp(o.current.rotation.x,Math.cos(t*.6)*.05,.05),o.current.position.y=Math.sin(t*1.5)*.15):(o.current.rotation.y=i.lerp(o.current.rotation.y,e.pointer.x*Math.PI/30,.05),o.current.rotation.x=i.lerp(o.current.rotation.x,-(e.pointer.y*Math.PI)/45,.05)))});let b=new s({color:1381653,metalness:.9,roughness:.7,envMapIntensity:1.2}),x=new s({color:13369344,metalness:.6,roughness:.3,envMapIntensity:1}),S=new s({color:16777215,metalness:.8,roughness:.2,envMapIntensity:.5});return(0,F.jsxs)(`group`,{ref:o,...e,dispose:null,children:[(0,F.jsxs)(`group`,{position:[-.813,.441,-.026],children:[(0,F.jsxs)(`group`,{position:[.813,-.441,.012],children:[(0,F.jsx)(`mesh`,{geometry:t[`RED-RS_Material`].geometry,material:x}),(0,F.jsx)(`lineSegments`,{geometry:h.RED1,material:_}),(0,F.jsx)(`mesh`,{geometry:t[`RED-RS_Material_1`].geometry,material:x}),(0,F.jsx)(`lineSegments`,{geometry:h.RED2,material:_})]}),(0,F.jsx)(`mesh`,{geometry:t.BLOOD.geometry,material:x,position:[.813,-.441,.012]}),(0,F.jsx)(`lineSegments`,{geometry:h.BLOOD,material:_,position:[.813,-.441,.012]}),(0,F.jsx)(`mesh`,{geometry:t.MIDDLE.geometry,material:S,position:[.813,-.441,.012]}),(0,F.jsx)(`lineSegments`,{geometry:h.MIDDLE,material:g,position:[.813,-.441,.012]}),(0,F.jsx)(`mesh`,{geometry:t.CAP.geometry,material:S,position:[-2.439,1.324,-.036],rotation:[Math.PI/2,.675,-1.577]}),(0,F.jsx)(`lineSegments`,{geometry:h.CAP,material:g,position:[-2.439,1.324,-.036],rotation:[Math.PI/2,.675,-1.577]})]}),(0,F.jsx)(`mesh`,{geometry:t.Phone.geometry,material:S,position:[2.307,-2.067,.017]}),(0,F.jsx)(`mesh`,{geometry:t.CARD_1.geometry,material:b,position:[0,0,-.015]}),(0,F.jsx)(`lineSegments`,{geometry:h.CARD_1,material:g,position:[0,0,-.015]}),(0,F.jsx)(`mesh`,{geometry:t.XYZed_1.geometry,material:S,position:[-4.336,-2.403,.055]}),(0,F.jsx)(`mesh`,{geometry:t.Email_1.geometry,material:S,position:[1.62,.12,.017]}),(0,F.jsx)(`mesh`,{geometry:t.NAME_1.geometry,material:S,position:[1.634,.797,.017]}),(0,F.jsx)(`mesh`,{geometry:t.Extrude1_1.geometry,material:S,position:[3.068,.468,.017]})]})}v.preload(`/assets/CARD.glb`);function ve(){let[e,t]=(0,P.useState)(window.innerWidth<=768),[n,r]=(0,P.useState)(!1);(0,P.useEffect)(()=>{let n=()=>t(window.innerWidth<=768);window.addEventListener(`resize`,n);let i=setTimeout(()=>r(!0),e?1500:500);return()=>{window.removeEventListener(`resize`,n),clearTimeout(i)}},[e]);let i=[0,0,0],a=e?12:8.5;return n?(0,F.jsxs)(O,{camera:{position:[0,0,100],fov:45},style:{width:`100%`,height:`100%`,display:`block`,background:`transparent`},dpr:e?1:[1,2],gl:{powerPreference:`high-performance`,antialias:!0},children:[(0,F.jsx)(w,{preset:`studio`}),(0,F.jsx)(`ambientLight`,{intensity:.5}),(0,F.jsx)(`directionalLight`,{position:[10,10,10],intensity:1.5}),(0,F.jsx)(P.Suspense,{fallback:null,children:(0,F.jsx)(E,{speed:e?1.2:1,rotationIntensity:e?.3:.5,floatIntensity:e?.4:.5,floatingRange:e?[-.3,.3]:[-1,1],children:(0,F.jsx)(_e,{position:i,scale:a})})})]}):null}var ye=document.getElementById(`r3f-contact-canvas`);ye&&(0,N.createRoot)(ye).render((0,F.jsx)(ve,{}));var be=`
attribute vec2 position;
void main(){gl_Position=vec4(position,0.0,1.0);}
`,xe=`
#ifdef GL_ES
precision lowp float;
#endif
uniform vec2 uResolution;
uniform float uTime;
uniform float uHueShift;
uniform float uNoise;
uniform float uScan;
uniform float uScanFreq;
uniform float uWarp;
#define iTime uTime
#define iResolution uResolution

vec4 buf[8];
float rand(vec2 c){return fract(sin(dot(c,vec2(12.9898,78.233)))*43758.5453);}

mat3 rgb2yiq=mat3(0.299,0.587,0.114,0.596,-0.274,-0.322,0.211,-0.523,0.312);
mat3 yiq2rgb=mat3(1.0,0.956,0.621,1.0,-0.272,-0.647,1.0,-1.106,1.703);

vec3 hueShiftRGB(vec3 col,float deg){
    vec3 yiq=rgb2yiq*col;
    float rad=radians(deg);
    float cosh=cos(rad),sinh=sin(rad);
    vec3 yiqShift=vec3(yiq.x,yiq.y*cosh-yiq.z*sinh,yiq.y*sinh+yiq.z*cosh);
    return clamp(yiq2rgb*yiqShift,0.0,1.0);
}

vec4 sigmoid(vec4 x){return 1./(1.+exp(-x));}

vec4 cppn_fn(vec2 coordinate,float in0,float in1,float in2){
    buf[6]=vec4(coordinate.x,coordinate.y,0.3948333106474662+in0,0.36+in1);
    buf[7]=vec4(0.14+in2,sqrt(coordinate.x*coordinate.x+coordinate.y*coordinate.y),0.,0.);
    buf[0]=mat4(vec4(6.5404263,-3.6126034,0.7590882,-1.13613),vec4(2.4582713,3.1660357,1.2219609,0.06276096),vec4(-5.478085,-6.159632,1.8701609,-4.7742867),vec4(6.039214,-5.542865,-0.90925294,3.251348))*buf[6]+mat4(vec4(0.8473259,-5.722911,3.975766,1.6522468),vec4(-0.24321538,0.5839259,-1.7661959,-5.350116),vec4(0.,0.,0.,0.),vec4(0.,0.,0.,0.))*buf[7]+vec4(0.21808943,1.1243913,-1.7969975,5.0294676);
    buf[1]=mat4(vec4(-3.3522482,-6.0612736,0.55641043,-4.4719114),vec4(0.8631464,1.7432913,5.643898,1.6106541),vec4(2.4941394,-3.5012043,1.7184316,6.357333),vec4(3.310376,8.209261,1.1355612,-1.165539))*buf[6]+mat4(vec4(5.24046,-13.034365,0.009859298,15.870829),vec4(2.987511,3.129433,-0.89023495,-1.6822904),vec4(0.,0.,0.,0.),vec4(0.,0.,0.,0.))*buf[7]+vec4(-5.9457836,-6.573602,-0.8812491,1.5436668);
    buf[0]=sigmoid(buf[0]);buf[1]=sigmoid(buf[1]);
    buf[2]=mat4(vec4(-15.219568,8.095543,-2.429353,-1.9381982),vec4(-5.951362,4.3115187,2.6393783,1.274315),vec4(-7.3145227,6.7297835,5.2473326,5.9411426),vec4(5.0796127,8.979051,-1.7278991,-1.158976))*buf[6]+mat4(vec4(-11.967154,-11.608155,6.1486754,11.237008),vec4(2.124141,-6.263192,-1.7050359,-0.7021966),vec4(0.,0.,0.,0.),vec4(0.,0.,0.,0.))*buf[7]+vec4(-4.17164,-3.2281182,-4.576417,-3.6401186);
    buf[3]=mat4(vec4(3.1832156,-13.738922,1.879223,3.233465),vec4(0.64300746,12.768129,1.9141049,0.50990224),vec4(-0.049295485,4.4807224,1.4733979,1.801449),vec4(5.0039253,13.000481,3.3991797,-4.5561905))*buf[6]+mat4(vec4(-0.1285731,7.720628,-3.1425676,4.742367),vec4(0.6393625,3.714393,-0.8108378,-0.39174938),vec4(0.,0.,0.,0.),vec4(0.,0.,0.,0.))*buf[7]+vec4(-1.1811101,-21.621881,0.7851888,1.2329718);
    buf[2]=sigmoid(buf[2]);buf[3]=sigmoid(buf[3]);
    buf[4]=mat4(vec4(5.214916,-7.183024,2.7228765,2.6592617),vec4(-5.601878,-25.3591,4.067988,0.4602802),vec4(-10.57759,24.286327,21.102104,37.546658),vec4(4.3024497,-1.9625226,2.3458803,-1.372816))*buf[0]+mat4(vec4(-17.6526,-10.507558,2.2587414,12.462782),vec4(6.265566,-502.75443,-12.642513,0.9112289),vec4(-10.983244,20.741234,-9.701768,-0.7635988),vec4(5.383626,1.4819539,-4.1911616,-4.8444734))*buf[1]+mat4(vec4(12.785233,-16.345072,-0.39901125,1.7955981),vec4(-30.48365,-1.8345358,1.4542528,-1.1118771),vec4(19.872723,-7.337935,-42.941723,-98.52709),vec4(8.337645,-2.7312303,-2.2927687,-36.142323))*buf[2]+mat4(vec4(-16.298317,3.5471997,-0.44300047,-9.444417),vec4(57.5077,-35.609753,16.163465,-4.1534753),vec4(-0.07470326,-3.8656476,-7.0901804,3.1523974),vec4(-12.559385,-7.077619,1.490437,-0.8211543))*buf[3]+vec4(-7.67914,15.927437,1.3207729,-1.6686112);
    buf[5]=mat4(vec4(-1.4109162,-0.372762,-3.770383,-21.367174),vec4(-6.2103205,-9.35908,0.92529047,8.82561),vec4(11.460242,-22.348068,13.625772,-18.693201),vec4(-0.3429052,-3.9905605,-2.4626114,-0.45033523))*buf[0]+mat4(vec4(7.3481627,-4.3661838,-6.3037653,-3.868115),vec4(1.5462853,6.5488915,1.9701879,-0.58291394),vec4(6.5858274,-2.2180402,3.7127688,-1.3730392),vec4(-5.7973905,10.134961,-2.3395722,-5.965605))*buf[1]+mat4(vec4(-2.5132585,-6.6685553,-1.4029363,-0.16285264),vec4(-0.37908727,0.53738135,4.389061,-1.3024765),vec4(-0.70647055,2.0111287,-5.1659346,-3.728635),vec4(-13.562562,10.487719,-0.9173751,-2.6487076))*buf[2]+mat4(vec4(-8.645013,6.5546675,-6.3944063,-5.5933375),vec4(-0.57783127,-1.077275,36.91025,5.736769),vec4(14.283112,3.7146652,7.1452246,-4.5958776),vec4(2.7192075,3.6021907,-4.366337,-2.3653464))*buf[3]+vec4(-5.9000807,-4.329569,1.2427121,8.59503);
    buf[4]=sigmoid(buf[4]);buf[5]=sigmoid(buf[5]);
    buf[6]=mat4(vec4(-1.61102,0.7970257,1.4675229,0.20917463),vec4(-28.793737,-7.1390953,1.5025433,4.656581),vec4(-10.94861,39.66238,0.74318546,-10.095605),vec4(-0.7229728,-1.5483948,0.7301322,2.1687684))*buf[0]+mat4(vec4(3.2547753,21.489103,-1.0194173,-3.3100595),vec4(-3.7316632,-3.3792162,-7.223193,-0.23685838),vec4(13.1804495,0.7916005,5.338587,5.687114),vec4(-4.167605,-17.798311,-6.815736,-1.6451967))*buf[1]+mat4(vec4(0.604885,-7.800309,-7.213122,-2.741014),vec4(-3.522382,-0.12359311,-0.5258442,0.43852118),vec4(9.6752825,-22.853785,2.062431,0.099892326),vec4(-4.3196306,-17.730087,2.5184598,5.30267))*buf[2]+mat4(vec4(-6.545563,-15.790176,-6.0438633,-5.415399),vec4(-43.591583,28.551912,-16.00161,18.84728),vec4(4.212382,8.394307,3.0958717,8.657522),vec4(-5.0237565,-4.450633,-4.4768,-5.5010443))*buf[3]+mat4(vec4(1.6985557,-67.05806,6.897715,1.9004834),vec4(1.8680354,2.3915145,2.5231109,4.081538),vec4(11.158006,1.7294737,2.0738268,7.386411),vec4(-4.256034,-306.24686,8.258898,-17.132736))*buf[4]+mat4(vec4(1.6889864,-4.5852966,3.8534803,-6.3482175),vec4(1.3543309,-1.2640043,9.932754,2.9079645),vec4(-5.2770967,0.07150358,-0.13962056,3.3269649),vec4(28.34703,-4.918278,6.1044083,4.085355))*buf[5]+vec4(6.6818056,12.522166,-3.7075126,-4.104386);
    buf[7]=mat4(vec4(-8.265602,-4.7027016,5.098234,0.7509808),vec4(8.6507845,-17.15949,16.51939,-8.884479),vec4(-4.036479,-2.3946867,-2.6055532,-1.9866527),vec4(-2.2167742,-1.8135649,-5.9759874,4.8846445))*buf[0]+mat4(vec4(6.7790847,3.5076547,-2.8191125,-2.7028968),vec4(-5.743024,-0.27844876,1.4958696,-5.0517144),vec4(13.122226,15.735168,-2.9397483,-4.101023),vec4(-14.375265,-5.030483,-6.2599335,2.9848232))*buf[1]+mat4(vec4(4.0950394,-0.94011575,-5.674733,4.755022),vec4(4.3809423,4.8310084,1.7425908,-3.437416),vec4(2.117492,0.16342592,-104.56341,16.949184),vec4(-5.22543,-2.994248,3.8350096,-1.9364246))*buf[2]+mat4(vec4(-5.900337,1.7946124,-13.604192,-3.8060522),vec4(6.6583457,31.911177,25.164474,91.81147),vec4(11.840538,4.1503043,-0.7314397,6.768467),vec4(-6.3967767,4.034772,6.1714606,-0.32874924))*buf[3]+mat4(vec4(3.4992442,-196.91893,-8.923708,2.8142626),vec4(3.4806502,-3.1846354,5.1725626,5.1804223),vec4(-2.4009497,15.585794,1.2863957,2.0252278),vec4(-71.25271,-62.441242,-8.138444,0.50670296))*buf[4]+mat4(vec4(-12.291733,-11.176166,-7.3474145,4.390294),vec4(10.805477,5.6337385,-0.9385842,-4.7348723),vec4(-12.869276,-7.039391,5.3029537,7.5436664),vec4(1.4593618,8.91898,3.5101583,5.840625))*buf[5]+vec4(2.2415268,-6.705987,-0.98861027,-2.117676);
    buf[6]=sigmoid(buf[6]);buf[7]=sigmoid(buf[7]);
    buf[0]=mat4(vec4(1.6794263,1.3817469,2.9625452,0.),vec4(-1.8834411,-1.4806935,-3.5924516,0.),vec4(-1.3279216,-1.0918057,-2.3124623,0.),vec4(0.2662234,0.23235129,0.44178495,0.))*buf[0]+mat4(vec4(-0.6299101,-0.5945583,-0.9125601,0.),vec4(0.17828953,0.18300213,0.18182953,0.),vec4(-2.96544,-2.5819945,-4.9001055,0.),vec4(1.4195864,1.1868085,2.5176322,0.))*buf[1]+mat4(vec4(-1.2584374,-1.0552157,-2.1688404,0.),vec4(-0.7200217,-0.52666044,-1.438251,0.),vec4(0.15345335,0.15196142,0.272854,0.),vec4(0.945728,0.8861938,1.2766753,0.))*buf[2]+mat4(vec4(-2.4218085,-1.968602,-4.35166,0.),vec4(-22.683098,-18.0544,-41.954372,0.),vec4(0.63792,0.5470648,1.1078634,0.),vec4(-1.5489894,-1.3075932,-2.6444845,0.))*buf[3]+mat4(vec4(-0.49252132,-0.39877754,-0.91366625,0.),vec4(0.95609266,0.7923952,1.640221,0.),vec4(0.30616966,0.15693925,0.8639857,0.),vec4(1.1825981,0.94504964,2.176963,0.))*buf[4]+mat4(vec4(0.35446745,0.3293795,0.59547555,0.),vec4(-0.58784515,-0.48177817,-1.0614829,0.),vec4(2.5271258,1.9991658,4.6846647,0.),vec4(0.13042648,0.08864098,0.30187556,0.))*buf[5]+mat4(vec4(-1.7718065,-1.4033192,-3.3355875,0.),vec4(3.1664357,2.638297,5.378702,0.),vec4(-3.1724713,-2.6107926,-5.549295,0.),vec4(-2.851368,-2.249092,-5.3013067,0.))*buf[6]+mat4(vec4(1.5203838,1.2212278,2.8404984,0.),vec4(1.5210563,1.2651345,2.683903,0.),vec4(2.9789467,2.4364579,5.2347264,0.),vec4(2.2270417,1.8825914,3.8028636,0.))*buf[7]+vec4(-1.5468478,-3.6171484,0.24762098,0.);
    buf[0]=sigmoid(buf[0]);
    return vec4(buf[0].x,buf[0].y,buf[0].z,1.);
}

void mainImage(out vec4 fragColor,in vec2 fragCoord){
    vec2 uv=fragCoord/uResolution.xy*2.-1.;
    uv.y*=-1.;
    uv+=uWarp*vec2(sin(uv.y*6.283+uTime*0.5),cos(uv.x*6.283+uTime*0.5))*0.05;
    fragColor=cppn_fn(uv,0.1*sin(0.3*uTime),0.1*sin(0.69*uTime),0.1*sin(0.44*uTime));
}

void main(){
    vec4 col;mainImage(col,gl_FragCoord.xy);
    col.rgb=hueShiftRGB(col.rgb,uHueShift);
    float scanline_val=sin(gl_FragCoord.y*uScanFreq)*0.5+0.5;
    col.rgb*=1.-(scanline_val*scanline_val)*uScan;
    col.rgb+=(rand(gl_FragCoord.xy+uTime)-0.5)*uNoise;
    gl_FragColor=vec4(clamp(col.rgb,0.0,1.0),1.0);
}
`;function Se({hueShift:e=0,noiseIntensity:t=0,scanlineIntensity:n=0,speed:r=.5,scanlineFrequency:i=0,warpAmount:a=0,resolutionScale:o=1}){let s=(0,P.useRef)(null);return(0,P.useEffect)(()=>{let c=s.current,l=c.parentElement,u=new x({dpr:window.innerWidth<=768?1:Math.min(window.devicePixelRatio,2),canvas:c}),d=u.gl,f=new D(d),p=new _(d,{vertex:be,fragment:xe,uniforms:{uTime:{value:0},uResolution:{value:new C},uHueShift:{value:e},uNoise:{value:t},uScan:{value:n},uScanFreq:{value:i},uWarp:{value:a}}}),m=new T(d,{geometry:f,program:p}),h=()=>{let e=l.clientWidth,t=l.clientHeight;u.setSize(e*o,t*o),p.uniforms.uResolution.value.set(e,t)};window.addEventListener(`resize`,h),h();let g=performance.now(),v=0,y=()=>{p.uniforms.uTime.value=(performance.now()-g)/1e3*r,p.uniforms.uHueShift.value=e,p.uniforms.uNoise.value=t,p.uniforms.uScan.value=n,p.uniforms.uScanFreq.value=i,p.uniforms.uWarp.value=a,u.render({scene:m}),v=requestAnimationFrame(y)};return y(),()=>{cancelAnimationFrame(v),window.removeEventListener(`resize`,h)}},[e,t,n,r,i,a,o]),(0,F.jsx)(`canvas`,{ref:s,className:`darkveil-canvas`})}var Ce=()=>(0,F.jsx)(`div`,{style:{width:`100%`,height:`300%`,position:`absolute`,top:0,left:0,zIndex:0,pointerEvents:`none`},children:(0,F.jsx)(Se,{hueShift:-120,noiseIntensity:.1,scanlineIntensity:.55,speed:.5,scanlineFrequency:43,warpAmount:0,resolutionScale:1.25})}),we=document.getElementById(`footer-bg-root`);we&&(0,N.createRoot)(we).render((0,F.jsx)(Ce,{})),document.addEventListener(`DOMContentLoaded`,()=>{k.registerPlugin(A,M);let e=document.querySelector(`.hamburger`),t=document.querySelector(`.mobile-menu`),n=document.body;e&&e.addEventListener(`click`,n=>{n.stopPropagation(),e.classList.toggle(`active`),t.classList.toggle(`active`)}),document.querySelectorAll(`.mobile-menu a`).forEach(n=>{n.addEventListener(`click`,()=>{e.classList.remove(`active`),t.classList.remove(`active`)})}),n.addEventListener(`click`,n=>{t&&t.classList.contains(`active`)&&!n.target.closest(`.mobile-menu`)&&!n.target.closest(`.hamburger`)&&(e.classList.remove(`active`),t.classList.remove(`active`))});let r=0,i=!1,a=!1,o=document.querySelector(`.header`);window.addEventListener(`scroll`,()=>{if(!o)return;let e=window.pageYOffset||document.documentElement.scrollTop;e>r&&e>o.offsetHeight?(i=!0,a||(o.style.transform=`translateY(-150px)`)):(i=!1,o.style.transform=`translateY(0)`),r=e<=0?0:e},{passive:!0}),window.addEventListener(`mousemove`,e=>{o&&(e.clientY<100?(a=!0,o.style.transform=`translateY(0)`):(a=!1,i&&(o.style.transform=`translateY(-150px)`)))}),k.from(`.about-banner`,{x:`-100%`,opacity:0,duration:1.2,ease:`power3.out`,scrollTrigger:{trigger:`#about`,start:`top 75%`,toggleActions:`play none none reverse`}}),k.from([`.about-title`,`.about-text-container`,`.x-cutout`],{x:`-50`,opacity:0,duration:1,stagger:.3,ease:`power2.out`,delay:.2,scrollTrigger:{trigger:`.about-text-container`,start:`top 90%`,toggleActions:`play none none reverse`}});let s=k.timeline({scrollTrigger:{trigger:`#about`,start:`top top`,end:`+=1200`,pin:!0,scrub:!0,invalidateOnRefresh:!0}}),c=document.querySelector(`.about-right.tagline-box`);c&&s.fromTo(c,{autoAlpha:0,x:250},{autoAlpha:1,x:0,duration:1.5,ease:`power2.out`}),document.querySelectorAll(`.about-tagline`).forEach((e,t)=>{s.fromTo(e,{autoAlpha:0,x:80},{autoAlpha:1,x:0,duration:1,ease:`power2.out`},`-=${t===0?.7:.6}`)}),s.to({},{duration:.5});let l=`http://www.w3.org/2000/svg`,u=document.getElementById(`blinds-group`);if(u){let e=1/12,t=[],n=0;for(let r=0;r<12;r++){let r=n+e/2,i=document.createElementNS(l,`rect`),a=document.createElementNS(l,`rect`);[i,a].forEach(e=>{e.setAttribute(`y`,`0`),e.setAttribute(`height`,`1`),e.setAttribute(`width`,`0`),e.setAttribute(`fill`,`white`),e.setAttribute(`shape-rendering`,`crispEdges`),e.setAttribute(`x`,r)}),u.appendChild(i),u.appendChild(a),t.push({left:i,right:a,x:r,w:e/2}),n+=e}k.timeline({scrollTrigger:{trigger:`#services`,start:`top top`,end:`+=800`,scrub:1,invalidateOnRefresh:!0}}).to({},{duration:.5}).to(t.flatMap(e=>[e.left,e.right]),{duration:.5,attr:{x:e=>{let n=t[Math.floor(e/2)];return e%2==0?n.x-n.w:n.x},width:e=>t[Math.floor(e/2)].w+.005},ease:`none`,stagger:{each:.05,from:`start`}})}function d(){let e=document.querySelector(`.process-scroll-container`);if(!e)return;e.querySelectorAll(`.process-arch-image-wrapper`).forEach(e=>{let t=e.getAttribute(`data-index`);t!==null&&(e.style.zIndex=t)});function t(){let e=k.utils.toArray(`.process-arch-text-block`),t=k.utils.toArray(`.process-arch-image-wrapper`);window.innerWidth<=768?(e.forEach((e,t)=>{e.style.order=t*2}),t.forEach((e,t)=>{e.style.order=t*2+1})):(e.forEach(e=>{e.style.order=``}),t.forEach(e=>{e.style.order=``}))}window.addEventListener(`resize`,t),t();let n=k.utils.toArray(`.process-arch-image-wrapper img`),r=document.querySelector(`.process-arch-text-column`),i=document.querySelector(`.process-arch-image-column`),a=k.utils.toArray(`.blinds-layer.process .section-header, .blinds-layer.process .section-divider`);k.set(a,{opacity:0}),k.set(r,{x:`-100vw`,opacity:0}),k.set(i,{x:`100vw`,opacity:0});let o=k.matchMedia();o.add(`(min-width: 769px)`,()=>{let t=k.timeline({scrollTrigger:{trigger:`#services`,start:`top+=800 top`,endTrigger:`.blinds-stage`,end:`bottom bottom`,scrub:1,invalidateOnRefresh:!0,onEnter:()=>k.set(e,{pointerEvents:`auto`}),onLeaveBack:()=>k.set(e,{pointerEvents:`none`})}}),o=.6,s=.8,c=o+s;if(t.to(a,{opacity:1,duration:s},o),t.to(r,{x:`0vw`,opacity:1,duration:s,ease:`power2.out`},o),t.to(i,{x:`0vw`,opacity:1,duration:s,ease:`power2.out`},o),r){let e=k.utils.toArray(`.process-arch-text-block`),i=-100*(e.length-1)+`vh`;k.set(r,{y:`0vh`}),t.to(r,{y:i,ease:`none`,duration:n.length-1},c),e.forEach((n,r)=>{let i=k.utils.toArray(n.querySelectorAll(`.process-arch-heading, .process-arch-description li`));r===0?(k.set(i,{opacity:1}),k.set(n,{opacity:1})):k.set(i,{opacity:0}),r<e.length-1&&t.to(i,{opacity:0,duration:.2,stagger:.08,ease:`power1.inOut`},r+c),r>0&&t.to(i,{opacity:1,duration:.3,stagger:.08,ease:`power1.inOut`},r-.4+c)})}k.set(n,{clipPath:`inset(0)`,objectPosition:`0px 0%`}),n.forEach((e,r)=>{let i=n[r],a=n[r+1]?n[r+1]:null,o=k.timeline();a&&(o.to(i,{clipPath:`inset(0px 0px 100%)`,objectPosition:`0px 60%`,duration:1,ease:`none`},0).to(a,{objectPosition:`0px 40%`,duration:1,ease:`none`},0),t.add(o,r+c))}),t.to({},{duration:.3})}),o.add(`(max-width: 768px)`,()=>{let t=k.utils.toArray(`.process-arch-text-block`);t.forEach((e,t)=>{let n=e.querySelector(`.process-arch-heading`),r=k.utils.toArray(e.querySelectorAll(`.process-arch-description li`));if(t===0){k.set(n,{x:`0vw`,opacity:1}),r.length>0&&k.set(r[0],{x:`0vw`,opacity:1});for(let e=1;e<r.length;e++)k.set(r[e],{x:`100vw`,opacity:0})}else k.set(n,{x:`100vw`,opacity:0}),r.forEach(e=>k.set(e,{x:`100vw`,opacity:0}))}),k.set(n,{clipPath:`inset(0)`,objectPosition:`0px 0%`});let o=k.timeline({scrollTrigger:{trigger:`#services`,start:`top+=800 top`,endTrigger:`.blinds-stage`,end:`bottom bottom`,scrub:1,invalidateOnRefresh:!0,onEnter:()=>k.set(e,{pointerEvents:`auto`}),onLeaveBack:()=>k.set(e,{pointerEvents:`none`})}}),s=.6,c=.8,l=s+c;o.to(a,{opacity:1,duration:c},s),o.to(r,{x:`0vw`,opacity:1,duration:c,ease:`power2.out`},s),o.to(i,{x:`0vw`,opacity:1,duration:c,ease:`power2.out`},s);let u=l;t.forEach((e,r)=>{let i=e.querySelector(`.process-arch-heading`),a=k.utils.toArray(e.querySelectorAll(`.process-arch-description li`));a.forEach((e,s)=>{let c=s===a.length-1?null:a[s+1],l=r<t.length-1?t[r+1]:null;if(c)o.to(e,{x:`-100vw`,opacity:0,duration:1,ease:`power2.inOut`},u).to(c,{x:`0vw`,opacity:1,duration:1,ease:`power2.inOut`},u),u+=1;else if(l){let t=l.querySelector(`.process-arch-heading`),a=l.querySelector(`.process-arch-description li`);o.to(i,{x:`-100vw`,opacity:0,duration:1,ease:`power2.inOut`},u).to(e,{x:`-100vw`,opacity:0,duration:1,ease:`power2.inOut`},u).to(t,{x:`0vw`,opacity:1,duration:1,ease:`power2.inOut`},u).to(a,{x:`0vw`,opacity:1,duration:1,ease:`power2.inOut`},u);let s=n[r],c=n[r+1];c&&o.to(s,{clipPath:`inset(0px 0px 100%)`,objectPosition:`0px 60%`,duration:1,ease:`power2.inOut`},u).to(c,{objectPosition:`0px 40%`,duration:1,ease:`power2.inOut`},u),u+=1}})}),o.to({},{duration:1*.4})})}d();let f=document.querySelectorAll(`.services-tagline .tagline-text`);if(f.length>1){let e=0;setInterval(()=>{f[e].classList.remove(`active`),e=(e+1)%f.length,f[e].classList.add(`active`)},5e3)}let p=k.timeline({scrollTrigger:{trigger:`#contact`,start:`top 30%`,toggleActions:`play none none reverse`}});p.from([`.contact .section-header`,`.contact .section-divider`],{y:-30,opacity:0,duration:.8,stagger:.1,ease:`power2.out`}),p.from([`.contact .contact-card-container`],{x:-100,opacity:0,duration:.8,ease:`power2.out`},`-=0.4`);let m=document.querySelectorAll(`.contact .contact-text-node p:first-of-type`);if(m.length>0){let e=new M(m,{type:`words`});p.from(e.words,{opacity:0,y:20,duration:.6,stagger:.02,ease:`power2.out`},`-=0.6`)}p.from(`.contact .contact-text-node p:last-of-type`,{opacity:0,y:20,duration:.8,ease:`power2.out`},`-=0.8`);let h=k.utils.toArray([`.contact .form-group`,`.contact .submit-wrapper`]);p.from(h,{x:100,opacity:0,duration:.8,stagger:.1,ease:`power2.out`},`-=0.8`);let g=!1,_=!1,v=window.pageYOffset;document.querySelectorAll(`a[href^="#"]`).forEach(e=>{e.addEventListener(`click`,()=>{_=!0,setTimeout(()=>{_=!1},1e3)})});let y=[{trigger:document.querySelector(`.regular-parallax`),target:document.getElementById(`services`)},{trigger:document.querySelector(`.blinds-stage`),target:document.getElementById(`faq`)},{trigger:document.getElementById(`faq`)?.closest(`.reveal-group`),target:document.getElementById(`contact`)},{trigger:document.getElementById(`contact`)?.closest(`.reveal-group`),target:document.querySelector(`.site-footer`)}];window.addEventListener(`scroll`,()=>{let e=window.pageYOffset,t=e>v;v=e;let n=document.getElementById(`services`),r=document.querySelector(`.services-offer-box`),i=document.querySelector(`.cards-container`);if(n&&(n.getBoundingClientRect().top<=10?(r&&r.classList.add(`active`),i&&i.classList.add(`active`)):(r&&r.classList.remove(`active`),i&&i.classList.remove(`active`))),g||_)return;let a=window.innerHeight;for(let n of y){if(!n.trigger||!n.target)continue;let r=n.trigger.getBoundingClientRect();if(t&&r.bottom<a*.25&&r.bottom>0){g=!0;let t=e+n.target.getBoundingClientRect().top;window.scrollTo({top:t,behavior:`smooth`}),setTimeout(()=>{g=!1},850);break}}},{passive:!0}),A.refresh()});var Te=.9,Ee=1,De=28,Oe=100,ke=.92,Ae=.1,je=20,V=document.querySelector(`.cards-container`);document.getElementById(`cards`);var Me=document.getElementById(`nav-prev`),Ne=document.getElementById(`nav-next`),H=[],U=[],W=0,G=0,K=0,q=0,J=window.innerWidth*.5,Y=0,X=0;function Pe(e,t){return(e%t+t)%t}function Fe(){H.length!==0&&(W=H[0].el.getBoundingClientRect().width||W,G=W+je,K=H.length*G,H.forEach((e,t)=>{e.x=t*G}),U=new Float32Array(H.length))}function Ie(e){let t=Math.max(-1,Math.min(1,e/J)),n=1-Math.abs(t),r=-t*De,i=n*Oe;return{transform:`perspective(1200px) translate3d(${e}px, 0px, ${i}px) rotateY(${r}deg) scale(${ke+n*Ae})`,z:i}}function Z(){if(H.length===0)return;let e=K/2,t=1/0;for(let n=0;n<H.length;n++){let r=H[n].x-q;r<-e&&(r+=K),r>e&&(r-=K),U[n]=r;let i=Math.abs(r);i<t&&(t=i)}for(let e=0;e<H.length;e++){let t=H[e],n=U[e],r=Math.max(-1,Math.min(1,n/J)),{transform:i,z:a}=Ie(n);t.el.style.transform=i,t.el.style.zIndex=String(1e3+Math.round(a));let o=2*Math.abs(r)**1.6;t.el.style.filter=`blur(${o.toFixed(2)}px)`}}function Le(e){let t=X?(e-X)/1e3:0;X=e,q=Pe(q+Y*t,K);let n=Te**(t*60);Y*=n,Math.abs(Y)<.02&&(Y=0),Z(),requestAnimationFrame(Le)}Me?.addEventListener(`click`,()=>{G!==0&&(Y=-G*6.2)}),Ne?.addEventListener(`click`,()=>{G!==0&&(Y=G*6.2)}),V&&(V.addEventListener(`dragstart`,e=>e.preventDefault()),V.addEventListener(`pointerdown`,e=>{e.target.closest(`button`)||(Q=!0,Re=e.clientX,ze=performance.now(),$=0,V.setPointerCapture(e.pointerId),V.classList.add(`dragging`))}),V.addEventListener(`pointermove`,e=>{if(!Q)return;let t=performance.now(),n=e.clientX-Re,r=Math.max(1,t-ze)/1e3;q=Pe(q-n*Ee,K),$=n/r,Re=e.clientX,ze=t}),V.addEventListener(`pointerup`,e=>{Q&&(Q=!1,V.releasePointerCapture(e.pointerId),Y=-$*Ee,V.classList.remove(`dragging`))}));var Q=!1,Re=0,ze=0,$=0;window.addEventListener(`resize`,()=>{Fe(),J=window.innerWidth*.5,Z()});function Be(){let e=Array.from(document.querySelectorAll(`#cards .card`));e.length!==0&&(H=e.map(e=>({el:e,x:0})),Fe(),Z(),requestAnimationFrame(Le))}Be();