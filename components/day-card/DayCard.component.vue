<template>
  <div
    class="bg-white p-1 w-[60px] h-16 mr-4 flex flex-col items-center justify-center mt-6 md:mt-12"
  >
    <h1
      style="font-family: 'DynaPuff', cursive; color: #654642"
      class="text-[30px] md:text-[25px] text-start"
    >
      {{ day }}
    </h1>
    <p class="text-sm">{{ name }}</p>
  </div>
</template>
<script>
export default {
  name: 'DayCardComponent',
  props: {
    day: {
      type: String,
    },
    name: {
      type: String,
    },
  },
}
</script>
