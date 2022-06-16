import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

import Task from './task_help'

export default {
  state: {
    tasks: []
  },
  mutations: {
    loadTasks (state, payload) {
      state.tasks = payload
    },
    newTask (state, payload) {
      state.tasks.push(payload)
    },
    editTask (state, {id, title, description}) {
      const task = state.tasks.find(t => {
        return t.id === id
      })
      task.title = title
      task.description = description
    },
    completedTask (state, {id, completed}) {
      const task = state.tasks.find(t => {
        return t.id === id
      })
      task.completed = completed
    }
  },
  actions: {
    // Load all Tasks
    async loadTasks ({commit}) {
      try {
        // Get task
        const task = await firebase.database().ref('tasks').once('value')
        console.log(task.val())
        // Get value
        const tasks = task.val()
        // New array
        const tasksArray = []
        // Get task key (id)
        Object.keys(tasks).forEach(key => {
          const t = tasks[key]
          tasksArray.push(
            new Task(
              t.grade,
              t.title,
              t.imgURL,
              t.place,
              t.description,
              t.additionalInformation,
              t.price,
              t.fuelSurcharge,
              t.user,
              key
            )
          )
        })
        // Send mutation
        commit('loadTasks', tasksArray)

        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    },
    // Create new Task
    async newTask ({commit}, payload) {
      try {
        // Used helped class
        const newTask = new Task(
          payload.grade,
          payload.title,
          payload.imgURL,
          payload.place,
          payload.description,
          payload.additionalInformation,
          payload.price,
          payload.fuelSurcharge,
          null
        )
        // Push newTask
        const task = await firebase.database().ref('tasks').push(newTask)
          console.log(task)
        // Send mutation
        commit('newTask', {
          ...newTask,
          id: task.key
        })

        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    },
    // Edit Task (popup)
    async editTask ({commit}, {id, user}) {
      commit('clearError')
      commit('setLoading', true)
      try {
        // Update title & descr
        await firebase.database().ref('tasks').child(id).update({
          user,
        })
        // Send mutation

        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    },
    // Change Completed
    async completedTask ({commit}, {id, completed}) {
      commit('clearError')
      commit('setLoading', true)
      try {
        // Update title & descr
        await firebase.database().ref('tasks').child(id).update({completed})
        // Send mutation
        commit('completedTask', {id, completed})

        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    },
    // Delete Task (button)
    async deleteTask (context, id) {
      console.log(id)
      await firebase.database().ref('tasks').child(id).remove()
    }
  },
  getters: {
    // Get All user Tasks
    tasks (state) {
      return state.tasks
    },
    // Get user Completed Tasks
    taskCompleted (state, getters) {
      return getters.tasks.filter(task => {
        return task.completed
      })
    },
    // Get user Active Tasks
    taskNotCompleted (state, getters) {
      return getters.tasks.filter(task => {
        return task.completed === false
      })
    }
  }
}