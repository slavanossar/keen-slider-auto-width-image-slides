<template>
  <div
    ref="root"
    class="keen-slider"
    :class="isDragging ? 'cursor-grabbing' : 'cursor-grab'"
  >
    <div
      v-for="(image, index) in images"
      :key="index"
      class="keen-slider__slide h-full"
    >
      <img :src="image" class="h-full w-auto" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useKeenSlider } from 'keen-slider/vue.es'

interface Props {
  images: string[]
}

const { images } = defineProps<Props>()

let isDragging = $ref(false)

const [root, slider] = useKeenSlider({
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
})
</script>

<style lang="postcss" scoped>
.keen-slider {
  @apply block overflow-visible whitespace-nowrap;
}

.keen-slider .keen-slider__slide {
  @apply inline-block w-auto;
}
</style>
