document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formulario-tarea');
  const contenedor = document.getElementById('lista-tareas');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const fecha = document.getElementById('fecha').value;
    const descripcion = document.getElementById('descripcion').value.trim();
    const tipo = document.getElementById('tipo').value;
    const prioridad = document.querySelector('input[name="prioridad"]:checked');

    if (!fecha || !descripcion || !tipo || !prioridad) {
      alert('Por favor completa todos los campos correctamente.');
      return;
    }
    if (descripcion.length > 100) {
      alert('La descripción no puede exceder los 100 caracteres.');
      return;   
    }
    const tarea = { 
      fecha,
      descripcion,
      tipo,
      prioridad: prioridad.value
    };
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarea';

    tarjeta.innerHTML = `
      <h3>Kevin Salas</h3>
      <p><strong>Fecha de entrega:</strong> ${tarea.fecha}</p>
      <p><strong>Descripción:</strong> ${tarea.descripcion}</p>
      <p><strong>Tipo:</strong> ${tarea.tipo}</p>
      <p><strong>Prioridad:</strong> ${tarea.prioridad}</p>
    `;
    contenedor.appendChild(tarjeta);
    form.reset();
  });
});