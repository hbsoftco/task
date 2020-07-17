<template>
	<div>
  		<p>{{ count }}</p>
  		<p>
    		<button @click="increment">+</button>
    		<button @click="decrement">-</button>
  		</p>
	</div>
</template>
<script>

export default {
  data() {
    return {}
	},
  }	
</script>