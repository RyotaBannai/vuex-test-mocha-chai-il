// import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Child from '@/components/Child.vue'

describe('Child.vue', () => {
    it('has a created hook', () => {
        const wrapper = shallowMount(Child)
        //expect().toBe(true);
        console.log(wrapper.emitted())
    })
})