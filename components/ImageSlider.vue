<template>
  <div
    ref="root"
    class="keen-slider"
    :class="isDragging ? 'cursor-grabbing' : 'cursor-grab'"
  >
    <img
      v-for="(image, index) in images"
      :key="index"
      :src="image"
      class="block h-full"
    />
  </div>
</template>

<script lang="ts" setup>
import { useKeenSlider } from 'keen-slider/vue.es'

interface Props {
  images: string[]
}

const { images } = defineProps<Props>()

let isDragging = $ref(false)

const [root, slider] = $(
  useKeenSlider({
    selector: '.keen-slider img',
    mode: 'free-snap',
    slides: {
      perView: 'auto',
      spacing: 48,
    },
    dragEnded: () => {
      isDragging = false
    },
    dragStarted: () => {
      isDragging = true
    },
  }),
)
</script>

<style lang="postcss" scoped>
.keen-slider {
  @apply overflow-visible;
}
</style>
