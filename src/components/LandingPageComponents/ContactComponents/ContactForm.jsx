import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <div className='container'>
        <h2>Completa el siguiente formulario y envianos tu order</h2>
        <form className='flex flex-col'>
          <input type='text' placeholder='Nombre' />
          <input type='text' placeholder='Apellido' />
          <input type='text' placeholder='Email' />
          <input type='text' placeholder='Telefono' />
          <textarea placeholder='Mensaje' />
          <button>Enviar</button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
