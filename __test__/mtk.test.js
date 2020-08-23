const { tambah, kurang, kali, bagi } = require('../src/mtk')

describe('group test mtk', () => {
  test('pertambahan', () => {
    expect(tambah(2, 2)).toBe(4)
  })

  test('pengurangan', () => {
    expect(kurang(2, 1)).toBe(1)
  })

  test('perkalian', () => {
    expect(kali(3, 2)).toBe(6)
  })

  test('pembagian', () => {
    expect(bagi(10, 5)).toBe(2)
  })
})
