const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.Nw5iuEit.js","app":"_app/immutable/entry/app.oYt185nh.js","imports":["_app/immutable/entry/start.Nw5iuEit.js","_app/immutable/chunks/scheduler.GmzjPCox.js","_app/immutable/chunks/singletons.DCdJPfl8.js","_app/immutable/entry/app.oYt185nh.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/scheduler.GmzjPCox.js","_app/immutable/chunks/index.kzX728ZG.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-hWloIYSV.js')),
			__memo(() => import('./chunks/1-Rdu2gd3K.js')),
			__memo(() => import('./chunks/2-Gc0-s_uO.js')),
			__memo(() => import('./chunks/3-TqBF3QwO.js')),
			__memo(() => import('./chunks/4-lIclA59u.js')),
			__memo(() => import('./chunks/5-lkq2sCDw.js'))
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
				endpoint: __memo(() => import('./chunks/_server.ts-dq5QpUu-.js'))
			},
			{
				id: "/user",
				pattern: /^\/user\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/user/PDFParser",
				pattern: /^\/user\/PDFParser\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
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
