const request = require('request')
//const soundcloud = 'https://api.soundcloud.com/users/71817945/tracks'
const soundcloud = 'https://api.soundcloud.com/users/71817945?client_id=71817945'

request(soundcloud, {json: true}, (err, res) => {
	console.log(res)
})
