import axios from 'axios';
import { 
  validateService, 
  validateTechnology, 
  validateExperience, 
  validateTestimonial, 
  validateProject 
} from './models';

const BASE_URL = 'http://localhost:5000'; 

export const fetchData = async (language) => {
  try {
    const response = await axios.get(`${BASE_URL}/${language}`);
    const data = response.data;

    // Validar los datos según el recurso
    ['services', 'technologies', 'experiences', 'testimonials', 'projects'].forEach(resource => {
      if (Array.isArray(data[resource])) {
        data[resource].forEach(item => {
          switch (resource) {
            case 'services':
              validateService(item);
              break;
            case 'technologies':
              validateTechnology(item);
              break;
            case 'experiences':
              validateExperience(item);
              break;
            case 'testimonials':
              validateTestimonial(item);
              break;
            case 'projects':
              validateProject(item);
              break;
            default:
              throw new Error('Unknown resource type');
          }
        });
      }
    });

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const postData = async (resource, language, data) => {
  try {
    switch (resource) {
      case 'services':
        data.forEach(validateService);
        break;
      case 'technologies':
        data.forEach(validateTechnology);
        break;
      case 'experiences':
        data.forEach(validateExperience);
        break;
      case 'testimonials':
        data.forEach(validateTestimonial);
        break;
      case 'projects':
        data.forEach(validateProject);
        break;
      default:
        throw new Error('Unknown resource type');
    }

    await axios.post(`${BASE_URL}/${language}/${resource}`, data);
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};
