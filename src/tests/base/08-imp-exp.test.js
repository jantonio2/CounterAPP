import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funcionas de Héroes', () => {
  test('debe de retornar un héroe por id', () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find(h => h.id === id);

    expect(heroe).toEqual(heroeData);
  });

  test('debe de retornar undefined si Héroe no existe', () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  test('debe de retornar un arreglo con los héros de DC', () => {
    const owner = 'DC';
    const heroe = getHeroesByOwner(owner);

    const heroesData = heroes.filter(h => h.owner === owner);

    // expect(heroesData).toEqual([heroes[0], heroes[2], heroes[3]]);
    expect(heroe).toEqual(heroesData);
  });

  test('debe de retornar un arreglo con los héros de Marvel', () => {
    const owner = 'Marvel';
    const heroe = getHeroesByOwner(owner);

    // const heroesData = heroes.filter(h => h.owner === owner);

    // expect(heroesData.length).toEqual(2);
    expect(heroe.length).toBe(2);
  });
})