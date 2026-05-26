<script setup lang="ts">
import { computed } from 'vue'
import { useFastingStore } from '@/stores/fastingStore'
import { useNutritionStore } from '@/stores/nutritionStore'

const fasting = useFastingStore()
const nutrition = useNutritionStore()

const DAYS = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
]

const fastingByDay = computed(() => {
  const map: Record<string, number> = {}
  for (const record of fasting.history) {
    const day = DAYS[new Date(record.startedAt).getDay()] ?? ''
    if (!day) return
    map[day] = Math.round(record.durationMinutes / 60)
  }
  return map
})

const caloriesByDay = computed(() => {
  const map: Record<string, number> = {}
  for (const meal of nutrition.meals) {
    const day = DAYS[new Date(meal.registeredAt).getDay()] ?? ''
    if (!day) return
    if (!map[day]) map[day] = 0
    map[day] += meal.calories
  }
  return map
})

const hasData = computed(() => fasting.history.length > 0 || nutrition.meals.length > 0)
</script>

<template>
  <div class="px-4 py-6">
    <h1 class="text-4xl font-bold">Dashboard Semanal</h1>
    <p class="text-gray-600 mt-2">Resumo consolidado dos últimos 7 dias</p>
  </div>

  <section v-if="!hasData" class="px-4">
    <p class="text-gray-400 text-sm">
      Nenhum dado registrado ainda. Use os módulos de Jejum e Nutrição para começar.
    </p>
  </section>

  <section v-else class="flex flex-row gap-6 px-4">
    <div class="flex-1 px-6 py-6 bg-white rounded-2xl shadow-lg">
      <h2 class="text-xl font-semibold text-gray-800 mb-4">Jejum da Semana</h2>
      <div class="flex flex-col gap-3">
        <p v-if="fasting.history.length === 0" class="text-sm text-gray-400">
          Nenhum jejum registrado.
        </p>
        <div
          v-for="(hours, day) in fastingByDay"
          :key="day"
          class="bg-gray-50 px-4 py-3 rounded-xl flex flex-row items-center justify-between border border-gray-100"
        >
          <p class="text-gray-600">{{ day }}</p>
          <span class="font-bold text-green-700 bg-green-50 px-3 py-1 rounded-full text-sm">
            {{ hours }}h
          </span>
        </div>
      </div>
    </div>

    <div class="flex-1 px-6 py-6 bg-white rounded-2xl shadow-lg">
      <h2 class="text-xl font-semibold text-gray-800 mb-4">Consumo Calórico</h2>
      <div class="flex flex-col gap-3">
        <p v-if="nutrition.meals.length === 0" class="text-sm text-gray-400">
          Nenhuma refeição registrada.
        </p>
        <div
          v-for="(calories, day) in caloriesByDay"
          :key="day"
          class="bg-gray-50 px-4 py-3 rounded-xl flex flex-row items-center justify-between border border-gray-100"
        >
          <p class="text-gray-600">{{ day }}</p>
          <span class="font-bold text-green-700 bg-green-50 px-3 py-1 rounded-full text-sm">
            {{ calories.toLocaleString('pt-BR') }} kcal
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
