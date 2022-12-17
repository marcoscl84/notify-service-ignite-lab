import { Content } from './content';

// Testes de Content
describe('Notification Content', () => {
  test('it should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma nova mensagem');

    expect(content).toBeTruthy();
  });

  // pode ser usado "it" no lugar de "test" que o jest entende da mesma forma
  it('should not be able to create a notification content with less than 5 char', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('should not be able to create a notification content with more than 240 char', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
