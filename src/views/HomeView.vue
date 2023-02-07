<script setup></script>

<script>
export default {
  methods: {
    getVideo() {
      const XHR = new XMLHttpRequest();

      XHR.onload = function () {
        video.push(JSON.parse(this.responseText));
        return;
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
};
</script>

<template>
  <p>This is the home view</p>
</template>
