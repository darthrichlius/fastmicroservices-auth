var y=Object.create;var r=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var w=Object.getPrototypeOf,_=Object.prototype.hasOwnProperty;var E=(e,d)=>()=>(e&&(d=e(e=0)),d);var I=(e,d)=>()=>(d||e((d={exports:{}}).exports,d),d.exports),D=(e,d)=>{for(var f in d)r(e,f,{get:d[f],enumerable:!0})},i=(e,d,f,u)=>{if(d&&typeof d=="object"||typeof d=="function")for(let a of p(d))!_.call(e,a)&&a!==f&&r(e,a,{get:()=>d[a],enumerable:!(u=g(d,a))||u.enumerable});return e},o=(e,d,f)=>(i(e,d,"default"),f&&i(f,d,"default")),s=(e,d,f)=>(f=e!=null?y(w(e)):{},i(d||!e||!e.__esModule?r(f,"default",{value:e,enumerable:!0}):f,e)),m=e=>i(r({},"__esModule",{value:!0}),e);var x,t=E(()=>{x=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};x.SENTRY_RELEASE={id:"e59dffade4495c8bb285a87ac6e4b0c656450a7e"}});var l=I((v,b)=>{t();b.exports={APP_DEBUG_PREFIX:"auth"}});var n={};D(n,{default:()=>P});module.exports=m(n);t();t();(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d=new e.Error().stack;d&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[d]="4ecf22f1-603f-45a4-9f3c-c379e0d6ea98",e._sentryDebugIdIdentifier="sentry-dbid-4ecf22f1-603f-45a4-9f3c-c379e0d6ea98")}catch{}})();var c=s(l());o(n,s(l()),module.exports);var P=c.default;
