<template>
  <main class="min-h-screen p-6">
    <section class="mb-8">
      <h1 class="text-4xl font-bold">Módulo de Nutrição</h1>
      <p class="text-gray-600 mt-2">Controle diário de consumo calórico</p>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <div class="bg-white rounded-3xl shadow-md p-6">
        <p
          class="text-xs font-medium text-zinc-400 dark:text-zinc-500 mb-1 uppercase tracking-wide"
        >
          Meta diária
        </p>
        <p class="text-2xl font-semibold text-green-500 leading-none">
          2.000 <span class="text-sm font-normal text-green-400">kcal</span>
        </p>
      </div>
    </section>

    <section class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="bg-white rounded-3xl shadow-md p-6">
        <div class="flex items-center gap-3 mb-6">
          <div>
            <h2 class="text-2xl font-bold text-gray-800">Registrar Refeição</h2>
            <p class="text-sm text-gray-500">Adicione uma nova refeição</p>
          </div>
        </div>

        <form class="flex flex-col gap-5">
          <div class="flex flex-col gap-2">
            <p class="text-sm font-medium text-green-700">Nome da refeição</p>

            <input
              type="text"
              placeholder="Ex: Café da manhã"
              class="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-gray-700 placeholder:text-gray-400 outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition"
            />
          </div>

          <div class="flex flex-col gap-2">
            <p class="text-sm font-medium text-green-700">Quantidade de calorias</p>

            <input
              type="number"
              placeholder="Ex: 450"
              class="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-gray-700 placeholder:text-gray-400 outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition"
            />
          </div>
          <button
            class="bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-2xl py-3 transition-all duration-300 shadow-md hover:shadow-xl"
          >
            Registrar Refeição
          </button>
        </form>
      </div>

      <div class="bg-white rounded-3xl shadow-md p-6">
        <div class="flex items-center gap-3 mb-6">
          <div>
            <h2 class="text-2xl font-bold text-gray-800">Progresso Diário</h2>
            <p class="text-sm text-gray-500">Consumo em relação à meta</p>
          </div>
        </div>

        <div class="mb-4">
          <div class="flex justify-between mb-2">
            <span class="text-sm text-gray-500"> 1450 / 2000 kcal </span>
            <span class="text-sm font-semibold text-green-700"> 72% </span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-5 overflow-hidden">
            <div
              class="bg-green-800 h-full rounded-full transition-all duration-500"
              style="width: 72%"
            ></div>
          </div>
        </div>

        <div class="bg-gray-100 border border-gray-200 rounded-2xl p-4 mt-6">
          <div class="flex items-center gap-3">
            <i class="ph ph-check-circle text-2xl text-green-700"></i>
            <div>
              <p class="font-semibold text-green-500">Ótimo progresso!</p>
              <p class="text-sm text-gray-600 flex gap-1 items-center">
                Você ainda pode consumir<span class="font-semibold text-green-800"> 550 kcal</span
                >hoje.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="bg-white rounded-3xl shadow-md p-6 mt-6">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Refeições Registradas</h2>
        <div class="space-y-4">
          <div class="flex justify-between items-center border-b border-gray-100 pb-4">
            <div>
              <p class="font-semibold text-gray-800">Café da manhã</p>
              <p class="text-sm text-gray-500">08:30 AM</p>
            </div>
            <span class="font-semibold text-green-700">450 kcal</span>
          </div>
          <div class="flex justify-between items-center border-b border-gray-100 pb-4">
            <div>
              <p class="font-semibold text-gray-800">Almoço</p>
              <p class="text-sm text-gray-500">01:15 PM</p>
            </div>
            <span class="font-semibold text-green-700">680 kcal</span>
          </div>
          <div class="flex justify-between items-center border-b border-gray-100 pb-4">
            <div>
              <p class="font-semibold text-gray-800">Jantar</p>
              <p class="text-sm text-gray-500">07:45 PM</p>
            </div>
            <span class="font-semibold text-green-700">720 kcal</span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
