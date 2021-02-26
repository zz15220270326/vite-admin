import { Ref } from 'vue';

function calcuMaps(count: Ref<number>) {
  function plus() {
    count.value++;
  }
  function minus() {
    count.value--;
  }
  return {
    plus,
    minus
  }
}

export { calcuMaps };
