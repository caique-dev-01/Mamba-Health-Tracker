<template>
  <footer class="bg-[#050816] text-white border-t border-green-900/30">
    <div class="px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Sobre -->
      <section class="flex flex-col gap-3">
        <h2 class="text-xl font-bold text-white">Sobre o Mamba Health Tracker</h2>

        <p class="text-sm text-gray-300 leading-6">
          Aplicação desenvolvida para auxiliar usuários no controle de hábitos saudáveis através do
          jejum intermitente e monitoramento nutricional.
        </p>

        <p class="text-sm text-gray-300">
          <strong class="text-white"> ✓ Controle de Jejum </strong>
          com acompanhamento diário
        </p>

        <p class="text-sm text-gray-300">
          <strong class="text-white"> ✓ Monitoramento Calórico </strong>
          inteligente
        </p>

        <p class="text-sm text-gray-300">
          <strong class="text-white"> ✓ Dashboard Semanal </strong>
          com métricas de desempenho
        </p>
      </section>

      <!-- Recursos -->
      <section class="flex flex-col gap-3">
        <h2 class="text-xl font-bold text-white">Recursos</h2>

        <p class="flex items-center gap-2 text-sm text-gray-300">
          <i class="ph ph-timer text-lg text-green-400"></i>
          Cronômetro de Jejum
        </p>

        <p class="flex items-center gap-2 text-sm text-gray-300">
          <i class="ph ph-bowl-food text-lg text-green-400"></i>
          Registro Nutricional
        </p>

        <p class="flex items-center gap-2 text-sm text-gray-300">
          <i class="ph ph-chart-line-up text-lg text-green-400"></i>
          Dashboard de Progresso
        </p>
      </section>

      <!-- Links -->
      <section class="flex flex-col gap-3">
        <h2 class="text-xl font-bold text-white">Links úteis</h2>

        <RouterLink
          to="/fasting"
          class="text-sm text-gray-300 hover:text-green-400 transition duration-300"
        >
          Módulo de Jejum
        </RouterLink>

        <RouterLink
          to="/nutrition"
          class="text-sm text-gray-300 hover:text-green-400 transition duration-300"
        >
          Módulo de Nutrição
        </RouterLink>

        <RouterLink
          to="/"
          class="text-sm text-gray-300 hover:text-green-400 transition duration-300"
        >
          Dashboard Semana
        </RouterLink>
      </section>
    </div>

    <!-- Bottom -->
    <div class="border-t border-white/10 py-5 px-6 text-center">
      <p class="text-sm text-gray-400">
        © 2026 Mamba Health Tracker — Todos os direitos reservados.
      </p>

      <p class="mt-1 text-xs text-gray-500">
        Desenvolvido com foco em saúde, bem-estar e performance.
      </p>
    </div>
  </footer>
</template>
