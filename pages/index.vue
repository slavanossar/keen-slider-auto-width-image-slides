<template>
  <div class="space-y-4">
    <div class="flex space-x-1">
      <input id="toggle" v-model="showSliders" type="checkbox" />
      <label for="toggle">Show sliders</label>
    </div>
    <div v-if="showSliders" class="sliders space-y-24">
      <div class="space-y-4">
        <p class="max-w-xl">
          Images are not wrapped in
          <strong>.keen-slider__slide</strong> elements, works correctly on
          initial page load but has incorrect track width when navigating from
          another page, or when when toggled using the checkbox above
        </p>
        <ImageSlider :images="images" />
      </div>
      <div class="space-y-4">
        <p class="max-w-xl">
          Images are wrapped in <strong>.keen-slider__slide</strong> elements,
          with style overrides to prevent image stretching, same result as above
        </p>
        <ImageSliderWithSlides :images="images" />
      </div>
    </div>
  </div>
</template>

<script setup>
import landscape from '@/assets/img/landscape.jpg'
import portrait from '@/assets/img/portrait.jpg'

const images = [
  landscape,
  portrait,
  landscape,
  portrait,
  landscape,
  portrait,
  landscape,
  portrait,
]

const showSliders = $ref(true)
</script>

<style scoped>
:deep(.keen-slider) {
  @apply h-[480px];
}
</style>
