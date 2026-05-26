<template>
  <header class="w-full bg-[#050816] text-white border-t border-green-900/30 px-8 py-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
          <img src="/favicon.ico" alt="Logo Mamba Health Tracker" class="w-8 h-8 object-contain" />
        </div>
        <div>
          <h1 class="text-white text-2xl font-bold tracking-wide flex gap-1">
            Mamba<span class="text-green-400">Health Tracker</span>
          </h1>
        </div>
      </div>
      <nav>
        <ul class="flex items-center gap-6">
          <li class="flex items-center gap-4">
            <RouterLink
              to="/nutrition"
              class="text-white font-medium hover:text-green-100 transition duration-300"
            >
              Nutricional
            </RouterLink>
            <RouterLink
              to="/fasting"
              class="text-white font-medium hover:text-green-100 transition duration-300"
            >
              Jejum
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/"
              class="bg-white text-green-700 px-4 py-2 rounded-xl font-semibold hover:scale-105 transition duration-300 shadow-md"
            >
              Dashboard
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
