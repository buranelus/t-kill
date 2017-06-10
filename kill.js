const tw = require("twitter");
require("dotenv").config();

const client = new tw(
	{
		consumer_key: process.env.TWITTER_CONSUMER_KEY,
		consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
		access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
		access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
	}
);

// post(URI, data, cb)
const req = {
	screen_name: process.env.SCREEN_NAME,
	count: 200
}

client.get("statuses/user_timeline", req, (err, tweets, res) => {
	if (err) {
		throw err;
	} else {
		tweets.forEach((el) => {
			client.post('statuses/destroy', {id: el.id_str}, (err, res) => {
				if (err) console.error(err);
			});
		})
		console.log("Delete your latest 200 tweets")
	}
});
