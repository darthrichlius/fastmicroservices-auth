const runtimeInfoDebugger=require("debug")("app:info"),runtimeErrorDebugger=require("debug")("app:error"),appDebugger=require("debug");module.exports={runtimeDebugger:runtimeInfoDebugger,runtimeErrorDebugger,appDebugger};