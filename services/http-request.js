import axios from 'axios'

/**
 * @function initHttp
 * @description This will create a new HTTP Service
 * @param {Object} incomingConfigs Custom configs to pass to the httpRequest Service
 * @param {Object.String} baseURL Base URL to call out
 * @returns {Object} httpsService
 */
export const initHttp = (incomingConfigs = undefined) => {

  /**
   * Default configs
   */
  let config = {
    baseURL: process.env.API_HOST
  }

  if (incomingConfigs) {
    config = incomingConfigs
  }
  
  /**
   * @function getSampleRequest
   * @description Sample Http Request Service
   * @return {Promise} HTTP Promise
   */
  const getSampleRequest = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios.get('sample-route', config)
        resolve(data)
      } catch (error) {
        // console.log('Response', error.response)
        const { status, data } =  error.response
        reject({status, message: data.message})
      }
    })
  }

  /**
   * httpRequest
   */
  return Object.assign({}, {
    getSampleRequest
  })
}
