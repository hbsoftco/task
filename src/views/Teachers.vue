<template>
  <div>
    <div class="hello">
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <h1>اضافه کردن کار</h1>
      <form @submit.prevent="addTask" dir="rtl">
        <input
          type="text"
          placeholder="کار"
          class="form-control col-md-4"
          v-model="form.کار"
          style="margin-bottom: 20px;"
        />
        <input
          type="text"
          placeholder="توضیحات"
          class="form-control col-md-4"
          v-model="form.توضیحات"
          style="margin-bottom: 20px;"
        />
        <input
          type="number"
          placeholder="آیدی پدر"
          class="form-control col-md-4"
          v-model="form.آیدی__پدر"
          style="margin-bottom: 20px;"
        />
        <input
          type="text"
          placeholder="آیدی کاربر"
          class="form-control col-md-4"
          v-model="form.آیدی__کاربر"
          style="margin-bottom: 20px;"
        />
        <div class="form-group col-md-4">
          <select class="form-control" v-model="form.وضعیت">
            <option>Todo</option>
            <option>Doing</option>
            <option>Done</option>
          </select>
        </div>
        <button class="btn btn-success">اضافه کردن تسک</button>
      </form><br><br>
      <!-- <table v-for="(item,index) in teachers" :key="index"> -->
        <!-- <thead class="table table-dark"> -->
          <!-- <tr>Task</tr> -->
        <!-- </thead> -->
        <tbody>
          <!-- <td>{{ item }}</td> -->
        </tbody>
			<!-- <button v-on:click="removeTasks(index)" class="rm btn btn-danger" style="position: absolute;margin-left: 365px;margin-top: 132px;">حذف</button> -->
		<div>
		  	<button v-on:click="removeTasks(index)" class="rm btn btn-danger" style="position: absolute;margin-left: 365px;margin-top: 132px;">حذف</button>
  		</div>
    </div>
    <div>
      <label>برای انجام</label>
    <div style="border: 2px dashed red; width: 905px;height: auto; margin-top:10px;">
    	<b-table striped hover :items="todoItems">
	</b-table>
	  	
    </div>
      <label style="margin-top:10px;">در حال انجام</label>
      <div style="border:2px dashed cyan; width: 905px;height: auto; margin-top:10px;">
        <b-table striped hover :items="doingItems"></b-table>
      </div>
      <label for>تمام</label>
      <div style="border:2px dashed green; width: 905px;height: auto; margin-top:10px;">
        <b-table striped hover :items="doneItems"></b-table>
      </div>
	  <br><br><br>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      doingItems: [],
      doneItems: [],
      todoItems: [],
      form: {
        کار: null,
        توضیحات: null,
        آیدی__پدر: null,
        آیدی__کاربر: null,
        وضعیت: null
      }
    };
  },
  computed: {
    ...mapState(["teachers", "title", "links"]),
    ...mapGetters({
      tehranTeachers: "tehranTeachers"
    })
  },
  mounted() {
    console.log(this.teachers);
    this.handle();
  },
  methods: {
    ...mapMutations(["ADD_TASK"]),
    ...mapActions(["removeTask"]),
    handle() {
      this.todoItems = this.teachers.filter(item => item.وضعیت === "Todo");
      this.doingItems = this.teachers.filter(item => item.وضعیت === "Doing");
      this.doneItems = this.teachers.filter(item => item.وضعیت === "Done");
    },
    async addTask() {
      await this.ADD_TASK(this.form);
    //   this.form.name = null;
    //   this.form.description = null;
    //   this.form.parentId = null;
    //   this.form.userId = null;
    //   this.form.status = null;

      this.handle();
    },
    removeTasks(task) {
	  this.removeTask(task);
	  this.handle();
    }
  }
};
</script>