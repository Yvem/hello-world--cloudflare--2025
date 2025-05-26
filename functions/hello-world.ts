// https://developers.cloudflare.com/pages/functions/get-started/#create-a-function
export function onRequest(context) {
	console.log('(console.log)', context)
	console.info('(console.info)', context)
	console.warn('(console.warn)', context)
	console.error('(console.error)', context)

	return new Response('Hello, world!')
}
