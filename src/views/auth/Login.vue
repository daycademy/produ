<template>
  <div class="auth-view">
    <v-container class="fully-centered-content">
      <v-card>
        <h2 class="font-normal">
          Product Requests
        </h2>
        <img src="@/assets/auth_img.png" alt="auth-img" />
        <v-container>
          <v-input-field icon title="E-Mail" v-model="emailInput">
            <span class="icon">
              <i class="fas fa-user" />
            </span>
          </v-input-field>
          <v-input-field icon title="Passwort" v-model="passwordInput">
            <span class="icon">
              <i class="fas fa-lock" />
            </span>
          </v-input-field>
          <v-btn
            color="primary"
            @click.prevent="login"
            :disabled="passwordInput.length === 0 || emailInput.length === 0"
          >
            Login
          </v-btn>
          <p>Du kannst dich <a href="/register">hier</a> registrieren</p>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Login extends Vue {
  private emailInput = '';

  private passwordInput = '';

  private login(): void {
    console.log(this.emailInput);
  }
}
</script>

<style lang="scss">
@import './auth.scss';
</style>
