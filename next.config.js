const withTM = require('next-transpile-modules')([
	'@decentology/web3modal',
	'@decentology/unstated-next',
	'@decentology/hyperverse',
	'@decentology/hyperverse-ethereum',
	'@decentology/hyperverse-ethereum-tribes',
]);

module.exports = withTM({
	reactStrictMode: true,
	images: {
		domains: ['siasky.net', 'fileportal.org', 'https://ipfs.io'],
	},
});
