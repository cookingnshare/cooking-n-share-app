<template>
  <q-page>
    <div class="q-my-md">
      <div class="row">
        <div class="col-12 text-center">
          <q-avatar size="125px">
            <img src="https://cdn.quasar.dev/img/avatar.png" alt="avatar" />
          </q-avatar>
        </div>
        <div class="col-12 text-center">
          <p style="font-size: 1.5em">
            Lorem ipsum dolor sit amet
            <svg xmlns="http://www.w3.org/2000/svg"
                 x="0px" y="0px"
                 width="24" height="24"
                 viewBox="0 0 226 226"
                 style=" fill:#000000;">
              <g fill="none" fill-rule="nonzero"
                 stroke="none" stroke-width="1" stroke-linecap="butt"
                 stroke-linejoin="miter" stroke-miterlimit="10"
                 stroke-dasharray="" stroke-dashoffset="0" style="mix-blend-mode: normal">
                <path d="M0,226v-226h226v226z" fill="none"></path>
                <g fill="#3498db">
                  <path d="M199.897,113l5.85717,-18.08c4.37875,-13.53175 -1.71383,-28.25 -14.37925,-34.71925l-16.92175,-8.6445l-8.6445,-16.92175c-6.46925,-12.66542 -21.1875,-18.76742 -34.71925,-14.37925l-18.08942,5.84775l-18.08,-5.85717c-13.53175,-4.37875 -28.25,1.71383 -34.71925,14.37925l-8.65392,16.92175l-16.92175,8.65392c-12.66542,6.46925 -18.758,21.1875 -14.37925,34.71925l5.85717,18.08l-5.85717,18.08c-4.37875,13.53175 1.71383,28.25 14.37925,34.71925l16.92175,8.6445l8.6445,16.92175c6.46925,12.66542 21.1875,18.76742 34.71925,14.37925l18.08942,-5.84775l18.08,5.85717c13.53175,4.37875 28.25,-1.71383 34.71925,-14.37925l8.6445,-16.92175l16.92175,-8.6445c12.66542,-6.46925 18.76742,-21.1875 14.37925,-34.71925zM103.58333,154.56517l-34.90758,-34.90758l13.31517,-13.31517l21.59242,21.59242l49.84242,-49.84242l13.31517,13.31517z">
                  </path></g>
              </g>
            </svg>
          </p>
        </div>
      </div>
      <div class="q-px-5">
        <div class="row text-center">
          <div class="col-4">
            <span>5</span>
            <p>Post</p>
          </div>
          <div class="col-4">
            <span>20</span>
            <p>Followers</p>
          </div>
          <div class="col-4">
            <span>10</span>
            <p>Following</p>
          </div>
        </div>
        <q-separator />
      </div>
    </div>
    <div class="fit row justify-center">
      <q-card v-for="n in 20" :key="n" class="post">
          <q-img
            src="https://cdn.quasar.dev/img/mountains.jpg"
            style="width: 150px;height: 150px"
          />
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Profile'
})
</script>

<style lang="sass" scoped>
.post
  padding: 0
  margin: 0
  width: 150px
  height: 150px
  max-width: 150px
.post
  margin: 2px
</style>
