import React, { useState, useEffect } from 'react';
import { fetchData, postData } from '../utils/api';

const AdminPanel = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar los servicios al montar el componente
  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await fetchData('en'); // Cargar datos en inglés por defecto
        setServices(data.services); // Guardar los servicios en el estado
        setLoading(false);
      } catch (error) {
        setError('Error loading services');
        setLoading(false);
      }
    };

    loadServices();
  }, []);

  // Manejar cambios en los campos de texto
  const handleInputChange = (index, event) => {
    const { value } = event.target;
    const updatedServices = [...services];
    updatedServices[index].title = value; // Actualizar el título del servicio
    setServices(updatedServices); // Actualizar el estado
  };

  // Manejar el envío del formulario para guardar los cambios
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Mostrar los servicios antes de enviarlos
    console.log('Servicios a enviar:', services);

    try {
      await postData('services', 'en', services); // Enviar los cambios a la API
      alert('Services updated successfully!');
    } catch (error) {
      console.error('Error updating services:', error.response?.data || error.message);
      alert(`Failed to update services: ${error.response?.data || error.message}`);
    }
  };

  if (loading) return <p className="text-center text-lg">Loading services...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10">Admin Panel - Edit Services</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-start bg-gray-100 p-6 rounded-lg shadow-md">
            <label className="text-lg font-medium text-gray-700 mb-2">Service Name:</label>
            <input
              type="text"
              value={service.title}
              onChange={(event) => handleInputChange(index, event)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        ))}
        <div className="text-center">
          <button 
            type="submit" 
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminPanel;
