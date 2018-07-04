import { mount } from '@vue/test-utils'
import index from '~/pages/index'
import * as initLogger from '~/services/logger'
import { initHttp } from '~/services/http-request'

describe('Home Page Component', () => {
  let wrapper, infoSpy, loggerSpy
  
  beforeEach(async () => {
    // Order matters: Set Spys here
    infoSpy = jest.fn()
    const message = 'yo'
    let getSampleRequest = jest.fn().mockResolvedValue({ message })

    loggerSpy = jest.spyOn(initLogger, 'initLogger').mockReturnValue({
      info: infoSpy
    })
    
    jest.fn(initHttp, 'default').mockReturnValue({
      getSampleRequest
    })

    /**
     * Mount. We don't want to do a shallowMount because we want to See the Vuetify Components Render it's Children
     */
    wrapper = await mount(index)
  })

  afterEach(() => jest.resetAllMocks())

  it('should exists', () => {
    expect(index).toBeDefined()
  })

  describe('Rendering', () => {
    it('should match HTML snapshot', () => {
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  describe('Init cycle', () => {
    it('should log a info saying init', () => {
      expect(loggerSpy).toHaveBeenCalledWith({locationName: 'Home Page'})
      expect(infoSpy).toHaveBeenCalledWith('Hello World!')
    })

    /**
     * @todo [Josh V.]
     * Ideally we want to make sure that `serverMessage` gets updated when we create the component,
     * however I'm running into problems when using a http service (axios wrapper) to actually
     * return a mock value. This test is skipped for now until I figure out something
     */
    xit('should get a sample request and display it on the view', (done) => {
      setTimeout(() => {
        expect(wrapper.find('[data-test="xhr-message"]').text()).toEqual('yo')
        done()
      })
    })
  })
})

jest.resetAllMocks()
