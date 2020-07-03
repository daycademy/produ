<template>
  <v-container class="request">
    <h5>{{ title }}</h5>
    <p>{{ text }}</p>
    <v-tag-container>
      <v-tag
        color="danger"
        rounded
      >
        Bevorstehend
      </v-tag>
      <v-tag
        v-if="isBug"
        color="warning"
        rounded
      >
        Bug
      </v-tag>
    </v-tag-container>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Request extends Vue {
  @Prop({ type: String, required: true })
  private title!: string;

  @Prop({ type: String, required: true })
  private text!: string;

  @Prop({ type: Boolean, default: false })
  private isBug!: boolean;
}
</script>

<style lang="scss">
.request {
  h5 {
    margin-bottom: 0;
  }

  p {
    color: #92929d;
    margin: 0.3em 0 0.9em;
  }
}
</style>
