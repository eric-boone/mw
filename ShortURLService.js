var ShortURLService = {
	longUrlprefix: "www.mywedding.com/",
	shortUrlprefix: "mw.cm/",


	urlDict: {},

	add: function(longUrl, shortUrl){
		var shortUrlGenerator = Math.random().toString(36).substr(2, 10);

		this.urlDict[longUrl] = shortUrl || shortUrlGenerator;

		if(longUrl in this.urlDict) {
			console.log("Saved succesfully: " + this.longUrlprefix + this.urlDict[longUrl]);
		} else {
			console.log("The URL was not saved!");
			return false;
		}
	},
	remove: function(shortUrl){
		for(var i in this.urlDict) {
			if(this.urlDict.hasOwnProperty(i) && this.urlDict[i] == shortUrl) {
				delete this.urlDict[i];
				console.log(this.shortUrlprefix + shortUrl + " removed");
				return true;
			}
		}
		return false;
	},
	get: function(shortUrl){
		for(var i in this.urlDict) {
			if(this.urlDict[i] == shortUrl) {
				return this.longUrlprefix + i;
			}
		}
		return false;
	}
};

// testing
ShortURLService.add("test-test/test", "bacon");
ShortURLService.add("eggs");
ShortURLService.add("pancakes", "coffee");
ShortURLService.add("toast", "tea");
ShortURLService.add("steak", "eggs");

console.log(ShortURLService.urlDict);

ShortURLService.remove("tea");

console.log(ShortURLService.urlDict);

ShortURLService.get("coffee");
