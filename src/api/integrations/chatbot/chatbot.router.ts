import { Router } from 'express';

import { N8nRouter } from './n8n/routes/n8n.router';

export class ChatbotRouter {
  public readonly router: Router;

  constructor(...guards: any[]) {
    this.router = Router();

    this.router.use('/n8n', new N8nRouter(...guards).router);
  }
}
