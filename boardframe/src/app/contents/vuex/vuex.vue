<template>
  <div>
    <div class='d-flex' style='gap: 16px;'>
      <v-btn @click='handleClickSnackbar1'>snackbar1</v-btn>
      <v-btn @click='handleClickSnackbar2'>snackbar2</v-btn>
      <v-btn @click='handleClickSnackbar3'>snackbar3</v-btn>
    </div>
    <div class='d-flex mt-4' style='gap: 16px;'>
      <v-btn @click='handleClickAlertbar1'>alertbar1</v-btn>
      <v-btn @click='handleClickAlertbar2'>alertbar2</v-btn>
      <v-btn @click='handleClickAlertbar3'>alertbar3</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // Snackbars
    handleClickSnackbar1() {
      this.$store
          .dispatch('snackbar', {
            message: 'Hello, snackbar 1!',
            timeout: 1000,
            // color: 'red',
          })
          .then(() => {
            alert('snackbar 1 closed.')
          })
    },
    handleClickSnackbar2() {
      this.$snackbar
          .dispatch({
            message: 'Hello, snackbar 2!',
            timeout: 1000,
          })
          .then(() => {
            alert('snackbar 2 closed.')
          })
    },
    handleClickSnackbar3() {
      this.$snackbar
          .open('Hello, snackbar 3!')
          .then(() => {
            alert('snackbar 3 closed.')
          })
    },

    // Alertbars
    handleClickAlertbar1() {
      this.$store
          .dispatch('alertbar', {
            message: 'Hello, alertbar 1!',
          })
          .then(() => {
            alert('then alertbar 1')
          })
          .catch(() => {
            alert('catch alertbar 1')
          })
    },
    handleClickAlertbar2() {
      this.$alertbar
          .dispatch({
            message: 'Hello, alertbar 2!',
          })
          .then(() => {
            alert('then alertbar 2')
          })
          .catch(() => {
            alert('catch alertbar 2')
          })
    },
    handleClickAlertbar3() {
      this.$alertbar
          .confirm('Hello, confirm!')
          .then(() => {
            alert('confirm ok')
          })
          .catch(() => {
            alert('confirm cancel')
            this.$alertbar
                .alert('Hello, alert!')
                .then(() => {
                  alert('alert ok')
                })
          })
    },
  },
}
</script>

<style></style>
