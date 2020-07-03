<template>
  <div class="product-request">
    <v-card class="card-product-request">
      <v-row class="u-no-padding">
        <v-col
          c="1"
          class="upvote-column"
        >
          <Upvote />
        </v-col>
        <v-col
          c="11"
          class="request-column"
        >
          <Request
            title="Buttonfarbe ändern"
            :text="trimmedText"
          />
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Upvote from './Components/Upvote.vue';
import Request from './Components/Request.vue';

@Component({
  components: {
    Upvote,
    Request,
  },
})
export default class ProductRequest extends Vue {
  @Prop({ type: String, required: true })
  private text!: string;

  private get trimmedText(): string {
    const maxLength = 50;
    return this.text.length >= maxLength ? `${this.text.substring(0, maxLength)} ...` : this.text;
  }
}
</script>

<style lang="scss">
.product-request {
  .card-product-request {
    margin-bottom: 1.7em;
    text-align: left;

    .content {
      padding-top: 1em;
      padding-bottom: 1em;
    }

    .upvote-column {
      display: flex;
      justify-content: center;
      background-color: #f6f6f6;
    }
  }
}
</style>
