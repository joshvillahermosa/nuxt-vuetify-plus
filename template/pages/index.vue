<template>
  <v-layout column justify-center align-center>
    <h1 data-test="hello-world">Hello World</h1>
    <!-- VUE CLI Strips the handle bar templating, binding HTML for now -->
    <h2 data-test="xhr-message" v-html="serverMessage"></h2>
  </v-layout>
</template>
<script>
import { initLogger } from '~/services/logger'
import { initHttp } from '~/services/http-request'
export default {
  data () {
    return {
      serverMessage: 'Knocking on the Door'
    }
  },
  async created() {

    /**
     * Add these as methods?
     */
    const log = initLogger({locationName: 'Home Page'})
    const httpRequest = initHttp()

    log.info('Hello World!')

    try {
      const { message } = await httpRequest.getSampleRequest()
      this.serverMessage = message
      log.info('HTTP Request Received:', message)
    } catch(error) {
      throw new Error(error)
    }
  }
}
</script>

