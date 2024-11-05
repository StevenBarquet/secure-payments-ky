import { secrets } from "./secrets.mjs";

class Environments {
  // ---------------------------BACKEND ------
  DB_NAME = 'admin-bills';
  MONTHLY_COST = '200';
  IP_INFO_TOKEN = process.env?.IP_INFO_TOKEN || secrets?.IP_INFO_TOKEN;
  TELEGRAM_BOT_TOKEN = process.env?.TELEGRAM_BOT_TOKEN || secrets?.TELEGRAM_BOT_TOKEN;
  // ---------------------------FRONTEND ------
  NEXT_PUBLIC_AUTH_PASS = '022799';
}

export const defaultEnvs = new Environments();
