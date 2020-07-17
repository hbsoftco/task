export default {
    appendUser: (state, { cat, user }) => {
        state[cat].push(user);
	},
	ADD_LINK: (state, link) => {
		state.links.push(link)
	},
	ADD_TASK: (state, task) => {
		console.log('task',task);
		state.teachers.push(task)
	},	
	REMOVE_TASK: (state, task) => {
		state.teachers.splice(task, 1)
	}
}