<template>
  <div class="login-bg">
    <div class="container">
      <h1>ADMIN-TEMPLATE</h1>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginContainer'
}
</script>

<style lang="scss" scoped>
  .login-bg {
    height: 100%;
    background-image: url('~@/assets/images/login-bg.jpg');
    background-size: 100% 100%;
    background-position: center;
    position: relative;

    .container {
      position: absolute;
      width: 30em;
      min-height: 20em;
      top: 50%;
      left: 50%;
      padding: 1em;
      transform: translate(-50%, -50%);
      background: #fff;
      border-radius: 4px;
      box-shadow: 1px 1px 50px rgba(0, 0, 0, .3);

      h1 {
        text-align: center;
      }
    }
  }
</style>