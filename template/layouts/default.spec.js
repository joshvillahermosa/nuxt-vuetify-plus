import { mount } from '@vue/test-utils'
// @note Default is a keyword.
import defaultLayout from '~/layouts/default'
import * as initLogger from '~/services/logger'

describe('Default Layout', () => {
  let vm, infoSpy, loggerSpy

  beforeEach(() => {

    // Order matters: Set Spys here
    infoSpy = jest.fn().mockReturnValue('')
    loggerSpy = jest.spyOn(initLogger, 'initLogger').mockReturnValue({
      info: infoSpy
    })

    /**
     * Mount. We don't want to do a shallowMount because we want to See the Vuetify Components Render it's Children. We stub child components
     */
    vm = mount(defaultLayout, {
      stubs: ['nuxt']
    })
  })

  afterEach(() => jest.resetAllMocks())

  it('should exists', () => {
    expect(defaultLayout).toBeDefined()
  })

  describe('Rendering', () => {
    it('should match HTML snapshot', () => {
      expect(vm.html()).toMatchSnapshot()
    })
  })

  describe('Init cycle', () => {
    it('should log a info saying init', () => {
      expect(loggerSpy).toHaveBeenCalledWith({locationName: 'Default Layout'})
      expect(infoSpy).toHaveBeenCalledWith('Using Default Layout')
    })
  })
})
