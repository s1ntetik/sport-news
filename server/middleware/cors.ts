export default defineEventHandler((event) => {
    const headers = {
        'Access-Control-Allow-Origin': 'Same-Origin',
        'crossOriginResourcePolicy': 'same-origin',
        'crossOriginOpenerPolicy': 'same-origin',
        'crossOriginEmbedderPolicy': 'require-corp',
        'X-XSS-Protection': 1
    }
    setHeaders(event, headers)
})