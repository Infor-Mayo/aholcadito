window.addEventListener('DOMContentLoaded', (event) => {
    const words = [
        'gato', 'perro', 'elefante', 'jirafa', 'tortuga', 'tigre', 'leon', 'mono', 'rinoceronte', 'cocodrilo',
        'ballena', 'delfin', 'pinguino', 'canguro', 'koala', 'hormiga', 'abeja', 'mariposa', 'arana', 'escarabajo',
        'caballo', 'vaca', 'oveja', 'cerdo', 'gallo', 'pato', 'pollo', 'cabra', 'conejo', 'raton',
        'manzana', 'naranja', 'platano', 'sandia', 'fresa', 'uva', 'mango', 'limon', 'pera', 'kiwi',
        'avion', 'barco', 'coche', 'bicicleta', 'tren', 'helicoptero', 'camion', 'autobus', 'moto', 'submarino',
        'sol', 'luna', 'estrella', 'nube', 'rayo', 'arcoiris', 'nieve', 'viento', 'lluvia', 'tormenta',
        'futbol', 'baloncesto', 'tenis', 'golf', 'beisbol', 'voleibol', 'rugby', 'hockey', 'atletismo', 'natacion',
        'computadora', 'telefono', 'television', 'radio', 'tableta', 'camara', 'reloj', 'altavoz', 'teclado', 'raton',
        'familia', 'amigo', 'amor', 'risa', 'feliz', 'triste', 'abrazo', 'beso', 'sonrisa', 'juego',
        'musica', 'baile', 'canto', 'pintura', 'escultura', 'poesia', 'teatro', 'danza', 'cine', 'literatura',
        'vida', 'muerte', 'sueno', 'esperanza', 'miedo', 'amistad', 'amor', 'alegria', 'tristeza', 'felicidad',
        'viaje', 'aventura', 'destino', 'explorar', 'descubrir', 'naturaleza', 'playa', 'montana', 'selva', 'desierto',
        'ciudad', 'edificio', 'calle', 'plaza', 'parque', 'museo', 'biblioteca', 'iglesia', 'mercado', 'estadio',
        'arte', 'pintura', 'escultura', 'dibujo', 'arte callejero', 'fotografia', 'ceramica', 'grabado', 'mosaico', 'collage',
        'comida', 'desayuno', 'almuerzo', 'cena', 'postre', 'fruta', 'verdura', 'carne', 'pescado', 'ensalada',
        'bebida', 'agua', 'jugo', 'refresco', 'te', 'cafe', 'leche', 'cerveza', 'vino', 'licor',
        'ropa', 'camisa', 'pantalon', 'vestido', 'chaqueta', 'falda', 'zapatos', 'calcetines', 'sombrero', 'gorra',
        'color', 'rojo', 'azul', 'verde', 'amarillo', 'negro', 'blanco', 'rosa', 'naranja', 'morado',
        'numero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve',
        'letra', 'animal', 'mamifero', 'reptil', 'ave', 'pez', 'anfibio', 'insecto', 'aracnido', 'molusco', 'crustaceo',
        'planta', 'arbol', 'flor', 'hoja', 'fruto', 'rama', 'tronco', 'hierba', 'semilla', 'raiz',
        'tiempo', 'segundo', 'minuto', 'hora', 'dia', 'semana', 'mes', 'ano', 'manana', 'tarde',
        'noche', 'hoy', 'ayer', 'manana', 'ahora', 'siempre', 'nunca', 'pronto', 'tarde', 'temprano',
        'forma', 'redonda', 'cuadrada', 'triangular', 'rectangular', 'ovalada', 'irregular', 'simetrica', 'asimetrica', 'geometrica',
        'transporte', 'avion', 'barco', 'coche', 'tren', 'helicoptero', 'camion', 'autobus', 'moto', 'bicicleta',
        'instrumento', 'guitarra', 'piano', 'violin', 'bateria', 'trompeta', 'flauta', 'saxofon', 'tambor', 'bajo',
        'trabajo', 'oficina', 'reunion', 'proyecto', 'cliente', 'equipo', 'jefe', 'trabajador', 'empleado', 'negocio',
        'estudio', 'aprendizaje', 'examen', 'clase', 'maestro', 'alumno', 'libro', 'pizarra', 'lapiz', 'pluma',
        'juego', 'ajedrez', 'cartas', 'dado', 'rompecabezas', 'videojuego', 'muñeco', 'pelota', 'tobogan', 'columpio',
        'deporte', 'futbol', 'baloncesto', 'tenis', 'golf', 'beisbol', 'voleibol', 'rugby', 'hockey', 'natacion',
        'herramienta', 'martillo', 'destornillador', 'llave', 'sierra', 'tijeras', 'destornillador', 'clavo', 'alicate', 'cepillo',
        'adjetivo', 'grande', 'pequeno', 'alto', 'bajo', 'ancho', 'estrecho', 'ligero', 'pesado', 'largo',
        'verbo', 'correr', 'saltar', 'nadar', 'cantar', 'bailar', 'pintar', 'escribir', 'leer', 'hablar', 'comer',
        'sustantivo', 'casa', 'arbol', 'perro', 'gato', 'mesa', 'silla', 'puerta', 'ventana', 'libro', 'pelota'
      ];
      
  
    let availableWords = [...words];
    let randomIndex = Math.floor(Math.random() * availableWords.length);
    let randomWord = availableWords[randomIndex];
    availableWords.splice(randomIndex, 1);
    let guessedLetters = [];
    let wrongLetters = [];
    let attemptsLeft = 6;
    let correctWordCount = 0;
  
    const wordLengthElement = document.getElementById('word-length');
    const wordElement = document.getElementById('word');
    const letterInput = document.getElementById('letter');
    const guessBtn = document.getElementById('guess-btn');
    const attemptsElement = document.getElementById('attempts');
    const correctLettersElement = document.getElementById('correct-letters');
    const wrongLettersElement = document.getElementById('wrong-letters');
    const wordCountElement = document.getElementById('word-count');
  
    let hiddenWord = '_'.repeat(randomWord.length);
    wordLengthElement.textContent = `Longitud de la palabra: ${randomWord.length}`;
    wordElement.textContent = hiddenWord;
    attemptsElement.textContent = `Intentos restantes: ${attemptsLeft}`;
    wrongLettersElement.textContent = `Letras incorrectas: ${wrongLetters.join(', ')}`;
    wordCountElement.textContent = `Partidas terminadas: ${correctWordCount}`;
  
    const handleGuess = () => {
      const letter = letterInput.value.toLowerCase();
      letterInput.value = '';
  
      if (guessedLetters.includes(letter) || wrongLetters.includes(letter)) {
        alert('Ya has intentado esa letra antes. Intenta con otra.');
        return;
      }
  
      if (randomWord.includes(letter)) {
        let newHiddenWord = '';
  
        for (let i = 0; i < randomWord.length; i++) {
          if (randomWord[i] === letter) {
            newHiddenWord += letter;
          } else {
            newHiddenWord += hiddenWord[i];
          }
        }
  
        hiddenWord = newHiddenWord;
        wordElement.textContent = hiddenWord;
  
        if (hiddenWord === randomWord) {
          alert('¡Felicidades! Has adivinado la palabra.');
          correctWordCount++;
          wordCountElement.textContent = `Partidas terminadas: ${correctWordCount}`;
          resetGame();
        }
      } else {
        attemptsLeft--;
        wrongLetters.push(letter);
  
        if (attemptsLeft === 0) {
          correctWordCount=0;
          alert(`¡Oh no! Has perdido. La palabra era "${randomWord}".`);
          wordCountElement.textContent = `Partidas terminadas: ${0}`;
          resetGame();
        } else {
          attemptsElement.textContent = `Intentos restantes: ${attemptsLeft}`;
        }
      }
  
      guessedLetters.push(letter);
      wrongLettersElement.textContent = `Letras incorrectas: ${wrongLetters.join(', ')}`;
  
      letterInput.focus();
    };
  
    const resetGame = () => {
      randomIndex = Math.floor(Math.random() * availableWords.length);
      randomWord = availableWords[randomIndex];
      availableWords.splice(randomIndex, 1);
      hiddenWord = '_'.repeat(randomWord.length);
      guessedLetters = [];
      wrongLetters = [];
      attemptsLeft = 6;
      wordLengthElement.textContent = `Longitud de la palabra: ${randomWord.length}`;
      wordElement.textContent = hiddenWord;
      attemptsElement.textContent = `Intentos restantes: ${attemptsLeft}`;
      wrongLettersElement.textContent = `Letras incorrectas: ${wrongLetters.join(', ')}`;
    };
  
    guessBtn.addEventListener('click', handleGuess);
  
    letterInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        handleGuess();
      }
    });
  });
  
