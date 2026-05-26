<template>
  <main class="min-h-screen p-6">
    <section class="mb-8">
      <h1 class="text-4xl font-bold">Módulo de Jejum</h1>
      <p class="text-gray-600 mt-2">Controle de ciclos de jejum intermitente</p>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <div class="bg-white rounded-3xl shadow-md p-6">
        <p class="text-xs font-medium text-zinc-400 mb-1 uppercase tracking-wide">
          Protocolo ativo
        </p>
        <p class="text-2xl font-semibold text-green-500 leading-none">
          16:8 <span class="text-sm font-normal text-green-400">horas</span>
        </p>
      </div>

      <div class="bg-white rounded-3xl shadow-md p-6">
        <p class="text-xs font-medium text-zinc-400 mb-1 uppercase tracking-wide">
          Tempo decorrido
        </p>
        <p class="text-2xl font-semibold text-green-500 leading-none">08:42:10</p>
      </div>

      <div class="bg-white rounded-3xl shadow-md p-6">
        <p class="text-xs font-medium text-zinc-400 mb-1 uppercase tracking-wide">
          Jejuns este mês
        </p>
        <p class="text-2xl font-semibold text-green-500 leading-none">
          12 <span class="text-sm font-normal text-green-400">ciclos</span>
        </p>
      </div>
    </section>

    <section class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="bg-white rounded-3xl shadow-md p-6">
        <div class="mb-6">
          <h2 class="text-2xl font-bold text-gray-800">Controle do Ciclo</h2>
          <p class="text-sm text-gray-500">Inicie ou finalize seu jejum</p>
        </div>

        <div class="flex flex-col gap-2 mb-5">
          <p class="text-sm font-medium text-green-700">Janela de jejum</p>
          <div class="grid grid-cols-3 gap-2">
            <button
              class="rounded-2xl py-3 text-sm font-semibold border bg-green-700 text-white border-green-700"
            >
              16:8
            </button>
            <button
              class="rounded-2xl py-3 text-sm font-semibold border bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-400 transition"
            >
              18:6
            </button>
            <button
              class="rounded-2xl py-3 text-sm font-semibold border bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-400 transition"
            >
              20:4
            </button>
          </div>
        </div>

        <div class="flex flex-col gap-2 mb-5">
          <p class="text-sm font-medium text-green-700">Duração personalizada (horas)</p>
          <input
            type="number"
            placeholder="Ex: 14"
            class="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-gray-700 placeholder:text-gray-400 outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition"
          />
        </div>

        <div class="mb-5">
          <div class="flex justify-between mb-2">
            <span class="text-sm text-gray-500">08:42:10 decorrido</span>
            <span class="text-sm font-semibold text-green-700">54%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-5 overflow-hidden">
            <div
              class="bg-green-800 h-full rounded-full transition-all duration-500"
              style="width: 54%"
            ></div>
          </div>
        </div>

        <button
          class="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-2xl py-3 transition-all duration-300 shadow-md hover:shadow-xl"
        >
          Iniciar Jejum
        </button>
      </div>

      <div class="bg-white rounded-3xl shadow-md p-6">
        <div class="mb-6">
          <h2 class="text-2xl font-bold text-gray-800">Histórico</h2>
          <p class="text-sm text-gray-500">Ciclos realizados</p>
        </div>

        <div class="space-y-4">
          <div class="flex justify-between items-center border-b border-gray-100 pb-4">
            <div>
              <p class="font-semibold text-gray-800">16:8</p>
              <p class="text-sm text-gray-500">24/05/2025 · 08:00</p>
            </div>
            <div class="text-right">
              <span class="font-semibold text-green-700">16h 00min</span>
              <p class="text-xs text-gray-400">Concluído</p>
            </div>
          </div>

          <div class="flex justify-between items-center border-b border-gray-100 pb-4">
            <div>
              <p class="font-semibold text-gray-800">18:6</p>
              <p class="text-sm text-gray-500">22/05/2025 · 09:15</p>
            </div>
            <div class="text-right">
              <span class="font-semibold text-green-700">18h 00min</span>
              <p class="text-xs text-gray-400">Concluído</p>
            </div>
          </div>

          <div class="flex justify-between items-center border-b border-gray-100 pb-4">
            <div>
              <p class="font-semibold text-gray-800">16:8</p>
              <p class="text-sm text-gray-500">20/05/2025 · 07:30</p>
            </div>
            <div class="text-right">
              <span class="font-semibold text-green-700">14h 22min</span>
              <p class="text-xs text-gray-400">Interrompido</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
