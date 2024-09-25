// Función para validar datos de servicios
export const validateService = (data) => {
    if (!data.title || typeof data.title !== 'string') {
      throw new Error('Invalid title');
    }
    if (!data.icon || typeof data.icon !== 'string') {
      throw new Error('Invalid icon');
    }
    return true;
  };
  
  // Función para validar datos de tecnologías
  export const validateTechnology = (data) => {
    if (!data.name || typeof data.name !== 'string') {
      throw new Error('Invalid name');
    }
    if (!data.icon || typeof data.icon !== 'string') {
      throw new Error('Invalid icon');
    }
    return true;
  };
  
  // Función para validar datos de experiencias
  export const validateExperience = (data) => {
    if (!data.title || typeof data.title !== 'string') {
      throw new Error('Invalid title');
    }
    if (!data.company_name || typeof data.company_name !== 'string') {
      throw new Error('Invalid company_name');
    }
    if (!data.icon || typeof data.icon !== 'string') {
      throw new Error('Invalid icon');
    }
    if (!data.iconBg || typeof data.iconBg !== 'string') {
      throw new Error('Invalid iconBg');
    }
    if (!data.date || typeof data.date !== 'string') {
      throw new Error('Invalid date');
    }
    if (!Array.isArray(data.points)) {
      throw new Error('Invalid points');
    }
    return true;
  };
  
  // Función para validar datos de testimonios
  export const validateTestimonial = (data) => {
    if (!data.testimonial || typeof data.testimonial !== 'string') {
      throw new Error('Invalid testimonial');
    }
    if (!data.name || typeof data.name !== 'string') {
      throw new Error('Invalid name');
    }
    if (!data.designation || typeof data.designation !== 'string') {
      throw new Error('Invalid designation');
    }
    if (!data.company || typeof data.company !== 'string') {
      throw new Error('Invalid company');
    }
    if (!data.image || typeof data.image !== 'string') {
      throw new Error('Invalid image');
    }
    return true;
  };
  
  // Función para validar datos de proyectos
  export const validateProject = (data) => {
    if (!data.name || typeof data.name !== 'string') {
      throw new Error('Invalid name');
    }
    if (!data.description || typeof data.description !== 'string') {
      throw new Error('Invalid description');
    }
    if (!Array.isArray(data.tags)) {
      throw new Error('Invalid tags');
    }
    if (!data.image || typeof data.image !== 'string') {
      throw new Error('Invalid image');
    }
    if (!data.source_code_link || typeof data.source_code_link !== 'string') {
      throw new Error('Invalid source_code_link');
    }
    return true;
  };
  