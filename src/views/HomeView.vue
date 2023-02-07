<script setup></script>

<script>
export default {
  mounted: {
    getVideo() {
      const XHR = new XMLHttpRequest();

      XHR.onload = (res) => {
        let video = [];
        video.forEach((videos) => {
          video.push(videos);
        });
      };

      XHR.open("GET", "/video");
      XHR.send();
    },
  },
  methods: {
    addVideo() {
      XHR.open("POST", "render");
      XHR.send("link");
    },
    showVideo() {
      XHR.open("GET", `/video/${id}`);
      XHR.send();
    },
  },
};
</script>

<template>
  <p>This is the home view</p>
</template>
