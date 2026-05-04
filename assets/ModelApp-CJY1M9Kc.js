import{a as e}from"./rolldown-runtime-COnpUsM8.js";import{Pn as t,St as n,Xn as r,cn as i,ct as a,qn as o,rn as s}from"./vendor-CNr7hBoY.js";import{a as c}from"./vendor-react-CRxXZ3qC.js";import{r as l}from"./vendor-framer-motion-CBwJXdNn.js";import{c as u,d,f,l as p,o as m,u as h}from"./vendor-three-_ht0DXv1.js";var g=e(c()),_=e(a()),v=l();function y(e){let{scene:a}=u(`/XyZed_LOGOv2.glb`),{nodes:c,materials:l}=f(_.useMemo(()=>p.clone(a),[a])),m=(0,_.useRef)(),h=(0,_.useRef)({x:0,y:0}),g=(0,_.useRef)(.05),[y,b]=(0,_.useState)(!1),[x,S]=(0,_.useState)(!1);_.useEffect(()=>{let e=()=>S(window.innerWidth<=768);return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let C=_.useMemo(()=>({MIDDLE:new r(c.MIDDLE.geometry),CAP_1:new r(c.CAP_1.geometry),"CAP-RS_Material1":new r(c[`CAP-RS_Material1`].geometry),RED:new r(c.RED.geometry),TUBE:new r(c.TUBE.geometry)}),[c]),w=e=>new t({uniforms:{mousePos:{value:new o(.5,.5)},spotlightRadius:{value:g.current},lineColor:{value:new n(e)}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,linewidth:1});new i({metalness:.8,roughness:.2,color:16777215,envMapIntensity:1,transparent:!0,opacity:1});let T=new i({metalness:.2,roughness:.4,color:16777215,envMapIntensity:.8,transparent:!0,opacity:1}),E=new i({metalness:.8,roughness:.2,color:13369344,envMapIntensity:1,transparent:!0,opacity:1}),D=new i({transparent:!0,opacity:.7,metalness:.2,roughness:.1,color:13369344,envMapIntensity:1});_.useEffect(()=>{let e=e=>{h.current={x:e.clientX/window.innerWidth,y:1-e.clientY/window.innerHeight}};return window.addEventListener(`mousemove`,e,{passive:!0}),()=>window.removeEventListener(`mousemove`,e)},[]);let O=_.useMemo(()=>w(16777215),[]),k=_.useMemo(()=>w(13369344),[]);d(e=>{if(x){let t=e.clock.elapsedTime;h.current.x=(Math.sin(t*1.5)+1)/2,h.current.y=.5+Math.cos(t*2)*.2,m.current&&(m.current.rotation.y=s.lerp(m.current.rotation.y,Math.sin(t*1.2)*.3,.05),m.current.rotation.x=s.lerp(m.current.rotation.x,Math.cos(t*.9)*.15,.05))}else m.current&&(m.current.rotation.y=s.lerp(m.current.rotation.y,e.pointer.x*Math.PI/6,.05),m.current.rotation.x=s.lerp(m.current.rotation.x,-(e.pointer.y*Math.PI)/12,.05));[O,k].forEach(e=>{e.uniforms&&(e.uniforms.mousePos.value.set(h.current.x,h.current.y),e.uniforms.spotlightRadius.value=x?.12:g.current)})});let A=()=>b(!0),j=()=>b(!1);return(0,v.jsx)(`group`,{ref:m,...e,dispose:null,children:(0,v.jsxs)(`group`,{scale:.01,children:[(0,v.jsxs)(`group`,{position:[-146.538,200.085,-18.291],rotation:[0,0,.705],children:[(0,v.jsx)(`mesh`,{geometry:c.CAP_1.geometry,material:T}),(0,v.jsx)(`lineSegments`,{geometry:C.CAP_1,material:O}),(0,v.jsx)(`mesh`,{geometry:c[`CAP-RS_Material1`].geometry,material:T}),(0,v.jsx)(`lineSegments`,{geometry:C[`CAP-RS_Material1`],material:O})]}),(0,v.jsx)(`mesh`,{geometry:c.MIDDLE.geometry,material:T,position:[-16.242,31.906,56.376],onPointerOver:A,onPointerOut:j}),(0,v.jsx)(`lineSegments`,{geometry:C.MIDDLE,material:O,position:[-16.242,31.906,56.376]}),(0,v.jsx)(`mesh`,{geometry:c.RED.geometry,material:E,position:[-15.677,31.543,-99.726]}),(0,v.jsx)(`lineSegments`,{geometry:C.RED,material:k,position:[-15.677,31.543,-99.726]}),(0,v.jsx)(`mesh`,{geometry:c.TUBE.geometry,material:D,position:[46.028,-31.782,-18.195],rotation:[0,0,.692]}),(0,v.jsx)(`lineSegments`,{geometry:C.TUBE,material:O,position:[46.028,-31.782,-18.195],rotation:[0,0,.692]})]})})}u.preload(`/XyZed_LOGOv2.glb`);function b(){let[e,t]=(0,_.useState)(window.innerWidth<=768),[n,r]=(0,_.useState)(!1),i=e?[0,-10,150]:[0,-40,200],a=e?35:50;return(0,_.useEffect)(()=>{let n=()=>t(window.innerWidth<=768);window.addEventListener(`resize`,n);let i=setTimeout(()=>r(!0),e?500:100);return()=>{window.removeEventListener(`resize`,n),clearTimeout(i)}},[e]),n?(0,v.jsxs)(h,{camera:{position:[0,0,1e3],fov:45},style:{width:`100%`,height:`100vh`,background:`transparent`},dpr:e?1:[1,2],gl:{powerPreference:`high-performance`,antialias:!0},children:[(0,v.jsx)(m,{preset:`city`}),(0,v.jsx)(_.Suspense,{fallback:null,children:(0,v.jsx)(y,{position:i,scale:a})})]}):null}var x=document.getElementById(`r3f-hero-canvas`);x&&(0,g.createRoot)(x).render((0,v.jsx)(b,{}));