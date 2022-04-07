// 环境区分
const devBaseUrl = 'https://httpbin.org'
const prodBaseUrl = 'https://httpbin.org/prod'

// 导出
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseUrl : prodBaseUrl
export const TIMEOUT = 5000
