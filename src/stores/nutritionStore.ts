import { defineStore } from 'pinia'

const STORAGE_KEY = 'nutrition_meals'
const DAILY_GOAL = 2000

export interface Meal {
  id: string
  name: string
  calories: number
  registeredAt: string
}

export const useNutritionStore = defineStore('nutrition', {
  state: () => ({
    meals: [] as Meal[],
    dailyGoal: DAILY_GOAL
  }),

  getters: {
    totalCalories: (state) => state.meals.reduce((sum, m) => sum + m.calories, 0),
    remaining(): number { return Math.max(this.dailyGoal - this.totalCalories, 0) },
    progressPercent(): number { return Math.min(Math.round((this.totalCalories / this.dailyGoal) * 100), 100) }
  },

  actions: {
    addMeal(name: string, calories: number) {
      this.meals.unshift({
        id: crypto.randomUUID(),
        name,
        calories,
        registeredAt: new Date().toISOString()
      })
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.meals))
    },

    removeMeal(id: string) {
      this.meals = this.meals.filter(m => m.id !== id)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.meals))
    },

    loadFromStorage() {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) this.meals = JSON.parse(saved)
    }
  }
})
