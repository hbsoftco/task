<template>
	<div>
		<button @click="toggleForm">Open/Close Insert Form</button>
    <b-form @submit.prevent="SubmitHandler" v-if="toggleData">
      <b-form-group id="input-group-2" label="Name:" label-for="input-2">
        <b-form-input id="input-2" v-model="formData.name" required placeholder="Enter name"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-5" label="Family:" label-for="family">
        <b-form-input id="input-2" v-model="formData.family" required placeholder="Enter Familyname"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-7" label="Age:" label-for="age">
        <b-form-input id="input-2" v-model="formData.age" required placeholder="Enter Age"></b-form-input>
      </b-form-group>

	        <b-form-group id="input-group-8" label="City:" label-for="City">
        <b-form-input id="input-2" v-model="formData.City" required placeholder="Enter City"></b-form-input>
      </b-form-group>

	  	        <b-form-group id="input-group-9" label="Country:" label-for="Country">
        <b-form-input id="input-2" v-model="formData.Country" required placeholder="Enter Country"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Category:" label-for="input-3">
        <b-form-select id="input-3" v-model="formData.cat" :options="['teachers' , 'students']" required></b-form-select>
      </b-form-group>

	</div>
</template>
<script>
export default {
	name:'form'
}
</script>