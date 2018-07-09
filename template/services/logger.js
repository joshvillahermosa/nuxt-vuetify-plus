/**
 * @function initLogger
 * @description Creates a general logger serivce
 * @param {Object} incomingConfigs Custom Configs to override
 * @param {Object.String} locationName Where the service is being called from
 * @returns {Object} logger service
 */
export const initLogger = (incomingConfigs = undefined) => {
  let config = {
    locationName: 'NOT SET'
  }

  if (incomingConfigs) config = incomingConfigs

  /**
   * @function setConfig
   * @description creates a new logger service with updated configs
   * @param {Object} incomingConfigs Custom configs 
   * @param {Object.String} locationName Where the service is being called from
   * @returns {Object} logger service
   */
  const setConfig = (incomingConfigs) => {
    return Object.assign({}, initLogger(incomingConfigs))
  }

  /**
   * @function info
   * @description Logs out info with location name
   * @param {*} args Args to log out
   */
  const info = (...args) => console.info(`[${config.locationName}] ${args.join(' ')}`)

  /**
   * logger Object
   */
  return {
    setConfig,
    info
  }
}
