class Controller {
  constructor(app) {
    this.app = app;
  }

  safeAction(action) {
    return async (req, res) => { 
      const sendError = error => {
        if (!res.headersSent) { 
          res.send({
            error: error.message
          });
        }
      };

      try {
        await action.call(this, req, res); 
      } catch (e) {
        sendError(e);
      }
    };
  }

  register() {
  }
}

export default Controller;