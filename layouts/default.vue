<template>
  <div class="p-24">
    <div class="mb-4 flex space-x-4 border-b border-black pb-4">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/other">Other page</NuxtLink>
    </div>
    <slot />
  </div>
</template>
