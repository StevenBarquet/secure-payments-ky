import axios from 'axios';
import { allEnvs } from 'src/shared/config/allEnvs';

/**
 * Envía un mensaje a un chat de Telegram utilizando la API de Telegram.
 *
 * @async
 * @function sendAnyTelegram
 * @param {Object} params - Objeto que contiene los parámetros necesarios para enviar el mensaje.
 * @param {string} params.message - Mensaje de texto que se enviará al chat de Telegram.
 * @param {string} params.chatId - Identificador del chat de Telegram al que se enviará el mensaje.
 * @returns {Promise<Object>} - Promesa que resuelve en la respuesta de la API de Telegram.
 * @example
 * // Enviar un mensaje "Hola Mundo" al chat con ID "123456789"
 * sendAnyTelegram({ message: 'Hola Mundo', chatId: '123456789' })
 *   .then(response => console.log(response))
 *   .catch(error => console.error(error));
 */
export async function sendAnyTelegram({ message, chatId }: { message: string, chatId: string }) {
  const url = `https://api.telegram.org/bot${allEnvs.TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
    message,
  )}`;
  const response = await (await axios.get(url)).data;
  return response
}