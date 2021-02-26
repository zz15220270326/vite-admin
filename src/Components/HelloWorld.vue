<template>
  <div class="hello-world">
    <h1>{{ msg }}</h1>
    <button @click="plusCount()">count is: {{ count }}</button>
  </div>
</template>

<script lang="ts">
import {
  // ? c-api
  ref,
  // ? ts
  Ref,
  defineComponent,
} from 'vue';
import { calcuMaps } from '../Utils';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup() {
    const count: Ref<number> = ref(0);

    const plusCount = calcuMaps(count).plus;

    return {
      count,

      plusCount,
    };
  },
});
</script>

<style lang="scss" scoped>
// .hello-world {
//   button {
//     width: 20px;
//     height: 12px;
//   }
// }
</style>
