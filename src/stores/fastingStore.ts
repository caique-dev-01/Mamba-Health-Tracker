import { defineStore } from 'pinia'
import { ref } from 'vue'
import { differenceInMinutes } from 'date-fns'

const STORAGE_KEY = 'fasting_active'
const HISTORY_KEY = 'fasting_history'

export interface FastingRecord {
  protocol: string
  startedAt: string
  endedAt: string
  durationMinutes: number
  completed: boolean
}

export const useFastingStore = defineStore('fasting', () => {
  const isActive = ref(false)
  const protocol = ref('')
  const startedAt = ref<string | null>(null)
  const history = ref<FastingRecord[]>([])

  function startFasting(selectedProtocol: string) {
    const now = new Date()
    isActive.value = true
    protocol.value = selectedProtocol
    startedAt.value = now.toISOString()

    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      protocol: selectedProtocol,
      startedAt: now.toISOString()
    }))
  }

  function stopFasting() {
    if (!startedAt.value) return

    const now = new Date()
    const record: FastingRecord = {
      protocol: protocol.value,
      startedAt: startedAt.value,
      endedAt: now.toISOString(),
      durationMinutes: differenceInMinutes(now, new Date(startedAt.value)),
      completed: true
    }

    history.value.unshift(record)
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history.value))
    localStorage.removeItem(STORAGE_KEY)

    isActive.value = false
    protocol.value = ''
    startedAt.value = null
  }

  function loadFromStorage() {
    const active = localStorage.getItem(STORAGE_KEY)
    if (active) {
      const parsed = JSON.parse(active)
      isActive.value = true
      protocol.value = parsed.protocol
      startedAt.value = parsed.startedAt
    }

    const savedHistory = localStorage.getItem(HISTORY_KEY)
    if (savedHistory) {
      history.value = JSON.parse(savedHistory)
    }
  }

  function removeRecord(startedAt: string) {
    history.value = history.value.filter(r => r.startedAt !== startedAt)
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history.value))
  }

  return { isActive, protocol, startedAt, history, startFasting, stopFasting, loadFromStorage, removeRecord }
})
