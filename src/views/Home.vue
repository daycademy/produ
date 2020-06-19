<template>
  <section id="home">
    <Header
      title="Product Requests"
      subtitle="Gestalte diese App mit und diskutiere über Features"
    />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Header from '@/components/Header.vue';

@Component({
  components: {
    Header,
  },
})
export default class Home extends Vue {}
</script>
