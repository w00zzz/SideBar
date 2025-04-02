Promise.all([import("@/Root"), import("@/App")]).then(
  ([{ default: render }, { default: App }]) => {
    render(App);
  }
);
export { };
