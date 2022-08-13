<template>
  <div class="md:mx-4">
    <div
      style="background: #d3d1d1"
      class="w-full h-[250px] md:mx-4 mt-4 md:mt-0"
    >
      <img
        class="h-full mx-auto w-auto"
				alt=""
				:src="require(`../../assets/imgs/${mypict}`)"
      />
      <div
        style="opacity: 0.8"
        class="mx-2 mt-[-50px] flex justify-center items-center"
      >
        <p class="uppercase font-normal bg-white w-full text-center py-2">
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
