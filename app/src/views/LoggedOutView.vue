<template>
  <div class="logged-out-view">
    <div class="container">
      <h2 class="mb-5">Welcome to Monthly Expenses Manager</h2>

      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.logged-out-view {
  min-height: 100vh;
  background: rgba(#afa, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: orange;
  text-align: center;
  padding-top: 32px;
  padding-bottom: 200px;

  h2 {
    text-shadow: 0 0 9px rgba(#fff, 0.3);
    font-weight: bold;
    font-size: 30px;
  }
}
</style>
