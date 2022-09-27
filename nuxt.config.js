import path from "path";
import glob from "glob";
import config from "./content/data/config.json";

/**
 * Create an array of URLs from a list of files
 * @link https://github.com/jake-101/bael-template
 * @param {*} urlFilepathTable
 */
function getDynamicPaths(urlFilepathTable) {
	return [].concat(
		...Object.keys(urlFilepathTable).map((url) => {
			const filepathGlob = urlFilepathTable[url];
			return glob.sync(filepathGlob).map((filepath) => `${url}/${path.basename(filepath, ".md")}`);
		})
	);
}

const DYNAMIC_ROUTES = getDynamicPaths({
	"/": "content/blog-posts/*.md",
});

export default {
	target: "static",
	head: {
		htmlAttrs: {
			lang: "en",
		},
		title: config.title || "",
		meta: [
			{
				charset: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				hid: "description",
				name: "description",
				content: config.description || "",
			},
			{
				name: "twitter:title",
				content: config.title || "",
			},
			{
				name: "twitter:description",
				content: config.description || "",
			},
			{
				name: "twitter:image",
				content: "/android-chrome-512x512.png",
			},
			{
				name: "twitter:card",
				content: "summary_large_image",
			},
		],
		link: [
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/apple-touch-icon.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: "/favicon-32x32.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				href: "/favicon-16x16.png",
			},
			{
				rel: "manifest",
				href: "/site.webmanifest",
			},
		],
	},
	css: ["@/assets/styles/modern-reset", "@/assets/styles/global"],
	build: {
		extend(config, ctx) {
			config.module.rules.push({
				test: /\.md$/,
				loader: "frontmatter-markdown-loader", // Using frontmatter-markdown-loader here to parse md files
				include: path.resolve(__dirname, "content/blog-posts"),
			});
		},
	},
	generate: {
		routes: DYNAMIC_ROUTES,
	},
};
