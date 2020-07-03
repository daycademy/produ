<template>
  <div class="upvote">
    <i class="fas fa-chevron-up" />
    <p>211</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Upvote extends Vue {}
</script>

<style lang="scss">
.upvote {
  align-self: center;
  text-align: center;

  i,
  p {
    color: #92929d;
  }

  p {
    margin: 0;
  }
}
</style>
