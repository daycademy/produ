<template>
  <div class="title-header">
    <v-container>
      <div :class="`title ${enableBackButton ? 'u-text-center' : 'text-left'}`">
        <router-link
          v-if="enableBackButton"
          to="/"
        >
          <p class="back-btn">
            <i class="fas fa-arrow-left" />
            Zurück
          </p>
        </router-link>
        <h2>{{ title }}</h2>
        <v-dropdown right>
          <template #button>
            <v-btn
              color="transparent"
              dropdown
              circle
            >
              <v-avatar text="A" />
            </v-btn>
          </template>
          <v-dropdown-item href="/register">
            Registrieren
          </v-dropdown-item>
          <v-dropdown-item href="/login">
            Einloggen
          </v-dropdown-item>
        </v-dropdown>
      </div>
      <h5 v-if="subtitle">
        {{ subtitle }}
      </h5>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  @Prop({ type: String, required: true })
  private title!: string;

  @Prop({ type: String })
  private subtitle: string | undefined;

  @Prop({ type: Boolean, default: false })
  private enableBackButton!: boolean;
}
</script>

<style lang="scss">
.title-header {
  margin-top: 2em;

  h5 {
    text-align: left;
    font-weight: 500;
    color: #92929d;
    margin-top: 0;
  }

  .text-left {
    text-align: left;
  }

  ul li.menu-item a {
    font-weight: 400;
  }

  .title {
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      flex: 1 1 0px;
    }

    .back-btn {
      color: #92929d;

      i {
        margin-right: 0.5em;
      }
    }
  }
}
</style>
