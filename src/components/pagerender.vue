




<script>

export default {
	name: 'page',
	
    render(h) {
        return (
            	`<template id="page">
	<transition 
		v-on:enter="enter" 
		v-on:leave="leave"
		v-bind:css="false"
		appear
	>
		<div class="page" v-bind:class="state.view">
			<div class="center">
				<slot></slot>
			</div>
		</div>
	</transition>
</template>`
        );
    },
	props: [
		'state'
	]
}
</script>

<style scoped></style>