const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-BIr2tBNC.js","assets/rolldown-runtime-CNC7AqOf.js","assets/ModelApp-xOY0LXxb.js","assets/vendor-react-BLIic59X.js","assets/vendor-framer-motion-DyX1CStY.js","assets/vendor-three-BMpte4se.js","assets/DemoVideoButton-Df7kivVd.js","assets/ServicesTaglineApp-JEmZbc2T.js","assets/FAQApp-Dsk9DFT9.js","assets/vendor-gsap-DRGebVCl.js","assets/ContactApp-But4jLu3.js","assets/ContactFormApp-Bc3J4wCT.js","assets/ContactFormApp-D6qv5ayN.css","assets/FooterApp-DObDWCqC.js"])))=>i.map(i=>d[i]);
import{a as e}from"./rolldown-runtime-CNC7AqOf.js";import{t}from"./preload-helper-Bx4af_YG.js";import{ct as n}from"./vendor-BIr2tBNC.js";import{i as r,n as i,r as a,t as o}from"./vendor-gsap-DRGebVCl.js";import{a as s}from"./vendor-react-BLIic59X.js";import{r as c}from"./vendor-framer-motion-DyX1CStY.js";(function(){let e=document.getElementById(`intro-overlay`),n=document.getElementById(`intro-video`);if(!e||!n)return;document.body.classList.add(`intro-active`);let i=n.play();i!==void 0&&i.catch(()=>o()),n.addEventListener(`ended`,()=>{o()},{once:!0}),n.addEventListener(`error`,()=>{o()},{once:!0});let a=!1;function o(){a||(a=!0,n.style.transition=`opacity 0.3s ease`,n.style.opacity=`0`,setTimeout(()=>{s()},200))}async function s(){let n=await t(()=>import(`./vendor-BIr2tBNC.js`).then(e=>e.dt),__vite__mapDeps([0,1])),i=document.createElement(`canvas`);i.style.cssText=`
      position: fixed; inset: 0; z-index: 100000;
      width: 100vw; height: 100vh;
      pointer-events: none;
    `,document.body.appendChild(i);let a=new n.WebGLRenderer({canvas:i,alpha:!0,antialias:!1,powerPreference:`high-performance`});a.setSize(window.innerWidth,window.innerHeight),a.setPixelRatio(Math.min(window.devicePixelRatio,2));let o=new n.Scene,s=new n.OrthographicCamera(-1,1,1,-1,0,1),c={uProgress:{value:0},uTime:{value:0},uResolution:{value:new n.Vector2(window.innerWidth,window.innerHeight)}},l=new n.PlaneGeometry(2,2),u=new n.ShaderMaterial({vertexShader:`
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
    `,uniforms:c,transparent:!0,depthTest:!1,depthWrite:!1}),d=new n.Mesh(l,u);o.add(d);let f=document.querySelector(`.hero-section`),p=document.querySelector(`#r3f-hero-canvas`),m=document.querySelector(`#hero-title-root`),h=document.querySelector(`#demo-button-root`);f&&(f.style.perspective=`800px`,f.style.perspectiveOrigin=`50% 50%`);let g=[p,m,h].filter(Boolean);r.set(g,{rotationX:25,rotationY:-15,rotationZ:3,scale:.6,opacity:0,z:-400,transformPerspective:800,transformOrigin:`50% 50%`,filter:`blur(8px) brightness(2)`});let _=performance.now(),v=!1;e.style.display=`none`;function y(t){let n=t-_,d=Math.min(n/1800,1),p=1-(1-d)**4;c.uProgress.value=p,c.uTime.value=n*.001,!v&&d>.06&&(v=!0,r.timeline().to(g,{rotationX:0,rotationY:0,rotationZ:0,scale:1,opacity:1,z:0,filter:`blur(0px) brightness(1)`,duration:1.4,stagger:.08,ease:`elastic.out(1, 0.6)`,onComplete:()=>{g.forEach(e=>{e.style.transform=``,e.style.filter=``,e.style.opacity=``}),f&&(f.style.perspective=``,f.style.perspectiveOrigin=``)}})),a.render(o,s),d<1?requestAnimationFrame(y):(a.dispose(),l.dispose(),u.dispose(),i.remove(),e.remove(),document.body.classList.remove(`intro-active`))}requestAnimationFrame(y),window.addEventListener(`resize`,()=>{a.setSize(window.innerWidth,window.innerHeight),c.uResolution.value.set(window.innerWidth,window.innerHeight)})}})();var l=e(s()),u=e(n());r.registerPlugin(a);function d(){(0,u.useEffect)(()=>{let e=document.querySelector(`.hero-section`),t=document.querySelector(`.hero-section .content-wrapper`),n=document.querySelector(`.tagline-container`),i=document.querySelector(`.tagline`);document.querySelector(`.video-background`);let a=document.querySelector(`.hero-blur-overlay`);if(!e||!t)return;let o=!1,s=()=>{if(!i)return;let e=i.innerText.split(` `);i.innerHTML=e.map(e=>`<span style="display: inline-block; opacity: 0; transform: translateY(20px);">${e}</span>`).join(` `);let t=i.querySelectorAll(`span`);r.to(t,{opacity:1,y:0,duration:.6,stagger:.1,ease:`power2.out`})},c=()=>{let t=window.scrollY,r=Math.min(t/100,1)*8;if(e.style.filter=`blur(${r}px)`,a&&(a.style.opacity=Math.min(t/100,1)),n){let e=window.innerHeight*.5,r=window.innerHeight*.8;if(t>0&&t<e)n.style.opacity=`1`,n.style.pointerEvents=`auto`,o||(o=!0,s());else if(t>=e&&t<r){let i=(t-e)/(r-e);n.style.opacity=`${Math.max(0,1-i)}`,n.style.pointerEvents=`auto`,o=!1}else n.style.opacity=`0`,n.style.pointerEvents=`none`,o=!1}if(n){let e=t>0?t*.5:0;n.style.transform=`translate(-50%, calc(-50% - ${e}px))`}};return window.addEventListener(`scroll`,c,{passive:!0}),e&&(e.style.transition=`filter 0.5s ease`),t&&(t.style.transition=`opacity 0.1s ease`),n&&(n.style.transition=`opacity 0.3s ease`,n.style.opacity=`0`,n.style.pointerEvents=`none`),()=>{window.removeEventListener(`scroll`,c)}},[])}var f=c();function p(){return d(),(0,f.jsx)(`h1`,{className:`hero-title`,children:`XY ed`})}var m=document.getElementById(`hero-title-root`);m&&(0,l.createRoot)(m).render((0,f.jsx)(p,{})),document.addEventListener(`DOMContentLoaded`,()=>{r.registerPlugin(i,o),setTimeout(()=>{t(()=>import(`./ModelApp-xOY0LXxb.js`),__vite__mapDeps([2,1,0,3,4,5])),t(()=>import(`./DemoVideoButton-Df7kivVd.js`),__vite__mapDeps([6,1,0,3,4]))},100);let e=new IntersectionObserver(n=>{n.forEach(n=>{n.isIntersecting&&(n.target.id===`services`&&t(()=>import(`./ServicesTaglineApp-JEmZbc2T.js`),__vite__mapDeps([7,1,0,3,4])),n.target.classList.contains(`faq`)&&t(()=>import(`./FAQApp-Dsk9DFT9.js`),__vite__mapDeps([8,1,0,9,3,4])),n.target.classList.contains(`contact`)&&(t(()=>import(`./ContactApp-But4jLu3.js`),__vite__mapDeps([10,1,0,3,4,5])),t(()=>import(`./ContactFormApp-Bc3J4wCT.js`),__vite__mapDeps([11,1,0,9,3,4,12]))),n.target.classList.contains(`site-footer`)&&t(()=>import(`./FooterApp-DObDWCqC.js`),__vite__mapDeps([13,1,0,3,4,5])),e.unobserve(n.target))})},{rootMargin:`500px`});document.querySelectorAll(`#services, .faq, .contact, .site-footer`).forEach(t=>e.observe(t));let n=document.querySelector(`.hamburger`),a=document.querySelector(`.mobile-menu`),s=document.body;n&&n.addEventListener(`click`,e=>{e.stopPropagation(),n.classList.toggle(`active`),a.classList.toggle(`active`)}),document.querySelectorAll(`.mobile-menu a`).forEach(e=>{e.addEventListener(`click`,()=>{n.classList.remove(`active`),a.classList.remove(`active`)})}),s.addEventListener(`click`,e=>{a&&a.classList.contains(`active`)&&!e.target.closest(`.mobile-menu`)&&!e.target.closest(`.hamburger`)&&(n.classList.remove(`active`),a.classList.remove(`active`))});let c=0,l=!1,u=!1,d=document.querySelector(`.header`);window.addEventListener(`scroll`,()=>{if(!d)return;let e=window.pageYOffset||document.documentElement.scrollTop;e>c&&e>d.offsetHeight?(l=!0,u||(d.style.transform=`translateY(-150px)`)):(l=!1,d.style.transform=`translateY(0)`),c=e<=0?0:e},{passive:!0}),window.addEventListener(`mousemove`,e=>{d&&(e.clientY<100?(u=!0,d.style.transform=`translateY(0)`):(u=!1,l&&(d.style.transform=`translateY(-150px)`)))}),r.fromTo([`.about-title`,`.about-text-container`],{x:-50,opacity:0},{x:0,opacity:1,duration:1,stagger:.3,ease:`power2.out`,delay:.2,scrollTrigger:{trigger:`.about-text-container`,start:`top 90%`,toggleActions:`play none none reverse`}});let f=r.timeline({scrollTrigger:{trigger:`#about`,start:`top top`,end:`+=1200`,pin:!0,scrub:!0,invalidateOnRefresh:!0}}),p=document.querySelector(`.about-right.tagline-box`);p&&f.fromTo(p,{autoAlpha:0,x:250},{autoAlpha:1,x:0,duration:1.5,ease:`power2.out`}),document.querySelectorAll(`.about-tagline`).forEach((e,t)=>{f.fromTo(e,{autoAlpha:0,x:80},{autoAlpha:1,x:0,duration:1,ease:`power2.out`},`-=${t===0?.7:.6}`)}),f.to({},{duration:.5});let m=`http://www.w3.org/2000/svg`,h=document.getElementById(`blinds-group`);if(h){let e=1/12,t=[],n=0;for(let r=0;r<12;r++){let r=n+e/2,i=document.createElementNS(m,`rect`),a=document.createElementNS(m,`rect`);[i,a].forEach(e=>{e.setAttribute(`y`,`0`),e.setAttribute(`height`,`1`),e.setAttribute(`width`,`0`),e.setAttribute(`fill`,`white`),e.setAttribute(`shape-rendering`,`crispEdges`),e.setAttribute(`x`,r)}),h.appendChild(i),h.appendChild(a),t.push({left:i,right:a,x:r,w:e/2}),n+=e}r.timeline({scrollTrigger:{trigger:`#services`,start:`top top`,end:`+=1600`,scrub:1,invalidateOnRefresh:!0}}).to({},{duration:.8}).to(t.flatMap(e=>[e.left,e.right]),{duration:.5,attr:{x:e=>{let n=t[Math.floor(e/2)];return e%2==0?n.x-n.w:n.x},width:e=>t[Math.floor(e/2)].w+.005},ease:`none`,stagger:{each:.05,from:`start`}})}function g(){let e=document.querySelector(`.process-scroll-container`);if(!e)return;e.querySelectorAll(`.process-arch-image-wrapper`).forEach(e=>{let t=e.getAttribute(`data-index`);t!==null&&(e.style.zIndex=t)});function t(){let e=r.utils.toArray(`.process-arch-text-block`),t=r.utils.toArray(`.process-arch-image-wrapper`);window.innerWidth<=768?(e.forEach((e,t)=>{e.style.order=t*2}),t.forEach((e,t)=>{e.style.order=t*2+1})):(e.forEach(e=>{e.style.order=``}),t.forEach(e=>{e.style.order=``}))}window.addEventListener(`resize`,t),t();let n=r.utils.toArray(`.process-arch-image-wrapper img`),i=document.querySelector(`.process-arch-text-column`),a=document.querySelector(`.process-arch-image-column`),o=r.utils.toArray(`.blinds-layer.process .section-header, .blinds-layer.process .section-divider`);r.set(o,{opacity:0}),r.set(i,{x:`-100vw`,opacity:0}),r.set(a,{x:`100vw`,opacity:0});let s=r.matchMedia();s.add(`(min-width: 769px)`,()=>{let t=r.timeline({scrollTrigger:{trigger:`#services`,start:`top+=1600 top`,endTrigger:`.blinds-stage`,end:`bottom bottom`,scrub:1,invalidateOnRefresh:!0,onEnter:()=>r.set(e,{pointerEvents:`auto`}),onLeaveBack:()=>r.set(e,{pointerEvents:`none`})}}),s=.6,c=.8,l=1.4;if(t.to(o,{opacity:1,duration:c},s),t.to(i,{x:`0vw`,opacity:1,duration:c,ease:`power2.out`},s),t.to(a,{x:`0vw`,opacity:1,duration:c,ease:`power2.out`},s),i){let e=r.utils.toArray(`.process-arch-text-block`),a=-100*(e.length-1)+`vh`;r.set(i,{y:`0vh`}),t.to(i,{y:a,ease:`none`,duration:n.length-1},l),e.forEach((n,i)=>{let a=r.utils.toArray(n.querySelectorAll(`.process-arch-heading, .process-arch-description li`));i===0?(r.set(a,{opacity:1}),r.set(n,{opacity:1})):r.set(a,{opacity:0}),i<e.length-1&&t.to(a,{opacity:0,duration:.2,stagger:.08,ease:`power1.inOut`},i+l),i>0&&t.to(a,{opacity:1,duration:.3,stagger:.08,ease:`power1.inOut`},i-.4+l)})}r.set(n,{clipPath:`inset(0)`,objectPosition:`0px 0%`}),n.forEach((e,i)=>{let a=n[i],o=n[i+1]?n[i+1]:null,s=r.timeline();o&&(s.to(a,{clipPath:`inset(0px 0px 100%)`,objectPosition:`0px 60%`,duration:1,ease:`none`},0).to(o,{objectPosition:`0px 40%`,duration:1,ease:`none`},0),t.add(s,i+l))}),t.to({},{duration:.3})}),s.add(`(max-width: 768px)`,()=>{let t=r.utils.toArray(`.process-arch-text-block`),s=document.querySelector(`.process-mobile-nav`),c=document.getElementById(`process-prev`),l=document.getElementById(`process-next`);t.forEach((e,t)=>{let n=e.querySelector(`.process-arch-heading`),i=r.utils.toArray(e.querySelectorAll(`.process-arch-description li`));if(t===0){r.set(n,{x:`0vw`,opacity:1}),i.length>0&&r.set(i[0],{x:`0vw`,opacity:1});for(let e=1;e<i.length;e++)r.set(i[e],{x:`100vw`,opacity:0})}else r.set(n,{x:`100vw`,opacity:0}),i.forEach(e=>r.set(e,{x:`100vw`,opacity:0}))}),r.set(n,{clipPath:`inset(0)`,objectPosition:`0px 0%`});let u=.6,d=.8,f=1.4,p=r.timeline({scrollTrigger:{trigger:`#services`,start:`top+=1600 top`,endTrigger:`.blinds-stage`,end:`bottom bottom`,scrub:1,invalidateOnRefresh:!0,onEnter:()=>{r.set(e,{pointerEvents:`auto`})},onLeave:()=>{s&&s.classList.remove(`is-visible`)},onLeaveBack:()=>{r.set(e,{pointerEvents:`none`}),s&&s.classList.remove(`is-visible`)},onUpdate:e=>{if(!s)return;let t=f/p.duration();e.progress>t&&e.progress<.99?s.classList.add(`is-visible`):s.classList.remove(`is-visible`);let n=e.progress*p.duration(),r=h.findIndex((e,t)=>{let r=h[t+1]||1/0;return n>=e-.1&&n<r-.1});c&&(r<=0?c.classList.add(`disabled`):c.classList.remove(`disabled`)),l&&(r>=h.length-1?l.classList.add(`disabled`):l.classList.remove(`disabled`))}}});p.to(o,{opacity:1,duration:d},u),p.to(i,{x:`0vw`,opacity:1,duration:d,ease:`power2.out`},u),p.to(a,{x:`0vw`,opacity:1,duration:d,ease:`power2.out`},u);let m=f,h=[m];if(t.forEach((e,i)=>{let a=e.querySelector(`.process-arch-heading`),o=r.utils.toArray(e.querySelectorAll(`.process-arch-description li`));o.forEach((e,r)=>{let s=r===o.length-1?null:o[r+1],c=i<t.length-1?t[i+1]:null;if(s)p.to(e,{x:`-100vw`,opacity:0,duration:1,ease:`power2.inOut`},m).to(s,{x:`0vw`,opacity:1,duration:1,ease:`power2.inOut`},m),m+=1,h.push(m);else if(c){let t=c.querySelector(`.process-arch-heading`),r=c.querySelector(`.process-arch-description li`);p.to(a,{x:`-100vw`,opacity:0,duration:1,ease:`power2.inOut`},m).to(e,{x:`-100vw`,opacity:0,duration:1,ease:`power2.inOut`},m).to(t,{x:`0vw`,opacity:1,duration:1,ease:`power2.inOut`},m).to(r,{x:`0vw`,opacity:1,duration:1,ease:`power2.inOut`},m);let o=n[i],s=n[i+1];s&&p.to(o,{clipPath:`inset(0px 0px 100%)`,objectPosition:`0px 60%`,duration:1,ease:`power2.inOut`},m).to(s,{objectPosition:`0px 40%`,duration:1,ease:`power2.inOut`},m),m+=1,h.push(m)}})}),p.to({},{duration:.5}),c&&l){let e=e=>{let t=p.scrollTrigger;if(!t)return;let n=e/p.duration(),r=t.start+(t.end-t.start)*n;window.scrollTo({top:r+2,behavior:`smooth`})};c.addEventListener(`click`,t=>{t.preventDefault();let n=p.scrollTrigger;if(!n)return;let r=n.progress*p.duration(),i=[...h].reverse().find(e=>e<r-.1);i!==void 0&&e(i)}),l.addEventListener(`click`,t=>{t.preventDefault();let n=p.scrollTrigger;if(!n)return;let r=n.progress*p.duration(),i=h.find(e=>e>r+.1);i!==void 0&&e(i)})}})}g();let _=document.querySelectorAll(`.services-tagline .tagline-text`);if(_.length>1){let e=0;setInterval(()=>{_[e].classList.remove(`active`),e=(e+1)%_.length,_[e].classList.add(`active`)},5e3)}let v=r.timeline({scrollTrigger:{trigger:`#contact`,start:`top 30%`,toggleActions:`play none none reverse`}});v.fromTo([`.contact .section-header`,`.contact .section-divider`],{y:-30,opacity:0},{y:0,opacity:1,duration:.8,stagger:.1,ease:`power2.out`}),v.fromTo(`.contact .contact-card-container`,{x:-100,opacity:0},{x:0,opacity:1,duration:.8,ease:`power2.out`},`-=0.4`);let y=document.querySelectorAll(`.contact .contact-text-node p:first-of-type`);if(y.length>0){let e=new o(y,{type:`words`});v.set(y,{opacity:1},`-=0.6`),v.fromTo(e.words,{opacity:0,y:20},{opacity:1,y:0,duration:.6,stagger:.02,ease:`power2.out`},`-=0.6`)}v.fromTo(`.contact .contact-text-node p:last-of-type`,{opacity:0,y:20},{opacity:1,y:0,duration:.8,ease:`power2.out`},`-=0.8`);let b=r.utils.toArray([`.contact .form-group`,`.contact .submit-wrapper`]);v.fromTo(b,{x:100,opacity:0},{x:0,opacity:1,duration:.8,stagger:.1,ease:`power2.out`},`-=0.8`);let x=!1,S=!1,C=window.pageYOffset;document.querySelectorAll(`a[href^="#"], a[href^="/#"]`).forEach(e=>{e.addEventListener(`click`,()=>{S=!0,setTimeout(()=>{S=!1},1e3)})});let w=[{trigger:document.querySelector(`.regular-parallax`),target:document.getElementById(`services`)},{trigger:document.querySelector(`.blinds-stage`),target:document.getElementById(`faq`)},{trigger:document.getElementById(`faq`)?.closest(`.reveal-group`),target:document.getElementById(`contact`)},{trigger:document.getElementById(`contact`)?.closest(`.reveal-group`),target:document.querySelector(`.site-footer`)}];window.addEventListener(`scroll`,()=>{let e=window.pageYOffset,t=e>C;C=e;let n=document.getElementById(`services`),r=document.querySelector(`.services-offer-box`),i=document.querySelector(`.cards-container`);if(n&&(n.getBoundingClientRect().top<=10?(r&&r.classList.add(`active`),i&&i.classList.add(`active`)):(r&&r.classList.remove(`active`),i&&i.classList.remove(`active`))),x||S)return;let a=window.innerHeight;for(let n of w){if(!n.trigger||!n.target)continue;let r=n.trigger.getBoundingClientRect();if(t&&r.bottom<a*.25&&r.bottom>0){x=!0;let t=e+n.target.getBoundingClientRect().top;window.scrollTo({top:t,behavior:`smooth`}),setTimeout(()=>{x=!1},850);break}}},{passive:!0}),i.refresh()});var h=.9,g=1,_=28,v=100,y=.92,b=.1,x=20,S=document.querySelector(`.cards-container`);document.getElementById(`cards`);var C=document.getElementById(`nav-prev`),w=document.getElementById(`nav-next`),T=document.querySelector(`.services-offer-box`),E=!1,D=[],O=[],k=0,A=0,j=0,M=0,N=window.innerWidth*.5,P=0,F=0,I=null,L=null;function R(e,t){return(e%t+t)%t}function z(){D.length!==0&&(k=D[0].el.getBoundingClientRect().width||k,A=k+x,j=D.length*A,D.forEach((e,t)=>{e.x=t*A}),O=new Float32Array(D.length))}function B(e,t=0){let n=Math.max(-1,Math.min(1,e/N)),r=1-Math.abs(n),i=-n*_,a=r*v,o=y+r*b+t*.05;return{transform:`perspective(1200px) translate3d(${e}px, 0px, ${a+t*30}px) rotateY(${i}deg) scale(${o})`,z:a+t*30}}function V(){if(D.length===0)return;let e=j/2,t=1/0;E=!1;for(let n=0;n<D.length;n++){let r=D[n].x-M;r<-e&&(r+=j),r>e&&(r-=j),O[n]=r;let i=Math.abs(r);i>15&&D[n].el.classList.contains(`expanded`)&&D[n].el.classList.remove(`expanded`),D[n].el.classList.contains(`expanded`)&&(E=!0),i<t&&(t=i)}T&&(E&&window.innerWidth>=1024?T.classList.add(`hidden-by-card`):T.classList.remove(`hidden-by-card`));for(let e=0;e<D.length;e++){let t=D[e],n=O[e],r=Math.max(-1,Math.min(1,n/N)),{transform:i,z:a}=B(n,t.hoverScale||0);t.el.style.transform=i,t.el.style.zIndex=String(1e3+Math.round(a));let o=2*Math.abs(r)**1.6;t.el.style.filter=`blur(${o.toFixed(2)}px)`}}var H=!1,U=0,W=3;function G(e){let t=F?(e-F)/1e3:0;F=e,!q&&!H&&!E?(U+=t,U>=W&&(U=0,!K&&A!==0&&(P=A*6.2))):U=0;let n=t||.016;if(I!==null){let e=I-M;e=R(e+j/2,j)-j/2,M=R(M+n*8*e,j),P=0,Math.abs(e)<1&&(M=I,I=null,L&&=(L.el.classList.add(`expanded`),null))}else{M=R(M+P*t,j);let e=h**(t*60);P*=e,Math.abs(P)<.02&&(P=0)}D.forEach(e=>{let t=+!!e.el.isHovered;e.hoverScale===void 0&&(e.hoverScale=0),e.hoverScale+=(t-e.hoverScale)*(n*12)}),V(),requestAnimationFrame(G)}var K=!1;C?.addEventListener(`click`,()=>{A!==0&&(P=-A*6.2)}),w?.addEventListener(`click`,()=>{A!==0&&(P=A*6.2)}),S&&(S.addEventListener(`mouseenter`,()=>{window.matchMedia(`(hover: hover)`).matches&&(H=!0)}),S.addEventListener(`mouseleave`,()=>H=!1),S.addEventListener(`dragstart`,e=>e.preventDefault()),S.addEventListener(`pointerdown`,e=>{e.target.closest(`button`)||(q=!0,I=null,L=null,Z=performance.now(),Q=e.clientX,$=e.target,J=e.clientX,Y=performance.now(),X=0,S.setPointerCapture(e.pointerId),S.classList.add(`dragging`))}),S.addEventListener(`pointermove`,e=>{if(!q)return;let t=performance.now(),n=e.clientX-J,r=Math.max(1,t-Y)/1e3;M=R(M-n*g,j),X=n/r,J=e.clientX,Y=t}),S.addEventListener(`pointerup`,e=>{if(!q)return;q=!1,S.releasePointerCapture(e.pointerId),P=-X*g,S.classList.remove(`dragging`);let t=performance.now()-Z,n=Math.abs(e.clientX-Q);if(t<300&&n<10&&$){let e=$.closest(`.card`);if(e){let t=D.findIndex(t=>t.el===e);t!==-1&&ee(t)}}}));var q=!1,J=0,Y=0,X=0,Z=0,Q=0,$=null;window.addEventListener(`resize`,()=>{z(),N=window.innerWidth*.5,V()});function ee(e){let t=O[e];Math.abs(t)>5?(I=M+t,L=D[e],D.forEach(e=>e.el.classList.remove(`expanded`))):D[e].el.classList.contains(`expanded`)?D[e].el.classList.remove(`expanded`):(D.forEach(e=>e.el.classList.remove(`expanded`)),D[e].el.classList.add(`expanded`))}function te(){let e=Array.from(document.querySelectorAll(`#cards .card`));e.length!==0&&(D=e.map((e,t)=>(e.addEventListener(`mouseenter`,()=>{window.matchMedia(`(hover: hover)`).matches&&(e.isHovered=!0)}),e.addEventListener(`mouseleave`,()=>e.isHovered=!1),{el:e,x:0,hoverScale:0})),z(),V(),requestAnimationFrame(G))}te();function ne(){let e=document.querySelectorAll(`.video-background`),t=document.querySelectorAll(`.bg-video`);t.length!==0&&(e.forEach(e=>{e.style.perspective=`1000px`,e.style.overflow=`hidden`}),t.forEach(e=>{e.style.transformOrigin=`center center`,e.style.transition=`transform 0.1s ease-out`}),document.addEventListener(`mousemove`,e=>{if(window.innerWidth<1024)return;let{clientX:n,clientY:r}=e,{innerWidth:i,innerHeight:a}=window,o=n/i*2-1,s=r/a*2-1,c=o*6,l=s*6;t.forEach(e=>{e.style.transform=`translateX(${c}px) translateY(${l}px)`})},{passive:!0}),document.addEventListener(`mouseleave`,()=>{t.forEach(e=>{e.style.transition=`transform 0.6s ease-out`,e.style.transform=`translateX(0) translateY(0) rotateX(0deg) rotateY(0deg) scale(1)`}),setTimeout(()=>{t.forEach(e=>{e.style.transition=`transform 0.1s ease-out`})},600)}))}ne();