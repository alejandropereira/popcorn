//= require angular-mocks

describe('filter', function() {

  beforeEach(module('popcornApp'));

  describe('cleantitle', function() {

    it('should delete from Tráiler...',
        inject(function(cleantitleFilter) {
      expect(cleantitleFilter('SPECTRE 007 (2015) Final Tráiler #3 (Daniel Craig) Español')).toBe('SPECTRE 007 (2015)');
    }));

    it('should delete from -–...',
        inject(function(cleantitleFilter){
      expect(cleantitleFilter('Los Juegos del Hambre׃ Sinsajo Parte 2 -– Español Latino - HD')).toBe('Los Juegos del Hambre׃ Sinsajo Parte 2');
    }));

    it('should delete from --...',
        inject(function(cleantitleFilter){
      expect(cleantitleFilter('The Boy - 2016 -- HD')).toBe('The Boy - 2016');
    }));
  });
});
