const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","4464.pdf"]),
	mimeTypes: {".png":"image/png",".pdf":"application/pdf"},
	_: {
		client: {"start":"_app/immutable/entry/start.dEFJ2YF7.js","app":"_app/immutable/entry/app.y8y_9It-.js","imports":["_app/immutable/entry/start.dEFJ2YF7.js","_app/immutable/chunks/scheduler.EOolTuyq.js","_app/immutable/chunks/singletons.7mgTwjiK.js","_app/immutable/chunks/index.xNFlRHgx.js","_app/immutable/entry/app.y8y_9It-.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/scheduler.EOolTuyq.js","_app/immutable/chunks/index.siMF19mn.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-pgU82ecQ.js')),
			__memo(() => import('./chunks/1-YUCP8KyV.js')),
			__memo(() => import('./chunks/2-OqXZ4wjC.js')),
			__memo(() => import('./chunks/3-5Pb5h4Bo.js')),
			__memo(() => import('./chunks/4-mcwfdjrT.js')),
			__memo(() => import('./chunks/5-pwDkaMca.js')),
			__memo(() => import('./chunks/6-Dfj-NgRK.js'))
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
				id: "/api/outray/tree",
				pattern: /^\/api\/outray\/tree\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-2WHCnEHB.js'))
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
			},
			{
				id: "/user/PDFParser",
				pattern: /^\/user\/PDFParser\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/user/tree",
				pattern: /^\/user\/tree\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
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
