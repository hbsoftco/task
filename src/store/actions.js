export default {
    addUser: ({ commit }, payload) => {
        commit('appendUser', payload);
	},
	removeTask: (context, task) => {
        context.commit('REMOVE_TASK', task);
       
    }
}