<template>
  <section id="home">
    <Header
      title="Product Requests"
      subtitle="Gestalte diese App mit und diskutiere über Features"
    />
    <v-container>
      <ProductRequest
        v-for="i in 10"
        :key="i"
        :text="
          i % 2 == 0 ?
            'Buttonfarbe auf Startseite sollte als Gelb erscheinen. Das ist ein langer Text'
            : 'Das ist ein kleiner Test'"
      />
    </v-container>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import ProductRequest from '@/modules/ProductRequest/ProductRequest.vue';

@Component({
  components: {
    Header,
    ProductRequest,
  },
})
export default class Home extends Vue {}
</script>
