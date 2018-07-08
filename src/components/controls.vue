<template id="controls">
  <ul class="controls">
    <li v-for="(animation, index) in state.animations" @click.prevent="setView(animation)" v-bind:class="{ 'active': animation === state.view }">
      {{ animation }}
    </li>
  </ul>
</template>

<script>

export default {
	name: 'controls',
	props: [
		'state'
	],
	methods: {
		setView(animation) {
		this.state.view = animation
		}
	}
}
</script>

<style scoped></style>