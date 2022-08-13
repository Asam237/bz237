<template>
  <div class="mx-4 mx-0">
    <div class="flex flex-col sm:flex-row justify-center mt-8 md:mt-16">
      <div class="hidden md:flex w-1/4" />

      <div class="mt-6 md:mt-0 mr-0 md:mr-8 md:w-1/2">
        <h1
          style="font-family: 'DynaPuff', cursive; color: #654642"
          class="text-[30px] md:text-[40px] text-start"
        >
          Deal Of The Day
        </h1>
        <p class="text-center md:text-start md:w-[450px] mt-4">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <div class="mb-6 flex">
          <div v-for="(item, myIndex) in deal" :key="myIndex">
            <DayCardComponent :day="item.day" :name="item.name" />
          </div>
        </div>
        <button
          style="background: #654642"
          class="rounded-full px-8 py-2 text-white mt-4 md:mt-8 text-base md:text-xl uppercase"
        >
          Shop now
        </button>
      </div>
      <div class="flex justify-center items-center">
        <img
          class="h-[auto] w-auto"
          :src="require('../../assets/imgs/day.png')"
          alt=""
        />
      </div>
      <div class="hidden md:flex w-1/4" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'DealOfDayComponent',
  data() {
    return {
      deal: [
        {
          day: '01',
          name: 'Day',
        },
        {
          day: '08',
          name: 'Hour',
        },

        {
          day: '09',
          name: 'Minute',
        },
      ],
    }
  },
}
</script>
