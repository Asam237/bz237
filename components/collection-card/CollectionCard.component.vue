<template>
  <div class="md:mx-4">
    <div
      style="background: #d3d1d1"
      class="w-full h-[250px] md:mx-4 mt-4 md:mt-0"
    >
      <img
        class="w-auto h-full mx-auto"
				alt=""
				:src="require(`../../assets/imgs/${mypict}`)"
      />
      <div
        style="opacity: 0.8"
        class="mx-2 mt-[-50px] flex justify-center items-center"
      >
        <p class="w-full py-2 font-bold text-center uppercase bg-white">
          {{ name }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CollectionCardComponent',
  data() {
    return {
      pict: require('../../assets/imgs/pict02.png'),
    }
  },
  props: {
    mypict: {
      type: String,
    },
    name: {
      type: String,
    },
  },
}
</script>
