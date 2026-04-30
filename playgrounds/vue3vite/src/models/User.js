import { Model } from '@ctrllearning/pinia-orm'

export default class User extends Model {
  static entity = 'users'

  static fields() {
    return {
      id: this.attr(null),
      name: this.attr(''),
      email: this.attr(''),
    }
  }

  static config = {
    axiosApi: {
      actions: {
        fetchById(id) {
          return [
            {
              id,
              name: 'test',
              email: 'test@gmail.com',
            },
          ]
          // return this.get(`/api/users/${id}`)
        },
      },
    },
  }
}
