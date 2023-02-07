<script setup>
import Dropdown from "./Dropdown.vue";
</script>

<template>
    <div class=" w-full h-24 bg-red-500 rounded-br-lg rounded-bl-lg">
        <input type="text" placeholder="URL" class="w-3/6 float-left m-8 outline outline-2 outline-white bg-red-600 rounded-lg indent-[6px] text-white">
        <input type="button" value="Add"  class="w-11 float-left my-8 outline outline-2 outline-white bg-red-600 rounded-lg indent-[1px] text-white">

        <Dropdown />

    </div>
</template>