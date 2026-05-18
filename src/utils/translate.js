export const translateValue = (value) => {
  if (!value) return value;
  const translations = {
    'Alive': 'Vivo',
    'Dead': 'Muerto',
    'unknown': 'Desconocido',
    'Male': 'Masculino',
    'Female': 'Femenino',
    'Genderless': 'Sin género',
    'Human': 'Humano',
    'Alien': 'Alienígena',
    'Robot': 'Robot',
    'Mythological Creature': 'Criatura Mitológica',
    'Animal': 'Animal',
    'Humanoid': 'Humanoide',
    'Poopybutthole': 'Sr. Pantalones de Popó',
    'Cronenberg': 'Cronenberg',
    'Disease': 'Enfermedad',
    'unknown origin': 'Origen desconocido',
    'unknown location': 'Ubicación desconocida'
  };
  return translations[value] || value;
};
