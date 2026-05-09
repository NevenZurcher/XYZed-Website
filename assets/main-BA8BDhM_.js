const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-DWAR5iSE.js","assets/rolldown-runtime-wfL8844V.js"])))=>i.map(i=>d[i]);
import{a as e}from"./rolldown-runtime-wfL8844V.js";import{t}from"./script-t5Ntw1co.js";import{ct as n}from"./vendor-DWAR5iSE.js";import{i as r,r as i}from"./vendor-gsap-BeqOtGRi.js";import{a}from"./vendor-react-ClH1naej.js";import{r as o}from"./vendor-framer-motion-RmTsimWs.js";(function(){let e=document.getElementById(`intro-overlay`),n=document.getElementById(`intro-video`);if(!e||!n)return;document.body.classList.add(`intro-active`);let i=n.play();i!==void 0&&i.catch(()=>o()),n.addEventListener(`ended`,()=>{o()},{once:!0}),n.addEventListener(`error`,()=>{o()},{once:!0});let a=!1;function o(){a||(a=!0,n.style.transition=`opacity 0.3s ease`,n.style.opacity=`0`,setTimeout(()=>{s()},200))}async function s(){let n=await t(()=>import(`./vendor-DWAR5iSE.js`).then(e=>e.dt),__vite__mapDeps([0,1])),i=document.createElement(`canvas`);i.style.cssText=`
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
    `,uniforms:c,transparent:!0,depthTest:!1,depthWrite:!1}),d=new n.Mesh(l,u);o.add(d);let f=document.querySelector(`.hero-section`),p=document.querySelector(`#r3f-hero-canvas`),m=document.querySelector(`#hero-title-root`),h=document.querySelector(`#demo-button-root`);f&&(f.style.perspective=`800px`,f.style.perspectiveOrigin=`50% 50%`);let g=[p,m,h].filter(Boolean);r.set(g,{rotationX:25,rotationY:-15,rotationZ:3,scale:.6,opacity:0,z:-400,transformPerspective:800,transformOrigin:`50% 50%`,filter:`blur(8px) brightness(2)`});let _=performance.now(),v=!1;e.style.display=`none`;function y(t){let n=t-_,d=Math.min(n/1800,1),p=1-(1-d)**4;c.uProgress.value=p,c.uTime.value=n*.001,!v&&d>.06&&(v=!0,r.timeline().to(g,{rotationX:0,rotationY:0,rotationZ:0,scale:1,opacity:1,z:0,filter:`blur(0px) brightness(1)`,duration:1.4,stagger:.08,ease:`elastic.out(1, 0.6)`,onComplete:()=>{g.forEach(e=>{e.style.transform=``,e.style.filter=``,e.style.opacity=``}),f&&(f.style.perspective=``,f.style.perspectiveOrigin=``)}})),a.render(o,s),d<1?requestAnimationFrame(y):(a.dispose(),l.dispose(),u.dispose(),i.remove(),e.remove(),document.body.classList.remove(`intro-active`))}requestAnimationFrame(y),window.addEventListener(`resize`,()=>{a.setSize(window.innerWidth,window.innerHeight),c.uResolution.value.set(window.innerWidth,window.innerHeight)})}})();var s=e(a()),c=e(n());r.registerPlugin(i);function l(){(0,c.useEffect)(()=>{let e=document.querySelector(`.hero-section`),t=document.querySelector(`.hero-section .content-wrapper`),n=document.querySelector(`.tagline-container`),i=document.querySelector(`.tagline`);document.querySelector(`.video-background`);let a=document.querySelector(`.hero-blur-overlay`);if(!e||!t)return;let o=!1,s=()=>{if(!i)return;i.innerHTML=i.innerText.split(` `).map(e=>`<span style="display: inline-block; opacity: 0; transform: translateY(20px);">${e}</span>`).join(` `);let e=i.querySelectorAll(`span`);r.to(e,{opacity:1,y:0,duration:.6,stagger:.1,ease:`power2.out`})},c=()=>{let t=window.scrollY,r=Math.min(t/100,1)*8;if(e.style.filter=`blur(${r}px)`,a&&(a.style.opacity=Math.min(t/100,1)),n){let e=window.innerHeight*.5,r=window.innerHeight*.8;if(t>0&&t<e)n.style.opacity=`1`,n.style.pointerEvents=`auto`,o||(o=!0,s());else if(t>=e&&t<r){let i=(t-e)/(r-e);n.style.opacity=`${Math.max(0,1-i)}`,n.style.pointerEvents=`auto`,o=!1}else n.style.opacity=`0`,n.style.pointerEvents=`none`,o=!1}if(n){let e=t>0?t*.5:0;n.style.transform=`translate(-50%, calc(-50% - ${e}px))`}};return window.addEventListener(`scroll`,c,{passive:!0}),e&&(e.style.transition=`filter 0.5s ease`),t&&(t.style.transition=`opacity 0.1s ease`),n&&(n.style.transition=`opacity 0.3s ease`,n.style.opacity=`0`,n.style.pointerEvents=`none`),()=>{window.removeEventListener(`scroll`,c)}},[])}var u=o();function d(){return l(),(0,u.jsx)(`h1`,{className:`hero-title`,children:`XY ed`})}var f=document.getElementById(`hero-title-root`);f&&(0,s.createRoot)(f).render((0,u.jsx)(d,{}));