<template>
	<div>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'app',
	mounted: function(){
		console.log( 'app.vue mounted...' );
	}
}
</script>