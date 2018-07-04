import { initLogger } from '~/services/logger'

describe('Logger Services', () => {
  const logConfigs = {
    locationName: 'Sample Component'
  }
  const log = initLogger(logConfigs)

  let spy
  beforeEach(() => {

    /**
     * Mock Return to silent actual log. Keep output clean
     */
    spy = jest.spyOn(console, 'info').mockReturnValue('')
  })

  afterEach(() => jest.clearAllMocks())

  describe('Info call', () => {
    
    it('should be able to call info with proper configs and args passed in', () => {
      log.info('Hello World')
      expect(spy).toHaveBeenCalledWith('[Sample Component] Hello World')
    })
  })

  describe('Setting new Configs', () => {
    it('should return a new logger object', () => {
      const oldConfig = { locationName: 'Old Location'}
      const newConfig = { locationName: 'New Location'}
      const oldLogger = initLogger(oldConfig)
      const newLogger = oldLogger.setConfig(newConfig)
      newLogger.info('Hello World')
      expect(spy).toHaveBeenCalledWith('[New Location] Hello World')
    })
  })

  describe('Not setting configs', () => {
    it('should use the default configs', () => {
      const log = initLogger()
      log.info('Hello World')
      expect(spy).toHaveBeenCalledWith('[NOT SET] Hello World')
    })
  })
})
