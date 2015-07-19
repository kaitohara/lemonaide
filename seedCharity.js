var async = require('async'),
	mongoose = require('mongoose'),
	models = require('./models');


var data = {
	Charity: [{
		name: "American Heart Association",
		websiteUrl: "www.heart.org",
		imgUrl: "http://images.forbes.com/media/lists/companies/american-heart-association_416x416.jpg",
		charityBlurb: "With more than 20 million volunteers and supporters, the American Heart Association is the nation"
	}, {
		name: "St Jude's Children's Research Hospital",
		websiteUrl: "www.stjude.org",
		imgUrl: "http://images.forbes.com/media/lists/companies/st-jude-childrens-research-hospital_416x416.jpg",
		charityBlurb: "Founded in 1962, St. Jude Children's Research Hospital is a pediatric treatment and research facility focused on children's catastrophic diseases."
	}, {
		name: "AmeriCares Foundation",
		websiteUrl: "www.americares.org",
		imgUrl: "http://images.forbes.com/media/lists/companies/americares-foundation_416x416.jpg",
		charityBlurb: "Founded in 1982, AmeriCares is a disaster relief and humanitarian aid organization providing immediate response to emergency medical needs and supporting long-term health care initiatives in the United States abroad."

	}, {
		name: "Nature Conservancy",
		websiteUrl: "www.nature.org",
		imgUrl: "http://images.forbes.com/media/lists/companies/nature-conservancy_416x416.jpg",
		charityBlurb: "Founded in 1951 and now operating in more than 30 countries, the Nature Conservancy works to preserve land and water."
	}, {
		name: "Brother's Brother Foundation",
		websiteUrl: "www.brothersbrother.org",
		imgUrl: "http://images.forbes.com/media/lists/companies/brothers-brother-foundation_416x416.jpg",
		charityBlurb: "Created in 1958, Brother’s Brother Foundation funnels donated goods to needy communities and disaster areas abroad."
	}, {
		name: "Marine Toys for Tots Foundation",
		websiteUrl: "www.toysfortots.org",
		imgUrl: "http://images.forbes.com/media/lists/companies/marine-toys-for-tots-foundation_416x416.jpg",
		charityBlurb: "Run by the United States Marine Corps Reserve, Toys for Tots distributes toys to children whose parents cannot afford to buy them holiday gifts."
	}]
}
var seed = function(dataPiece) {
	models.Charity.create(dataPiece, function(err) {
		if (err) {
			console.error(err);
		}
		console.log('Entry Added');
		// process.kill(0);
	});

};

mongoose.connection.on("open", function() {
	async.each(data.Charity, seed, function(err) {
		if (err) console.log(err);
		else console.log("done");

	})
})