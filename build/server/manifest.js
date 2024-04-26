const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["4464.pdf","favicon.png"]),
	mimeTypes: {".pdf":"application/pdf",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.aB3MN7Aa.js","app":"_app/immutable/entry/app.OHgBpmFR.js","imports":["_app/immutable/entry/start.aB3MN7Aa.js","_app/immutable/chunks/scheduler.Ia5wE9Hu.js","_app/immutable/chunks/singletons.rDc37zWf.js","_app/immutable/chunks/index.4HhxYWZ4.js","_app/immutable/chunks/paths.3dnlrkYN.js","_app/immutable/entry/app.OHgBpmFR.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/scheduler.Ia5wE9Hu.js","_app/immutable/chunks/index.vg01QSH7.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-Y_YHHpUl.js')),
			__memo(() => import('./chunks/1-TZH44FK7.js')),
			__memo(() => import('./chunks/2-1KUU6uk5.js')),
			__memo(() => import('./chunks/3-9bIOBd9w.js')),
			__memo(() => import('./chunks/4-wPXP5plq.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/outray/csvprocess",
				pattern: /^\/api\/outray\/csvprocess\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-Ao7lL8sj.js'))
			},
			{
				id: "/api/outray/receive",
				pattern: /^\/api\/outray\/receive\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-Slt-wx_k.js'))
			},
			{
				id: "/api/outray/upload",
				pattern: /^\/api\/outray\/upload\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-lxtzBM_V.js'))
			},
			{
				id: "/user",
				pattern: /^\/user\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
