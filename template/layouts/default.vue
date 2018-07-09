<template>
  <section>
    <v-layout>
      <nuxt />
    </v-layout>
  </section>
</template>

<script>
import { initLogger } from '~/services/logger'
export default {
  created() {
    const log = initLogger({locationName: 'Default Layout'})
    log.info('Using Default Layout')
  }
}
</script>
