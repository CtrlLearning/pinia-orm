import { createPinia } from 'pinia'
import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'
import { describe, expect, it } from 'vitest'

import { Model, Repository, createORM } from '../../../src'
import { Attr, Str } from '../../../src/decorators'
import { mapRepos } from '../../../src/composables/mapRepos'

/* eslint vue/one-component-per-file:0 */
describe('feature/helpers/helpers', () => {
  class User extends Model {
    static entity = 'users'

    @Attr() id!: any
    @Str('') name!: string
  }

  class UserRepository extends Repository<User> {
    use = User
  }

  it('can map repositories from models in Vue components', () => {
    const pinia = createPinia()
    pinia.use(createORM())

    const TestComponent = defineComponent({
      computed: mapRepos({
        userRepo: User,
      }),
      template: '<div />',
    })

    const wrapper = mount(TestComponent, {
      global: {
        plugins: [pinia],
      },
    })

    expect(wrapper.vm.userRepo).toBeInstanceOf(Repository)
    expect(wrapper.vm.userRepo.getModel()).toBeInstanceOf(User)
  })

  it('can map repositories from abstract repositories in Vue components', () => {
    const pinia = createPinia()
    pinia.use(createORM())

    const TestComponent = defineComponent({
      computed: {
        ...mapRepos({
          userRepo: UserRepository,
        }),
      },
      template: '<div />',
    })

    const wrapper = mount(TestComponent, {
      global: {
        plugins: [pinia],
      },
    })

    expect(wrapper.vm.userRepo).toBeInstanceOf(Repository)
    expect(wrapper.vm.userRepo.getModel()).toBeInstanceOf(User)
  })

  it('can map repositories in Vue components using spread syntax', () => {
    const pinia = createPinia()
    pinia.use(createORM())

    const TestComponent = defineComponent({
      computed: {
        ...mapRepos({
          userRepo: User,
        }),
      },
      template: '<div />',
    })

    const wrapper = mount(TestComponent, {
      global: {
        plugins: [pinia],
      },
    })

    expect(wrapper.vm.userRepo).toBeInstanceOf(Repository)
    expect(wrapper.vm.userRepo.getModel()).toBeInstanceOf(User)
  })
})
