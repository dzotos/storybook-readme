export default {
  data() {
    return {
      styles: {
        position: 'relative',
        boxSizing: 'border-box',
        margin: '16px 0 16px 0',
        padding: '50px 35px',
        border: '1px dashed #e5e5e5',
        backgroundColor: '#ffffff',
        transition: 'background-color 0.2s',
        textAlign: 'center',
      },
    };
  },
  template: `<div v-bind:style="styles"><slot></slot></div>`,
};
