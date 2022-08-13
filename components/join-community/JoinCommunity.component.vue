<template>
  <div>
    <h1
      class="text-gray-200 font-normal text-base md:text-xl text-center md:text-left"
    >
      Join our <span class="font-bold">WoilaTchogou237</span> Community
    </h1>
    <div
      class="mt-3 md:mt-6 flex flex-col md:flex-row justify-center md:justify-start mx-4 md:mx-0"
    >
      <input
        type="text"
        class="rounded-[100px] px-4 py-2 bg-gray-200 md:w-1/3"
        placeholder="ENTER YOUR NAME"
        value=""
        name=""
        id=""
      />
      <input
        type="text"
        class="rounded-[100px] px-4 py-2 bg-gray-200 ml-0 md:ml-10 mt-4 md:mt-0 md:w-1/3"
        placeholder="ENTER YOUR EMAIL"
        value=""
        name=""
        id=""
      />
      <div class="w-1/4 md:ml-10 mt-4 md:mt-0">
        <button
          style="background: #f7f2ed; color: #654642"
          class="rounded-full px-4 py-2 w-32 font-semibold"
        >
          Join now
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'JoinCommunityComponent',
}
</script>
