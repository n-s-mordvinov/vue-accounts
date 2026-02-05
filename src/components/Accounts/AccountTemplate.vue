<template>
  <div class="row" :class="{ 'row--notPassword': !$slots.password }">
    <div v-if="$slots.label">
      <slot name="label" />
    </div>
    <div v-if="$slots.type">
      <slot name="type" />
    </div>
    <div v-if="$slots.login">
      <slot name="login" />
    </div>
    <div v-if="$slots.password">
      <slot name="password" />
    </div>
    <div v-if="$slots.actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<style scoped>
  .row {
    display: grid;
    grid-template-columns: repeat(4, 1fr) 40px;
    gap: 8px;
  }

  .row--notPassword {
    grid-template-columns: 1fr 1fr 2fr 40px;
  }
</style>
