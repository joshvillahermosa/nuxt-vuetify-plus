/**
 * @todo [Josh V]
 * Remove this since this is no longer being used
 */
export const state = () => ({
  sidebar: false
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  }
}
