<script setup>
</script>

<script >
export default {
  data() {
    return{
      video: [],  
    }
  },
  methods: {
     getVideo() {
      const XHR = new XMLHttpRequest();

      const that = this;
      XHR.onload = function (res) {
        that.video = JSON.parse(this.responseText).videos;
        console.log(that.video); 
        /*console.log(res.body)
        return;*/
      };

      XHR.open("GET", "/video");
      XHR.send();
    },
    addVideo() {
      XHR.open("POST", "/video");
      XHR.send("");
    },
    showVideo() {
      XHR.open("GET", `/video/${id}`);
      XHR.send();
    },
  },
  mounted() {
    this.getVideo()
  },
};
</script>

<template>
  <p>This is the home view</p>
  <li v-for="video in video" >{{ video }}</li>
</template>
