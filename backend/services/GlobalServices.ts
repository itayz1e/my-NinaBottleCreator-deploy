export class Globals {
    public static VITE_PASSWORD: string;
    public static VITE_AUTHORIZATION: string;
    public static VITE_JWT_SECRET: string;
  
    public static initialize() {
      Globals.VITE_PASSWORD = process.env.VITE_PASSWORD || "";
      Globals.VITE_AUTHORIZATION = process.env.VITE_AUTHORIZATION || "";
      Globals.VITE_JWT_SECRET = process.env.VITE_JWT_SECRET || "";
    }

  }
  
  Globals.initialize();

  