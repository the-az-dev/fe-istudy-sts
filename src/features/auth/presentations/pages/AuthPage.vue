<template>
  <div class="flex flex-col items-center justify-center w-full h-[100svh] overflow-hidden">
    <div
        class="card h-[90svh] w-[90svw] 2xl:w-[35svw] xl:w-[45svw] lg:w-[60svw] md:w-[70svw] sm:w-[90svw] flex flex-col items-center justify-center gap-8"
    >
      <label
          class="auth-label-heading text-[40px] font-bold sm:text-[50px] md:text-[50px] lg:text-[64px] xl:text-[64px] 2xl:text-[64px]"
      >Увійти</label
      >
      <div class="flex flex-col items-center justify-center w-full gap-4">
        <div class="w-full flex flex-col items-center justify-evenly gap-2 sm:gap-2 md:gap-4">
          <div
              class="flex flex-row items-center justify-between w-[18rem] sm:w-[25rem] md:w-[25rem] lg:w-[25rem] xl:w-[25rem] 2xl:w-[25rem]"
          >
            <label
                for="email"
                class="auth-label text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px]"
            >Електронна пошта:</label
            >
          </div>
          <input
              type="text"
              name="email"
              placeholder="Email"
              class="input h-[50px] w-[18rem] sm:w-[25rem] sm:h-[55px] md:w-[25rem] md:h-[60px] lg:w-[25rem] lg:h-[60px] xl:w-[25rem] xl:h-[60px] 2xl:w-[25rem] 2xl:h-[60px]"
          />
          <div
              class="flex flex-row items-center justify-between w-[18rem] sm:w-[25rem] md:w-[25rem] lg:w-[25rem] xl:w-[25rem] 2xl:w-[25rem]"
          >
            <label
                for="email"
                class="auth-label text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px]"
            >Пароль:</label
            >

            <a class="auth-pass-forgot text-[14px] sm:text-[16px] md:text-[18px]">
              Не памʼятаю пароль?
            </a>
          </div>
          <input
              type="text"
              name="password"
              placeholder="Password"
              class="input h-[50px] w-[18rem] text-[16px] sm:w-[25rem] sm:h-[55px] sm:text-[18px] md:w-[25rem] md:h-[60px] md:text-[20px] lg:w-[25rem] lg:h-[60px] lg:text-[22px] xl:w-[25rem] xl:h-[60px] xl:text-[24px] 2xl:w-[25rem] 2xl:h-[60px] 2xl:text-[26px]"
          />
        </div>

        <div class="w-full flex flex-col items-center justify-evenly gap-2 sm:gap-2 md:gap-4">
          <Button type="primary" label="Авторизуватись"
                  class="text-[20px] sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[32px] 2xl:text-[34px] h-[50px] w-[18rem] sm:w-[25rem] sm:h-[55px] md:w-[25rem] md:h-[60px] lg:w-[25rem] lg:h-[60px] xl:w-[25rem] xl:h-[60px] 2xl:w-[25rem] 2xl:h-[60px]"/>
          <label for="new-acc">Немає аккаунту?</label>
          <Button type="outline" label="Зареєструватись"
                  class="text-[20px] sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[34px] h-[50px] w-[18rem] sm:w-[25rem] sm:h-[55px] md:w-[25rem] md:h-[60px] lg:w-[25rem] lg:h-[60px] xl:w-[25rem] xl:h-[60px] 2xl:w-[25rem] 2xl:h-[60px]"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script lang="ts" setup>
import {Button} from '@shared/components/button';
</script>
