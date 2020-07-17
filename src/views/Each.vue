<template>
	<div>
		<h1>{{ single.name }} {{ single.family }}</h1>
		<p>Age : {{ single.age }} yearz old</p>
		<p>Born in {{ single.City }}, {{ single.Country }}</p>
	</div>
</template>
<script>
import {mapState} from 'vuex'
export default {
	data(){
		return{
			single:{}
		}
	},
	computed:{
		...mapState([
			'teachers',
			'students'
		])
	},
	mounted(){
		const user =this[this.$route.params.cat][this.$route.params.id];
		this.single =user;
	}
}
</script>