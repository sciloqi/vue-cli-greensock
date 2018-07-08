<template>
  <div id="app">
    <component :is="state.view" :state="state">
      <h1>{{ state.view }}</h1>
    </component>
    <controls :state="state"></controls>
  </div>
</template>

<script>

import controls from './components/controls.vue';
import zoom from './components/zoom.vue';
import slide from './components/slide.vue';
import slideUp from './components/slideUp.vue';
import flipY from './components/flipY.vue';
import flipX from './components/flipX.vue';
import fade from './components/fade.vue';

export default {
  name: 'app',
  components: {
    controls,
    zoom,
    slide,
    slideUp,
    flipY,
    flipX,
    fade
  },
  data() {
    return {
        state: {
          animations: ['fade', 'slide', 'slideUp', 'zoom', 'flipX', 'flipY'],
          view: 'fade'
        }
    }
  }
}
</script>

<style></style>