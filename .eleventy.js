/**
 * @file Site configuration
 */
const pluginRss = require("@11ty/eleventy-plugin-rss");
const srcDir = `./src`;

module.exports = function (config) {
	// Plugins
	config.addPlugin(pluginRss);

	// Passthroughs
	config
		.addPassthroughCopy(`${srcDir}/favicon.ico`)
		.addPassthroughCopy(`${srcDir}/humans.txt`)
		.addPassthroughCopy(`${srcDir}/site.webmanifest`)
		.addPassthroughCopy(`${srcDir}/robots.txt`)
		.addPassthroughCopy(`${srcDir}/public`);

	// Filters
	config.addFilter("dateString", (date) => {
		return date.toUTCString().replace(/\s00:00:00\sGMT/g, "");
	});

	// Add excerpt support
	config.setFrontMatterParsingOptions({
		excerpt: true,
		excerpt_separator: "<!-- excerpt -->",
		excerpt_alias: "excerpt",
	});

	// Shortcodes
	config.addNunjucksShortcode("youtube", (id) => {
		return `<div class="video-embed"><iframe width="560" loading="lazy" height="315" src="https://www.youtube-nocookie.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
	});

	config.addNunjucksShortcode("deezer", (id) => {
		return `<iframe class="playlist-embed" title="deezer-widget" src="https://widget.deezer.com/widget/auto/playlist/${id}" width="100%" height="420" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`;
	});

	return {
		htmlTemplateEngine: "njk",
		markdownTemplateEngine: "njk",
		dir: {
			input: "src",
			layouts: "_includes/layouts",
		},
	};
};
