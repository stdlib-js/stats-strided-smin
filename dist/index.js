"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var v=s(function(A,f){
var x=require('@stdlib/math-base-assert-is-nanf/dist'),l=require('@stdlib/math-base-assert-is-negative-zerof/dist');function R(e,r,i,o){var n,t,a,u;if(e<=0)return NaN;if(e===1||i===0)return r[o];for(t=o,n=r[t],u=1;u<e;u++){if(t+=i,a=r[t],x(a))return a;(a<n||a===n&&l(a))&&(n=a)}return n}f.exports=R
});var c=s(function(B,m){
var _=require('@stdlib/strided-base-stride2offset/dist'),g=v();function E(e,r,i){return g(e,r,i,_(e,i))}m.exports=E
});var d=s(function(C,y){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=c(),Z=v();O(p,"ndarray",Z);y.exports=p
});var b=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),w=d(),q,j=h(b(__dirname,"./native.js"));k(j)?q=w:q=j;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
