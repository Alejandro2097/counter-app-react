describe('Pruebas en 02-template-string' ,  () => {
    test('getSaludo debe de retornar "Hola Fernando"' , () => {
        const name = 'Fernando';
        const message = getSaludo(name);
        expect(message).toBe(`Hola Fernando`);
    });
})