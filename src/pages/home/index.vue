<template>
  <div class="px-4 py-6">
    <h1 class="text-4xl font-bold">Dashboard Semanal</h1>
    <p class="text-gray-600 mt-2">Resumo consolidado dos últimos 7 dias</p>
  </div>
  <section class="flex flex-row gap-6 px-4">
    <div class="flex-1 px-6 py-6 bg-white rounded-2xl shadow-lg">
      <h2 class="text-xl font-semibold text-gray-800 mb-4">Jejum da Semana</h2>
      <div class="flex flex-col gap-3">
        <div
          class="bg-gray-50 px-4 py-3 rounded-xl flex flex-row items-center justify-between border border-gray-100"
        >
          <p class="text-gray-600">Segunda-feira</p>
          <span class="font-bold text-green-700 bg-green-50 px-3 py-1 rounded-full text-sm"
            >16 horas</span
          >
        </div>
        <div
          class="bg-gray-50 px-4 py-3 rounded-xl flex flex-row items-center justify-between border border-gray-100"
        >
          <p class="text-gray-600">Terça-feira</p>
          <span class="font-bold text-green-700 bg-green-50 px-3 py-1 rounded-full text-sm"
            >14 horas</span
          >
        </div>
        <div
          class="bg-gray-50 px-4 py-3 rounded-xl flex flex-row items-center justify-between border border-gray-100"
        >
          <p class="text-gray-600">Quarta-feira</p>
          <span class="font-bold text-green-700 bg-green-50 px-3 py-1 rounded-full text-sm"
            >18 horas</span
          >
        </div>
      </div>
    </div>

    <div class="flex-1 px-6 py-6 bg-white rounded-2xl shadow-lg">
      <h2 class="text-xl font-semibold text-gray-800 mb-4">Consumo Calórico</h2>
      <div class="flex flex-col gap-3">
        <div
          class="bg-gray-50 px-4 py-3 rounded-xl flex flex-row items-center justify-between border border-gray-100"
        >
          <p class="text-gray-600">Segunda-feira</p>
          <span class="font-bold text-green-700 bg-green-50 px-3 py-1 rounded-full text-sm"
            >1.200 calorias</span
          >
        </div>
        <div
          class="bg-gray-50 px-4 py-3 rounded-xl flex flex-row items-center justify-between border border-gray-100"
        >
          <p class="text-gray-600">Terça-feira</p>
          <span class="font-bold text-green-700 bg-green-50 px-3 py-1 rounded-full text-sm"
            >1.400 calorias</span
          >
        </div>
        <div
          class="bg-gray-50 px-4 py-3 rounded-xl flex flex-row items-center justify-between border border-gray-100"
        >
          <p class="text-gray-600">Quarta-feira</p>
          <span class="font-bold text-green-700 bg-green-50 px-3 py-1 rounded-full text-sm"
            >1.800 calorias</span
          >
        </div>
      </div>
    </div>
  </section>
</template>
