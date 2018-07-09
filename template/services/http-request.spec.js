import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { initHttp } from './http-request'

let httpRequest, mock, defaultConfigs

describe('Http Request Service', () => {
  beforeEach(() => {
    process.env.API_HOST = 'http://test.com/api'
    defaultConfigs = {
      baseURL: process.env.API_HOST
    }
    mock = new MockAdapter(axios)
    httpRequest = initHttp()
  })

  afterEach(() => {
    mock.restore()
    jest.restoreAllMocks()
    process.env.API_HOST = undefined
  })

  
  describe('Getting a sample request', () => {
    let getSpy
    const message = 'yo'
    
    beforeEach(() => {
      getSpy = jest.spyOn(axios, 'get')
      mock.onGet('/sample-route').reply(200, { message })
      httpRequest = initHttp()
    })
    
    afterEach(() => {
      jest.resetAllMocks()
    })
    
    
    it('should make a get call with passed in custom configs', async () => {
      const config = {
        baseURL: 'http://sample.com/api'
      }
  
      httpRequest = initHttp(config)
      await httpRequest.getSampleRequest()
      expect(getSpy).toHaveBeenCalledWith('sample-route', config)
    })

    it('should return a promise of the data', async () => {
      const data = await httpRequest.getSampleRequest()
      expect(getSpy).toHaveBeenCalledWith('sample-route', defaultConfigs)
      expect(data.message).toEqual(message)
    })

    it('should return a rejected message', async () => {
      mock.onGet('/sample-route').reply(400, { message: 'nope' })
      await expect(httpRequest.getSampleRequest()).rejects.toEqual(
        {
          status: 400,
          message: 'nope'
        }
      )
    })
  })
})
