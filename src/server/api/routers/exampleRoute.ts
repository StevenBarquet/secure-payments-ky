import { logger } from 'src/server/3rdParty/logger';
import { createTRPCRouter, publicProcedure } from 'src/server/api/trpc';

export const exampleRoute = createTRPCRouter({
  // updateBatch: publicProcedure.input(taskVal.updateBatch).mutation(async ({ctx,input})=>{

  //   await ctx.db.TaskCollection.updateBatch(input as unknown as ModelTareaUpdate[]);
  //   return true
  // }),

  // update: publicProcedure.input(taskVal.update).mutation(async ({ctx,input})=>{

  //   await ctx.db.TaskCollection.update(input as unknown as ModelTareaUpdate);
  //   return true
  // }),

  hello: publicProcedure.query(() => {
    logger.debug('Hello World from server');
    return 'Hello World';
  }),
});
