import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Home from '@/components/Home.vue'

describe('Home.vue',  () => {
  it('renders props.msg when passed', async () => {
    const msg = 'new message'
    const wrapper = shallowMount(Home, {
      propsData: { msg }
    })
    // wrapper.vm // マウントされた Vue インスタンス
    expect(wrapper.text()).to.include(msg)
  })
})