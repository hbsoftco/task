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
      <form @submit.prevent="handleForm" dir="rtl">
        <input
          type="text"
          placeholder="کار"
          class="form-control col-md-4"
          v-model="form.task"
          style="margin-bottom: 20px;"
        />
        <input
          type="text"
          placeholder="توضیحات"
          class="form-control col-md-4"
          v-model="form.description"
          style="margin-bottom: 20px;"
        />
        <input
          type="number"
          placeholder="آیدی پدر"
          class="form-control col-md-4"
          v-model="form.parentId"
          style="margin-bottom: 20px;"
        />
        <input
          type="text"
          placeholder="آیدی کاربر"
          class="form-control col-md-4"
          v-model="form.userId"
          style="margin-bottom: 20px;"
        />
        <div class="form-group col-md-4">
          <select class="form-control" v-model="form.status">
            <option>Todo</option>
            <option>Doing</option>
            <option>Done</option>
          </select>
        </div>
        <button class="btn btn-success">{{!updateStaus? 'اضافه کردن تسک': 'بروزرسانی'}}</button>
      </form>
      <hr />
    </div>
    <div>
      <label>برای انجام</label>
      <div style="border: 2px dashed red; width: 905px;height: auto; margin-top:10px;">
        <b-table striped hover :items="todoItems" :fields="fields">
          <template v-slot:cell(actions)="row">
            <button v-on:click="removeTasks(row.item)" class="btn btn-sm btn-danger">حذف</button>
            <button v-on:click="updateTasks(row.item)" class="btn btn-sm btn-info">اپدیت</button>
          </template>
        </b-table>
      </div>
      <label style="margin-top:10px;">در حال انجام</label>
      <div style="border:2px dashed cyan; width: 905px;height: auto; margin-top:10px;">
        <b-table striped hover :items="doingItems" :fields="fields">
          <template v-slot:cell(actions)="row">
            <button v-on:click="removeTasks(row.item)" class="btn btn-sm btn-danger">حذف</button>
            <button v-on:click="updateTasks(row.item)" class="btn btn-sm btn-info">اپدیت</button>
          </template>
        </b-table>
      </div>
      <label for>تمام</label>
      <div style="border:2px dashed green; width: 905px;height: auto; margin-top:10px;">
        <b-table striped hover :items="doneItems" :fields="fields">
          <template v-slot:cell(actions)="row">
            <button v-on:click="removeTasks(row.item)" class="btn btn-sm btn-danger">حذف</button>
            <button v-on:click="updateTasks(row.item)" class="btn btn-sm btn-info">اپدیت</button>
          </template>
        </b-table>
      </div>
      <br />
      <br />
      <br />
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
      fields: [
        {
          label: "کار",
          key: "task",
          sortable: true,
          tdClass: "text-right"
        },
        {
          label: "توضیحات",
          key: "description",
          sortable: true,
          tdClass: "text-right"
        },
        {
          label: "شناسه پدر",
          key: "parentId",
          sortable: true,
          tdClass: "text-center"
        },
        {
          label: "شناسه کاربر",
          key: "userId",
          sortable: true,
          tdClass: "text-center"
        },
        {
          label: "وضعیت",
          key: "status",
          sortable: true,
          tdClass: "text-center"
        },
        {
          label: "عملیات",
          key: "actions",
          sortable: false,
          tdClass: "text-center"
        }
      ],
      form: {
        id: null,
        task: null,
        description: null,
        parentId: null,
        userId: null,
        status: null
      },
      updateStaus: false
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
    ...mapMutations(["ADD_TASK", "UPDATE_TASK"]),
    ...mapActions(["removeTask"]),
    handle() {
      this.todoItems = this.teachers.filter(item => item.status === "Todo");
      this.doingItems = this.teachers.filter(item => item.status === "Doing");
      this.doneItems = this.teachers.filter(item => item.status === "Done");
    },
    handleForm() {
      if (!this.updateStaus) {
        this.addTask();
      } else {
        this.update();
      }
    },
    updateTasks(task) {
      this.updateStaus = true;
      this.form.task = task.task;
      this.form.id = task.id;
      this.form.description = task.description;
      this.form.parentId = task.parentId;
      this.form.status = task.status;
      this.form.userId = task.userId;
    },
    update() {
      this.UPDATE_TASK({
        id: this.form.id,
        task: this.form.task,
        description: this.form.description,
        parentId: this.form.parentId,
        status: this.form.status,
        userId: this.form.userId
      });
      this.updateStaus = false;
      this.handle();
      this.resetForm();
    },
    addTask() {
      console.log("handle");
      this.ADD_TASK({
        id: this.teachers.length + 1,
        task: this.form.task,
        description: this.form.description,
        parentId: this.form.parentId,
        status: this.form.status,
        userId: this.form.userId
      });
      this.handle();
      this.resetForm();
      console.log(this.teachers);
    },
    resetForm() {
      this.form.task = null;
      this.form.description = null;
      this.form.parentId = null;
      this.form.userId = null;
      this.form.status = null;
    },
    removeTasks(task) {
      this.removeTask(task);
      this.handle();
    }
  }
};
</script>