const request = require('supertest');
const { app, server } = require('../src/app'); // Importa la aplicación y el servidor desde app.js

afterAll((done) => {
  server.close(done); // Cierra el servidor después de que todas las pruebas hayan terminado
});

describe('Pruebas de la aplicación Express', () => {
  it('Debería responder con un mensaje "Testing NPM - Hello World!" en la ruta raíz', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Testing NPM - Hello World!');
  });
});