<template>
  <div class="hello">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <h1>{{title}}</h1>
    <form @submit.prevent="addLink">
      <input type="text" placeholder="task " class="form-control col-md-4" v-model="newLink" style="margin-bottom: 20px;"/>
      <input type="text" placeholder="description" class="form-control col-md-4" v-model="description" style="margin-bottom: 20px;"/>
      <input type="number" placeholder="ParentId" class="form-control col-md-4" v-model="parentId" style="margin-bottom: 20px;"/>
      <input type="text" placeholder="UserId" class="form-control col-md-4" v-model="userId" style="margin-bottom: 20px;"/>
	  <div class="form-group col-md-4">
    	<select class="form-control">
			<option>Todo</option>
			<option>Doing</option>
			<option>Done</option>
    	</select>
  	</div>
	  <button @click="addLink" class="btn btn-success">Add Task</button>
    </form>
	<table v-for="(link,index) in links" :key="index">
		<thead class="table table-dark">
			<tr>Task</tr>
		</thead>
		<tbody>
			<td>{{ link }}</td>
			<button v-on:click="removeLinks(index)" class="rm">Remove</button>
		</tbody>
	</table>
        <!-- <button v-on:click="removeLinks(index)" class="rm">Remove</button> -->
		</div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
	data () {
    return {
      newLink: ''
    }
  },
  computed: {
    ...mapState([
      'title',
      'links'
    ])
  },
  methods: {
    ...mapMutations([
      'ADD_LINK'
    ]),
    ...mapActions([
      'removeLink'
    ]),
    addLink() {
		console.log(this.newLink);
		return;
      this.ADD_LINK(this.newLink)
	  this.newLink = ''
	  
    },
    removeLinks(link) {
      this.removeLink(link)
    }
  }
}
</script>
<style scoped>

</style>