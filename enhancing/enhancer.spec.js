const { fail, repair, succeed } = require('./enhancer.js')

describe('enhancer.js', () => {
  describe('fail()', () => {
    it('returns a new item w/ durability decreased by 5', () => {
      expect(
        fail({ name: 'sword', enhancement: 14, durability: 100 })
      ).toEqual({ name: 'sword', enhancement: 14, durability: 95 })
    })

    it('returns a new item w/ durability decreased by 10', () => {
      expect(fail({ name: 'sword', enhancement: 15, durability: 100 })).toEqual(
        {
          name: 'sword',
          enhancement: 15,
          durability: 90,
        }
      )
    })

    it('returns a new item w/ enhancement decreased by 1 and durability decreased by 10', () => {
      expect(
        fail({ name: 'Long Sword', enhancement: 17, durability: 100 })
      ).toEqual({ name: 'Long Sword', enhancement: 16, durability: 90 })
    })
  })

  describe('repair()', () => {
    it('returns new item w/ 100 durability', () => {
      expect(repair({ name: 'axe', enhancement: 15, durability: 90 })).toEqual({
        name: 'axe',
        enhancement: 15,
        durability: 100,
      })
    })
  })

  describe('succeed()', () => {
    it('returns new item w/ same enhancement value', () => {
      expect({ name: 'short sword', enhancement: 20, durability: 100 }).toEqual(
        {
          name: 'short sword',
          enhancement: 20,
          durability: 100,
        }
      )
    })

    it('returns new item w/ enhancement value + 1', () => {
      expect(
        succeed({ name: 'short sword', enhancement: 15, durability: 100 })
      ).toEqual({
        name: 'short sword',
        enhancement: 16,
        durability: 100,
      })
    })
  })
})
