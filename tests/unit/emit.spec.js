import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Home from '@/components/Home.vue'

describe('emit demo', async () => {
    const msg = 'totally random'
    const wrapper = mount(Home, {
        propsData: { msg }
    })
    wrapper.vm.$emit('child_clicked')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().child_clicked).toBeTruthy()
})