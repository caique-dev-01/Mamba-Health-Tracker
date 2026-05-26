<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { format, differenceInSeconds } from 'date-fns'
import { useFastingStore } from '@/stores/fastingStore'

const fasting = useFastingStore()

const PRESETS = ['16:8', '18:6', '20:4']
const selectedProtocol = ref('16:8')
const customHours = ref<number | null>(null)
const now = ref(new Date())
let timer: ReturnType<typeof setInterval>

onMounted(() => { timer = setInterval(() => { now.value = new Date() }, 1000) })
onUnmounted(() => clearInterval(timer))

// Horas alvo: usa customHours se preenchido, senão extrai do protocolo selecionado
const targetHours = computed(() => {
  if (customHours.value && customHours.value > 0) return customHours.value
  return Number(selectedProtocol.value.split(':')[0])
})

// Protocolo efetivo exibido: custom ou preset
const activeProtocolLabel = computed(() =>
  customHours.value && customHours.value > 0
    ? `${customHours.value}h personalizado`
    : selectedProtocol.value
)

const elapsedSeconds = computed(() => {
  if (!fasting.isActive || !fasting.startedAt) return 0
  return differenceInSeconds(now.value, new Date(fasting.startedAt))
})

const elapsed = computed(() => {
  const secs = elapsedSeconds.value
  const h = String(Math.floor(secs / 3600)).padStart(2, '0')
  const m = String(Math.floor((secs % 3600) / 60)).padStart(2, '0')
  const s = String(secs % 60).padStart(2, '0')
  return `${h}:${m}:${s}`
})

const progressPercent = computed(() => {
  if (!fasting.isActive) return 0
  return Math.min(Math.round((elapsedSeconds.value / (targetHours.value * 3600)) * 100), 100)
})

function handleStart() {
  fasting.startFasting(activeProtocolLabel.value)
}

function formatDate(iso: string) {
  return format(new Date(iso), "dd/MM/yyyy · HH:mm")
}

function formatDuration(minutes: number) {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return `${h}h ${String(m).padStart(2, '0')}min`
}
</script>

<template>
  <main class="min-h-screen p-6">
    <section class="mb-8">
      <h1 class="text-4xl font-bold">Jejum</h1>
      <p class="text-gray-600 mt-2">Controle de ciclos de jejum intermitente</p>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <div class="bg-white rounded-3xl shadow-md p-6">
        <p class="text-xs font-medium text-zinc-400 mb-1 uppercase tracking-wide">Protocolo ativo</p>
        <p class="text-2xl font-semibold text-green-500 leading-none">
          {{ fasting.isActive ? fasting.protocol : '—' }}
        </p>
      </div>

      <div class="bg-white rounded-3xl shadow-md p-6">
        <p class="text-xs font-medium text-zinc-400 mb-1 uppercase tracking-wide">Tempo decorrido</p>
        <p class="text-2xl font-semibold text-green-500 leading-none font-mono">
          {{ fasting.isActive ? elapsed : '—' }}
        </p>
      </div>

      <div class="bg-white rounded-3xl shadow-md p-6">
        <p class="text-xs font-medium text-zinc-400 mb-1 uppercase tracking-wide">Jejuns este mês</p>
        <p class="text-2xl font-semibold text-green-500 leading-none">
          {{ fasting.history.filter(r => r.durationMinutes >= 1).length }}
          <span class="text-sm font-normal text-green-400">ciclos</span>
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
              v-for="p in PRESETS"
              :key="p"
              @click="selectedProtocol = p; customHours = null"
              :disabled="fasting.isActive"
              :class="selectedProtocol === p && !customHours
                ? 'bg-green-700 text-white border-green-700'
                : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-400'"
              class="rounded-2xl py-3 text-sm font-semibold border transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ p }}
            </button>
          </div>
        </div>

        <div class="flex flex-col gap-2 mb-5">
          <p class="text-sm font-medium text-green-700">Duração personalizada (horas)</p>
          <input
            v-model.number="customHours"
            type="number"
            min="1"
            max="72"
            placeholder="Ex: 14"
            :disabled="fasting.isActive"
            class="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-gray-700 placeholder:text-gray-400 outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        <div class="mb-5">
          <div class="flex justify-between mb-2">
            <span class="text-sm text-gray-500 font-mono">{{ elapsed }} decorrido</span>
            <span class="text-sm font-semibold text-green-700">{{ progressPercent }}%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-5 overflow-hidden">
            <div
              class="bg-green-800 h-full rounded-full transition-all duration-500"
              :style="{ width: progressPercent + '%' }"
            ></div>
          </div>
        </div>

        <button
          @click="fasting.isActive ? fasting.stopFasting() : handleStart()"
          :class="fasting.isActive ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-700 hover:bg-gray-800'"
          class="w-full text-white font-semibold rounded-2xl py-3 transition-all duration-300 shadow-md hover:shadow-xl"
        >
          {{ fasting.isActive ? 'Parar Jejum' : 'Iniciar Jejum' }}
        </button>
      </div>

      <div class="bg-white rounded-3xl shadow-md p-6">
        <div class="mb-6">
          <h2 class="text-2xl font-bold text-gray-800">Histórico</h2>
          <p class="text-sm text-gray-500">Ciclos realizados</p>
        </div>

        <div class="space-y-4">
          <p v-if="fasting.history.filter(r => r.durationMinutes >= 1).length === 0" class="text-sm text-gray-400">
            Nenhum ciclo registrado ainda.
          </p>
          <div
            v-for="record in fasting.history.filter(r => r.durationMinutes >= 1)"
            :key="record.startedAt"
            class="flex justify-between items-center border-b border-gray-100 pb-4"
          >
            <div>
              <p class="font-semibold text-gray-800">{{ record.protocol }}</p>
              <p class="text-sm text-gray-500">{{ formatDate(record.startedAt) }}</p>
            </div>
            <div class="flex items-center gap-4">
              <div class="text-right">
                <span class="font-semibold text-green-700">{{ formatDuration(record.durationMinutes) }}</span>
                <p class="text-xs text-gray-400">{{ record.completed ? 'Concluído' : 'Interrompido' }}</p>
              </div>
              <button
                @click="fasting.removeRecord(record.startedAt)"
                class="text-gray-400 hover:text-red-500 transition text-xs"
              >
                remover
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
