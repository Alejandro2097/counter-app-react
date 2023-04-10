import { getHeroeById, getHeroesByOwner } from "../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe de retornar un heroe por id', () => {
        const id = 1;
        const hero = getHeroeById(id);
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });

    test('getHeroeById debe de retornar undefined si no existe el heroe', () => {
        const id = 100;
        const hero = getHeroeById(id);
        expect(hero).toBeFalsy();
    });

    // Tarea
    // Get HeroesByOwner

    test('getHeroesByOwner debe de retornar un arreglo con los heroes de DC' , () => {
        const owner = getHeroesByOwner('DC');
        expect(owner).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ]);
        expect(owner.length).toBe(3);
    });
    test('getHeroesByOwner debe de retornar un arreglo con los heroes de Marvel', () => {
        const owner = getHeroesByOwner('Marvel');
        console.log(owner)
        expect(owner).toEqual([
                    { id: 2, name: 'Spiderman', owner: 'Marvel' },
                    { id: 5, name: 'Wolverine', owner: 'Marvel' }
                ]);
        expect(owner.length).toBe(2);
    });
});