const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-CNr7hBoY.js","assets/rolldown-runtime-COnpUsM8.js","assets/ModelApp-CJY1M9Kc.js","assets/vendor-three-_ht0DXv1.js","assets/vendor-framer-motion-CBwJXdNn.js","assets/vendor-react-CRxXZ3qC.js","assets/DemoVideoButton-BRsT8k8c.js","assets/ServicesTaglineApp-B7SflHM4.js","assets/FAQApp-9XctEwjb.js","assets/vendor-gsap-BiMpVXKx.js","assets/ContactApp-pavQNUdS.js","assets/FooterApp-BxVyBCU6.js"])))=>i.map(i=>d[i]);
import{a as e}from"./rolldown-runtime-COnpUsM8.js";import{ct as t}from"./vendor-CNr7hBoY.js";import{i as n,n as r,r as i,t as a}from"./vendor-gsap-BiMpVXKx.js";import{a as o}from"./vendor-react-CRxXZ3qC.js";import{r as s}from"./vendor-framer-motion-CBwJXdNn.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var c=`modulepreload`,l=function(e){return`/`+e},u={},d=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=l(t,n),t in u)return;u[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:c,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};(function(){let e=document.getElementById(`intro-overlay`),t=document.getElementById(`intro-video`);if(!e||!t)return;document.body.classList.add(`intro-active`);let r=t.play();r!==void 0&&r.catch(()=>a()),t.addEventListener(`ended`,()=>{a()},{once:!0}),t.addEventListener(`error`,()=>{a()},{once:!0});let i=!1;function a(){i||(i=!0,t.style.transition=`opacity 0.3s ease`,t.style.opacity=`0`,setTimeout(()=>{o()},200))}async function o(){let t=await d(()=>import(`./vendor-CNr7hBoY.js`).then(e=>e.dt),__vite__mapDeps([0,1])),r=document.createElement(`canvas`);r.style.cssText=`
      position: fixed; inset: 0; z-index: 100000;
      width: 100vw; height: 100vh;
      pointer-events: none;
    `,document.body.appendChild(r);let i=new t.WebGLRenderer({canvas:r,alpha:!0,antialias:!1,powerPreference:`high-performance`});i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(Math.min(window.devicePixelRatio,2));let a=new t.Scene,o=new t.OrthographicCamera(-1,1,1,-1,0,1),s={uProgress:{value:0},uTime:{value:0},uResolution:{value:new t.Vector2(window.innerWidth,window.innerHeight)}},c=new t.PlaneGeometry(2,2),l=new t.ShaderMaterial({vertexShader:`
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
    `,uniforms:s,transparent:!0,depthTest:!1,depthWrite:!1}),u=new t.Mesh(c,l);a.add(u);let f=document.querySelector(`.hero-section`),p=document.querySelector(`#r3f-hero-canvas`),m=document.querySelector(`#hero-title-root`),h=document.querySelector(`#demo-button-root`);f&&(f.style.perspective=`800px`,f.style.perspectiveOrigin=`50% 50%`);let g=[p,m,h].filter(Boolean);n.set(g,{rotationX:25,rotationY:-15,rotationZ:3,scale:.6,opacity:0,z:-400,transformPerspective:800,transformOrigin:`50% 50%`,filter:`blur(8px) brightness(2)`});let _=performance.now(),v=!1;e.style.display=`none`;function y(t){let u=t-_,d=Math.min(u/1800,1),p=1-(1-d)**4;s.uProgress.value=p,s.uTime.value=u*.001,!v&&d>.06&&(v=!0,n.timeline().to(g,{rotationX:0,rotationY:0,rotationZ:0,scale:1,opacity:1,z:0,filter:`blur(0px) brightness(1)`,duration:1.4,stagger:.08,ease:`elastic.out(1, 0.6)`,onComplete:()=>{g.forEach(e=>{e.style.transform=``,e.style.filter=``,e.style.opacity=``}),f&&(f.style.perspective=``,f.style.perspectiveOrigin=``)}})),i.render(a,o),d<1?requestAnimationFrame(y):(i.dispose(),c.dispose(),l.dispose(),r.remove(),e.remove(),document.body.classList.remove(`intro-active`))}requestAnimationFrame(y),window.addEventListener(`resize`,()=>{i.setSize(window.innerWidth,window.innerHeight),s.uResolution.value.set(window.innerWidth,window.innerHeight)})}})();var f=e(o()),p=e(t());n.registerPlugin(i);function m(){(0,p.useEffect)(()=>{let e=document.querySelector(`.hero-section`),t=document.querySelector(`.hero-section .content-wrapper`),r=document.querySelector(`.tagline-container`),i=document.querySelector(`.tagline`);document.querySelector(`.video-background`);let a=document.querySelector(`.hero-blur-overlay`);if(!e||!t)return;let o=!1,s=()=>{if(!i)return;i.innerHTML=i.innerText.split(` `).map(e=>`<span style="display: inline-block; opacity: 0; transform: translateY(20px);">${e}</span>`).join(` `);let e=i.querySelectorAll(`span`);n.to(e,{opacity:1,y:0,duration:.6,stagger:.1,ease:`power2.out`})},c=()=>{let t=window.scrollY,n=Math.min(t/100,1)*8;if(e.style.filter=`blur(${n}px)`,a&&(a.style.opacity=Math.min(t/100,1)),r){let e=window.innerHeight*.5,n=window.innerHeight*.8;if(t>0&&t<e)r.style.opacity=`1`,r.style.pointerEvents=`auto`,o||(o=!0,s());else if(t>=e&&t<n){let i=(t-e)/(n-e);r.style.opacity=`${Math.max(0,1-i)}`,r.style.pointerEvents=`auto`,o=!1}else r.style.opacity=`0`,r.style.pointerEvents=`none`,o=!1}if(r){let e=t>0?t*.5:0;r.style.transform=`translate(-50%, calc(-50% - ${e}px))`}};return window.addEventListener(`scroll`,c,{passive:!0}),e&&(e.style.transition=`filter 0.5s ease`),t&&(t.style.transition=`opacity 0.1s ease`),r&&(r.style.transition=`opacity 0.3s ease`,r.style.opacity=`0`,r.style.pointerEvents=`none`),()=>{window.removeEventListener(`scroll`,c)}},[])}function h(){(0,p.useEffect)(()=>{let e=document.querySelector(`.video-background`),t=document.querySelector(`.bg-video`);if(!t)return;e&&(e.style.perspective=`1000px`,e.style.overflow=`hidden`),t.style.transformOrigin=`center center`,t.style.transition=`transform 0.1s ease-out`;let n=e=>{if(window.innerWidth<1024)return;let{clientX:n,clientY:r}=e,{innerWidth:i,innerHeight:a}=window,o=n/i*2-1,s=r/a*2-1,c=o*6,l=s*6;t.style.transform=`
        translateX(${c}px) 
        translateY(${l}px)
      `.trim()},r=()=>{t.style.transition=`transform 0.6s ease-out`,t.style.transform=`translateX(0) translateY(0) rotateX(0deg) rotateY(0deg) scale(1)`,setTimeout(()=>{t.style.transition=`transform 0.1s ease-out`},600)};return document.addEventListener(`mousemove`,n,{passive:!0}),document.addEventListener(`mouseleave`,r),()=>{document.removeEventListener(`mousemove`,n),document.removeEventListener(`mouseleave`,r)}},[])}var g=s();function _(){return m(),h(),(0,g.jsx)(`h1`,{className:`hero-title`,children:`XY ed`})}var v=document.getElementById(`hero-title-root`);v&&(0,f.createRoot)(v).render((0,g.jsx)(_,{})),document.addEventListener(`DOMContentLoaded`,()=>{n.registerPlugin(r,a),setTimeout(()=>{d(()=>import(`./ModelApp-CJY1M9Kc.js`),__vite__mapDeps([2,1,0,3,4,5])),d(()=>import(`./DemoVideoButton-BRsT8k8c.js`),__vite__mapDeps([6,1,0,4,5]))},100);let e=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&(t.target.id===`services`&&d(()=>import(`./ServicesTaglineApp-B7SflHM4.js`),__vite__mapDeps([7,1,0,4,5])),t.target.classList.contains(`faq`)&&d(()=>import(`./FAQApp-9XctEwjb.js`),__vite__mapDeps([8,1,0,4,9,5])),t.target.classList.contains(`contact`)&&d(()=>import(`./ContactApp-pavQNUdS.js`),__vite__mapDeps([10,1,0,3,4,5])),t.target.classList.contains(`site-footer`)&&d(()=>import(`./FooterApp-BxVyBCU6.js`),__vite__mapDeps([11,1,0,3,4,5])),e.unobserve(t.target))})},{rootMargin:`500px`});document.querySelectorAll(`#services, .faq, .contact, .site-footer`).forEach(t=>e.observe(t));let t=document.querySelector(`.hamburger`),i=document.querySelector(`.mobile-menu`),o=document.body;t&&t.addEventListener(`click`,e=>{e.stopPropagation(),t.classList.toggle(`active`),i.classList.toggle(`active`)}),document.querySelectorAll(`.mobile-menu a`).forEach(e=>{e.addEventListener(`click`,()=>{t.classList.remove(`active`),i.classList.remove(`active`)})}),o.addEventListener(`click`,e=>{i&&i.classList.contains(`active`)&&!e.target.closest(`.mobile-menu`)&&!e.target.closest(`.hamburger`)&&(t.classList.remove(`active`),i.classList.remove(`active`))});let s=0,c=!1,l=!1,u=document.querySelector(`.header`);window.addEventListener(`scroll`,()=>{if(!u)return;let e=window.pageYOffset||document.documentElement.scrollTop;e>s&&e>u.offsetHeight?(c=!0,l||(u.style.transform=`translateY(-150px)`)):(c=!1,u.style.transform=`translateY(0)`),s=e<=0?0:e},{passive:!0}),window.addEventListener(`mousemove`,e=>{u&&(e.clientY<100?(l=!0,u.style.transform=`translateY(0)`):(l=!1,c&&(u.style.transform=`translateY(-150px)`)))}),n.from([`.about-title`,`.about-text-container`],{x:`-50`,opacity:0,duration:1,stagger:.3,ease:`power2.out`,delay:.2,scrollTrigger:{trigger:`.about-text-container`,start:`top 90%`,toggleActions:`play none none reverse`}});let f=n.timeline({scrollTrigger:{trigger:`#about`,start:`top top`,end:`+=1200`,pin:!0,scrub:!0,invalidateOnRefresh:!0}}),p=document.querySelector(`.about-right.tagline-box`);p&&f.fromTo(p,{autoAlpha:0,x:250},{autoAlpha:1,x:0,duration:1.5,ease:`power2.out`}),document.querySelectorAll(`.about-tagline`).forEach((e,t)=>{f.fromTo(e,{autoAlpha:0,x:80},{autoAlpha:1,x:0,duration:1,ease:`power2.out`},`-=${t===0?.7:.6}`)}),f.to({},{duration:.5});let m=`http://www.w3.org/2000/svg`,h=document.getElementById(`blinds-group`);if(h){let e=1/12,t=[],r=0;for(let n=0;n<12;n++){let n=r+e/2,i=document.createElementNS(m,`rect`),a=document.createElementNS(m,`rect`);[i,a].forEach(e=>{e.setAttribute(`y`,`0`),e.setAttribute(`height`,`1`),e.setAttribute(`width`,`0`),e.setAttribute(`fill`,`white`),e.setAttribute(`shape-rendering`,`crispEdges`),e.setAttribute(`x`,n)}),h.appendChild(i),h.appendChild(a),t.push({left:i,right:a,x:n,w:e/2}),r+=e}n.timeline({scrollTrigger:{trigger:`#services`,start:`top top`,end:`+=800`,scrub:1,invalidateOnRefresh:!0}}).to({},{duration:.5}).to(t.flatMap(e=>[e.left,e.right]),{duration:.5,attr:{x:e=>{let n=t[Math.floor(e/2)];return e%2==0?n.x-n.w:n.x},width:e=>t[Math.floor(e/2)].w+.005},ease:`none`,stagger:{each:.05,from:`start`}})}function g(){let e=document.querySelector(`.process-scroll-container`);if(!e)return;e.querySelectorAll(`.process-arch-image-wrapper`).forEach(e=>{let t=e.getAttribute(`data-index`);t!==null&&(e.style.zIndex=t)});function t(){let e=n.utils.toArray(`.process-arch-text-block`),t=n.utils.toArray(`.process-arch-image-wrapper`);window.innerWidth<=768?(e.forEach((e,t)=>{e.style.order=t*2}),t.forEach((e,t)=>{e.style.order=t*2+1})):(e.forEach(e=>{e.style.order=``}),t.forEach(e=>{e.style.order=``}))}window.addEventListener(`resize`,t),t();let r=n.utils.toArray(`.process-arch-image-wrapper img`),i=document.querySelector(`.process-arch-text-column`),a=document.querySelector(`.process-arch-image-column`),o=n.utils.toArray(`.blinds-layer.process .section-header, .blinds-layer.process .section-divider`);n.set(o,{opacity:0}),n.set(i,{x:`-100vw`,opacity:0}),n.set(a,{x:`100vw`,opacity:0});let s=n.matchMedia();s.add(`(min-width: 769px)`,()=>{let t=n.timeline({scrollTrigger:{trigger:`#services`,start:`top+=800 top`,endTrigger:`.blinds-stage`,end:`bottom bottom`,scrub:1,invalidateOnRefresh:!0,onEnter:()=>n.set(e,{pointerEvents:`auto`}),onLeaveBack:()=>n.set(e,{pointerEvents:`none`})}}),s=.6,c=.8,l=s+c;if(t.to(o,{opacity:1,duration:c},s),t.to(i,{x:`0vw`,opacity:1,duration:c,ease:`power2.out`},s),t.to(a,{x:`0vw`,opacity:1,duration:c,ease:`power2.out`},s),i){let e=n.utils.toArray(`.process-arch-text-block`),a=-100*(e.length-1)+`vh`;n.set(i,{y:`0vh`}),t.to(i,{y:a,ease:`none`,duration:r.length-1},l),e.forEach((r,i)=>{let a=n.utils.toArray(r.querySelectorAll(`.process-arch-heading, .process-arch-description li`));i===0?(n.set(a,{opacity:1}),n.set(r,{opacity:1})):n.set(a,{opacity:0}),i<e.length-1&&t.to(a,{opacity:0,duration:.2,stagger:.08,ease:`power1.inOut`},i+l),i>0&&t.to(a,{opacity:1,duration:.3,stagger:.08,ease:`power1.inOut`},i-.4+l)})}n.set(r,{clipPath:`inset(0)`,objectPosition:`0px 0%`}),r.forEach((e,i)=>{let a=r[i],o=r[i+1]?r[i+1]:null,s=n.timeline();o&&(s.to(a,{clipPath:`inset(0px 0px 100%)`,objectPosition:`0px 60%`,duration:1,ease:`none`},0).to(o,{objectPosition:`0px 40%`,duration:1,ease:`none`},0),t.add(s,i+l))}),t.to({},{duration:.3})}),s.add(`(max-width: 768px)`,()=>{let t=n.utils.toArray(`.process-arch-text-block`);t.forEach((e,t)=>{let r=e.querySelector(`.process-arch-heading`),i=n.utils.toArray(e.querySelectorAll(`.process-arch-description li`));if(t===0){n.set(r,{x:`0vw`,opacity:1}),i.length>0&&n.set(i[0],{x:`0vw`,opacity:1});for(let e=1;e<i.length;e++)n.set(i[e],{x:`100vw`,opacity:0})}else n.set(r,{x:`100vw`,opacity:0}),i.forEach(e=>n.set(e,{x:`100vw`,opacity:0}))}),n.set(r,{clipPath:`inset(0)`,objectPosition:`0px 0%`});let s=n.timeline({scrollTrigger:{trigger:`#services`,start:`top+=800 top`,endTrigger:`.blinds-stage`,end:`bottom bottom`,scrub:1,invalidateOnRefresh:!0,onEnter:()=>n.set(e,{pointerEvents:`auto`}),onLeaveBack:()=>n.set(e,{pointerEvents:`none`})}}),c=.6,l=.8,u=c+l;s.to(o,{opacity:1,duration:l},c),s.to(i,{x:`0vw`,opacity:1,duration:l,ease:`power2.out`},c),s.to(a,{x:`0vw`,opacity:1,duration:l,ease:`power2.out`},c);let d=u;t.forEach((e,i)=>{let a=e.querySelector(`.process-arch-heading`),o=n.utils.toArray(e.querySelectorAll(`.process-arch-description li`));o.forEach((e,n)=>{let c=n===o.length-1?null:o[n+1],l=i<t.length-1?t[i+1]:null;if(c)s.to(e,{x:`-100vw`,opacity:0,duration:1,ease:`power2.inOut`},d).to(c,{x:`0vw`,opacity:1,duration:1,ease:`power2.inOut`},d),d+=1;else if(l){let t=l.querySelector(`.process-arch-heading`),n=l.querySelector(`.process-arch-description li`);s.to(a,{x:`-100vw`,opacity:0,duration:1,ease:`power2.inOut`},d).to(e,{x:`-100vw`,opacity:0,duration:1,ease:`power2.inOut`},d).to(t,{x:`0vw`,opacity:1,duration:1,ease:`power2.inOut`},d).to(n,{x:`0vw`,opacity:1,duration:1,ease:`power2.inOut`},d);let o=r[i],c=r[i+1];c&&s.to(o,{clipPath:`inset(0px 0px 100%)`,objectPosition:`0px 60%`,duration:1,ease:`power2.inOut`},d).to(c,{objectPosition:`0px 40%`,duration:1,ease:`power2.inOut`},d),d+=1}})}),s.to({},{duration:1*.4})})}g();let _=document.querySelectorAll(`.services-tagline .tagline-text`);if(_.length>1){let e=0;setInterval(()=>{_[e].classList.remove(`active`),e=(e+1)%_.length,_[e].classList.add(`active`)},5e3)}let v=n.timeline({scrollTrigger:{trigger:`#contact`,start:`top 30%`,toggleActions:`play none none reverse`}});v.from([`.contact .section-header`,`.contact .section-divider`],{y:-30,opacity:0,duration:.8,stagger:.1,ease:`power2.out`}),v.from([`.contact .contact-card-container`],{x:-100,opacity:0,duration:.8,ease:`power2.out`},`-=0.4`);let y=document.querySelectorAll(`.contact .contact-text-node p:first-of-type`);if(y.length>0){let e=new a(y,{type:`words`});v.from(e.words,{opacity:0,y:20,duration:.6,stagger:.02,ease:`power2.out`},`-=0.6`)}v.from(`.contact .contact-text-node p:last-of-type`,{opacity:0,y:20,duration:.8,ease:`power2.out`},`-=0.8`);let b=n.utils.toArray([`.contact .form-group`,`.contact .submit-wrapper`]);v.from(b,{x:100,opacity:0,duration:.8,stagger:.1,ease:`power2.out`},`-=0.8`);let x=!1,S=!1,C=window.pageYOffset;document.querySelectorAll(`a[href^="#"]`).forEach(e=>{e.addEventListener(`click`,()=>{S=!0,setTimeout(()=>{S=!1},1e3)})});let w=[{trigger:document.querySelector(`.regular-parallax`),target:document.getElementById(`services`)},{trigger:document.querySelector(`.blinds-stage`),target:document.getElementById(`faq`)},{trigger:document.getElementById(`faq`)?.closest(`.reveal-group`),target:document.getElementById(`contact`)},{trigger:document.getElementById(`contact`)?.closest(`.reveal-group`),target:document.querySelector(`.site-footer`)}];window.addEventListener(`scroll`,()=>{let e=window.pageYOffset,t=e>C;C=e;let n=document.getElementById(`services`),r=document.querySelector(`.services-offer-box`),i=document.querySelector(`.cards-container`);if(n&&(n.getBoundingClientRect().top<=10?(r&&r.classList.add(`active`),i&&i.classList.add(`active`)):(r&&r.classList.remove(`active`),i&&i.classList.remove(`active`))),x||S)return;let a=window.innerHeight;for(let n of w){if(!n.trigger||!n.target)continue;let r=n.trigger.getBoundingClientRect();if(t&&r.bottom<a*.25&&r.bottom>0){x=!0;let t=e+n.target.getBoundingClientRect().top;window.scrollTo({top:t,behavior:`smooth`}),setTimeout(()=>{x=!1},850);break}}},{passive:!0}),r.refresh()});var y=.9,b=1,x=28,S=100,C=.92,w=.1,T=20,E=document.querySelector(`.cards-container`);document.getElementById(`cards`);var D=document.getElementById(`nav-prev`),O=document.getElementById(`nav-next`),k=[],A=[],j=0,M=0,N=0,P=0,F=window.innerWidth*.5,I=0,L=0;function R(e,t){return(e%t+t)%t}function z(){k.length!==0&&(j=k[0].el.getBoundingClientRect().width||j,M=j+T,N=k.length*M,k.forEach((e,t)=>{e.x=t*M}),A=new Float32Array(k.length))}function B(e){let t=Math.max(-1,Math.min(1,e/F)),n=1-Math.abs(t),r=-t*x,i=n*S;return{transform:`perspective(1200px) translate3d(${e}px, 0px, ${i}px) rotateY(${r}deg) scale(${C+n*w})`,z:i}}function V(){if(k.length===0)return;let e=N/2,t=1/0;for(let n=0;n<k.length;n++){let r=k[n].x-P;r<-e&&(r+=N),r>e&&(r-=N),A[n]=r;let i=Math.abs(r);i<t&&(t=i)}for(let e=0;e<k.length;e++){let t=k[e],n=A[e],r=Math.max(-1,Math.min(1,n/F)),{transform:i,z:a}=B(n);t.el.style.transform=i,t.el.style.zIndex=String(1e3+Math.round(a));let o=2*Math.abs(r)**1.6;t.el.style.filter=`blur(${o.toFixed(2)}px)`}}function H(e){let t=L?(e-L)/1e3:0;L=e,P=R(P+I*t,N);let n=y**(t*60);I*=n,Math.abs(I)<.02&&(I=0),V(),requestAnimationFrame(H)}D?.addEventListener(`click`,()=>{M!==0&&(I=-M*6.2)}),O?.addEventListener(`click`,()=>{M!==0&&(I=M*6.2)}),E&&(E.addEventListener(`dragstart`,e=>e.preventDefault()),E.addEventListener(`pointerdown`,e=>{e.target.closest(`button`)||(U=!0,W=e.clientX,G=performance.now(),K=0,E.setPointerCapture(e.pointerId),E.classList.add(`dragging`))}),E.addEventListener(`pointermove`,e=>{if(!U)return;let t=performance.now(),n=e.clientX-W,r=Math.max(1,t-G)/1e3;P=R(P-n*b,N),K=n/r,W=e.clientX,G=t}),E.addEventListener(`pointerup`,e=>{U&&(U=!1,E.releasePointerCapture(e.pointerId),I=-K*b,E.classList.remove(`dragging`))}));var U=!1,W=0,G=0,K=0;window.addEventListener(`resize`,()=>{z(),F=window.innerWidth*.5,V()});function q(){let e=Array.from(document.querySelectorAll(`#cards .card`));e.length!==0&&(k=e.map(e=>({el:e,x:0})),z(),V(),requestAnimationFrame(H))}q();