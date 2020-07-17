<template>
  <div class="home-container">
    <h1>اضافه کردن یک کاربر جدید</h1><br><br>
	<center>
		<div style="border:2px solid #aaa;padding:20px;border-radius:20px">
	<button class="btn btn-success">
	<p style="margin-top:10px">تعداد کاربر ها : {{usersCount}}</p>
	</button><br><br>
    <b-form @submit.prevent="SubmitHandler" v-if="toggleData">
      <b-form-group id="input-group-2" label=":نام" label-for="input-2">
        <b-form-input dir="rtl" class="col-md-4" id="input-2" v-model="formData.نام" required placeholder="لطفا نام خود را وارد کنید"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-5" label=":نام خانوادگی" label-for="family">
        <b-form-input dir="rtl" class="col-md-4" id="input-2" v-model="formData.نام_خانوادگی" required placeholder="لطفا نام خانوادگی خود را وارد کنید"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-7" label=":سن" label-for="age">
        <b-form-input dir="rtl" class="col-md-4" id="input-2" v-model="formData.سن" required placeholder="لطفا سن خود را وارد کنید"></b-form-input>
      </b-form-group>

	        <b-form-group id="input-group-8" label=":شهر" label-for="City">
        <b-form-input dir="rtl" class="col-md-4" id="input-2" v-model="formData.شهر" required placeholder="لطفا شهر خود را وارد کنید"></b-form-input>
      </b-form-group>

	  	        <b-form-group id="input-group-9" label=":کشور" label-for="Country">
        <b-form-input dir="rtl" class="col-md-4" id="input-2" v-model="formData.کشور" required placeholder="لطفا کشور خود را وارد کنید"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label=":نوع" label-for="input-3">
        <b-form-select placeholder="ddsadf" class="col-md-4" id="input-3" v-model="formData.cat" :options="['students']" required></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="info">اضافه کردن کاربر</b-button>
    </b-form>
	</div>
	</center>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {
	  toggleData: true,
	  formData:{
		  نام:'',
		  نام_خانوادگی:'',
		  سن:0,
		  شهر:'',
		  cat:null,
		  کشور:'',
	  }
    }
  },
  computed:{
	  ...mapGetters([
		  'usersCount'
	  ])
  },
  methods: {
	  ...mapActions([
		  'addUser'
	  ]),
    toggleForm() {
      this.toggleData = !this.toggleData;
	} ,
	SubmitHandler(){
		const { cat,سن,نام,نام_خانوادگی ,شهر,کشور} = this.formData
		const payload={
			cat,
			user:{
				نام,
				نام_خانوادگی,
				سن,
				شهر,
				کشور,
			}
		}
		this.addUser(payload);
	}
  }
}
</script>
