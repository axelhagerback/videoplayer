<script setup>
import Dropdown from "./Dropdown.vue";
</script>

<template>
    <div class=" w-full h-24 bg-teal-700">
        <input type="text" placeholder="URL" class="w-3/6 float-left m-8 outline outline-2 outline-white bg-teal-700 rounded-lg indent-[6px] text-white">
        <input type="button" value="Add"  class="w-11 float-left my-8 outline outline-2 outline-white bg-teal-800 rounded-lg indent-[1px] text-white">

        <Dropdown />

    </div>
</template>