(()=>{"use strict";var e,t={715:(e,t,r)=>{var n=r(800),s=r(753);class i extends n.J3{init(e,t,r){return null==i.loader&&(i.loader=new s.Tap),this.parent=e,new Promise(((e,n)=>{const a=i.loader.load(t,(t=>(this.sprite?.scale.set(t.image.width*r,t.image.height*r,1),e(this.sprite))),void 0,(e=>n(e))),o=new s.RoJ({map:a,depthTest:!1});this.sprite=new s.kxk(o),this.parent.add(this.sprite)}))}update(e){const t=super.update(e),r=this.path.getPoint(t);return this.sprite.position.set(r[0],r[1],r[2]),t}dispose(){super.dispose(),this.parent&&this.sprite.parent&&this.sprite.parent.remove(this.sprite),this.parent=null,this.sprite=null}}class a extends n.IR{constructor(e,t,r,n,s){super(t,s),this.textureCounter=0,this.parent=e,this.scale=n,Array.isArray(r)?this.texturePath=r:this.texturePath=[r]}generateParticle(e){const t=new i(e);return t.init(this.parent,this.texturePath[this.textureCounter],this.scale),this.textureCounter=(this.textureCounter+=1)%this.texturePath.length,t}generateAll(){this.textureCounter=0,super.generateAll()}}window.onload=()=>{const{scene:e,camera:t,renderer:r}=((e,t)=>{const r=new s.Z58,n=new s.ubm(45,800/600,1,400);n.position.set(0,0,50),r.add(n);const i={canvas:document.getElementById("webgl-canvas"),antialias:!0},a=new s.JeP(i);a.setClearColor(new s.Q1f(0)),a.setSize(800,600),a.setPixelRatio(window.devicePixelRatio),console.log(`Three.js revision ${s.sPf}`);const o=new s.$p8(16777215,1);return r.add(o),{scene:r,camera:n,renderer:a}})();(e=>{const t=new n.o_([[0,0,0],[0,10,0],[10,10,0],[10,10,10],[0,10,10],[10,0,10]]),r=new a(e,t,["./map01.png","./map02.png","./map03.png","./map04.png"],.005,{generationMode:"loop"});r.animator.setGenerationInterval(.08,32),r.play()})(e),((e,t,r)=>{const n=()=>{r.render(e,t),requestAnimationFrame(n)};n()})(e,t,r)}}},r={};function n(e){var s=r[e];if(void 0!==s)return s.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,r,s,i)=>{if(!r){var a=1/0;for(h=0;h<e.length;h++){for(var[r,s,i]=e[h],o=!0,p=0;p<r.length;p++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](r[p])))?r.splice(p--,1):(o=!1,i<a&&(a=i));if(o){e.splice(h--,1);var l=s();void 0!==l&&(t=l)}}return t}i=i||0;for(var h=e.length;h>0&&e[h-1][2]>i;h--)e[h]=e[h-1];e[h]=[r,s,i]},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={594:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var s,i,[a,o,p]=r,l=0;if(a.some((t=>0!==e[t]))){for(s in o)n.o(o,s)&&(n.m[s]=o[s]);if(p)var h=p(n)}for(t&&t(r);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(h)},r=self.webpackChunk_masatomakino_threejs_particle_waypoint=self.webpackChunk_masatomakino_threejs_particle_waypoint||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var s=n.O(void 0,[121],(()=>n(715)));s=n.O(s)})();