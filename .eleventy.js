/**
 * @file Site configuration
 * Most site features are configured in /utils/
 */
 const srcDir = `./src`;
 
 module.exports = function (config) {
   // Passthroughs
   config
	 .addPassthroughCopy(`${srcDir}/favicon.ico`)
	 .addPassthroughCopy(`${srcDir}/humans.txt`)
	 .addPassthroughCopy(`${srcDir}/site.webmanifest`)
	 .addPassthroughCopy(`${srcDir}/robots.txt`)
	 .addPassthroughCopy(`${srcDir}/public`)
 
   // Add excerpt support
   config.setFrontMatterParsingOptions({
	 excerpt: true,
	 excerpt_separator: "<!-- excerpt -->",
	 excerpt_alias: "excerpt",
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
 