module.exports = {
    // Les fichiers de test que Jest devrait exécuter.
    testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
  
    // Dossier où Jest doit chercher les tests.
    roots: ['<rootDir>'],
  
    // Modules que vous voulez ignorer dans les tests (par exemple, les fichiers CSS).
    modulePathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/build'],
  
    // Définir un répertoire de travail temporaire pour Jest.
    cacheDirectory: './.cache/jest',
  
    // Utiliser le preset de réact (nécessaire si vous utilisez React).
    preset: 'react',
  
    // Les modules à transformer (par exemple, Babel pour le JSX).
    transform: {
      '^.+\\.jsx$': 'babel-jest',
    },
  };
  