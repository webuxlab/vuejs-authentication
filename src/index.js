import components from './components';

const plugin = {
  install(Vue) {
    Object.values(components).forEach((component) => {
      if (component) {
        Vue.component(component.name, component);
      }
    });
  },
};

export default plugin;
