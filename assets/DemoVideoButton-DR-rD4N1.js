import{a as e}from"./rolldown-runtime-COnpUsM8.js";import{Nn as t,Pn as n,an as r,bn as i,ct as a,gn as o,qn as s,rn as c,ut as l}from"./vendor-CNr7hBoY.js";import{a as u}from"./vendor-react-CRxXZ3qC.js";import{r as d}from"./vendor-framer-motion-CBwJXdNn.js";var f=e(u()),p=e(a()),m=d(),h=`
varying vec2 v_texcoord;
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    v_texcoord = uv;
}
`,g=`
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
`,_=({className:e=``,variation:a=0,pixelRatioProp:u=2,shapeSize:d=1.2,roundness:f=.4,borderSize:_=.05,circleSize:v=.3,circleEdge:y=.5})=>{let b=(0,p.useRef)(null);return(0,p.useEffect)(()=>{let e=b.current;if(!e)return;let p=!0,m,x=0,S=0,C=new s,w=new s,T=new s,E=new s;Array.isArray(d)?E.set(d[0],d[1]):E.set(d,d);let D=1,O=1,k=new t,A=new o;A.position.z=1;let j=new l({alpha:!0});if(j.setClearColor(0,0),!e)return;e.appendChild(j.domElement);let M=new i(1,1),N=new n({vertexShader:h,fragmentShader:g,uniforms:{u_mouse:{value:w},u_resolution:{value:T},u_pixelRatio:{value:u},u_shapeSize:{value:E},u_roundness:{value:f},u_borderSize:{value:_},u_circleSize:{value:v},u_circleEdge:{value:y}},defines:{VAR:a},transparent:!0}),P=new r(M,N);k.add(P);let F=null,I=()=>{e&&(F=e.getBoundingClientRect())};I();let L=setInterval(I,500),R=t=>{!e||!F||C.set(t.clientX-F.left,t.clientY-F.top)};document.addEventListener(`mousemove`,R),document.addEventListener(`pointermove`,R);let z=()=>{if(!p)return;I(),D=e.clientWidth,O=e.clientHeight;let t=Math.min(window.devicePixelRatio,2);j.setSize(D,O),j.setPixelRatio(t),A.left=-D/2,A.right=D/2,A.top=O/2,A.bottom=-O/2,A.updateProjectionMatrix(),P.scale.set(D,O,1),T.set(D,O).multiplyScalar(t),N.uniforms.u_pixelRatio.value=t};z(),window.addEventListener(`resize`,z);let B=new ResizeObserver(()=>{p&&z()});B.observe(e);let V=()=>{if(!p)return;x=performance.now()*.001;let e=x-S;if(S=x,window.innerWidth<=768){let e=D/2,t=O/2,n=D/2*.85,r=O/2*.75,i=2.5;C.set(e+Math.cos(x*i)*n,t+Math.sin(x*i)*r)}w.x=c.damp(w.x,C.x,8,e),w.y=c.damp(w.y,C.y,8,e),j.render(k,A),m=requestAnimationFrame(V)};return V(),()=>{p=!1,clearInterval(L),cancelAnimationFrame(m),window.removeEventListener(`resize`,z),B.disconnect(),document.removeEventListener(`mousemove`,R),document.removeEventListener(`pointermove`,R),e.contains(j.domElement)&&e.removeChild(j.domElement),j.dispose(),j.forceContextLoss()}},[a,u,d,f,_,v,y]),(0,m.jsx)(`div`,{className:e,ref:b,style:{width:`100%`,height:`100%`}})},v=(0,p.createContext)();function y({children:e}){let[t,n]=(0,p.useState)(!1),[r,i]=(0,p.useState)(!1);return(0,m.jsx)(v.Provider,{value:{isDemoActive:t,setIsDemoActive:n,isAnimating:r,setIsAnimating:i},children:e})}function b(){let e=(0,p.useContext)(v);if(!e)throw Error(`useDemoVideo must be used within DemoVideoProvider`);return e}function x(){let{isDemoActive:e,setIsDemoActive:t,isAnimating:n,setIsAnimating:r}=b(),i=p.useRef(null),a=p.useRef(null);(0,p.useEffect)(()=>{i.current=document.querySelector(`.hero-section`)},[]);let o=()=>{t(!1),r(!1),i.current&&i.current.classList.remove(`demo-active`);let e=document.querySelector(`.demo-video`);e&&(e.classList.remove(`active`),e.pause(),e.currentTime=0),document.querySelector(`#r3f-hero-canvas`),document.querySelector(`#hero-title-root`),document.querySelector(`.hero-section .video-background`),document.querySelector(`.demo-button`)};return(0,p.useEffect)(()=>{let t=t=>{e&&(t.preventDefault(),o(),window.scrollTo({top:0,behavior:`smooth`}))},n=document.querySelectorAll(`a[href='#home']`);return n.forEach(e=>{e.addEventListener(`click`,t)}),()=>{n.forEach(e=>{e.removeEventListener(`click`,t)})}},[e]),(0,p.useEffect)(()=>{let e=e=>{e.preventDefault(),window.scrollTo({top:0,behavior:`smooth`}),setTimeout(()=>{a.current&&a.current.click()},100)},t=document.querySelectorAll(`a[href='#splineAction']`);return t.forEach(t=>{t.addEventListener(`click`,e)}),()=>{t.forEach(t=>{t.removeEventListener(`click`,e)})}},[]),(0,m.jsxs)(`button`,{ref:a,className:`demo-button-container`,onClick:async()=>{n||e||(r(!0),window.dispatchEvent(new CustomEvent(`startDemoAnimation`)),setTimeout(()=>{t(!0),r(!1),i.current&&i.current.classList.add(`demo-active`);let e=document.querySelector(`.demo-video`);e&&(e.classList.add(`active`),e.play().catch(()=>console.log(`Demo video autoplay blocked`)))},400))},disabled:n||e,"aria-label":`Play Demo`,children:[(0,m.jsx)(`div`,{className:`shape-blur-bg`,children:(0,m.jsx)(_,{variation:0,pixelRatioProp:window.devicePixelRatio||1,shapeSize:[2.5,.8],roundness:.8,borderSize:.08,circleSize:.3,circleEdge:1})}),(0,m.jsx)(`span`,{className:`demo-button-text`,children:`Play Demo`})]})}var S=document.getElementById(`demo-button-root`);S&&(0,f.createRoot)(S).render((0,m.jsx)(y,{children:(0,m.jsx)(x,{})}));export{v as DemoContext,x as DemoVideoButton,y as DemoVideoProvider,b as useDemoVideo};