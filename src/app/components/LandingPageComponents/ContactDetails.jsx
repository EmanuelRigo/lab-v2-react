import React from "react";
import Image from "next/image";

const ContactDetails = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {" "}
        {/* Una columna en pantallas pequeñas, dos en medianas */}
        <div>
          <Image
            src="/image4.jpg" // Cambia esto por la ruta de tu imagen ficticia
            alt="Descripción de la imagen ficticia"
            width={500} // Ajusta el ancho según sea necesario
            height={300} // Ajusta la altura según sea necesario
            className="rounded-lg h-full object-cover" // Mantener la proporción
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-sky-600">
            Diagnóstico Ficticio Integral
          </h2>
          <p className="mt-2 text-gray-600">
            Envíanos por WhatsApp tu orden para brindarte una atención
            personalizada.
          </p>

          <div className="mt-4">
            <h3 className="text-xl font-semibold text-sky-600">
              Sede Ficticia 1
            </h3>
            <p className="mt-1 text-gray-600">Calle Ficticia 1234</p>
            <p className="text-gray-600">Teléfono: 11 1234 5678</p>
            <p className="text-gray-600">WhatsApp Directo: 11 9876 5432</p>
            <div className="mt-2">
              <p className="font-semibold text-gray-700">
                Horario administrativo:
              </p>
              <p className="text-gray-600">
                Lunes a Viernes de 8:00 a 17:00hs.
              </p>
              <p className="text-gray-600">Sábados de 8:00 a 13:00hs.</p>
            </div>
            <div className="mt-2">
              <p className="font-semibold text-gray-700">
                Horario de extracciones:
              </p>
              <p className="text-gray-600">
                Lunes a Sábados de 8:00 a 11:30hs.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-sky-600">
              Sede Ficticia 2
            </h3>
            <p className="mt-1 text-gray-600">Avenida Ficticia 5678</p>
            <p className="text-gray-600">Teléfono: 11 8765 4321</p>
            <p className="text-gray-600">WhatsApp Directo: 11 6543 2109</p>
            <div className="mt-2">
              <p className="font-semibold text-gray-700">
                Horario administrativo:
              </p>
              <p className="text-gray-600">
                Lunes a Viernes de 9:00 a 18:00hs.
              </p>
              <p className="text-gray-600">Sábados de 9:00 a 14:00hs.</p>
            </div>
            <div className="mt-2">
              <p className="font-semibold text-gray-700">
                Horario de extracciones:
              </p>
              <p className="text-gray-600">
                Lunes a Sábados de 9:00 a 12:30hs.
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-start">
            <button className="px-4 py-2 bg-sky-600 text-white rounded-lg">
              NUESTROS SERVICIOS FICTICIOS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
