import { AzureFunction, Context, HttpRequest } from "@azure/functions";

/**
 * This function returns the name given in diffrenet directories in the context object
 * @param {object} context The context delivered by Azure
 * @param {object} req The HTTP Request Object
 * @return {void}
 */
const echoService: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log("HTTP trigger function processed a request.");
  const name = req.query.name || (req.body && req.body.name);
  const gumbo = req.query.name || (req.body && req.body.gumbo);

  context.log(`Name = '${name}`);
  context.log(`Gumbo = '${gumbo}`);

  let responseMessage = name
    ? "Hello, " + name + ". This HTTP triggered function executed successfully."
    : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

  if (gumbo !== undefined) {
    responseMessage = gumbo;
  }

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: responseMessage,
  };
};

export default echoService;
