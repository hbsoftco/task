<template>
  <div>
    <b-table striped hover :items="students">
	<template v-slot:cell(name)="data">
    <router-link :to="`/single/students/${data.index}`">{{ data.value }}</router-link>
      </template>
    </b-table>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {}
	},
	computed:{
		...mapState([
			'students'
		])
	},
	methods: {
	  ...mapActions([
		  'removeUser'
	  ]),
	SubmitHandler(){
		this.removeUser();
	}
  }
  }	
</script>