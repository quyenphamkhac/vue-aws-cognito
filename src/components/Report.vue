<template>
  <div class="report">
    <a-spin :spinning="loading" :indicator="indicator">
      <sumary />
    </a-spin>
  </div>
</template>

<script>
import Sumary from './admin/Sumary';
export default {
  data () {
    return {
      loading: true,
      indicator: <a-icon type="loading" style="font-size: 24px" spin />
    }
  },
  mounted() {
    this.$Progress.start();
    setTimeout(() => {
      this.$Progress.finish();
      this.loading = false;
      }, 1000);
  },
  components: {
      Sumary
  }
}
</script>
