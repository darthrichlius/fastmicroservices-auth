var o=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var s=o((f,t)=>{var n=require("winston");t.exports=async(e,r)=>{n.info("Server is shutting down, cleaning up..."),await r(),n.info(`Goodbye with code: ${e}`)}});var c=o((q,i)=>{var h=require("winston");i.exports=e=>{console.error("UncaughtException: check log for further details"),h.error(e.message,e),process.exit(1)}});var u=o((w,a)=>{var d=require("winston");a.exports=e=>{console.error("UnhandledRejectionException: check log for further details"),d.error(e.message,e),process.exit(1)}});var l=s(),p=c(),g=u();module.exports={onExit:l,onUncaughtError:p,onUnhandledRejectionError:g};
