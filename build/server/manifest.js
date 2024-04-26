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
		client: {"start":"_app/immutable/entry/start.69wrOnNr.js","app":"_app/immutable/entry/app.en2gaBkv.js","imports":["_app/immutable/entry/start.69wrOnNr.js","_app/immutable/chunks/scheduler.Ia5wE9Hu.js","_app/immutable/chunks/singletons.EYvsvChX.js","_app/immutable/chunks/index.4HhxYWZ4.js","_app/immutable/chunks/paths.BZn4YwZB.js","_app/immutable/entry/app.en2gaBkv.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/scheduler.Ia5wE9Hu.js","_app/immutable/chunks/index.vg01QSH7.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-Y_YHHpUl.js')),
			__memo(() => import('./chunks/1-06Crwj87.js')),
			__memo(() => import('./chunks/2-9eYTvsWn.js')),
			__memo(() => import('./chunks/3-hc9fQ3N8.js')),
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
