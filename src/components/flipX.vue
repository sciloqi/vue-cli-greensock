<script>

export default {
	name: 'flipX',
	template: require('./page.html'),
	props: [
		'state'
	],
	methods: {
		enter(el, done) {
			const tl = new TimelineMax({
				onComplete: done
			})
			
			tl.set(el, {
				autoAlpha: 0,
				rotationX: 90,
				transformOrigin: '50% 50%'
			})
			
			tl.to(el, 1, {
				autoAlpha: 1,
				rotationX: 0,
				ease: Power4.easeOut
			})
		},
		leave(el, done) {
			TweenMax.to(el, 1, {
				scale: 0,
				ease: Power4.easeOut,
				onComplete: done
			});
		}	
	}
}
</script>

<style scoped></style>