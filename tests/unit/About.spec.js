import { mount } from "@vue/test-utils";
import About from "@/views/About.vue";

describe("About.vue", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(About)
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
