<template>
  <!-- 
    Emit a click event when the button is clicked  
    @event click     
  -->
  <button
    :class="[
      $style.baseButton,
      variant && $style[variant],
      $style[`size-${size}`],
    ]"
    v-bind="$attrs"
    @click="$emit('click', $event)"
  >
    <!-- @slot content displayed instead of the default slot -->
    <slot v-if="loader" name="loader">
      <span>Loading...</span>
    </slot>
    <!-- @slot button content -->
    <slot v-else />
  </button>
</template>

<script>
/**
 * Base button component
 * @displayName BaseButton
 */
export default {
  name: "BaseButton",
  props: {
    /**
     * Button variant
     * @values primary, secondary, danger
     */
    variant: {
      type: String,
      default: "",
    },
    /**
     * Indicates if loader should be shown
     * @values true, false
     */
    loader: {
      type: Boolean,
      default: false,
    },
    /**
     * The size of the button
     * @values sm, md, lg
     */
    size: {
      type: String,
      default: "md",
    },
  },
  methods: {
    /**
     * This is a public method
     * @param {string} message
     * @public
     */
    publicMethod(message = "Hello!") {
      /**
       * Hello click
       * @event click
       * @property {string} message
       */
      this.$emit("click", message);
    },
  },
};
</script>

<style lang="scss" module>
:root {
  --primary: #1d4ed8;
  --primary-light: #dbeafe;
  --primary-hover: #1e40af;
  --secondary: #6d28d9;
  --secondary-light: #ede9fe;
  --secondary-hover: #5b21b6;
  --danger: #dc2626;
  --danger-light: #fee2e2;
  --danger-hover: #b91c1c;
}

.baseButton {
  min-width: 4rem;
  padding: 0rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  border: none;
  transition: 0.25s all;
}

.primary {
  background-color: var(--primary);
  color: var(--primary-light);

  &:hover {
    background-color: var(--primary-hover);
  }
}

.secondary {
  background-color: var(--secondary);
  color: var(--secondary-light);

  &:hover {
    background-color: var(--secondary-hover);
  }
}

.danger {
  background-color: var(--danger);
  color: var(--danger-light);

  &:hover {
    background-color: var(--danger-hover);
  }
}
.size-sm {
  height: 2rem;
  padding: 0 0.75rem;
}

.size-md {
  height: 2.5rem;
}

.size-lg {
  height: 3rem;
  padding: 0 1.5rem;
}
</style>

<docs>
Variants
```vue
<BaseButton variant="primary">Primary</BaseButton>
<BaseButton variant="secondary">Secondary</BaseButton>
<BaseButton variant="danger">Danger</BaseButton>
```
Sizes
```vue
<BaseButton variant="primary" size="sm">small</BaseButton>
<BaseButton variant="primary" size="md">normal</BaseButton>
<BaseButton variant="primary" size="lg">large</BaseButton>
```
Loader
```vue
<BaseButton variant="primary" loader>Loading...</BaseButton>

<!-- Custom loading via slot -->
<BaseButton variant="secondary" loader>
  <template #loader>
    <span>Loading...</span>
  </template>
</BaseButton>

<BaseButton variant="danger" loader>Loading...</BaseButton>
```
</docs>
