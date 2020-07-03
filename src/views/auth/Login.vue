<template>
  <div class="auth-view">
    <v-container class="fully-centered-content">
      <v-card>
        <h2 class="font-normal">
          Product Requests
        </h2>
        <img
          src="@/assets/auth_img.png"
          alt="auth-img"
        >
        <v-container>
          <v-input-field
            v-model="emailInput"
            icon
            title="E-Mail"
          >
            <span class="icon">
              <i class="fas fa-user" />
            </span>
          </v-input-field>
          <v-input-field
            v-model="passwordInput"
            icon
            type="password"
            title="Passwort"
          >
            <span class="icon">
              <i class="fas fa-lock" />
            </span>
          </v-input-field>
          <v-btn
            color="primary"
            :disabled="isValidLogin()"
            @click.prevent="login"
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

  private isValidLogin(): boolean {
    /* eslint-disable */
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (
      this.passwordInput.length === 0 ||
      this.emailInput.length === 0 ||
      !this.emailInput.match(regex)
    );
  }

  private login(): void {
    console.log(this.emailInput);
  }
}
</script>

<style lang="scss">
@import './auth.scss';
</style>
