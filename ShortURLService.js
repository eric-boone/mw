// The Task
// 1. Create a JavaScript class called ShortURLService with the following interface:

var ShortURLService = {
// helpers for static URL domain
	longUrlprefix: "www.mywedding.com/",
	shortUrlprefix: "mw.cm/",

// Using an object for the data storage
	urlDict: {},

// a. add(longUrl, shortUrl)
//    i. This function takes in a longUrl , an optional shortUrl , and saves it for later retrieval.
//    ii. If shortUrl is not provided, generate one.
//    iii. If the URL is saved, return the saved shortUrl ; otherwise, return false
	add: function(longUrl, shortUrl){
		var shortUrlGenerator = Math.random().toString(36).substr(2, 10); // started at 2 because it had "0." in the first 2 spots, don't want the dot to mess things up

		this.urlDict[longUrl] = shortUrl || shortUrlGenerator;

		if(longUrl in this.urlDict) {
			console.log("Saved succesfully: " + this.longUrlprefix + this.urlDict[longUrl]);
		} else {
			console.log("The URL was not saved!");
			return false;
		}
	},

// b. remove(shortUrl)
//    i. This function takes in a shortUrl , and removes it if it exists
//    ii. Return true if it was removed and false otherwise
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

// c. get(shortUrl)
//    i. This function takes in the shortUrl and returns the longUrl if it exists
//    ii. Return the longUrl if it exists; otherwise, return false
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
