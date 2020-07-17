import state from "./state";

export default {
    usersCount: (state) => {
        let users = [...state.teachers, ...state.students]
        return users.length
    },
    tehranTeachers: (state) => {
        const data = state.teachers.filter((teacher) => {
            return teacher.City === 'Tehran'
        })
        return data;
    }
}